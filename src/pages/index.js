import * as React from "react"
import NavBar from "../components/navbar"
import HeroPage from "../components/hero"
// import { useState, useEffect } from "react"

const IndexPage = () => {
  return (
    <main>
      <div class="home-box">
        <NavBar></NavBar>
        <HeroPage></HeroPage>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Robert Smith</title>
