import React,{useState} from 'react';

import './note.styles.scss';


const Note = (props) => {

    const [editing,setEditing] = useState(false);
    const [newContent,setNewContent]  = useState();

    const editFinishedHandler = () => {
        props.editHandler(props.id,newContent);
        setEditing(false);
        setNewContent();
    }

    return (
        <div className='note'>
            <div className='top'>
                <div className='date'>{props.date.slice(0,16)} </div>
                
                <div className='buttons'>
                    <button onClick={()=>setEditing(!editing)}>{editing? 'Cancel' : 'Edit'}</button>
                    {editing ? null :<button onClick={() =>props.deleteHandler(props.id)}>Delete</button>}
                    {editing ?<button onClick={()=>editFinishedHandler()}>Finish</button> : null}
                </div>
            </div>
            <div className='content'>
            {editing ? <textarea className='myInput' onChange={(e)=>setNewContent(e.target.value)}/>:
            
            <span>{props.content}</span>
            }
            </div>
        </div>
    )
}

export default Note;