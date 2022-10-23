import React from 'react'
import Note from './Note'
import '../index.css'

import AddNote from './AddNote'

const NoteList = ({ note, handleAddNote, handleDeleteNote } ) => {
    return (
        <div className='note-list'>
            {note.map((note)=> (
            <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            handleDeleteNote = {handleDeleteNote}
            />))}

            <AddNote handleAddNote= {handleAddNote}/>
            
        </div>
    )
}

export default NoteList
