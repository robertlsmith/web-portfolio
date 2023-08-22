import * as React from "react"
// import { useState, useEffect } from "react"

import ToggleSlider from "./toggleSlider"

function NavBar() {
    return (
        <div class="nav-container">
            <div class="nav">
                <ul>
                    <li><a class="logo" href="/">RS.</a></li>
                    <div class="nav-right">
                        <li class="switch-name">
                            <ToggleSlider onclick="darkMode()"></ToggleSlider>
                        </li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </div>         
                </ul>
            </div>
        </div>
    )
}

export default NavBar