"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckLottie from "./checkLottie";

type ModalProps = {
  isOpen: boolean;
  modalMessage?: string;
  popupheader?: string;
  popupicon: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const PopUp = ({ isOpen, onClose, modalMessage, popupheader, popupicon }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col space-y-10 xl:w-1/2 lg:w-2/3 w-4/5 bg-[#f7c6ff] rounded-3xl border border-zinc-400 shadow-lg p-12 xl:py-24 py-10 text-[#282829] text-center font-light text-[18px]/[34px] font-[family-name:var(--font-lexend)]"
      >
        {/* Cancel button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#53007B] text-2xl font-bold focus:outline-none"
        >
          <Image src="/images/close.svg" alt="Close Icon" width={24} height={24} className="w-12" />
        </button>

        {popupicon == true ? <Image src="/images/accept.svg" alt="Subscription Accepted" width={500} 
        height={500} className="w-20 lg:w-34" />: <Image src="/images/error.png" alt="Subscription Error" width={500} 
        height={500} className="w-20 lg:w-34 mx-auto self-center" />}
        <h1 className="xl:text-5xl text-3xl font-[family-name:var(--font-raleway)] font-bold tracking-tighter">
          {popupheader || null}
        </h1>
        <p className="lg:w-2/3 w-full mx-auto font-[family-name:var(--font-lexend)]">
          {modalMessage || null}
        </p>
        <Link href="/hello">
          <button className="px-6 py-2 font-light border-2 border-transparent hover:border-[#53007B] hover:bg-transparent bg-[#53007B] hover:text-[#53007B] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
            Check Our Stories
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopUp;
