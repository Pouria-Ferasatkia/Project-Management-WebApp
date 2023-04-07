import Note from "@/app/notes/component/Note";

async function getNotes(noteId){
    const res  = await fetch(`http://localhost:4000/api/${noteId}`,
    {
        next: {revalidate:1},
    });
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
