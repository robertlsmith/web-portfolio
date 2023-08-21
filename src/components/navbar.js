import * as React from "react"

function NavBar() {
    return (
        <div class="nav-wrapper">
            <div class="nav">
                <ul>
                    <li><a class="logo" href="/">RS.</a></li>
                    <div class="nav-right">
                        {/* Space here for adding the light/dark mode button */}
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="contact">Contact</a></li>
                    </div>         
                </ul>
            </div>
        </div>
        
    )
}

export default NavBar