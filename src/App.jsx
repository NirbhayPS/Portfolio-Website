import React, { useState } from 'react'
import Sidenav from './components/Sidenav.jsx'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Sidenav/>
      <Main />
      <Work/>
      <div
        className="bg-cover"
        style={{
          backgroundImage: 'url("src/components/projectbgImg.jpg")',
        }}
      >
        <Projects />
      </div>
    <div className='bg-[#dfdfcf] border-stone-950 border p-8'><Contact/></div>
    </div> 
  )
}

export default App;
