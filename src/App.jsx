import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GiBiceps } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import Linkedin from './components/Linkedin';


function App() {
  

  return (
    <div className='container-app'>
      <h1>MEUS LINKS</h1>
      <a href="https://github.com/NicolasCLima" className='links'target='_blank'><FaGithub /> GITHUB <FaGithub /></a>
      <Linkedin />
    </div>

  )
}

export default App
