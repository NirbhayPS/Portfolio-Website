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
          backgroundImage: 'url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
        }}
      >
        <Projects />
      </div>
    <div className='bg-[#dfdfcf] border-stone-950 border p-8'><Contact/></div>
    </div> 
  )
}

export default App;
