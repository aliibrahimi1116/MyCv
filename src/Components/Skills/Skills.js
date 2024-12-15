import React from 'react'
import Skill from './Skill'
import ProSkills from './ProSkills'



export default function Skills(props) {

    const Skills = [
        {id: 1, name: 'Javascript', percent: 40},
        {id: 2, name: 'HTML', percent: 60},
        {id: 3, name: 'CSS', percent: 75},
        {id: 5, name: 'Adobe PhotoShop', percent: 85},
        {id: 4, name: 'Adobe Illustrator', percent: 80},
        {id: 6, name: 'Corel draw', percent: 60},
    ]

    const ProSkill = [
        {id: 1, name: 'Communication', percent: 95},
        {id: 2, name: 'Creativity', percent: 70},
        {id: 3, name: 'Team Work', percent: 90},
        {id: 4, name: 'Project Management', percent: 80},
    ]
    
  return (
    <section className='container flex flex-row justify-evenly items-start mb-52'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-title text-3xl mb-5'>Technical Skills</h1>
            <Skill {...Skills[0]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[10rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
            <Skill {...Skills[1]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[15rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
            <Skill {...Skills[2]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[18.75rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
            <Skill {...Skills[3]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[21.25rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
            <Skill {...Skills[4]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[20rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
            <Skill {...Skills[5]}>
                <div className='w-[25rem] h-[.5rem] bg-color-white rounded-full overflow-hidden'>
                    <div className='w-[15rem] h-[.5rem] bg-color-secondary'></div>
                </div>
            </Skill>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='font-title text-3xl mb-5'>Professional Skills</h1>
            <div className='grid grid-cols-2 gap-6'>
                <ProSkills {...ProSkill[0]}>
                
                </ProSkills>
                <ProSkills {...ProSkill[1]}>
                    
                </ProSkills>
                <ProSkills {...ProSkill[2]}>
                    
                </ProSkills>
                <ProSkills {...ProSkill[3]}>
                    
                </ProSkills>
            </div>
        </div>
    </section>
  )
}
