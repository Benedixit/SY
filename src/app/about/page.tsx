import Image from "next/image"
import { createClient } from '../../prismicio'
import { PrismicDocument } from '@prismicio/types'

export const metadata = {
  title: 'About SabiYou - Our Mission, Vision & Team',
  description:
    'Learn about the mission, vision, and people behind SabiYou — a platform preserving African culture through storytelling, language, and community.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'SabiYou',
    title: 'About SabiYou - Our Mission, Vision & Team',
    description:
      'Meet the minds behind SabiYou and discover how we’re preserving African culture through storytelling and immersive learning.',
    url: 'https://sabiyou.com/about',
    images: [
      {
        url: 'https://sabiyou.com/images/about-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'SabiYou Team - African Storytelling Platform',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SabiYou - Our Mission, Vision & Team',
    description:
      'Learn about the people and purpose driving SabiYou’s mission to preserve and celebrate African heritage.',
    images: ['https://sabiyou.com/images/about-preview.jpg'],
  },
};



interface ProfilePic {
    url: string;
    alt: string;

}


interface TeamMember {
    name: string;
    role: string;
    profile_pic: ProfilePic;
}





export default async function Page() {

    const client = createClient()
    const pages = await client.getByTag("about")
    const data = (pages?.results[0]?.data as unknown) as {
        mission_headline: string;
        mission_text: PrismicDocument['data']['mission_text'];
        vision_headline: string;
        vision_text: PrismicDocument['data']['vision_text'];
        story_img: ProfilePic;
        team: TeamMember[];
    }

    if (!data) {
        return <div className="text-center text-lg font-light">Loading...</div>
    }

    

    

    return (
        <>
            <section
                className="text-[#282829] text-left md:text-center space-y-16 xl:pt-50 pt-32 lg:px-32 px-4 sm:px-10
                font-[family-name:var(--font-lexend)]  font-light text-[18px] leading-loose flex flex-col place-items-center">
                <div className="space-y-6">
                    <h1 className="lg:text-7xl/[80px] md:text-6xl/[70px]  font-[family-name:var(--font-raleway)] tracking-tighter text-4xl/[50px] font-bold">About <span
                        className="text-[#53007B]">SabiYou</span></h1>
                    <p>SabiYou is more than a platform—it’s a movement dedicated to preserving and <br
                        className="hidden lg:block" />celebrating
                        culture through storytelling, discussion, and learning.</p>
                </div>

            </section>


            <section
                className="text-[#282829] space-y-16 py-16 font-[family-name:var(--font-lexend)] 
                font-light text-[18px] leading-relaxed px-4 sm:px-10 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[url('/images/mission_2.jpg')] bg-cover bg-center flex rounded-2xl">
                        <div className="space-y-4 bg-[#FDF4FF] bg-blend-multiply lg:m-6 m-2 p-10 rounded-2xl border-1 border-zinc-400 shadow-lg self-end">

                            <h2 className="text-sm uppercase tracking-wide text-[#53007B]">Our mission</h2>
                            <h1 className="text-2xl font-[family-name:var(--font-raleway)] font-bold tracking-tight">{data?.mission_headline}</h1>
                            <p className="text-[18px] leading-loose">{data?.mission_text} </p>
                            </div>
                    </div>
                    
                    <div className="text-[#282829] flex flex-col gap-y-6">

                        <Image src={data?.story_img?.url} alt="About Sabiyou" height={500} width={500} className="h-[300px] w-full object-cover object-top rounded-2xl" />


                        <div className="space-y-4 bg-[#f7c6ff]/20 p-10 border-1 border-zinc-400 rounded-2xl self-end shadow-lg">
                            <h2 className="text-sm uppercase tracking-wide">Our story</h2>
                            <h1 className="text-2xl font-[family-name:var(--font-raleway)] font-bold tracking-tight">{data?.vision_headline}</h1>
                            <p className="leading-loose">{data?.vision_text}</p>
                        </div>
                       
                    </div>
                </div>
               









            </section>

            <section className="py-16 xl:px-32 px-4 sm:px-10 space-y-10 text-[#282829] font-[family-name:var(--font-lexend)]">
                <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl tracking-tight">Meet Our Team</h1>
                <p className="font-[family-name:var(--font-lexend)] font-light text-[18px] leading-loose w-full lg:w-1/2 md:w-2/3">We are a group of passionate creators, thinkers, and doers—each bringing unique skills and perspectives to the table. Together, we collaborate, innovate, and push boundaries to turn ideas into impact.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                    {data.team?.map((member: TeamMember) => {

                        return (
                            <div key={member.name} className="relative w-full h-[300px] overflow-hidden border-1 border-zinc-400 rounded-2xl shadow-lg group">

                                <Image src={member.profile_pic?.url} alt={member.profile_pic?.alt} width={500} height={500}
                                    className="absolute inset-0 w-full h-[300px] object-cover z-0 rounded-2xl" />

                                <div className="absolute inset-0 z-10 flex items-end justify-center pb-4 px-10">
                                    <div className="bg-[#FDF4FF] border-1 border-zinc-400 shadow-lg space-y-1 w-full p-2 text-center rounded-2xl flex flex-col justify-center">
                                        <h6 className="text-lg font-bold tracking-tighter">{member.name}</h6>
                                        <p className="text-sm font-light tracking-tight opacity-70">{member.role}</p>
                                    </div>
                                </div>
                            </div>)
                    })}


                </div>
            </section>

            <section className="font-[family-name:var(--font-lexend)] font-light xl:mx-32 mx-10 lg:pb-32 py-10">

                <div className="grid lg:grid-cols-2 justify-center shadow-2xl rounded-2xl border-1 border-zinc-400">

                    <div className="bg-[url('/images/radio_2.svg')] bg-cover bg-center lg:rounded-bl-2xl lg:rounded-tl-2xl">

                    </div>

                    <div className=" text-[18px]/[34px] text-left tracking-tight rounded-5xl self-center lg:p-20 p-10">
                        <div className="flex flex-col gap-y-4 pb-6">

                            <h1 className="lg:text-4xl leading-normal text-3xl font-[family-name:var(--font-raleway)] tracking-tighter font-bold">
                                Tune To SabiYou Podcast</h1>
                            <p className="leading-loose text-[18px]">Immerse yourself in the heart of our culture with SabiYou Podcast. Tune in and discover captivating stories, music, and conversations that celebrate our rich heritage.</p>
                            <div className="pt-4">
                                <a href="#" className="px-6 py-3 font-medium border-2 border-transparent hover:border-[#53007B] bg-[#53007B] hover:bg-transparent text-white hover:text-[#53007B] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
                                    Start Listening
                                </a>
                            </div>


                        </div>
                    </div>
                </div>



            </section>
        </>
    );
}

