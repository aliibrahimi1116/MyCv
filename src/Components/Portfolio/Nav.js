import React from 'react'

export default function Nav(props) {
  return (
    <section className='my-5'>
      <ul>
        <li className='flex justify-center items-center'><a href='#all' className='mx-4 font-title text-[.9em] hover:bg-color-secondary p-2 rounded-lg transition duration-700'>{props.menu}</a></li>
      </ul>
    </section>
  )
}
