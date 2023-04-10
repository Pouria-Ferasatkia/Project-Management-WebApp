

import { cookies } from "next/headers";
import FormPublish from "./FormPublish";
import { redirect } from 'next/navigation';

// async function getAuth(){

//     const cookieStore = cookies();
//     const auth = cookieStore.get('auth');
 
//     console.log("run?")

//     const headers = { 'Authorization': `Bearer ${auth?.value}` }; 
//     const res  = await fetch('http://localhost:4000/api/checkAuth',{ headers },{ cache: 'no-store' });

//     console.log(res.status)
//     console.log(auth?.value)
//     console.log(auth)

//     if(res.status!= 200){
//         redirect('/');
//     }
//     const data = await res.json()
//     return data
// }


export default async function Publish() {

    // const notes = await getAuth();
    return (
        <>
            <h1>publish</h1>
            <FormPublish  />
        </>
    )
  } 

export const dynamic = 'force-dynamic'
export const revalidate = 0