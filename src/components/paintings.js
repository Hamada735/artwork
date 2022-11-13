import React, {useEffect, useState} from 'react'
import Painting from './painting';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
//Special thanks to react-paginate for delivering the pagination functionality --> https://www.npmjs.com/package/react-paginate
import '../pagination.css'; //learning how to style React Paginate, AND NOT THE STYLE ITSELF, was taken from https://gist.github.com/anthonyk1225/73e5547d55c3c9c2450fac7daa667e31

const paintingss = [
    {id: 1, name:"A scene in space", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1559439226-08cc38293b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: 2, name:"Fruit", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 3, name:"Veg", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 4, name:"Drinks", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"},
    {id: 5, name:"AAAAA", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"},
    {id: 6, name:"Calm", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 7, name:"Relaxed", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 8, name:"A scene in space", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1559439226-08cc38293b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: 9, name:"Fruit", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 10, name:"Veg", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 11, name:"Drinks", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"},
    {id: 12, name:"AAAAA", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"},
    {id: 13, name:"Calm", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 14, name:"Relaxed", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 15, name:"A scene in space", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1559439226-08cc38293b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: 16, name:"Fruit", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 17, name:"Veg", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 18, name:"Drinks", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"},
    {id: 19, name:"AAAAA", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"},
    {id: 20, name:"Calm", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 21, name:"Relaxed", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
];



function Paintings() {
   
    const List = () =>{
        return( 
            paintingsToShow.map(painting=>{
            return(
                <Painting image={painting} link={painting.image}/>
            )
        }
        )
        );
    }    

    
const [paintings, setpaintings] = useState(paintingss);
const [currentPage, setCurrentPage] = useState(1);
const [paintingsPerPage] = useState(12);

const [paintingOffset, setPaintingOffset] = useState(0);

// Simulate fetching items from another resources.
// (This could be items from props; or items loaded in a local state
// from an API endpoint with useEffect and useState)
const endOffset = paintingOffset + paintingsPerPage;
console.log(`Loading items from ${paintingOffset} to ${endOffset}`);
const paintingsToShow = paintings.slice(paintingOffset, endOffset);
const pageCount = Math.ceil(paintings.length / paintingsPerPage);

const handlePageClick = (event) => {
    const newOffset = (event.selected * paintingsPerPage) % paintings.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPaintingOffset(newOffset);
  };

useEffect(() => {
    const fetchPaintings = async () => {

      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
      // need to implement sql
      setpaintings(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss))))))))))))));
    //   paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss.concat(paintingss)))))))))))))
    //for debugging

    };

    fetchPaintings();
  }, []);

const baseStyle="relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-blue-800 px-3.5"

  return (
    <div class="grid items-stretch gap-3 grid-cols-3 grid-rows-1 place-items-center">
    <div class="grid items-stretch gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center col-span-3">
    <List/>
    </div>
    <div class="inline-flex"></div>
    <ReactPaginate
        activeClassName={'relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-white rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'}
        breakClassName={'item break-me relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-blue-800 px-3.5'}
        breakLabel={''}
        containerClassName={'pagination inline-flex'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={0}
        nextClassName={"item next relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-blue-800 px-3.5"}
        // nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-blue-800"}
        pageLinkClassName={'pt-3.5 px-3.5'}
        pageRangeDisplayed={2}
        previousClassName={"item previous relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-blue-800 px-3.5"}
        // previousLabel={<ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />}
      />
    </div>
  )
}

export default Paintings