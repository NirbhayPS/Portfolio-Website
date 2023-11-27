import React from "react"
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weatherImg.jpg'
import colorpickerImg from '../assets/colorpickerImg.png'
import todoImg from '../assets/chatgptImg.png'
import portfolioImg from '../assets/portfolioImg.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-auto m-auto md:pl-20 p-4 py-16 projectmaincss">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center projectmain">Projects</h1>
        <br></br> <br></br>
            
        <div className="grid sm:grid-cols-2 gap-12 ">
          
            <ProjectItem img={weatherImg} title = 'Weather' link='https://github.com/NirbhayPS/weather'/>
            <ProjectItem img={colorpickerImg} title = 'Color Picker' link='https://github.com/NirbhayPS/color_picker'/>
            <ProjectItem img={todoImg} title = 'ChatGPT-Frontend' link=''/>
            <ProjectItem img={portfolioImg} title = 'Portfolio Website' link='https://github.com/NirbhayPS/Portfolio-Website'/>
        </div>
      </div>

        
    </div>
  )
}
export default Projects