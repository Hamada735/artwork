databasehandler()
function databasehandler() {
    
    const mysql = require('mysql');
    const express = require('express');
    const fileUpload = require('express-fileupload');
    // const path = require('path');
    const app = express();
    const PORT = 8080;

    app.listen(
        PORT,
        ()=>console.log('api running on '.concat(PORT))
    )
    
    var con = mysql.createConnection({
        host: "devweb2022.cis.strath.ac.uk",
        user: "ykb20128",
        password: "vi0UiSue5loo",
        database: "ykb20128"
      });
    
    con.connect(function(err) {
    console.log("Connected");
    if (err) throw err;
    });
    
    var artworks;
    function getartwork (){
        con.query("SELECT * FROM artwork", function (err, result, fields) {
            if (err) throw err;
            artworks=result;
        });
    };
    
    var orders;
    function getorders (){
    
        con.query("SELECT * FROM artworkOrders", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            orders=result;
        });
    };
    
    getartwork();
    getorders();
    app.use(express.json())
    app.use(fileUpload())
    // console.log(__dirname)
    // app.use(express.static(path.join(__dirname, 'build')));

    // app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });
    
    // special thanks to https://stackoverflow.com/a/18311469 this code is only useful for allowing cors for development
    app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    })
    
    app.use(express.json({limit: "1000mb", extended: true}))
    app.use(express.urlencoded({limit: "1000mb", extended: true, parameterLimit: 50000}))
    
    
    app.get('/artworks', (req,res)=>{
        getartwork();
        res.header
        res.json(artworks)
    })
    
    app.get('/orders', (req,res)=>{
        getorders();
        res.header
        res.json(orders)
    })
    
    app.post('/orderpainting', (req,res)=>{
        res.header
        const painting = req.body.form
        res.json(painting)
        console.log("added painting ",painting)
        con.query( "INSERT INTO artworkOrders (`id`, `name`, `phone`, `email`, `address`, `ordered`) VALUES (NULL, '".concat(painting.name).concat("', '").concat(painting.phone).concat("', '").concat(painting.email).concat("', '").concat(painting.address).concat("', '").concat(painting.id).concat("');"), function (err, result, fields) {
            if (err) throw err;
        });
       
    })
    app.post('/removeorder', (req,res)=>{
        res.header
        const order = req.body
        res.json(order)
        console.log("removed order ",order)
        con.query( "DELETE FROM `artworkOrders` WHERE `artworkOrders`.`id` = ".concat(order.order.id), function (err, result, fields) {
            if (err) throw err;
        });
       
    })
    app.post('/addpainting', (req,res)=>{
        res.header
        const painting = req.files.file.data
        console.log("called")
        con.query( "INSERT INTO `artwork`(`id`, `name`, `date`, `height`, `width`, `price`, `description`, `image`) VALUES (NULL, ?,?,?,?,?,?,?);",[req.body.name,req.body.date,req.body.height,req.body.width,req.body.price,req.body.description,painting] ,
        function (err, result, fields) {
            if (err) throw err;
        });
    })
}