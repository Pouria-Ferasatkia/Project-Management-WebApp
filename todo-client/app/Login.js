'use client'

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
import Link from "next/link";

async function getUser(data){
  const res  = await fetch('http://localhost:4000/api/login',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async(data) => {
      const res = await getUser(data)
    if(res.status === 200){
      const response = await res.json()
      Cookies.set('auth', response.message)
      if(data.username === "test2"){
        router.push('/publish')
      } else{
          router.push('/notes')
      }
    }
    

    console.log("-done--")
  }
  return (
    <div class=" max-w-xs mx-auto my-52 justify-center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-6">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-600 ">username</label>
          <input type="text" id="username" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          placeholder="username" {...register("username", { required: true })} />
      </div>
      <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-600 ">password</label>
          <input type="password" id="password" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="password" {...register("password", { required: true })}/>
      </div>
      <button type="submit" class="text-white bg-black hover:bg-gray-400 rounded-md font-medium  text-sm w-full px-5 py-2.5 text-center">Submit</button>
    </form>
    <div class="mt-6">
    <Link className="text-red-600" href="/register">Register</Link>
    </div>
  </div>

  )
} 