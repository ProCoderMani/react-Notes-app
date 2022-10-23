import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './Components/NoteList'

import Search from './Components/Search'  

import './index.css'

const App = () => {
  const [note, setNotes] = useState([
  {
    id: nanoid(),
    text: 'Hello Manish',
    date: '08/09/2022',
  },
  {
    id: nanoid(),
    text: 'Hii there are you there',
    date: '01/08/2020',
  }
])

   const [searchText, setSearchText] = useState('');



   const addNote = (text) => {
     const date = new Date()
     const newNote = {
       id: nanoid(),
       text: text,
       date: date.toLocaleDateString()
     }
     const newNotes = [...note, newNote];
     setNotes(newNotes)

   }

   const deleteNote =(id) => {
    const newNotes = note.filter((note)=> note.id !== id);
    setNotes(newNotes)

 }



  return (
    <div className='container'>

      <Search  handleSearchNote={searchText}/> 
      <NoteList note={note.filter((note)=> note.text.toLowerCase().includes(searchText)
      )}
       handleAddNote={addNote} handleDeleteNote={deleteNote}/>
     
    </div>
  )
}

export default App
