import React from "react";
import {HiArrowNarrowDown} from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#e0e0e0] border-bottom-left-radius:50% bg-gradient-to-t from-blue-400 to-[#08192f]'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ffffff]'>Hello! My Name is,</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#00a3ff]'>Trevon Costa</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#08192f]'>Software Developer Student.</h2>
                <p className='text-[#ffffff] py-4 max-w-[1000px]'>Currently I'm a Student at George Brown College, 
                    working on final projects with classes in Full Stack Development, Machine Learning, 
                    Mobile Application Development, Intro. to Cyber Security and Capstone. New currently: 
                    Now using Swift for IOS Development and utilizing new tools such as XCode to create my 
                    projects and assignments.</p>
                <div>
                    <Link to='about' smooth={true} duration={500}>
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-green-500 
                        border-green-500 hover:bg-red-500 hover:border-red-500 animate-pulse ease-out transform hover:scale-125 transition duration-500'>More Info<HiArrowNarrowDown className='ml-3' /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;