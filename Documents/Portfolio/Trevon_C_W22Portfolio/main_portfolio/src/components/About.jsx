import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowUpCircleFill, BsFillStopCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { MdNotStarted } from 'react-icons/md';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-t from-gray-300 to-blue-400 text-gray-900 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold py-1 inline-block border-b-4 border-white'>
                About
            </h1>
            <ol class="items-center sm:flex max-w-[1000px] py-4">
                <li class="relative mb-6 sm:mb-0 ">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-green-400">
                            <MdNotStarted size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Started Programming Journey</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">April, 2019</time>
                        <p class="text-base font-normal text-[#08192f]">Started making small fun and interactive projects using Python.</p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowRightCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Enrolled into George Brown College</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">December, 2019</time>
                        <p class="text-base font-normal text-[#08192f]">Joined the Computer Programming and Analysis Program offered at George Brown College.</p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowDownCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Started my First Semester</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">January, 2020</time>
                        <p class="text-base font-normal text-[#08192f]">Studied at the George Brown Campus where I learned the fundamentals.</p>
                    </div>
                </li>
            </ol>
            <ol class="items-center sm:flex max-w-[1000px] py-4">
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowDownCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Semester Four </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">April, 2020</time>
                        <p class="text-base font-normal text-[#08192f]">Faced many challenging courses such as Data Structures, Agile, Python. </p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-yellow-400">
                            <BsFillArrowLeftCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Online Challenges</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">July, 2020</time>
                        <p class="text-base font-normal text-[#08192f]">Remote learning was different at first, but I adapted with ease. Highlights: C#, NodeJS</p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowLeftCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Semester 2, Remote Learning</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">January, 2021</time>
                        <p class="text-base font-normal text-[#08192f]">With COVID-19 taking over the world, we had to make a transition to Online.</p>
                    </div>
                </li>
            </ol>
            <ol class="items-center sm:flex max-w-[1000px] py-4">
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowRightCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Semester 5, Collaboration</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">January, 2020</time>
                        <p class="text-base font-normal text-[#08192f]">Collaborated with many peers to build small scale application projects.</p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-gray-200">
                            <BsFillArrowRightCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Enrolled into George Brown College</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">December, 2019</time>
                        <p class="text-base font-normal text-[#08192f]">Joined the Computer Programming and Analysis Program offered at George Brown College.</p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                    <div class="flex justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-red-400">
                            <BsFillStopCircleFill size={50} className=""/>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Started Programming Journey</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-indigo-900">August, 2019</time>
                        <p class="text-base font-normal text-[#08192f]">Started making small fun and interactive projects using Python.</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default About;