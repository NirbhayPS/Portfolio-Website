import React, { useState } from 'react'
import { createContext } from 'react'
import ReactSwitch from 'react-switch'
import "./App.css"
import Sidenav from './components/Sidenav.jsx'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr==="light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className = 'App' id = {theme}>
      <div className='switch'>
        <ReactSwitch onChange={toggleTheme} checked= {theme ==="dark"}/>
      </div>
      <Sidenav/>
      <Main />
      <Work/>
      {/* <div
        className="bg-cover"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
        }}
      > */}
        <Projects />
      {/* </div> */}
    <Contact/>
    
    </div> 
    </ThemeContext.Provider>
  )
}

export default App;
