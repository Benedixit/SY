import ComingSoonLottie from "../components/comingsoon";
import Link from "next/link";

export const metadata = {
  title: 'Contact Sabiyou | Talk to Our Team Today',
  description: 'Need help or have questions? Contact the Sabiyou team by phone or email. We’re here to support you.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'Sabiyou',
    title: 'Feature Is Coming SOon',
    description: 'Need help or have questions? Contact the Sabiyou team by phone or email. We’re here to support you.',
    url: 'https://sabiyou.com/coming-soon',
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

};


export default async function Page() {
  return (
    <section className="flex flex-col items-center py-32 lg:pt-50 px-10 xl:px-32 text-[#282829] text-center lg:text-left font-light text-[18px] leading-loose font-[family-name:var(--font-lexend)] space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 xl:gap-x-16 items-center space-y-8 lg:space-y-0">
        <div className="space-y-6 self-center">
          <h1 className="text-3xl/[50px] xl:text-4xl/[60px] font-bold tracking-tight font-[family-name:var(--font-raleway)]">
            An Awesome Feature Is Coming Soon!!
          </h1>
          <p>
            We’re putting the final touches on a powerful new feature that will
            make your experience smoother, smarter, and way more fun. Keep an
            eye out—launch day is just around the corner. Stay tuned.
            Greatness is coming soon.
          </p>
          <Link
            href="/"
            className="p-3 px-6 text-[18px] font-medium bg-[#53007B] text-white rounded-3xl border border-transparent hover:bg-transparent hover:text-[#53007B] hover:border-[#53007B] focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            Go Back To Home
          </Link>
        </div>
        <div className="flex justify-center items-center w-full">
          <ComingSoonLottie />
        </div>
      </div>
    </section>
  );
}
