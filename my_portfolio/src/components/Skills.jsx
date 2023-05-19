import {SiHtml5, SiCss3, SiJavascript,SiJquery, SiSass, SiBootstrap, SiMongodb ,SiReact,SiNodedotjs, SiFirebase, SiTailwindcss,SiFigma,SiCanva, SiGit, SiGithub, SiMui} from "react-icons/si"

const Skills = () => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl mb-5 font-semibold">Skills</h3>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 gap-y-8">
        <SiHtml5 size={50} />
        <SiCss3 size={50}/>
        <SiJavascript size={50}/>
        <SiJquery size={50}/>
        <SiReact size={50}/>
        <SiNodedotjs size={50}/>
        <SiSass size={50}/>
        <SiBootstrap size={50} />
        <SiTailwindcss size={50}/>
        <SiFirebase size={50}/>
        <SiMongodb size={50}/>
        <SiMui size={50}/>
        <SiFigma size={50}/>
        <SiCanva size={50}/>
        <SiGit size={50}/>
        <SiGithub size={50}/>
      </div>
    </div>
  )
}
export default Skills