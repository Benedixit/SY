import ComingSoonLottie from "../components/comingsoon";
import Link from "next/link";


export default async function Page() {
    return (
        <>
            <section className="text-[#282829] space-y-16 lg:pt-50 py-32 xl:px-32 px-10 font-[family-name:var(--font-lexend)] font-light text-[18px] leading-loose flex flex-col place-items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 xl:gap-x-16 space-y-8 content-center">
                    <div className="space-y-6 self-center">
                        <h1 className="xl:text-4xl lg:text-3xl text-2xl tracking-tight font-bold font-[family-name:var(--font-raleway)]">
                            An Awesome Feature Coming Soon
                        </h1>
                        <p>
                            We’re putting the final touches on a powerful new feature that will
                            make your experience smoother, smarter, and way more fun. Keep an
                            eye out—launch day is just around the corner. Stay tuned.
                            Greatness is coming soon.
                        </p>
                        <Link href="/"
                            className="p-3 px-6 text-[18px] font-medium border-1 border-transparent hover:border-[#53007B] hover:bg-transparent bg-[#53007B] hover:text-[#53007B] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">
                            Go Back To Home
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <ComingSoonLottie />

                    </div>
                </div>
            </section>
        </>
    );
}
