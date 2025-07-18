export const revalidate = 0;

import Image from "next/image";
import LottieAnimation from "./components/radioLottie";
import { createClient } from  './../prismicio'
import NewsletterForm from "./components/newsletterForm";
import Link from "next/link";
import { getPosts } from "./lib/wordpress";
import TestimonialCarousel from "./components/testimonial";





export const metadata = {
  title: 'SabiYou - Discover Your African Roots',
  description:
    'Reconnect with your African heritage through language, storytelling, and immersive cultural experiences. Join SabiYou and begin your journey of discovery.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'SabiYou',
    title: 'SabiYou - Discover Your African Roots',
    description:
      'Reconnect with your African heritage through language, storytelling, and immersive cultural experiences. Join SabiYou and begin your journey of discovery.',
    url: 'https://sabiyou.com',
    images: [
      {
        url: 'https://sabiyou.com/images/home-preview.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'SabiYou - African Storytelling and Culture',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SabiYou - Discover Your African Roots',
    description:
      'Reconnect with your African heritage through language, storytelling, and immersive cultural experiences.',
    images: ['https://sabiyou.com/images/home-preview.jpg'],
  },
};


interface HomeLink {
  url: string;
  text: string;
}




interface Service {
  link: HomeLink;
  label: string;
  text: string;
}

interface GroupImage {
  alt: string;
  url: string;
}


interface Testimonial {
  avatar: GroupImage;
  country_flag: GroupImage;
  customer_review: string;
  customer_name: string;
  customer_location: string;
}




export default async function Home() {

  const response = await getPosts({ number: 3 })
  const posts = response.posts

  if (!posts || posts.length === 0) {
    console.error('No posts found');

  }



  const client = createClient()
  const pages = await client.getByTag("home")
  const data = pages?.results[0]?.data as {
    featured_services: Service[],
    testimonial: Testimonial[]
  }

  console.log(data.featured_services)


  const getTruncated = (html: string, maxChars = 150) => {
    const text = html.replace(/<[^>]+>/g, ''); // remove tags
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars).trimEnd() + '…';
  };


  
  return (
    <>
      <section className="text-[#282829] font-[family-name:var(--font-lexend)] font-light lg:bg-transparent bg-no-repeat space-y-14 bg-bottom bg-cover xl:px-32 px-4 sm:px-10 lg:py-48 pt-32">
        <div className="flex flex-col justify-center gap-6">
          <h1
            className="lg:text-7xl/[80px] md:text-6xl/[70px] text-[#282829] text-left md:text-center font-[family-name:var(--font-raleway)] tracking-tighter text-4xl/[50px] font-bold">
            Discover, Learn & Reconnect <br className="lg:block hidden" /> with Your <span className="text-[#53007B]">
              Roots</span></h1>
          <p className="text-left md:text-center text-[18px]/[30px]">Learn, Listen & Engage with Culture through
            storytelling, <br className="md:block hidden" /> live discussions, and cultural experiences</p>
          <div className=" flex md:justify-center justify-start gap-x-1 sm:gap-x-4">
            <Link href="/blog"
              className="p-3 sm:px-6 text-[14px] sm:text-[18px] font-medium border-1 border-transparent hover:border-[#53007B] hover:bg-transparent bg-[#53007B] hover:text-[#53007B] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
              Read Stories 
            </Link>
            <Link href="/podcast"
              className="p-3 sm:px-6 text-[14px] sm:text-[18px] font-medium border-1 border-[#53007B] hover:bg-[#53007B] hover:text-white text-[#53007B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
              Sabiyou Podcast
            </Link>

          </div>

        </div>

        <div className="md:flex justify-center mt-12 gap-0 m-0 hidden">
          <div className="rounded-full w-48 h-48 m-0 flex justify-center">
            <Image src="/images/viking_culture.jpg" alt="Sabi You - App For Learning Languages" width={500} height={500} className="h-40 w-40 rounded-full object-cover object-center" />
          </div>
          <div className="rounded-full w-68 h-68 m-0 flex justify-center">
            <Image src="/images/hero_1.jpeg" alt="Sabi You - App For Learning Languages" width={500} height={500} className="h-64 w-64 rounded-full object-cover object-top" />
          </div>
          <div className="rounded-full w-48 h-48 m-0 flex justify-center">
            <Image src="/images/chinese.jpg" alt="Sabi You - App For Learning Languages" width={500} height={500} className="h-40 w-40 rounded-full object-cover object-center" />
          </div>
        </div>

        <div className="rounded-xl w-full m-0 flex justify-center md:hidden">
            <Image src="/images/hero_1.jpeg" alt="Sabi You - App For Learning Languages" width={500} height={500} className="rounded-xl object-cover object-center" />
        </div>
      </section>



      <section className="font-[family-name:var(--font-lexend)] lg:mt-[-10%] mt-16 lg:py-32 p-4 sm:px-10 xl:px-32">
        <div className="pb-16 space-y-4">
        <h1 className="lg:text-5xl/[70px] text-3xl text-[#282829] text-left font-[Raleway] tracking-tighter font-bold">
          What Make SabiYou Unique?</h1>
          <p className="text-[18px]/[34px] w-full lg:w-1/2">Sabiyou stands out as a platform designed not just for learning, but for connection. With Sabiyou, learning a new culture feels natural, purposeful, and personal.</p>

        </div>
        


        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[100%] gap-4 justify-stretch content-center justify-items-center mb-16">
          {data?.featured_services?.map((service: Service, index: number) => {
            return (

              <div key={index} className="border-1 border-zinc-400 sm:px-10 py-10 px-4 bg-[#f7c6ff]/20 shadow-lg rounded-xl flex flex-col space-y-4">
                <Image src="https://pub-335ea302502b4be883413e4c10afa703.r2.dev/images/37cd95c0ba5cd5d93f88b0ed33c42203.png" width={500} height={500} alt="Sabi You Culture Learning Feature Image" className="w-22" />
                <h2 className="text-xl/[40px] tracking-tighter font-bold">{service?.label}</h2>
                <p className=" text-[18px]/[30px]"> {service?.text}</p>
                <Link href={service.link.url} className="text-[#53007B]">Learn More</Link>
              </div>

            )
          })}

          



  
        </div>
      </section>




      <section className="sm:py-10 p-4 sm:px-10 text-[#282829] xl:px-32 font-[family-name:var(--font-lexend)]">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center xl:gap-x-32 gap-x-10 gap-y-10">
          <div className="flex flex-col gap-y-6 self-center">
            <h1 className="lg:text-4xl leading-normal text-3xl font-[Raleway] tracking-tighter font-bold">
           Tune To SabiYou Podcast & Get The Latest Culture Gist</h1>
            <p className="leading-loose text-[18px]">Immerse yourself in the heart of our culture with SabiYou Podcast. Tune in and discover captivating stories, music, and conversations that celebrate our rich heritage. Stay connected, stay inspired, and experience the voices that keep our traditions and stories alive.</p>
              <div className="pt-4">
              <Link href="/podcast" className="px-6 py-3 font-medium border-2 border-transparent hover:border-[#53007B] bg-[#53007B] hover:bg-transparent
                    text-white hover:text-[#53007B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
              Start Listening
            </Link>
            </div>
          </div>
          
            <LottieAnimation />
          
          
        </div>

    
      </section>


      <section className="font-[family-name:var(--font-lexend)] py-10 lg:py-32 xl:px-32 p-4 sm:px-10 sm:py-10 text-[18px]/[30px]">
     
        <h1 className="lg:text-5xl text-3xl text-[#282829] text-left font-[Raleway] tracking-tighter font-bold">
          Testimonials From Customers</h1>


        <TestimonialCarousel testimonials={data?.testimonial} />
     






      </section>




      <section className="font-[family-name:var(--font-lexend)] xl:mx-32 mx-4 sm:mx-10 sm:py-10 lg:pb-32 py-4">

       <NewsletterForm /> 



      </section>


      <section className="font-[family-name:var(--font-lexend)] xl:px-32 px-4 sm:px-10 mb-32 py-10">
        <h1
          className="lg:text-5xl text-3xl text-[#282829] text-left font-[Raleway] tracking-tighter font-bold pb-16">
          Featured Stories
        </h1>
        <div className="flex flex-col lg:flex-row gap-y-6 gap-x-4">
          {posts && posts.map((post) => (
            <div key={post.ID} className="border-1 border-zinc-400 flex flex-col space-y-10 justify-center gap-x-20 bg-[#f7c6ff]/20 shadow-lg rounded-2xl">

            {post.featured_image && <Image src={post.featured_image} alt="Featured Story on SabiYou"
              width={500} height={500} className="rounded-t-2xl w-full h-full object-top object-cover" />}

            <div className="flex flex-col gap-y-2 self-center px-6 pb-16">
              <h2 className="text-xl text-[#282829] tracking-tighter font-bold" dangerouslySetInnerHTML={{__html: post.title }}/>
  
              <p className=" text-[18px]/[30px]">{getTruncated(post.excerpt, 150)}</p>
              <div className="mt-6">
                <Link href={`/blog/${post.slug}`}
                  className="px-6 py-3  font-medium border-2 border-transparent hover:border-[#53007B] bg-[#53007B] hover:bg-transparent
                             text-white hover:text-[#53007B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
                  Read More
                </Link>

              </div>

            </div>
          </div>

          ))}
          



        </div>
      </section>

    </>
  );
}
