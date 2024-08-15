import React, { useState } from 'react'
import { createContext } from 'react'
import ReactSwitch from 'react-switch'
import "./App.css"
import Certicate from './components/Certificate.jsx'
import Sidenav from './components/Sidenav.jsx'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/*basically provides theme to all child components */}
      <div className='App' id={theme}>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> <p className='text'>{theme} mode</p> <p className='myname'>Made with ❣️ from Nirbhay</p>
        </div>
        <Sidenav />
        <Main />
        <Work />
        <Certicate />
        {/* <div
        className="bg-cover"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
        }}
      > */}
        <Projects />
        {/* </div> */}
        <Contact />

      </div>
    </ThemeContext.Provider>
  )
}

export default App;
