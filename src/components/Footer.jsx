import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import X from '../../public/Xlogo.svg'


const Footer = () => {
  return (
    <div>
      <footer className="front text-white mt-5 p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <a href="mailto:langoterudra@gmail.com" className="text-white m-2">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.linkedin.com/in/rudra-langote-439366291/" target="_blank" rel="noopener noreferrer" className="text-white m-2">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://github.com/Rudra-Langote" target="_blank" rel="noopener noreferrer" className="text-white m-2">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://x.com/Rudra_2945" target="_blank" rel="noopener noreferrer" className="text-white m-2">
            <img src={X} alt="X logo" className="fa-2x" style={{ height: '1em', }} />
            </a>
          </div>
        </div>
        <hr className="bg-white my-4" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} WorldView. All rights reserved.</p>
        </div>
      </div>
    </footer>
 
    </div>
  )
}

export default Footer
