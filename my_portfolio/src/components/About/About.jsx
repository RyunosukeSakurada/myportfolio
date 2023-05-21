import React from "react"
import myImg from "../../assets/profile.jpg"

const About = () => {
  return (
    <div className="md:flex md:flex-row-reverse gap-x-4 mb-20">
      <img 
        src={myImg} 
        alt="" 
        className="md:w-1/2 object-cover rounded-lg my-5"
      />

      <div className="md:w-1/2">
        <p className="text-2xl font-semibold">Hello👋   I am </p>
        <span className="text-5xl text-amber-500 font-semibold">Ryunosuke Sakurada</span>
        <p className="mt-5 text-lg leading-relaxed">
            Vancouver-based Front-End Developer driven by continuous self-improvement 
            and a passion for learning. Committed to staying updated with the latest 
            technologies and best practices. Strong believer in effective communication 
            and collaboration, contributing efficiently to projects
        </p>
      </div>
    </div>
  )
}
export default About