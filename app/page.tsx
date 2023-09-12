import FrontPage from "./Components/Frontpage"
import Projects from "./Components/Projects"
import Education from "./Components/Education"
import Research from "./Components/Research"
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <div className='bg-gray-100 '>
      <FrontPage/>
      <Projects/>
      <Education/>
      <Research/>
      <Experience/>
      <Footer/>
    </div>
  )
}
