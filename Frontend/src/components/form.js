import React from 'react'
import { useForm } from "react-hook-form"; // using react hook form for efficent re-rendering as I am using a modal and it is all in one page

// taken from https://react-hook-form.com/ documentation 
function Form(props) {
    const { register, handleSubmit } = useForm();

    function placeOrder(data){
        props.orderpainting(data)
        props.closeModal()
    };
    const btn_style = "block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md"
    const label_style = "block mb-2 text-sm font-medium text-gray-900"
    return (
      <form onSubmit={handleSubmit((data) => placeOrder((data)))}>
        <div class="mb-6">
        <label class={label_style}>Name</label>
        <input id="name" class={btn_style} type="text" {...register("name")} placeholder="Full name" required/>
        </div>
        <div class="mb-6">
        <label class={label_style}>Phone Number</label>
        <input id="number" class={btn_style} type="text" {...register("phone")} placeholder="1 2 three to the 4"  required pattern="[0-9]{8,15}"/>
        </div>
        <div class="mb-6">
        <label class={label_style}>Email</label>
        <input id="email"class={btn_style} type="email" {...register("email")} placeholder="email@example.com" required/>
        </div>
        <div class="mb-6">
        <label class={label_style}>Address</label>
        <input id="address"class={btn_style} type="text" {...register("address")} placeholder="10 Goofy Lane, G5" required/>
        </div>
        <div class="mb-6">
        <input id="submit"class={btn_style} type="submit" />
        </div>
      </form>
    )
}

export default Form


