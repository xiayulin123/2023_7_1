import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

import infoback from './assets/intro.png'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bo-no-repeat bg-center">
          <Navbar />

          <Hero />
        </div>
        <div style={{ backgroundImage: `url(${infoback})` }}>
          <About />
        </div>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
