import React from 'react'

export default function Price(props) {
  return (
    <div>
        <div>
            {props.children}
            <h1 className='font-title'>{props.title}</h1>
            <p className='font-title'>{props.text}</p>
            <p className='font-title'>{props.roll1}</p>
            <p className='font-title'>{props.roll2}</p>
            <p className='font-title'>{props.roll3}</p>
            <p className='font-title'>{props.roll4}</p>
        </div>
    </div>
  )
}
