import React from 'react'
import quotes from '../data/quotes'

const Quote = () => {
  return (
    <>
      {quotes.map((quote) => (
        <div className='quote-container'>
          <h3 className='quote'>{quote.phrase}</h3>
          <p className='author'>{quote.author}</p>
          <br />
        </div>
      ))}
    </>
  )
}

export default Quote
