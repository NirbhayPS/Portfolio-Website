import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowUp, AiOutlineBank, AiOutlineMail, AiOutlineFilePdf, AiOutlineGithub } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../App';

// import { BsPerson } from "react-icons/bs";
const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    // const [theme, setTheme] = useState("dark");
    // const toggleTheme = () => {
    //     setTheme((curr) => (curr==="light" ? "dark" : "light"));
    //   };

    return (
        <div className="navmain">
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineArrowUp size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineBank size={20} />
                            <span className='pl-4'>Education</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineGithub size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1TV46fU6XgN5LfxsOF-ZCCy-7bnCx_CN7/view?usp=sharing" className='w-[75%] flex justify-center items-center rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' target="_blank" rel="noopener noreferrer">
                            <AiOutlineFilePdf size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                        {/* <div className='switch'>
                            <ReactSwitch onChange={toggleTheme} checked= {theme ==="dark"}/>
                        </div> */}
                    </div>
                ) : (
                    <div></div>
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#Main" className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 navbutmain'>
                        <AiOutlineArrowUp className='' size={20} />
                    </a>
                    <a href="#work" className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 navbutmain'>
                        <AiOutlineBank className='' size={20} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 navbutmain'>
                        <AiOutlineGithub className='' size={20} />
                    </a>
                    <a href="https://drive.google.com/file/d/1TV46fU6XgN5LfxsOF-ZCCy-7bnCx_CN7/view?usp=sharing" className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 navbutmain' target='_blank'>
                        <AiOutlineFilePdf className='' size={20} />
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 navbutmain'>
                        <AiOutlineMail className='' size={20} />
                    </a>
                    {/* <div className='switch'>
                        <ReactSwitch onChange={toggleTheme} checked= {theme ==="dark"}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default Sidenav;