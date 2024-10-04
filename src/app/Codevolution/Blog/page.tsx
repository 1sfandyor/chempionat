'use client'
import React from 'react'



const Loading = () => {

  const myTimeout = setTimeout(() => {
    return <div className='text-red text-4xl'>salom</div>
  }, 5000);

  const func = myTimeout
  return  func;
}

export default Loading