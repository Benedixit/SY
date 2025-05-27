"use client"

import dynamic from 'next/dynamic';
import animationData from './lotties/checkmark.json';

const DynamicLottie = dynamic(() => import('react-lottie'), { ssr: false });

const CheckLottie: React.FC = () => {
  const defaultOptions = {
    loop: false,    
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className='flex lg:hidden z-0'>
        <DynamicLottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className='hidden lg:flex w-16'>
        <DynamicLottie options={defaultOptions} height={500} width={500} />
      </div>
    </>
  );
};

export default CheckLottie;
