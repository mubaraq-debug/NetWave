import React from 'react'
import heroimage from '../assets/image.png'

function Hero() {
  return (
    <div className="lg:p-10 md:p-5 flex md:flex-row md:items-center md:justify-between p-6 items-center flex-col">
      <div className="hero-text" style={{ flex: 0.5 }}>
        <h1 className="font-semibold text-2xl text-left md:text-3xl lg:text-5xl capitalize">
          unleash your online <br /> potential with our <br /> creative web
          agency
        </h1>
        <p className="mt-5 text-base text-justify lg:w-9/12">
          Let our creative web agency help you reach new heights online. From
          custom web designs to development services, we've got the skills and
          experience to bring your vision to life. Contact us today to get
          started
        </p>

        <div className="btns mt-5 flex flex-row gap-6">
          <button className="get border px-4 py-3 text-white bg-textColor">
            Get in touch
          </button>
          <button className="learn border px-4 py-3 text-textColor">
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image" style={{ flex: 0.5 }}>
        <img src={heroimage} alt="img" className="lg:h-6/12 lg:w-8/12 md:h-8/12 md:w-8/12" />
      </div>
    </div>
  );
}

export default Hero