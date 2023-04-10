import Note from "@/app/notes/component/Note";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from "next/link";

async function getNotes(){

    const cookieStore = cookies();
    const auth = cookieStore.get('auth');
 


    const headers = { 'Authorization': `Bearer ${auth?.value}` }; 
    const res  = await fetch('http://localhost:4000/api/notes',{ headers },{ cache: 'no-store' });

    console.log(res.status)
    console.log(auth?.value)
    console.log(auth)

    if(res.status!= 200){
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()
    return data
}

export default async function NotesPage(){


    const notes = await getNotes();
    
   
    
    return(

   
            <div className="grid grid-cols-3 my-10">
             {notes?.map((note) => {
             
                return <Link href={`/notes/${note._id}`} ><Note key={note._id} note= {note} /> </Link>
             })}
            </div>
      
    )

}


export const dynamic = 'force-dynamic'
export const revalidate = 0