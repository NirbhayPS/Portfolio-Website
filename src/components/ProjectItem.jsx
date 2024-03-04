import React from "react"
const ProjectItem = ({img, title, link}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-3xl group hover:bg-gradient-to-r from-gray-200 to-[#6b6f7a]">
      <div>
        <img src={img} alt="/"  className="rounded-xl group-hover:opacity-40 "/>
        <div className="hidden group-hover:block absolute top-[50%] translate-x-[40%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="pb-4 pt-2 text-gray-700 text-center">Reactjs</p>
            <a href={link}>
                <p className="text-center p-3 rounded-id bg-white text-gray-700 font-bold cursor-pointer text-lg">More info</p>
            </a>
        </div>
        </div>
    </div>
  )
}
export default ProjectItem