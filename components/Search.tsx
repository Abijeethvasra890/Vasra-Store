import React from 'react'

const Search = () => {
  return (
    <div className="relative  bg-gray-200 w-[500px] rounded-full m-2">
        <input type="search" name="search" 
            placeholder="Search for products..." 
            className="ml-5 text-gray-800 bg-gray-200 h-10 px-5 pr-10 
                text-sm focus:outline-none w-[450px]" />
        <button type="submit" className="absolute left-0 ml-3 mt-2">
            <img src='/search_button.png' className='w-5'></img>
        </button>
    </div>
  )
}

export default Search