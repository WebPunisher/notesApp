import React,{useState} from 'react';

import './notes.styles.scss';

import Note from '../note/note.component';


const Notes = () => {
    
    const [addingNew,setAddingNew] = useState(false);
    const [notes,setNotes] = useState ([
        {
            date: new Date().toLocaleString(),
            content: 'Hello 1 , click on the button below to create your own note!',
            id: 1
        },
        {
            date: new Date().toLocaleString(),
            content: ' Buy 2  groceries, shoes , magazines and etc.',
            id: 2
        },
        {
            date: new Date().toLocaleString(),
            content: ' Buy 3  groceries, shoes , magazines and etc.',
            id: 3
        },
        {
            date: new Date().toLocaleString(),
            content: ' Buy 4 groceries, shoes , magazines and etc.',
            id: 4
        },
    ])

    
    
    const deleteHandler = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    const editHandler = (id,newContent) => {
        setNotes(notes.map(note=> note.id === id ? {...note,content:newContent}:note))
    }
    const addNoteHandler = () => {
        setNotes([...notes,{
            date:  new Date().toLocaleString(),
            content: ' Buy groceries, shoes , magazines and etc.',
            id:  Date.now()
        }])
    }

    return (
        <div className='notes'>
            {notes.map(note=>
                <Note 
                    id={note.id} 
                    date={note.date} 
                    content={note.content}
                    deleteHandler={(id)=>deleteHandler(id)}
                    editHandler={(id,newContent)=>editHandler(id,newContent)}
                    />
                )}
            <button className='addButton' onClick={() => addNoteHandler()}>Add New Note</button>
            
        </div>
    )
}

export default Notes;