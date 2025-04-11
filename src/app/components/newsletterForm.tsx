"use client"

import { useState, FormEvent } from "react"
import axios, { AxiosError } from 'axios'


export default function NewsletterForm () {

    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setMessage(message)
        setLoading(true)

        try {
            const res = await axios.post('/api/subscribe', {email,  name})
            setMessage(res.data.message || "Success")
            setEmail('')
            setName('')
        } catch (error: unknown) {
          const err = error as AxiosError<{ detail?: string }>
          setMessage(err.response?.data?.detail || 'Something Went Wrong')
        } finally {
            setLoading (loading)
        }
    }

    return ( <div className="grid lg:grid-cols-2 justify-center shadow-2xl rounded-2xl border-1 border-zinc-400">

        <div className="bg-[url('/images/1215.jpg')] bg-cover bg-center lg:rounded-bl-2xl lg:rounded-tl-2xl">

        </div>

        <div className=" text-[18px]/[34px] text-left tracking-tight rounded-5xl self-center lg:p-20 p-10">
          <div className="flex flex-col gap-y-4 pb-6">

            <h1 className="lg:text-3xl text-2xl font-[Raleway] tracking-tight font-bold">
              Subscribe To Our Newsletter</h1>
            <p>Join our community for the latest updates, special offers, and more
              delivered straight to your inbox!</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-start text-[#282829] md:text-[15px] text-[13px] gap-y-6">
            <input type="text" name="" id="" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}
              className="w-full h-15 pl-4 lg:pl-10 rounded-3xl border-1 border-zinc-400"  required/>
            <input type="email" name="" id="" placeholder="Enter Your Email Address Here" onChange={(e) => setEmail(e.target.value)}
              className="w-full h-15 pl-4 lg:pl-10 rounded-3xl border-1 border-zinc-400" required/>
            <button type="submit" value="Hello"
              className="bg-[#53007B] h-15 rounded-3xl text-white">
                Submit
              
            </button>
          </form>
        </div>

      
      </div>
)
}