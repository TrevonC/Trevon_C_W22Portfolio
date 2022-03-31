import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import Pdf from '../assets/TrevonCostaResume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-400 z-10'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div>

            {/* Navbar Options */}
            <ul className='hidden md:flex'>
                <li className='cursor-pointer px-4 hover:text-blue-400'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='cursor-pointer px-4 hover:text-blue-400'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='cursor-pointer px-4 hover:text-blue-400'><Link to='resume' smooth={true} duration={500}>Resume</Link></li>
                <li className='cursor-pointer px-4 hover:text-blue-400'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
                <li className='cursor-pointer px-4 hover:text-blue-400'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>


            {/* Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-8 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl cursor-pointer hover:text-blue-400'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl cursor-pointer hover:text-blue-400'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl cursor-pointer hover:text-blue-400'><Link to='resume' smooth={true} duration={500}>Resume</Link></li>
                <li className='py-6 text-4xl cursor-pointer hover:text-blue-400'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
                <li className='py-6 text-4xl cursor-pointer hover:text-blue-400'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0072b1]'>
                        <a className='flex item-center justify-between w-full px-3 text-white' 
                        href="https://www.linkedin.com/in/trevon-costa-9a6073219/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]'>
                        <a className='flex item-center justify-between w-full px-3 text-white' 
                        href="https://github.com/TrevonC">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#4c4d52]'>
                        <a className='flex item-center justify-between w-full px-3 text-white' 
                        href="/">
                            <Link to='contact' smooth={true} duration={500}>Contact</Link><HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#08192f]'>
                        <a className='flex item-center justify-between w-full px-3 text-white' 
                        href={Pdf} without rel="noopener noreferrer" target="_blank">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;