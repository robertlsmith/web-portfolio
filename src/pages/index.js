import * as React from "react"

const cursor = document.querySelector(".cursor");

const IndexPage = () => {
  return (
    <main class="bg-persian-indigo">
      <div class="container grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-x-20 p-20">
        <div class="logo-div">
          <a class="text-9xl font-medium text-antiflash-white" href="/">Robert Smith</a>
        </div>
        <div class="nav-div text-antiflash-white">
          <nav>
            <ul>
              <li>
                <a class="hover:line-through" href="/work">Work</a>
              </li>
              <li>
                <a class="hover:line-through" href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Robert Smith</title>
