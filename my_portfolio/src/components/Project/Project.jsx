import React from "react"
import SelfManagement from "./Projects/SelfManagement"
import SubscriptionTracker from "./Projects/SubscriptionTracker"
import Casalink from "./Projects/Casalink"
import Trivia from "./Projects/Trivia"

const Project = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-5 font-semibold">Some of my latest works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <SelfManagement />
        <SubscriptionTracker />
        <Casalink />
        <Trivia />
      </div>
    </div>
  )
}
export default Project