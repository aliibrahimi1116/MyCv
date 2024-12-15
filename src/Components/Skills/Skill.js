import React from 'react'

export default function Skill(props) {
  return (
    <section className=''>
        <div className='flex flex-col w-[25rem] my-1'>
            <div className='flex flex-row justify-between'>
                <h1 className='font-title text-[.8em]'>{props.name}</h1>
                <p className='font-title text-[.8em]'>{props.percent}%</p>
            </div>
            {props.children}
        </div>
    </section>
  )
}
