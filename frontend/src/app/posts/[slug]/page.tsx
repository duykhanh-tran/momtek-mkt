import { Post } from '@/types/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    if (!process.env.PAYLOAD_URL) {
        throw new Error("PAYLOAD_URL is not defined in environment variables.");
    }
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&depth=2`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

function formatImageUrl(media: any): string {
    const payloadUrl = process.env.PAYLOAD_URL || 'http://localhost:3000';
    if (media && typeof media === 'object' && media.url) {
        return `${payloadUrl}${media.url}`;
    }
    return 'https://placehold.co/1200x600/e0e0e0/757575?text=Ảnh+bài+viết';
}

const RichTextBlock = ({ block }: { block: any }) => {
    const richText = block.content;
    if (!richText?.root?.children) return null;

    const serializeChildren = (children: any[]) => {
        return children.map((node, i) => {
            if (node.type === 'text') {
                let text = <span key={i}>{node.text}</span>;
                if (node.bold) text = <strong key={i}>{text}</strong>;
                if (node.italic) text = <em key={i}>{text}</em>;
                if (node.underline) text = <u key={i}>{text}</u>;
                return text;
            }
            if (node.type === 'link') {
                return (
                    <Link href={node.fields.url} key={i} target={node.fields.newTab ? '_blank' : '_self'} rel="noopener noreferrer">
                        {serializeChildren(node.children)}
                    </Link>
                );
            }
            return null;
        });
    };

    return (
        <div className="prose prose-lg max-w-full text-black">
            {richText.root.children.map((child: any, i: number) => {
                const content = serializeChildren(child.children || []);
                if (child.type === 'heading') {
                    switch (child.tag) {
                        case 'h1': return <h1 key={i}>{content}</h1>;
                        case 'h2': return <h2 key={i}>{content}</h2>;
                        case 'h3': return <h3 key={i}>{content}</h3>;
                        case 'h4': return <h4 key={i}>{content}</h4>;
                        case 'h5': return <h5 key={i}>{content}</h5>;
                        case 'h6': return <h6 key={i}>{content}</h6>;
                        default: return <p key={i}>{content}</p>;
                    }
                }
                if (child.type === 'paragraph') {
                    return <p key={i}>{content}</p>;
                }
                if (child.type === 'list') {
                    const listItems = child.children.map((listItem: any, index: number) => (
                        <li key={index}>{serializeChildren(listItem.children)}</li>
                    ));
                    if (child.tag === 'ul') return <ul key={i}>{listItems}</ul>;
                    if (child.tag === 'ol') return <ol key={i}>{listItems}</ol>;
                }
                return null;
            })}
        </div>
    );
};

const ExpertNoteBlock = ({ block }: { block: any }) => (
    <div className="my-8 p-6 bg-blue-100 border-l-4 border-blue-500 rounded-r-lg">
        <p className="font-semibold text-blue-800">{block.title || 'Ghi chú từ Chuyên gia'}</p>
        <p className="mt-2 text-blue-700">{block.note}</p>
    </div>
);

const CtaBlock = ({ block }: { block: any }) => (
    <div className="my-10 p-8 text-center bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800">{block.title}</h3>
        <p className="mt-2 text-gray-600">{block.description}</p>
        {block.buttonLink && block.buttonText &&
            <Link href={block.buttonLink} className="mt-6 inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors">
                {block.buttonText}
            </Link>
        }
    </div>
);

const ExpertProfileBlock = ({ block }: { block: any }) => (
    <div className="my-12 p-6 flex items-center gap-6 bg-gray-50 rounded-lg">
        {typeof block.profileImage === 'object' && block.profileImage?.url &&
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image src={formatImageUrl(block.profileImage)} alt={block.title || 'Ảnh chuyên gia'} fill className="object-cover" />
            </div>
        }
        <div>
            <p className="font-bold text-gray-900">{block.title}</p>
            <p className="mt-1 text-gray-600">{block.bio}</p>
        </div>
    </div>
);
export default async function PostPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <header className="mb-10">
                        {typeof post.category === 'object' && post.category?.slug &&
                            <Link 
                            href={`/posts?category=${post.category.slug}`} 
                            className="text-blue-600 font-semibold uppercase tracking-wide">{post.category.name}</Link>
                        }
                        <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
                        <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                             {typeof post.author === 'object' && post.author?.name &&
                                 <p>Bởi <strong>{post.author.name}</strong></p>
                             }
                            <p>•</p>
                            <p>
                                {new Date(post.publishedDate || post.createdAt).toLocaleDateString('vi-VN', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </p>
                        </div>
                    </header>

                    {typeof post.postImage === 'object' && post.postImage?.url &&
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12">
                             <Image 
                             src={formatImageUrl(post.postImage)} 
                             alt={post.postImage.alt || post.title} 
                             fill 
                             className="object-cover" priority />
                        </div>
                    }

                    <div className="space-y-6">
                        {post.contentLayout?.map((block, i) => {
                            const key = (block as any).id || i;
                            
                            switch ((block as any).blockType) {
                                case 'richText':
                                    return <RichTextBlock key={key} block={block} />;
                                case 'expertNote':
                                    return <ExpertNoteBlock key={key} block={block} />;
                                case 'cta':
                                    return <CtaBlock key={key} block={block} />;
                                case 'expertProfile':
                                    return <ExpertProfileBlock key={key} block={block} />;
                                default:
                                    const blockType = (block as any)?.blockType || 'không xác định';
                                    return <p key={key} className="p-4 bg-red-100 text-red-700 rounded-md">Block không được hỗ trợ: <strong>{blockType}</strong></p>;
                            }
                        })}
                    </div>
                </div>
            </div>
        </article>
    );
}