import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Feature from './components/Feauter'
import HowItWorks from './components/HowItWorks'

import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero />
        <Highlights/>
        <Model/> 
        <Feature/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}

export default App
