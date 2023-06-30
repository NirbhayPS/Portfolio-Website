import React from "react"
import ProjectItem from './ProjectItem'
import colorpickerImg from '../assets/colorpickerImg.jpg'
import shoppingImg from '../assets/shoppingImg.jpg'
import todoImg from '../assets/todoImg.jpg'
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#ebe6a7] ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
            These are some of the projects that I completed while studying in my college. <br></br> Hope you like it 😉<br></br> <br></br>
            <div className="text-left bold-text text-lg">Click on the Projects icon to get a detailed view about the project.</div> 
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={colorpickerImg} title = 'Weather' />
            <ProjectItem img={shoppingImg} title = 'Shopping App' />
            <ProjectItem img={todoImg} title = 'todo App' />
        </div>
    </div>
  )
}
export default Projects