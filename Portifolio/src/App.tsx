import React from "react"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Features from "./component/Features/Features"
import Header from "./component/head"
import Home from "./component/Home"
import Footer from "./component/footer"

import "./global.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App