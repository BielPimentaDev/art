import React from 'react'

export default function Button({title}) {
  return (
    <button className='bg-blue px-8 text-white sm:w-[180px] w-[100%] h=[40px] p-3 pointer rounded-md'>
        <p className='font-semibold text-sm uppercase'>{title}</p>
        </button>
  )
}
