import React from 'react'
import '../Layout/header.css'
export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg main_nav my-5">
        <div className="container-fluid head_in_mt">
          <a className="navbar-brand" href="#">
              <img src="../logo.png" alt="logo" className="logo_a" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <ion-icon name="menu-outline" size="large"></ion-icon>
          </button>
          <div className="collapse navbar-collapse head_m_r" id="navbarSupportedContent">
              
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item  nav_it_mr">
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              <li className="nav-item nav_it_mr" >
                <a className="nav-link" href="#">Creator</a>
              </li>
              <li className="nav-item  nav_it_mr">
                <a className="nav-link" href="#">Community</a>
              </li>
            </ul>
            <button className='head_btn'>Connect Wallet</button>
          </div>
        </div>
      </nav>
    </>
  )
}
