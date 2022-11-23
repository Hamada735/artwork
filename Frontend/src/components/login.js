import React from 'react'
import { useForm } from "react-hook-form";

function Login(props) {
    const { register, handleSubmit } = useForm();
    const btn_style = "block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md"
    const label_style = "block mb-2 text-sm font-medium text-gray-900"
  return (
    <div class="grid grid-rows-1">
    <form onSubmit={handleSubmit((data) => props.closeModal())}>
        <div class="mb-6">
        <label class={label_style}>Password</label>
        <input id="password" class={btn_style} type="text" {...register("password")} placeholder="YouShallNotPass" required pattern="[Y][o][u][A][s][k][M][e][H][o][w][2][2]"/>  
        {/* note, I am aware this is very bad practice for the password I am just choosing to prioritise other assignments */}
        </div>
        <div class="mb-6">
        <input id="submit"class={btn_style} type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Login