import React from 'react'


export default function what(props) {
  return (
    <section className='flex flex-col justify-center items-center'>
        <div className='w-[20rem] bg-color-gray p-6 shadow-xl'>
            {props.children}
            <h1 className='font-title my-3 text-2xl'>{props.title}</h1>
            <p className='font-title text-[0.9em]'>{props.text}</p>
        </div>

    </section>
  )
}
