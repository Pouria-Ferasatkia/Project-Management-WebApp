import Note from "@/app/notes/component/Note";
import { redirect } from 'next/navigation';


async function getNotes(){

    const res  = await fetch('http://localhost:4000/api/notes',{cache: 'no-store'});

    if(res.status!= 200){
        redirect('/');
    }
    const data = await res.json()
    return data
}

export default async function NotesPage(){


    const notes = await getNotes();
   
    
    return(
        <div>
       
            <div className="grid grid-cols-3 gap-4 mx-auto my-10">
             {notes.map((note) => {
             
                return <Note key={note._id} note= {note} />
             })}
            </div>
        </div>
    )

}


