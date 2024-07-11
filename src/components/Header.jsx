import React from 'react'
import Sidebar from './Sidebar'

const Header = () => {
  return (<>

    <nav className="navbar front  fixed-top">
      <div className="container-fluid front">
        <a className="navbar-brand logo text-white" href="#">WordView</a>
        <button className="navbar-toggler bg-white d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="  navbar-toggler-icon"></span>
        </button>
        
        <div className="offcanvas d-md-none offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header front">
          <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">WorldView</h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body  front">
            <Sidebar/>
          </div>
          
        </div>
      </div>
    </nav>
  </>
  )
}

export default Header