import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3rem'/>
            <input type="text" onChange={( event ) => handleSearchNote(event.handle.value) } placeholder='type to search your notes.....' />

            
        </div>
    )
}

export default Search
