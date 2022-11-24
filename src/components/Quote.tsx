import React, { useEffect, useState } from 'react'
import quotes from '../data/quotes'

const Quote = () => {
  const [quote, setQuote] = useState<{ quote: string; author: string }>({
    quote: '',
    author: '',
  })

  useEffect(() => {
    const i = Math.floor(Math.random() * quotes.length)

    setQuote({ quote: quotes[i].phrase, author: quotes[i].author })
  }, [])

  return (
    <div className='quote-container'>
      <h3 className='quote'>{quote.quote}</h3>
      <p className='author'>{quote.author}</p>
    </div>
  )
}

export default Quote
