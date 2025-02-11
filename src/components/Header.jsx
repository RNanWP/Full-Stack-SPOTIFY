import React from 'react'
import logoSpotify from "../assets/logo/spotify-logo.png"

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a href="/">
      <h1>Spotify</h1>
      </a>
    </div>
  )
}

export default Header