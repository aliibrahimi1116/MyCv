import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


export default function Experience(props) {
  return (
    <section>
        <div className='flex items-start flex-col justify-center w-[33rem] h-[12rem] p-6 bg-color-gray my-12'>
            <div className='flex flex-row'>
                <h1 className='font-title'>{props.name}</h1>
                <h1 className='font-title ml-1 text-color-blob'>{props.company}</h1>
            </div>
            <p className='font-title text-color-blob my-1'>{props.year}</p>
            <p className='font-title text-[.7em]'>{props.text}</p>
            <li className='font-title text-[.9em] list-none'><FontAwesomeIcon icon={faCircle} size='xs' style={{color: "#ffffff",}} className='mr-[5px]' />{props.css}</li>
            <li className='font-title text-[.9em] list-none'><FontAwesomeIcon icon={faCircle} size='xs' style={{color: "#ffffff",}} className='mr-[5px]' />{props.project}</li>
        </div>
    </section>
  )
}
