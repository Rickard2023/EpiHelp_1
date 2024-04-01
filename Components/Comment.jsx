import React from 'react'

export default function Comment(el) {

  

  return (
    
    <>
      <p>
      {el.comment.author}
      </p>

      <p>
        {el.comment.rate}
      </p>

      <p>
        {el.comment.comment}
      </p>
    </>
 
  )
}
