import Note from "@/app/notes/component/Note";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

async function getNotes(noteId){

    const cookieStore = cookies();
    const auth = cookieStore.get('auth');
 


    const headers = { 'Authorization': `Bearer ${auth?.value}` }; 
    const res  = await fetch(`http://localhost:4000/api/note/${noteId}`,{ headers },{ cache: 'no-store' });

    console.log(res.status)
    console.log(auth?.value)
    console.log(auth)

    if(res.status!= 200){
        redirect('/');
    }
    const data = await res.json()
    return data
}


export default async function NotePage(params) {

    const note = await getNotes(params.params.id);
    

    
    return(
        <div>
            <div>
               <Note key={note._id} note= {note} />
            </div>
        </div>
    )

};

export const dynamic = 'force-dynamic'
export const revalidate = 0