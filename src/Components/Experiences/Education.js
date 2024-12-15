import React from 'react'

export default function Education(props) {
  return (
    <section>
        <div className='flex items-start flex-col justify-center w-[33rem] h-[12rem] p-6 bg-color-gray my-12'>
            <div className='flex flex-row'>
                <h1 className='font-title text-2xl'>{props.name}</h1>
                <h1 className='font-title text-2xl text-color-blob ml-2'>{props.university}</h1>
            </div>
            <p className='font-title text-color-blob my-3'>{props.year}</p>
            <p className='font-title text-[0.9em]'>{props.text}</p>
        </div>
    </section>
  )
}
