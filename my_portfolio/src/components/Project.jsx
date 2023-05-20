import React from "react"
import selfmanagement from "../assets/self-management.png"
import subscription_tracker from "../assets/subscription-tracker.png"
import casalink from "../assets/casalink.png"
import trivia from "../assets/trivia.png"
import { SiCss3, SiFirebase, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si"

const Project = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-5 font-semibold">Some of my latest works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* selfmanagement*/}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden h-[500px]">
          <img 
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
            src={selfmanagement} 
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-2 lg:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-xl lg:text-3xl font-bold ">Self-Management App</h1>
            <p>
              the ultimate tool that combines the functionality of a todo app and a journal app in one seamless experience. 
              This app is designed to empower you in managing your tasks, goals, and personal reflections all in a single platform.
            </p>
            <p className="mt-3">Tech Stacks</p>
            <div className="flex gap-x-4">
              <SiReact size={30}/>
              <SiTailwindcss size={30}/>
              <SiFirebase size={30}/>
            </div>
            <button class="rounded-full bg-amber-500 py-4 px-8 text-sm mt-8">See More</button>
          </div>
        </div>

        {/* subscription_tracker */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden h-[500px]">
          <img 
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
            src={subscription_tracker}
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-xl lg:text-3xl font-bold">Subscription Tracker App</h1>
            <p>
              With this app, you can effortlessly keep track of all your subscriptions, including how many you have and the monthly 
              costs associated with each one.
            </p>
            <p className="mt-3">Tech Stacks</p>
            <div className="flex gap-x-4">
              <SiReact size={30}/>
              <SiTailwindcss size={30}/>
              <SiFirebase size={30}/>
            </div>
            <button class="rounded-full bg-amber-500 py-4 px-8 text-sm mt-8">See More</button>
          </div>
        </div>

        {/* casalink */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden h-[500px]">
          <img 
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
            src={casalink} 
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-xl lg:text-3xl font-bold">Casalink - Real State -</h1>
            <p>
              Effortlessly explore real estate options in Vancouver. Discover houses, apartments, and shared housing t
              hat match your location and budget preferences.
            </p>
            <p className="mt-3">Tech Stacks</p>
            <div className="flex gap-x-4">
              <SiReact size={30}/>
              <SiTailwindcss size={30}/>
            </div>
            <button class="rounded-full bg-amber-500 py-4 px-8 text-sm mt-8">See More</button>
          </div>
        </div>

        {/* trivia */}
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden h-[500px]">
          <img 
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
            src={trivia} 
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-xl lg:text-3xl font-bold">Trivia Guru - Quiz App -</h1>
            <p>
              Get ready to test your knowledge in various genres, including movies, books, and more. 
              Choose the number of questions and dive into an engaging quiz experience.
            </p>
            <p className="mt-3">Tech Stacks</p>
            <div className="flex gap-x-4">
              <SiHtml5 size={30} />
              <SiCss3 size={30}/>
              <SiJavascript size={30}/>
            </div>
            <button class="rounded-full bg-amber-500 py-4 px-8 text-sm mt-8">See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project