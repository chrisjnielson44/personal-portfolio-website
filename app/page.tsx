import FrontPage from "./Components/Frontpage"
import Projects from "./Components/Projects"
import Education from "./Components/Education"
import Research from "./Components/Research"
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <div className="">
        <FrontPage/>
      </div>
      <div className="py-20 snap-center">
        <Projects/>
      </div>
      <div className="py-20 snap-center">
        <Education/>
      </div>
      <div className="py-20 snap-center">
        <Research/>
      </div>
      <div className="">
        <Experience/>
        <Footer/>
      </div>
    </div>
  )
}
