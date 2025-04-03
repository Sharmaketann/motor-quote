// ui/use-toast.tsx (or .jsx)
import { useState } from "react"

export function useToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const showToast = (options: {
    variant: string
    title: string
    description: string
  }) => {
    setToastMessage(options.description)
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 3000) // Hide after 3 seconds
  }

  return { showToast, isVisible, toastMessage }
}
