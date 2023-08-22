import * as React from "react"
import NavBar from "../components/navbar"

const IndexPage = () => {
  return (
    <main>
      <div class="home-box">
        <NavBar></NavBar>
      </div>
      <div class="about-box">
      </div>
      <div class="projects-box">
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Robert Smith</title>
