import Image from "next/image";

export default function Footer() {
  return (
    <footer
    className="border-t-1 border-zinc-400 font-[family-name:var(--font-lexend)] font-light lg:p-32 py-24 px-10 tracking-tight bg-[#f7c6ff]/30 flex flex-col lg:flex-row text-[#282829] gap-x-48 gap-y-10 justify-center">
    <div className="space-y-6">
        <Image src="https://pub-335ea302502b4be883413e4c10afa703.r2.dev/images/sabiyou_logo.png" alt="Sabiyou Logo" width={150} height={150} className="lg:w-20 w-14" />
        <p className="text-[18px] leading-loose">Embracing Culture <br /> Reconnecting Roots.</p>
    </div>

    <div className="space-y-4 lg:space-x-10">
        <h6 className="text-[25px] font-bold tracking-tight font-[family-name:var(--font-raleway)]">Quick links</h6>
        <div className="flex flex-col space-y-2 text-[18px]">
            <a href="" className="hover:text-[#53007B]">About</a>
            <a href="" className="hover:text-[#53007B]">Stories</a>
            <a href="" className="hover:text-[#53007B]">Contact Us</a>
            <a href="" className="hover:text-[#53007B]">Stores</a>
            <a href="" className="hover:text-[#53007B]">Community</a>
        </div>
    </div>


    <div className="space-y-4 lg:space-x-10">
        <h6 className="text-[25px] font-bold tracking-tigh font-[family-name:var(--font-raleway)]">Other links</h6>
        <div className="flex flex-col space-y-2 text-[18px]">
            <a href="" className="hover:text-[#53007B]">Privacy</a>
            <a href="" className="hover:text-[#53007B]">Terms and Conditions</a>
            <a href="" className="hover:text-[#53007B]">Disclaimer</a>
        </div>
    </div>

    <div className="space-y-4 lg:space-x-10">
        <h6 className="text-[25px] font-bold tracking-tigh font-[family-name:var(--font-raleway)]">Follow Us</h6>
        <div className="flex flex-col space-y-2 text-[18px]">
            <a href="" className="hover:text-[#53007B]">Instagram</a>
            <a href="" className="hover:text-[#53007B]">TikTok</a>
            <a href="" className="hover:text-[#53007B]">LinkedIn</a>
        </div>
    </div>
</footer>
    
  );
}
