import React from 'react'
import Order from './order';


function orderstable(props) {
    const orders = props.orders
    const List = () =>{
        return( 
            orders.map(order=>{
                return(
                    <Order rerender={props.rerender} order={order} 
                    />
                    )
                })
                
                );}
  return (
    <div class="">
      <h1 class="text-4xl">List of orders</h1>
      <br></br>
    <div class="flex justify-center w-full overflow-x-auto p-4">
    <table class="w-11/12 text-md text-center text-gray-700">
    <thead>
    <tr class="border border-slate-500 text-xs text-gray-700 uppercase">
      <th class="border border-slate-500 p-1"><p class="p-1">Order ID</p></th>
      <th class="border border-slate-500 p-1 bg-gray-200"><p class="p-1">Name</p></th>
      <th class="border border-slate-500 p-1"><p class="p-1">Phone</p></th>
      <th class="border border-slate-500 p-1 bg-gray-200"><p class="p-1">Email</p></th>
      <th class="border border-slate-500 p-1"><p class="p-1">Address</p></th>
      <th class="border border-slate-500 p-1 bg-gray-200"><p class="p-1">Painting ID</p></th>
      <th class="border border-slate-500 p-1"><p class="p-1">Remove</p></th>
    </tr>
    </thead>
    <List/>
    </table>
    </div>
    </div>
  )
}

export default orderstable