import React from 'react'
import { getQuotesByCharacter } from '../../services/quotes'
import style from './Search.css'

export default function Search({ searchText, setSearchText, setQuotes }) {
  const handleSubmit = () => {
    const getData = async () => {
      const data = await getQuotesByCharacter(searchText);
      setQuotes(data);
    }
    getData();
  }
  return (
    <div className={style.search} data-testid='search'>
      <input 
        type='text' 
        placeholder='find quotes by character'
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  )
}
