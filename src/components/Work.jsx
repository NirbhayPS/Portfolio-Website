import React from "react";
import WorkItem from './WorkItem'

const data = [
    {
        year: 2024,
        title: 'Indian Institute of Information Technology, Ranchi',
        duration: '4 Years',
        details: 'Pursuing Bachelor of Technology in Computer Science and Engineering from an Institute of national importance.'
    },
    {
        year: 2019,
        title: 'Little Flower House, Varanasi',
        duration: '2 Years',
        details: 'Completed Higher Secondary Education in Physics, Chemistry and Mathematics stream.'
    },
    {
        year: 2017,
        title: 'Sunbeam Academy, Varanasi',
        duration: '2 Years',
        details: 'Completed secondary education in Mathematics, Science and Information Technology as major subjects.'
    },
]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center workheadingmain">Education <br></br> <br></br></h1>
      {data.map((item, idx)=>(
          <WorkItem key ={idx} 
          year={item.year} 
          title = {item.title} 
          duration = {item.duration} 
          details= {item.details}
          />
      ))}
    </div>
  )
}
export default Work