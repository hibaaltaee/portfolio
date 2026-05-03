import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Security from './components/Security'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Stack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Security />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
