import React from "react";
import { Tab } from "@headlessui/react";
import { cx } from "@vechaiui/react";
import { FaToolbox } from 'react-icons/fa';
import { MdSchool, MdComputer } from 'react-icons/md';
import { BsFillPersonFill, BsFillKeyFill } from 'react-icons/bs';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Pdf from '../assets/TrevonCostaResume.pdf';

const Resume = () => {
    return (
    <div name='resume' className=' h-screen bg-gradient-to-t from-blue-400 to-gray-300 text-gray-900 flex flex-wrap w-full p-8 space-x-4 px-2 py-16 sm:px-0'>
        
      <Tab.Group as="div" className="flex flex-col justify-center items-center w-full h-full" >
        <p className='text-4xl font-bold py-4 inline-block animate-bounce'>
          Resume
        </p>
      <Tab.List className="flex p-1 space-x-1 bg-[#08192f] shadow-2xl">
        <Tab className={cx(
                 'w-full py-2.5 text-lg leading-4 font-medium text-neutral-100',
                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 px-6'
              )}
            > <BsFillPersonFill className="inline"/><br/>Profile</Tab>
        <Tab className={cx(
                 'w-full py-2.5 text-lg leading-4 font-medium text-neutral-100',
                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 px-6'
              )}
            ><FaToolbox className="inline"/> Experience</Tab>
        <Tab className={cx(
                 'w-full py-2.5 text-lg leading-4 font-medium text-neutral-100',
                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 px-6'
              )}
            > <MdSchool className="inline"/> Education</Tab>
        <Tab className={cx(
                 'w-full py-2.5 text-lg leading-4 font-medium text-neutral-100',
                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 px-6'
              )}
            ><MdComputer className="inline"/> Technology</Tab>
        <Tab className={cx(
                 'w-full py-2.5 text-lg leading-4 font-medium text-neutral-100',
                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 px-6'
              )}
            ><BsFillKeyFill className="inline"/><br/>Key Skills</Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className={cx('bg-white rounded-b-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 w-[710px] h-[280px] shadow-2xl')}>
                    <h1 className='text-center text-2xl font-bold p-3'>Professional Profile</h1>
                    <p className='text-center'>
                        • Extremely motivated Software Development Student with 2 years of studying at George Brown College. 
                        Currently working part-time as a merchandiser and providing customer service. 
                        Seeking opportunities to work in the Software Development field to gain experience and skills to continue growing professionally and personally. 
                        Accustomed to being well-organized and goal focused to complete projects on time. Looking to learn and help make an impact with my work.  
                    </p>
        </Tab.Panel>
        <Tab.Panel className={cx('bg-white rounded-b-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 w-[710px] h-[280px] shadow-2xl')}>
                    <h1 className='text-center text-2xl font-bold'>Student - Courses</h1>
                    <p className='text-center'> George Brown College / Toronto / Jan 2020 - Present</p>
                    <p className='text-center'>•	Mobile Application Development (iOS/Android)<br/>
                    •	Full Stack Development<br/>
                    •	Capstone Project<br/>
                    •	Artificial Intelligence/Machine Learning with Python<br/>
                    •	Application Development using Java<br/>
                    •	Data Structures and Algorithms<br/>
                    •	Agile Software Development<br/>
                    •	DEVOPS<br/>
                    </p>
                    </Tab.Panel>
        <Tab.Panel className={cx('bg-white rounded-b-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 w-[710px] h-[280px] shadow-2xl')}>
                    <h1 className='text-center text-2xl font-bold p-1'>George Brown College</h1>
                    <p className='text-center italic'> Computer Programming and Analysis (T177)</p>
                    <p className='text-center'>Currently developing the skills and techniques required for software application development, analysis and testing.</p>
                    <p className='font-bold text-center'>2020-Present</p>
                    <h1 className='text-center text-2xl font-bold p-1'>Humber College</h1>
                    <p className='text-center italic'>Business Courses</p>
                    <p className='text-center'>
                        Marketing Fundamentals,
                        Introduction to Business,
                        Mathematics of Finance 
                    </p>
                    <p className='font-bold text-center'>2018-2019</p>
                    </Tab.Panel>
        <Tab.Panel className={cx('bg-white rounded-b-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 w-[710px] h-[280px] shadow-2xl')}>
                    <h1 className='text-center text-2xl font-bold p-3'>Technology Experience</h1>
                    <p className='text-center text-md'>
                    • ReactJS
                    • NodeJS
                    • JavaScript<br/>
                    • NextJS
                    • HTML5, CSS3
                    • GraphQL <br/>
                    • C# / Java (Object-Oriented)
                    • DevOps <br/>
                    • Data Structures and Algorithms 
                    • Agile Methodologies <br/>
                    • TypeScript
                    • Python
                    • Swift <br/>
                    • Angular
                    </p>
                    </Tab.Panel>
        <Tab.Panel className={cx('bg-white rounded-b-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 w-[710px] h-[280px] shadow-2xl')}>
                    <h1 className='text-center text-2xl font-bold p-3'>Qualifications</h1>
                    <p className='text-center text-md'>
                    • Determination
                    • Time management <br/>
                    • Communication
                    • Organization <br/>
                    • Ability to work under pressure
                    • Planning<br/>
                    • Creativity
                    • Problem Solving <br/>
                    • Adaptability
                    • Collaboration
                    </p>
                    </Tab.Panel>
      </Tab.Panels>
      <a href={Pdf} without rel="noopener noreferrer" target="_blank">
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-green-500 
            border-green-500 hover:bg-red-500 hover:border-red-500 animate-pulse ease-out transform hover:scale-125 transition duration-500'>View Full Resume<HiArrowNarrowRight className='ml-3' /></button>
       </a>
    </Tab.Group>
    </div>
    
    )
}

export default Resume;