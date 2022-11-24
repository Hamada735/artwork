import React from 'react';
import { useForm } from "react-hook-form"; 
import FormData from 'form-data';
import axios from 'axios';

function AddPainting(props) {
  const reloadpaintings = props.reloadpaintings
  const { register, handleSubmit } = useForm();

  const formData = new FormData();


  function placeOrder(data){
      console.log("painting to be added",data)
      let file = data.painting[0];
      formData.append('file', file);
      formData.append('name', data.name);
      formData.append('date', data.date);
      formData.append('width', data.width);
      formData.append('height', data.height);
      formData.append('price', data.price);
      formData.append('description', data.description);
      
      axios.post('https://devweb2022.cis.strath.ac.uk/ykb20128-nodejs/addpainting', formData).then(res => {
      })
    
      reloadpaintings(data)
      props.closeModal()
  };
  
  const btn_style = "p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md"
  const s_btn_style = "p-4 text-gray-900 bg-gray-200 rounded-lg border border-gray-300 sm:text-md"
  const label_style = "mb-2 text-sm font-medium text-gray-900"
  return (
    <form onSubmit={handleSubmit((data) => placeOrder((data)))}>
      <h1 class="text-4xl">Add painting</h1>
      <br></br>
      <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="grid mb-6">
      <label class={label_style}>Name</label>
      <input id="name" class={btn_style} type="text" {...register("name")} placeholder="Painting Title" required/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Date of Completion</label>
      <input id="date" class={btn_style} type="date" {...register("date")} placeholder="01/01/1984" required/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Width</label>
      <input id="width"class={btn_style} type="text" {...register("width")} placeholder="30" required pattern="[0-9]+(\\.[0-9][0-9]?)?"/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Height</label>
      <input id="height"class={btn_style} type="text" {...register("height")} placeholder="30" required pattern="[0-9]+(\\.[0-9][0-9]?)?"/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Price</label>
      <input id="price"class={btn_style} type="text" {...register("price")} placeholder="Priceless" required/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Description</label>
      <input id="description"class={btn_style} type="text" {...register("description")} placeholder="A depiction of various blob characters in space" required/>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Painting</label>
      <input id="painting"class={btn_style} type="file" {...register("painting")} required/>
      </div>
      <div class="grid mb-6">
      <p class={label_style}></p>
      <label class={label_style}></label>
      </div>
      <div class="grid mb-6">
      <label class={label_style}>Submit</label>
      <input id="submit"class={s_btn_style} type="submit" />
      </div>
      </div>
    </form>
  )
}

export default AddPainting