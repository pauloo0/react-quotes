import React, { useEffect, useState } from 'react'

const Quote = () => {
  const [quote, setQuote] = useState<{ quote: string; author: string }>({
    quote: '',
    author: '',
  })

  const generateQuote = () => {
    fetch('https://lucifer-quotes.vercel.app/api/quotes')
      .then((response) => response.json())
      .then((res) => setQuote({ quote: res[0].quote, author: res[0].author }))
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
