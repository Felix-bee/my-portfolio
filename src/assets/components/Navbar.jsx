import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaSquareTwitter } from "react-icons/fa6";
// import logo from './public/images'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
              <a href="#" aria-label="Home">
                  <img src="/images/orange-white.png" className="mx-2 rounded-2xl" width={50} height={33} alt="Logo" />

              </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
        <a className="https://linkedin.com/" href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>

        <a className="https://github.com/Felix-bee" href="https://www.github.com/in/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <FaGithub />
        </a>

        <a className="https://instagram.com/" href="https://www.instagram.com/in/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram />
        </a>

        <a className="https://twitter.com/" href="https://www.twitter.com/in/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaSquareTwitter/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar