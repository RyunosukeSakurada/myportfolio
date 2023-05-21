import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si"
import TriviaImg from "../../../assets/trivia.png"
import {AiOutlineCheckCircle, AiOutlineClose} from "react-icons/ai"
import React, { useState } from "react";


const Trivia = () => {
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
        src={TriviaImg}
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-2 lg:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="text-xl lg:text-3xl font-bold ">Trivia Guru - Quiz App -</h1>
        <p>
          Get ready to test your knowledge in various genres, including movies, books, and more. Choose the number of questions and dive into an engaging quiz experience
        </p>
        <p className="mt-3">Tech Stacks</p>
        <div className="flex gap-x-4">
          <SiHtml5 size={30} />
          <SiCss3 size={30}/>
          <SiJavascript size={30}/>
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
            <h1 className="text-2xl text-center font-semibold mb-5">Trivia Guru - Quiz App -</h1>
                {/* features */}
                <ul className="font-semibold">
                  <li className="flex items-stretch gap-x-4 mb-3">
                    <AiOutlineCheckCircle size={25}/>
                    <div>
                      <p>Quiz genre and question quantity selection:</p>
                      <span className="text-zinc-500 text-sm">Enjoy quizzes by selecting your preferred genre and the number of questions</span>
                    </div>
                  </li>
                  <li className="flex items-stretch gap-x-4 mb-3">
                    <AiOutlineCheckCircle size={20}/>
                    <div>
                      <p>Animation using GSAP:</p>
                      <span className="text-zinc-500 text-sm">Utilize GSAP to create engaging animations</span>
                    </div>
                  </li> 
                  <li className="flex items-stretch gap-x-4 mb-3">
                    <AiOutlineCheckCircle size={25}/>
                    <div>
                      <p>Quiz completion with score display:</p>
                      <span className="text-zinc-500 text-sm">After completing the quiz, view your score to assess your performance</span>
                    </div>
                  </li>
                </ul>
          </div>
        </div>
      )}

    </div>
  )
}
export default Trivia