
import './App.css'
import Calltoaction from './components/calltoaction/Calltoaction'
import Feature from './components/feature/Feature'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Signin from './components/signin/Signin'
import Status from './components/status/Status'
import Team from './components/team/Team'
import Testimonial from './components/testimonial/Testimonial'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Team/>
    <Feature/>
    <Status/>
    
    
    <Signin/>
    <Testimonial/>
    <Calltoaction/>
    <Footer/>
    </>
  )
}

export default App
