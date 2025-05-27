import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../lib/wordpress";

interface Post {
  ID: number;
  title: { rendered: string };
  content: string;
  excerpt: string;
  slug: string;
  featured_image: string;
}



export default async function Blog() {


    const response = await getPosts({ number: 100 })
    const posts = response.posts

    console.log(posts)



    const getTruncated = (html: string, maxChars = 150) => {
        const text = html.replace(/<[^>]+>/g, ''); // remove tags
        if (text.length <= maxChars) return text;
        return text.slice(0, maxChars).trimEnd() + '…';
    };



    return (
        <>
        <section
                className="text-[#282829] text-left md:text-center space-y-16 xl:pt-50 pt-32 lg:px-32 px-10 font-[family-name:var(--font-lexend)]  font-light text-[18px] leading-loose flex flex-col place-items-center">
                <div className="space-y-6">
                    <h1 className="lg:text-7xl/[80px] md:text-6xl/[70px] font-[family-name:var(--font-raleway)] tracking-tighter text-4xl/[50px] font-bold"><span
                        className="text-[#53007B]">SabiYou</span> Stories</h1>
                    <p>SabiYou is more than a platform—it’s a movement dedicated to preserving and <br
                        className="hidden lg:block" />celebrating African
                        culture through storytelling, discussion, and learning.</p>
                </div>

            </section>
            
      <section className="font-[family-name:var(--font-lexend)] xl:px-32 px-10 mb-32 py-10 xl:py-32">
        <div className="flex flex-col lg:flex-row gap-y-6 gap-x-4">
          {posts && posts.map((post) => (
            <div key={post.ID} className="border-1 border-zinc-400 flex flex-col space-y-10 justify-center gap-x-20 bg-[#f7c6ff]/20 shadow-lg rounded-2xl">

            {post.featured_image && <Image src={post.featured_image} alt="Featured Story on SabiYou"
              width={500} height={500} className="rounded-t-2xl w-full h-full object-top object-cover" />}

            <div className="flex flex-col gap-y-2 self-center px-6 pb-16">
              <h2 className="text-xl text-[#282829] tracking-tighter font-bold" dangerouslySetInnerHTML={{__html: post.title }}/>
  
              <p className=" text-[18px]/[30px]">{getTruncated(post.excerpt, 100)}</p>
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

        



    )


}