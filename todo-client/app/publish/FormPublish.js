'use client'

import { useForm } from "react-hook-form";
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';



async function getUsers(data){

  
  const auth = Cookies.get('auth')

  const res  = await fetch('http://localhost:4000/api/publish',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      },
      credentials: 'same-origin',
      body: JSON.stringify(data)
    })
    

  if(res.status != 200){
    throw new Error('error');
  }

  console.log(res.status)

  console.log(auth)

  const dataJson = await res.json()
  console.log(dataJson)
  return dataJson
}


export default function FormPublish() {

  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    const res = await getUsers(data)
    router.refresh();

  }

  return (
    <div class=" max-w-xs mx-auto my-52 justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-6">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-600 ">username</label>
          <input type="text" id="username" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          placeholder="username" {...register("username", { required: true})} />
      </div>
      <div class="mb-6">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-600 ">title</label>
          <input type="text" id="title" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          placeholder="title" {...register("title", { required: true})} />
      </div>
      <div class="mb-6">
          <label for="describe" class="block mb-2 text-sm font-medium text-gray-600 ">describe</label>
          <input type="text" id="describe" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="describe" {...register("describe", { required: true })}/>
      </div>
      <button type="submit" class="text-white bg-green-500 hover:bg-gray-400 rounded-md font-medium  text-sm w-full px-5 py-2.5 text-center">Submit</button>
    </form>
  </div>

  )
} 

