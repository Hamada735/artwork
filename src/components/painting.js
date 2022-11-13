import React from 'react'

function painting(props) {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center">

        <img class="object-cover h-48 w-96 hover:object-scale-down rounded-t-l" src={props.image.image} alt={props.image.description}></img>
        <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.image.name}</p>
        <div>
        <div class="flex justify-between items-center">
        <h5 class="pl-2 text-3xl font-bold text-gray-900 dark:text-white">£{props.image.price}</h5>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Order
            </span>
          </button>
          {/*pass the image as prop
            something like 
          */}
        </div>
        </div>
    </div>
  )
}

export default painting