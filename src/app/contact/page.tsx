import Image from "next/image";
import GoogleMap from "../components/googleMap";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: 'Contact Sabiyou | Talk to Our Team Today',
  description: 'Need help or have questions? Contact the Sabiyou team by phone or email. We’re here to support you.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'Sabiyou',
    title: 'Contact Sabiyou | Talk to Our Team Today',
    description: 'Need help or have questions? Contact the Sabiyou team by phone or email. We’re here to support you.',
    url: 'https://sabiyou.com/contact',
    images: [
      {
        url: 'https://sabiyou.com/images/contact-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sabiyou – Get in Touch',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sabiyou | Talk to Our Team Today',
    description: 'Need help or have questions? Contact the Sabiyou team by phone or email. We’re here to support you.',
    images: ['https://sabiyou.com/images/contact-preview.jpg'],
  },
};
  


export default async function Contact() {
    return (
        <>
       
            
            <section className="grid lg:grid-cols-2 xl:px-32 px-10 xl:gap-x-24 gap-10 space-y-20 xl:pt-50 pt-32 xl:pb-32 pb-10 font-[family-name:var(--font-lexend)] text-[18px]/[34px] font-light text-[#282829]">
            <div className="h-full w-full xl:bg-[url('/images/54675.jpg')] bg-transparent xl:py-10 flex rounded-2xl">
                <div className="flex flex-col space-y-8 bg-[#FDF4FF] xl:mx-10 p-10 border-1 border-zinc-400 rounded-2xl shadow-lg self-center place-content-center h-full">
                    <h1 className="text-5xl font-[family-name:var(--font-Raleway)] font-medium text-[#53007B] tracking-tight">Contact Us</h1>
                    <p>Have questions, feedback, or just want to say hello? Reach out to the Sabiyou team — we’re here to help and always happy to connect.</p>
                    <div className="space-y-4">
                        <h6 className="text-2xl font-[family-name:var(--font-Raleway)] font-medium tracking-tight text-[#53007B]">Reach Us On</h6>
                        <p className="flex space-x-2"><span className=""><Image src="images/call.svg" alt="Sabiyou Call" width={30} height={30} className="h-8" /></span><span>+44-7689-990-678</span></p>
                        <p className="flex space-x-2"><span className=""><Image src="images/email.svg" alt="Sabiyou Email" width={30} height={30} className="h-8" /></span><span>hello@sabiyou.com</span></p>
                    </div>
                </div>
            </div>

                <div className="flex flex-col bg-[#f7c6ff]/20 h-full rounded-3xl border-1 border-zinc-400 shadow-lg p-12 place-content-center">

                    <h1 className="text-3xl font- tracking-tighter font-medium mb-10 self-start">Get In Touch</h1>
                    <ContactForm />
                    
                </div>
            </section>


            <section className="xl:mx-32 mx-10 mb-16 xl:mb-32 border-1 border-zinc-400 rounded-2xl shadow-3xl overflow-hidden"> 
                <GoogleMap />
            </section>

        </>
    );
}
