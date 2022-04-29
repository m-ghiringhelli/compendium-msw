import React from 'react'
import style from './Quote.css'

export default function Quote({ quote }) {
  return (
    <div className={style.quoteCard} data-testid='card'>
      <p>{quote.quote}</p>
      <img alt={quote.character} src={quote.image} />
      <h2>{quote.character.toUpperCase()}</h2>
    </div>
  )
}
