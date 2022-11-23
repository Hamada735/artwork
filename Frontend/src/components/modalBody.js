import React from 'react';
import { Buffer } from 'buffer';
import Form from './form';


function orderForm(props) {

  function orderpainting(form){
    form.id=props.painting.image.id
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({form})
  };
  fetch('http://localhost:8080/orderpainting', requestOptions)
      .then(response => response.json())
    
  }
  const painting = props.painting.image
  const img_to_buffer= painting.image
  // MANY MANY MANY THANKS TO THE BEST ANSWER ON THE ENTIRE WEBSITE https://stackoverflow.com/a/6182519
  const img ="data:image/jpeg;base64,".concat(Buffer.from(img_to_buffer).toString('base64'));
  return (
    <div class="grid gap-3 grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-1 place-items-center ">
    <div class=" content-center justify-center w-11/12 h-6/6">
        <img class="object-cover h-6/6 w-6/6 rounded-t-l" src={img} alt={painting.description}></img>
    </div>
    <div class="static col-1 grid grid-cols-1 grid-rows-4 w-11/12 h-6/6">
      <div class="row-span-1">

        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{painting.name}</h1>
         
        <div class="pt-2">
        <h5 class="pt-2 text-1xl  text-gray-900 dark:text-white">{painting.description}</h5>
        <div class="grid grid-cols-2">
        <div clas="span-col-1">
        <p class="text-gray-500">{painting.height}in x {painting.width}in</p>
        <p class="text-gray-500">{painting.date}</p>
        </div>
        <div class="span-col-1">
        <h5 class=" pt-2 text-3xl float-right font-bold text-gray-900 dark:text-white">£{painting.price}</h5>
        </div>
        </div>
        </div>
        </div>
        <div class="row-span-3">
        <Form orderpainting={orderpainting}/>
        </div>
    </div>
  </div>
  )
}

export default orderForm