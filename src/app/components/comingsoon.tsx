"use client"

import dynamic from 'next/dynamic';
import animationData from './lotties/comingsoon.json';

const DynamicLottie = dynamic(() => import('react-lottie'), { ssr: false });

const ComingSoonLottie: React.FC = () => {
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
      <div className='xl:block hidden'>
        <DynamicLottie options={defaultOptions} height={400} width={600} />
      </div>

      <div className='lg:block xl:hidden hidden w-full'>
        <DynamicLottie options={defaultOptions} height={300} width={450} />
      </div>

      <div className='block lg:hidden w-full'>
        <DynamicLottie options={defaultOptions} height={250} width={350} />
      </div>
    </>
  );
};

export default ComingSoonLottie;
