import About from "./About"
import Project from "./Project"
import Skills from "./Skills"

const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-10 py-8">
      <About />
      <Skills />
      <Project />
    </div>
  )
}
export default Home