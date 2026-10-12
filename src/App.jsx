import { useCallback, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import TestimonialImages from './components/TestimonialImages.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import VideoModal from './components/VideoModal.jsx'

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false)
  const openVideo = useCallback(() => setVideoOpen(true), [])
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  return (
    <>
      <Header />
      <main>
        <Hero onWatchStory={openVideo} />
        <About />
        <Services />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <TestimonialImages />
        <Contact />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={closeVideo} />
    </>
  )
}
