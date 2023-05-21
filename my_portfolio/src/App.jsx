import React from "react"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="text-gray-200 bg-zinc-900 min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
