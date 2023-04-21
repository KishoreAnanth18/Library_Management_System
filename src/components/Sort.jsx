import React from 'react';
import Data from '../data.json';

const Sort = (
  props,
  setData
) => {
  const author_sort = () => {
    Data.sort((a, b) => (a.author > b.author) ? 1 : -1);
  }

  const title_sort = () => {
    Data.sort((a, b) => (a.title > b.title) ? 1 : -1);
  }

  const language_sort = () => {
    Data.sort((a, b) => (a.language > b.language) ? 1 : -1);
  }

  const year_sort = () => {
    Data.sort((a, b) => a.year - b.year);
  }
  // const arr = []
  return (
    <div className='sort'>
      <div className='sort_button'>
        <button onClick={author_sort}>Sort via Author</button>
      </div>

      <div className='sort_button'>
        <button onClick={title_sort}>Sort via Title</button>
      </div>

      <div className='sort_button'>
        <button onClick={language_sort}>Sort via Language</button>
      </div>

      <div className='sort_button'>
        <button onClick={year_sort}>Sort via publish date</button>
      </div>
    </div> 
  )
}

export default Sort