import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
