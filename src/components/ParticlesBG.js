import * as React from "react"
import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"
import { Component }  from "react"

const ParticlesBG = () => {
  return (
    <Particles params={particlesConfig}></Particles>
  )
}

export default ParticlesBG