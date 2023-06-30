import React from "react"
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weatherImg.jpg'
import shoppingImg from '../assets/shoppingImg.jpg'
import todoImg from '../assets/todoImg.jpg'
import projectbgImg from '../assets/projectbgImg.jpg'
const Projects = () => {
  return (
    <div id="projects" className="object-cover max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">

        <h1 className="text-4xl font-bold text-center text-[#f5f5f7]">Projects</h1>
        <br></br> <br></br>
            
        <div className="grid sm:grid-cols-2 gap-12 ">
          
            <ProjectItem img={weatherImg} title = 'Weather' />
            <ProjectItem img={shoppingImg} title = 'Shopping App' />
            <ProjectItem img={todoImg} title = 'todo App' />
        </div>
    </div>
  )
}
export default Projects