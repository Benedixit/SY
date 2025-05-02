import Image from "next/image";
import GoogleMap from "../components/GoogleMap";
import Head from 'next/head';


export default async function Contact() {
    return (
        <>
        <Head>
        <title>About Us | MySite</title>
        <meta name="description" content="Learn more about our team and mission at MySite." />
      </Head>
            
            <section className="grid lg:grid-cols-2 lg:px-32 px-10 gap-x-32 space-y-20 items-center justify-center content-center pt-48 xl:pb-32 pb-10 font-[family-name:var(--font-lexend)] text-[18px]/[34px] font-light text-[#282829]">

                <div className="flex flex-col space-y-8 self-center">
                    <h1 className="text-5xl font-[family-name:var(--font-Raleway)] font-medium text-[#53007B] tracking-tight">Contact Us</h1>
                    <p>Have questions, feedback, or just want to say hello? Reach out to the Sabiyou team — we’re here to help and always happy to connect.</p>
                    <div className="space-y-4">
                        <h6 className="text-2xl font-[family-name:var(--font-Raleway)] font-medium tracking-tight text-[#53007B]">Reach Us On</h6>
                        <p className="flex space-x-2"><span className=""><Image src="images/call.svg" alt="Sabiyou Call" width={30} height={30} className="h-8" /></span><span>+44-7689-990-678</span></p>
                        <p className="flex space-x-2"><span className=""><Image src="images/email.svg" alt="Sabiyou Email" width={30} height={30} className="h-8" /></span><span>hello@sabiyou.com</span></p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#f7c6ff]/20 rounded-3xl border-1 border-zinc-400 shadow-lg p-12">

                    <h1 className="text-3xl font- tracking-tighter font-medium mb-10 self-start">Get In Touch</h1>
                    <form action="" method="post" className="text-sm">
                        <input type="text" name="" id="" placeholder="Name" className="w-full h-12 px-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out" />
                        <input type="email" name="" id="" placeholder="Email" className="w-full h-12 px-4 mt-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out" />
                        <input type="text" name="" id="" placeholder="Subject" className="w-full h-12 px-4 mt-4 border-1 border-[#282829]/60 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out" />
                        <textarea name="" id="" placeholder="Drop your message here..."rows={5} className="w-full pt-2 h-full px-4 mt-4 border-1 border-[#282829]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out" />
                        <button type="submit" className="w-full h-12 mt-4 bg-[#53007B] text-white font-light rounded-4xl hover:bg-transparent hover:text-[#53007B] border-2 border-transparent hover:border-[#53007B] focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">Send Message</button>
                    </form>
                </div>
            </section>


            <section className="xl:mx-32 mx-10 mb-16 xl:mb-32 border-1 border-zinc-400 rounded-2xl shadow-3xl overflow-hidden"> 
                <GoogleMap />
            </section>

        </>
    );
}
