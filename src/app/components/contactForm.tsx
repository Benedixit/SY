'use client';

import { useState, FormEvent } from 'react';
import PopUp from './popup';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<{ header: string; message: string; icon: boolean; }>({
    icon: true,
    header: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/mailsend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setPopupData({
        icon: true,
        header: 'Message Sent!',
        message: 'Thank you for reaching out. We will get back to you soon.',
      });
      setIsPopupOpen(true);
    } catch (err) {
      setStatus('error');
      setPopupData({
        icon: false,
        header: 'Error!',
        message: 'Something went wrong. Please try again.',
      });
      setIsPopupOpen(true);
      console.error('Error sending message:', err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-sm">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-12 px-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 px-4 mt-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full h-12 px-4 mt-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
        />
        <textarea
          placeholder="Drop your message here..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full pt-2 px-4 mt-4 border-1 border-[#282829]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
        />
        <input
          type="text"
          name="website"
          className="hidden"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full h-12 mt-4 bg-[#53007B] text-white font-light rounded-4xl hover:bg-transparent hover:text-[#53007B] border-2 border-transparent hover:border-[#53007B] focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <PopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        popupheader={popupData.header}
        modalMessage={popupData.message}
        popupicon={popupData.icon}
        
      />
    </>
  );
}
