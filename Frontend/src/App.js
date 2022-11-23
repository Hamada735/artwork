import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Navbar from './components/navbar';
import React from 'react'
import Shop from './components/proxyshop'
import Admin from './components/proxyadmin'

function App() {
  const [paintings, setPaintings] = React.useState(null);
  const artworkendpoint = "http://localhost:8080/artworks"
  function load(){
    console.log("reloarded")
    fetch(artworkendpoint)
    .then((response) => response.json())
    .then((data) => setPaintings(data));
  }
  React.useEffect(() => {
    load()
  }, []);
  const [orders, setorders] = React.useState(null);
  const paintingendpoint = "http://localhost:8080/orders"
  React.useEffect(() => {
    fetch(paintingendpoint)
    .then((response) => response.json())
    .then((data) => setorders(data));
  }, []);
  // while(paintings==null);
  return (
    <div className="App"> 
      <Navbar/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<Shop paintings={paintings} />} />
      <Route path="/admin" element={<Admin orders={orders} reloadpaintings={load} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
