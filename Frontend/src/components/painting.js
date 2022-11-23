import React from 'react'
import { Buffer } from 'buffer';

function Painting(props) {
  function orderpainting(){
    props.orderFun(props)
    
  }
  const img_to_buffer= props.image.image.data
  console.log((props.image.image))
  // MANY MANY MANY THANKS TO THE BEST ANSWER ON THE ENTIRE WEBSITE https://stackoverflow.com/a/6182519
  const img ="data:image/jpeg;base64,".concat(Buffer.from(img_to_buffer).toString('base64'));

  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md  items-center">
        <img class="object-cover h-48 w-96 hover:object-scale-down rounded-t-l" src={img} alt={props.image.description}></img>
        <p class="text-xl font-semibold tracking-tight text-gray-900">{props.image.name}</p>
        <div>
        <div class="flex justify-between items-center">
        <h5 class="pl-2 text-3xl font-bold text-gray-900">£{props.image.price}</h5>
          <button onClick={orderpainting} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-blue-800 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Order
            </span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Painting