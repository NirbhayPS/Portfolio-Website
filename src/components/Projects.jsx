import React from "react"
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weatherImg.jpg'
import shoppingImg from '../assets/shoppingImg.jpg'
import todoImg from '../assets/todoImg.jpg'
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 projectcontmain">

        <h1 className="text-4xl font-bold text-center projectmain">Projects</h1>
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