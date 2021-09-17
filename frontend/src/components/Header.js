import React from 'react'

function Header() {
    return (
        <div className="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Poste</a>
        <a href="#contact">Contact</a>
        <a href="#contact">Product</a>
    <div className="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
    </div>
  </div>
    )
}

export default Header