import React, {useEffect, useState} from 'react'
import Painting from './painting';
import ReactPaginate from './paginate';



function Paintings(props) {
    const List = () =>{
        return( 
            paintingsToShow.map(painting=>{
            return(
                <Painting image={painting} 
                orderFun={props.orderFunc}
                />
            )
        }));}    


// modified from react-paginate documentation --> https://www.npmjs.com/package/react-paginate
const [paintings, setpaintings] = useState(props.paintings);
const [paintingsPerPage] = useState(12);
const [paintingOffset, setPaintingOffset] = useState(0);
const endOffset = paintingOffset + paintingsPerPage;
const paintingsToShow = paintings.slice(paintingOffset, endOffset);
const pageCount = Math.ceil(paintings.length / paintingsPerPage);

const [showPaginate, setshowPaginate] = useState(true)

const handlePageClick = (event) => {
    const newOffset = (event.selected * paintingsPerPage) % paintings.length;
    setPaintingOffset(newOffset);
  };

useEffect(() => {
    const setDisplayPaginate = async () => {
      if (paintings.length<=paintingsPerPage){
          setshowPaginate(false)
        }
    };

    setDisplayPaginate();
    
  }, []);

  


  return (
    <div>
      {/* we pretend these grids make sense 😅 */}
    <div class="grid items-stretch gap-3 grid-cols-3 grid-rows-1 place-items-center">
    <div class="grid items-stretch gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center col-span-3">
    <List/>
    </div>
    <div></div>
    <ReactPaginate pageCount={pageCount} show={showPaginate} onPageChange={handlePageClick} />
    </div>
    </div>
  )
}

export default Paintings