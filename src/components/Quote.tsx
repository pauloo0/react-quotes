import React, { useEffect, useState } from 'react'
import quotes from '../data/quotes'

const Quote = () => {
  const [quote, setQuote] = useState<{ quote: string; author: string }>({
    quote: '',
    author: '',
  })

  const generateQuote = () => {
    const i = Math.floor(Math.random() * quotes.length)

    setQuote({ quote: quotes[i].phrase, author: quotes[i].author })
  }

  useEffect(() => generateQuote, [])

  return (
    <div className='page'>
      <div className='quote-container'>
        <h3 className='quote'>"{quote.quote}"</h3>
        <p className='author'>
          <em>- {quote.author}</em>
        </p>
      </div>
      <button type='button' className='quote-btn' onClick={generateQuote}>
        New Quote
      </button>
    </div>
  )
}

export default Quote
