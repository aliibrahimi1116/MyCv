import React from 'react'

export default function ProSkills(props) {
  return (
    <section className=''>
        <div className='inline-flex flex-col items-center justify-center mt-3'>
            {/* {props.children} */}
            <div className='flex justify-center items-center w-[6.5rem] h-[6.5rem] bg-transparent border-4 rounded-full overflow-hidden'>
              <p className='font-title text-[.8em]'>{props.percent}%</p>
            </div>
            <h1 className='font-title text-[.8em] mt-1'>{props.name}</h1>
        </div>
    </section>
  )
}
