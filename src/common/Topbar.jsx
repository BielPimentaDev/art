import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import Button from './Button'

export default function Topbar() {
  return (
    <header className='flex justify-between items-center py-4 mb-16'>
        <h1 className='font-semibold text-4xl'>Art.</h1>
        <div className='flex '>
            <div className='relative mr-16 hidden sm:block'>
                <input className='bg-grayLight p-2 px-4 w-[500px] rounded-sm placeholder:m-8' type='text' placeholder="Buscar"/>
                <div className='absolute right-4 top-3 pointer'>
                    <MagnifyingGlass size={18} color="#737373"/>
                </div>
                </div>
            <Button title="entrar"/>
        </div>
    </header>
  )
}
