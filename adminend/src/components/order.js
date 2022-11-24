import React from 'react'

function Order(props) {
    function removeorder(){
        const order = props.order;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({order})
  };
  fetch('https://devweb2022.cis.strath.ac.uk/ykb20128-nodejs/removeorder', requestOptions)
      .then(response => response.json())
      .then(props.rerender(props.order.id));
      
    }
  return (
    <tr class="bg-white border-b">
        <td class="border border-slate-500"><p class="p-1">{props.order.id}</p></td>
        <td class="border border-slate-500 bg-gray-200"><p class="p-1">{props.order.name}</p></td>
        <td class="border border-slate-500"><p class="p-1">{props.order.phone}</p></td>
        <td class="border border-slate-500 bg-gray-200"><p class="p-1">{props.order.email}</p></td>
        <td class="border border-slate-500"><p class="p-1">{props.order.address}</p></td>
        <td class="border border-slate-500 bg-gray-200"><p class="p-1">{props.order.ordered}</p></td>
        <td class="border border-slate-500  ">
            <button onClick={removeorder} type="button" class=" text-center h bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </td>
    </tr>
  )
}

export default Order