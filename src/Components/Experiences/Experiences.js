import React from 'react'
import Education from './Education'
import Experience from './Experience'

export default function Experiences() {

    const education = [
        {id: 1, name: 'Art & Multimedia', university: 'Oxford University', year: '2005-2008', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum '},
        {id: 2, name: 'Art & Multimedia', university: 'Oxford University', year: '2005-2008', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum '},
        {id: 3, name: 'Art & Multimedia', university: 'Oxford University', year: '2005-2008', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum '},
    ]

    const experience = [
        {id: 1, name: 'UI/UX Designer', company: 'IronShetch', year: '2005-2008', text: 'Responsibility:', css: 'Validate CSS', project: 'Project Management'},
        {id: 2, name: 'Art & Multimedia', company: 'Oxford University', year: '2005-2008', text: 'Responsibility', css: 'Validate', project: 'Project Management'},
        {id: 3, name: 'Art & Multimedia', company: 'Oxford University', year: '2005-2008', text: 'Responsibility', css: 'Validate', project: 'Project Management'},
    ]


  return (
    <section className='container flex flex-row mb-52 justify-evenly'>
        <div>
            <h1 className='font-title text-3xl mb-8'>Education</h1>
            <div>
                <Education {...education[0]} className="my-5" >

                </Education>
                <Education {...education[1]} className="my-5" >

                </Education>
                <Education {...education[2]} className="my-5" >

                </Education>
            </div>
        </div>
        <div>
            <h1 className='font-title text-3xl mb-8'>Work Experiences</h1>
            <div>
                <Experience {...experience[0]}>

                </Experience>
                <Experience {...experience[1]}>

                </Experience>
                <Experience {...experience[2]}>

                </Experience>
            </div>
        </div>
    </section>
  )
}
