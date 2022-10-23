import React from 'react'
import '../index.css'
import {MdDeleteForever} from 'react-icons/md'

const List = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                 <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id) } 
                className='delete-icon' size='1.3em'/>
                

            </div>


            
        </div>
    )
}

export default List
