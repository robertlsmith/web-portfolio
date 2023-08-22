import * as React from "react"
import NavBar from "../components/navbar"
import HeroPage from "../components/hero"
import ParticlesBG from "../components/ParticlesBG"
// import { useState, useEffect } from "react"
import { Component }  from "react"


const IndexPage = () => {
  return (
    <main>
      <div class="home-box">
        <ParticlesBG></ParticlesBG>
        <NavBar></NavBar>
        <HeroPage></HeroPage>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Robert Smith</title>
