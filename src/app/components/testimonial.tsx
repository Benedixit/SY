"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

interface GroupImage {
  url: string;
  alt: string;
}

interface Testimonial {
  avatar: GroupImage;
  country_flag: GroupImage;
  customer_review: string;
  customer_name: string;
  customer_location: string;
}


export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    

      <div className="pt-10">
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-zinc-400 flex flex-col gap-y-4 bg-[#f7c6ff]/20 rounded-2xl shadow-lg p-7 h-full">
                
                <p>{item.customer_review}</p>
                <div className="flex items-center gap-4">
                  <Image src={item.avatar.url} alt={item.avatar.alt} width={50} height={50} className="rounded-full" />
                  <div>
                    <p className="font-bold tracking-tight">{item.customer_name}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Image src={item.country_flag.url} alt="Country" width={20} height={20} />
                      <span>{item.customer_location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   
  );
}
