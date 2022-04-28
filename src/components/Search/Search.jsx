import React from 'react'
import style from './Search.css'

export default function Search() {
  return (
    <div className={style.search}>
      <input type='text' placeholder='find quotes by character'></input>
      <button type='submit'>Search</button>
    </div>
  )
}
