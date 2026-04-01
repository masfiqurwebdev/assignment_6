import React from 'react'
import banner from "../assets/banner.png"
import dot from "../assets/dot.png"

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <div className="px-4 py-4 mb-2 w-[70%] flex gap-2 bg-purple-300 rounded-full text-blue-600 ">
              <img src={dot} className="w-6"/>
              <p>New: AI-Powered Tools Available</p>
            </div>
            <h1 className="text-5xl font-bold  mb-2 ">Supercharge Your <br /> <span className="linear-g-c-text">Digital Workflow</span></h1>

            <p className="py-6">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products </p>

          <div className="flex gap-3">
            <button className="btn btn-primary rounded-full linear-g-c border-0">Explore Products</button>
            <button className="btn btn-outline rounded-full ">Watch Demo</button>
          </div>

          </div>
        </div>
      </div>
  )
}

export default Hero
