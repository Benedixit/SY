"use client"

import Image from "next/image";
import { useState, KeyboardEvent, ChangeEvent } from "react";

type Message = {
    role: 'user' | 'bot'
    text: string
  }

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [messages, setMessages] = useState<Message[]>([
         {role: "bot",  text: 'Hello!!! How are you today!'}
    ])

    const [input, setInput] = useState<string>('')

    const sendMessage = () => {
        if (!input.trim()) return
        const newMessage: Message = {'role': 'user', text: input}
        setMessages(prev => [...prev, newMessage])

        setTimeout(() => {
            setMessages(prev => [
              ...prev,
              { role: 'bot', text: 'Thanks for your message!' },
            ])
          }, 600)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") sendMessage()
    }

    

  return (
    <>
        <div className="fixed bottom-4 right-4 z-50 font-[family-name:var(--font-lexend)]">
      {isOpen ? (
        <div className="w-80 bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-sm font-semibold">Chat with us</h2>
           
            <Image src="https://pub-335ea302502b4be883413e4c10afa703.r2.dev/images/close.svg" alt="Close Icon" width={150} height={150}
            className="w-10 h-10"
             onClick={() => setIsOpen(false)} />
           
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm max-h-64">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-right'
                    : 'bg-gray-100 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 px-2 py-1 text-sm border rounded-lg"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1 bg-[#53007B] text-white text-sm rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
       
        <div id="chatbot-button"  className="text-white p-4 rounded-full cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image src="https://pub-335ea302502b4be883413e4c10afa703.r2.dev/images/chat.svg" alt="Sabiyou Chatbot" width={400} height={400} className="lg:w-20 w-14" />
        </div>
      )}
    </div>
        
    </>
    
  );
}
