import { useState } from "react";
import SubscriptionTrackerImg from "../../../assets/subscription-tracker.png"
import { SiFirebase, SiReact, SiTailwindcss } from "react-icons/si"
import {AiFillGithub, AiOutlineCheckCircle, AiOutlineClose} from "react-icons/ai"
import {TfiVideoClapper} from "react-icons/tfi"


const SubscriptionTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowProject = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden h-[500px]">
    <img 
      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
      src={SubscriptionTrackerImg}
    />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-2 lg:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 class="text-xl lg:text-3xl font-bold ">Subscription Tracker App</h1>
      <p>
        With this app, you can effortlessly keep track of all your subscriptions, including how many you have and the monthly costs associated with each one
      </p>
      <p className="mt-3">Tech Stacks</p>
      <div className="flex gap-x-4">
        <SiReact size={30}/>
        <SiTailwindcss size={30}/>
        <SiFirebase size={30}/>
      </div>
      <button 
        class="rounded-full bg-amber-500 py-4 px-8 text-sm mt-8"
        onClick={handleShowProject}
      >Show Project</button>
    </div>

    {/* Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center p-4 visible duration-300">
        <div className="max-w-[500px] relative bg-zinc-200 text-zinc-600 p-8 rounded-lg">
          <AiOutlineClose 
            size={30} 
            className="absolute top-6 right-6 cursor-pointer"
            onClick={handleCloseModal}
          />
          <h1 className="text-2xl text-center font-semibold mb-5">Subscription Tracker App</h1>
              {/* features */}
              <ul className="font-semibold">
                <li className="flex items-stretch gap-x-4 mb-3">
                  <AiOutlineCheckCircle size={30}/>
                  <div>
                    <p>Firebase login/logout:</p>
                    <span className="text-zinc-500 text-sm">Users can securely create an account, log in, and log out using Firebase authentication</span>
                  </div>
                </li>
                <li className="flex items-stretch gap-x-4 mb-3">
                  <AiOutlineCheckCircle size={30}/>
                  <div>
                    <p>Subscription management:</p>
                    <span className="text-zinc-500 text-sm">Users can add subscription details, including the name and monthly cost of each subscription</span>
                  </div>
                </li> 
                <li className="flex items-stretch gap-x-4 mb-8">
                  <AiOutlineCheckCircle size={22}/>
                  <div>
                    <p>Total monthly cost tracking:</p>
                    <span className="text-zinc-500 text-sm">Users can view the total monthly cost of all their subscribed services</span>
                  </div>
                </li>
              </ul>

              {/* Links */}
              <div className="flex gap-x-8 justify-center">
                <a 
                  href="https://github.com/RyunosukeSakurada/subscription-tracker" 
                  target="blank"
                  className="border border-black rounded px-4 py-2 hover:bg-amber-500 hover:border-amber-500"
                >
                  <div className="flex gap-x-2 items-center">
                    <AiFillGithub />
                    <p>Code</p>
                  </div>
                </a>
                <a 
                  href="https://subscription-tracker.vercel.app/" 
                  target="blank"
                  className="border border-black rounded px-4 py-2 hover:bg-amber-500 hover:border-amber-500"
                >
                  <div className="flex gap-x-2 items-center">
                    <TfiVideoClapper />
                    <p>Demo</p>
                  </div>
                </a>
              </div>
        </div>
      </div>
    )}

  </div>
  )
}
export default SubscriptionTracker