import React from 'react'

function exitButton(props) {
  return (
    <div class="sticky top-0 left-0 right-0">
    <button onClick={props.closeModal} type="button" class=" float-right bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
    <span class="sr-only">Close menu</span>
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  </div>
  )
}

export default exitButton