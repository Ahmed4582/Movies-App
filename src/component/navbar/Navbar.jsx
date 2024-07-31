import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shanta } from '../../context/Context'

export default function Navbar() {
 let {getDataInput} = useContext(shanta)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container">
    <Link className="navbar-brand text-danger fs-2 fw-bold" to="/">Netflix</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className='nav-item'>
        <input className="form-control nav-link me-4 bg-white" onChange={getDataInput} type="search" placeholder="Search" aria-label="Search"/>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fw-bold fs-5" aria-current="page" to="movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 " to="tv">TV</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
// {/*  */}