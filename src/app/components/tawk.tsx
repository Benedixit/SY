"use client"
import { useEffect } from "react"

export default function TawkToChat() {
  useEffect(() => {
    const tawk = document.createElement("script")
    tawk.src = "https://embed.tawk.to/67f12fe228e480190e6bdf57/1io3263pc"
    tawk.async = true
    tawk.charset = "UTF-8"
    tawk.setAttribute("crossorigin", "*")
    document.body.appendChild(tawk)
  }, [])

  return null
}
