'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-col space-y-6">
        <h6 className="text-lg font-medium text-[#53007B]">Share This Post: </h6>
    <div className="flex space-x-4 font-[family-name:var(--font-raleway)]">
        
      {/* Twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
    
      >
        <Image src="/images/social-icons/twitter.svg" alt="Twitter" width={24} height={24} className="inline-block mr-2 w-8" />
      </Link>

      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
    
      >
        <Image src="/images/social-icons/facebook.svg" alt="Twitter" width={24} height={24} className="inline-block mr-2 w-8" />
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <Image src="/images/social-icons/linkedin.svg" alt="Twitter" width={24} height={24} className="inline-block mr-2 w-8" />
      </Link>

      {/* Email */}
      <Link
        href={`mailto:?subject=${encodedTitle}&body=${encodedURL}`}
      >
        <Image src="/images/social-icons/mail.svg" alt="Twitter" width={24} height={24} className="inline-block mr-2 w-8" />
      </Link>

        <Link
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/images/social-icons/whatsapp.svg" alt="Twitter" width={24} height={24} className="inline-block mr-2 w-8" />
      </Link>
    </div>
    </div>
  );
}
