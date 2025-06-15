import { getPostBySlug } from '@/app/lib/wordpress';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import ShareButtons from '@/app/components/shareButtons';




interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    try {
        const post = await getPostBySlug(slug);
        return {
            title: post.title,
            description: post.excerpt,
        };
    } catch {
        return {
            title: 'Post not found',
        };
    }
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params
    try {
        const post = await getPostBySlug(slug);

        return (
            <>
            
            <section className={`bg-url(${post.featured_image}) h-100vh py-50 xl:px-32 px-4 sm:px-10 flex flex-col space-y-12 font-[family-name:var(--font-lexend)]`}>
             
                <h2 className="lg:text-6xl/[70px] text-3xl/[40px] font-bold text-left lg:text-center text-[#282829] font-[family-name:var(--font-raleway)] tracking-tighter" dangerouslySetInnerHTML={{ __html: post.title}}></h2>
                {post.featured_image && <Image src={post.featured_image} alt={post.title} width={500} height={500} className='font-[family-name:var(--font-lexend) w-full h-[50vh] object-cover rounded-2xl' />}

               <div className="prose font-[family-name:var(--font-lexend)]" dangerouslySetInnerHTML={{ __html: post.content}}></div>
               
               <ShareButtons
                    url={`https://sabiyou.com/blog/${post.slug}`}
                    title={post.title.replace(/<[^>]+>/g, '')}
                />
            </section>
            </>
        );
    } catch (error) {
        
        console.error("Error fetching post:", error);
        notFound();
    }
}   
