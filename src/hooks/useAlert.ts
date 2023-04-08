import { useState } from "react";

export const useAlert = (): [boolean, () => void] => {
    let [isVisible, setIsVisible] = useState(false)
  
    const invoke = () => {
      console.log("invoke is called");
      setIsVisible(true)
      setTimeout(() => {
        console.log("setTimeout stopped");
        setIsVisible(false)
      }, 5000)
    }
    return [isVisible, invoke];
  }