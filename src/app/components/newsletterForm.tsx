"use client"

import { useState, FormEvent } from "react"
import axios from 'axios'
import PopUp from "./popup"
import Form from "next/form"

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [message, setMessage] = useState('')
  const [popupheader, setPopupheader] = useState('')
  const [popupicon, setPopupicon] = useState('')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await axios.post("/api/subscribe", { email, fname })
      console.log("Success:", response.data)
      setPopupicon('/images/accept.svg')
      setPopupheader('Thank You For Subscribing!')
      setMessage("Successfully Subscribed")
      setShowModal(true)
      setEmail('')
      setFname('')
    } catch (error) {
      console.error("Error subscribing:", error)
      setPopupicon('/images/error.png')
      setMessage("There was an error. Please try again.")
      setPopupheader('Subscription Failed')
      setShowModal(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 justify-center shadow-2xl rounded-2xl border-1 border-zinc-400">
        <div className="bg-[url('/images/1215.jpg')] bg-cover bg-center lg:rounded-bl-2xl lg:rounded-tl-2xl" />

        <div className="text-[18px]/[34px] text-left tracking-tight self-center lg:p-20 p-10">
          <div className="flex flex-col gap-y-4 pb-6">
            <h1 className="lg:text-3xl text-2xl font-[Raleway] tracking-tight font-bold">
              Subscribe To Our Newsletter
            </h1>
            <p>
              Join our community for the latest updates, special offers, and more
              delivered straight to your inbox!
            </p>
          </div>

          <Form action="/" onSubmit={handleSubmit} className="flex flex-col justify-start text-[#282829] md:text-[15px] text-[13px] gap-y-6">
            <input
              id="full-name"
              type="text"
              name="fname"
              placeholder="Enter Your Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full h-15 pl-4 lg:pl-10 rounded-3xl border border-zinc-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-15 pl-4 lg:pl-10 rounded-3xl border border-zinc-400"
              required
            />
            <button
              type="submit"
              className="bg-[#53007B] h-15 rounded-3xl text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          
          </Form>
        </div>
      </div>

    
      <PopUp isOpen={showModal} onClose={() => setShowModal(false)} 
      modalMessage={message} 
      popupheader={popupheader}
      popupicon={popupicon} />
    </>
  )
}
