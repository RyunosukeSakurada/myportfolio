import React from "react"
import {TfiEmail} from "react-icons/tfi"
import {SiGithub, SiLinkedin} from "react-icons/si"

const Header = () => {
  return (
    <header className="px-16 py-4 flex items-center justify-between">
      <h3 className="px-4 py-2 border-2 border-gray-700 rounded-full">R</h3>
      <div className="flex gap-x-4">
        <a href="https://github.com/RyunosukeSakurada" target="blank"><SiGithub size={30} className="hover:bg-amber-500 hover:border hover:rounded-full"/></a>
        <a href="https://www.linkedin.com/in/ryunosuke-sakurada/?originalSubdomain=ca" target="blank"><SiLinkedin size={30} className="hover:bg-amber-500 hover:border"/></a>
      </div>
      <a 
        href="mailto:ron.sakurada@gmail.com"
        target="blank"
        className="border-2 border-gray-700 hover:bg-amber-500 rounded px-4 py-2 cursor-pointer flex gap-x-2 items-center"
      >
        Let's Chat
        <TfiEmail />
      </a>
    </header>
  )
}
export default Header