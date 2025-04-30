import Image from "next/image"
import { PrismicRichText } from '@prismicio/react'
import { createClient } from  './../../prismicio'


interface ProfilePic {
  url: string;
  alt: string;
  [key: string]: any;

}


interface TeamMember {
  name: string;
  role: string;
  profile_pic: ProfilePic;
  [key: string]: any;
}


export default async function Page() {

    const client = createClient()
    const pages: { [key: string]: any } = await client.getByTag("about")
    const data = pages.results[0].data
   

    return (
        <>
            <section
                className="text-[#282829] text-center space-y-16 pt-50 pb-16 lg:px-32 px-10 font-[family-name:var(--font-lexend)]  font-light text-[18px] leading-loose flex flex-col place-items-center">
                <div className="space-y-6">
                    <h1 className="text-6xl font-[family-name:var(--font-Raleway)] font-bold tracking-tighter">About <span
                        className="text-[#53007B]">SabiYou</span></h1>
                    <p>SabiYou is more than a platform—it’s a movement dedicated to preserving and <br
                        className="hidden lg:block" />celebrating African
                        culture through storytelling, discussion, and learning.</p>
                </div>

            </section>


            <section
                className="text-[#282829] space-y-16 py-16 font-[family-name:var(--font-lexend)]  font-light text-[18px] leading-relaxed px-10 lg:px-32">
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="bg-[url('/images/mission_2.jpg')] bg-cover bg-center flex rounded-2xl">
                        <div
                            className="space-y-4 bg-[#FDF4FF] bg-blend-multiply lg:m-6 m-2 p-10 rounded-2xl border-1 border-zinc-400 shadow-lg self-end">

                            <h2 className="text-sm uppercase tracking-wide text-[#53007B]">Our mission</h2>
                            <h1 className="text-2xl font-[Raleway] font-bold tracking-tight">{data?.mission_headline}</h1>
                            <div className="text-[18px] leading-loose"><PrismicRichText field={data?.vision_text} />
                            </div>
                        </div>
                    </div>
                    <div className="text-[#282829] flex flex-col gap-y-6">

                        <Image src={data?.story_img?.url} alt="About Sabiyou" height={500} width={500} className="h-[300px] w-full object-cover object-top rounded-2xl" />


                        <div className="space-y-4 bg-[#f7c6ff]/20 p-10 border-1 border-zinc-400 rounded-2xl self-end shadow-lg">
                            <h2 className="text-sm uppercase tracking-wide">Our story</h2>
                            <h1 className="text-2xl font-[Raleway] font-bold tracking-tight">{data?.vision_headline}</h1>
                            <div className=""><PrismicRichText field={data?.mission_text} />
                            </div>
                        </div>
                    </div>

                </div>


               






            </section>

            <section className="py-16 lg:px-32 px-10 space-y-10 text-[#282829] font-[family-name:var(--font-lexend)]">
            <h1 className="font-[family-name:var(--font-Raleway)] font-bold text-4xl tracking-tight">Meet Our Team</h1>
            <p className="font-[family-name:var(--font-lexend)] font-light text-[18px] leading-loose w-1/2">We're a group of passionate creators, thinkers, and doers—each bringing unique skills and perspectives to the table. Together, we collaborate, innovate, and push boundaries to turn ideas into impact.</p>
            <div className="grid grid-cols-4 gap-x-10">
              {data.team.map((member: TeamMember) => {
                
                return(
                <div key={member.name} className="relative w-full h-[300px] overflow-hidden font-[Lexend]">
                  
                <Image src={member.profile_pic?.url} alt={member.profile_pic?.alt} width={500} height={500}
                     className="absolute inset-0 w-full h-[300px] object-cover z-0 rounded-2xl" />
              
                <div className="absolute inset-0 z-10 flex items-end justify-center pb-4 px-10 font-[Lexend]">
                    <div className="bg-[#FDF4FF] border-1 border-zinc-400 shadow-lg space-y-1 w-full h-[70px] text-center rounded-2xl flex flex-col justify-center">
                  <h6 className="text-[18px] font-medium tracking-tighter">{member.name}</h6>
                  <p className="text-[12px] font-light tracking-tighter">{member.role}</p>
                </div>
                </div>
                </div>)
              })}
     
                  
            </div>
        </section>
        </>
    );
}

