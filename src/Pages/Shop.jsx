import React from 'react'
import Hero from '../Components/Heros/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewLetter from '../Components/NewLetter/NewLetter'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewLetter/>
    </div>
  )
}
