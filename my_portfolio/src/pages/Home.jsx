import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Project from "../components/Project/Project"

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