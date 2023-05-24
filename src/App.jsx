import React from "react"
import './style.css'
import iconData from "./iconData.js"
import data from "./data"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import heartFull from "/heart-full.png"
import heartEmpty from "/heart-empty.png"
import { useState } from 'react'

export default function App() {
  const [heart, setHeart] = useState({
    isFavorite: false
  })

  let heartIcon = heart.isFavorite ? {heartFull} : {heartEmpty}

  function toggleFavorite() {
    setHeart(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))
  }

  const cards = data.map(place => {
    return (
      <Card
        key={place.id}
        {...place}
        toggleClick={toggleFavorite}
        heartIcon={heartIcon}
      />
    )
  })

  const hero = iconData.map(icon => {
    return (
      <Hero
        key={icon.id}
        {...icon}
      />
    )
  })

  return (
    <>
    <Navbar />
      <section className="hero-section">
        {hero}
      </section>
      <section className="cards-list">
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
      </section>
      <Footer />
    </>
  )
}
