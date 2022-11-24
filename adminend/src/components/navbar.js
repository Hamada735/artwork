import React from 'react'

function navbar() {
  return (
  <nav class=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class=" container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://devweb2022.cis.strath.ac.uk/~ykb20128/sasniamsosadiduasn/" class="flex items-center">
        <img src="//live.staticflickr.com/8281/7714145320_0de1f6e87e_c.jpg" class="mr-3 h-6 sm:h-9" alt="Cara's Picture" />
        {/* https://www.flickr.com/photos/liferfe/7714145320/ */}
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cara's Art</span>
    </a>
    <div class="inline-flex w-auto" id="navbar-default">
      <ul class="flex flex-row p-4 rounded-lg  space-x-8 mt-0 text-sm font-medium bg-white ">
        <li>
          <a href="https://devweb2022.cis.strath.ac.uk/~ykb20128/sasniamsosadiduasn/" class="py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0" aria-current="page">Shop</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar