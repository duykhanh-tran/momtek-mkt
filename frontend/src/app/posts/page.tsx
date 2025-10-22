import Link from 'next/link';
import Image from 'next/image';
import { Post, Category } from '../../types/payload-types'; 
import { LeadMagnetForm } from '@/components/blogs/LeadMagnetForm'; 

export const dynamic = 'force-dynamic';

async function getFeaturedPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts?where[isFeatured][equals]=true&where[status][equals]=published&limit=3&sort=-publishedDate`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

async function getAllPosts(category?: string, page: number = 1): Promise<{ posts: Post[], totalPages: number }> {
  try {
    const categoryQuery = category ? `&where[category.slug][equals]=${category}` : '';
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts?where[status][equals]=published${categoryQuery}&sort=-publishedDate&page=${page}&limit=9`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return { posts: [], totalPages: 0 };
    const data = await res.json();
    return {
      posts: data.docs || [],
      totalPages: data.totalPages || 0
    };
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return { posts: [], totalPages: 0 };
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/categories`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// --- HÀM MỚI ĐÃ ĐƯỢC SỬA LẠI ---
function formatImageUrl(media: any): string {
    const fallbackUrl = 'https://placehold.co/800x600/e0e0e0/757575?text=Ảnh+bài+viết';

    // Nếu không có đối tượng media hoặc không có url, trả về ảnh dự phòng
    if (!media || typeof media !== 'object' || !media.url) {
        return fallbackUrl;
    }
    const { url } = media;
    if (url.startsWith('http')) {
        return url;
    }

    return `${process.env.PAYLOAD_URL}${url}`;
}

// --- COMPONENT CARD BÀI VIẾT (KHÔNG THAY ĐỔI) ---

const PostCard = ({ post }: { post: Post }) => (
  <Link href={`/posts/${post.slug}`} className="card block group overflow-hidden flex flex-col h-full">
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={formatImageUrl(post.postImage)}
        alt={typeof post.postImage === 'object' && post.postImage.alt ? post.postImage.alt : 'Post Image'}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
        {typeof post.category === 'object' && post.category.name &&
            <p className="text-sm font-semibold" style={{color: 'var(--color-primary)'}}>{post.category.name}</p>
        }
      
      <h3 className="text-xl font-bold mt-1 leading-snug group-hover:text-[var(--color-primary)] transition-colors text-black">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 text-xs text-gray-400 flex justify-between items-center">
        <span>Bởi <strong>{typeof post.author === 'object' && post.author.name ? post.author.name : 'Chuyên gia Momtek'}</strong></span>
        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 5 phút đọc</span>
      </div>
    </div>
  </Link>
);

// --- COMPONENT CHÍNH CỦA TRANG (GIAO DIỆN MỚI) ---

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const selectedCategory = typeof searchParams?.category === 'string' ? searchParams.category : undefined;

  const [featuredPosts, { posts, totalPages }, categories] = await Promise.all([
    getFeaturedPosts(),
    getAllPosts(selectedCategory, currentPage),
    getCategories(),
  ]);

  const mainFeaturedPost = featuredPosts[0];
  const secondaryFeaturedPosts = featuredPosts.slice(1, 3);

  const customStyles = { '--color-primary': '#0353CC', '--color-secondary': '#F5A623' } as React.CSSProperties;

  return (
    <main style={customStyles}>
        {/* --- SECTION 1: HERO & BÀI VIẾT NỔI BẬT --- */}
        <section className="py-20 md:py-24 bg-blue-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="block" style={{ color: 'var(--color-primary)' }}>Nâng cao kiến thức</span>
                        <span className="block text-black">Vững bước cùng con</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Nơi hội tụ những cẩm nang chuyên sâu, mẹo thực tế, và các phân tích từ chuyên gia giáo dục của Momtek.
                    </p>
                </div>

                {featuredPosts.length > 0 && (
                    <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
                        {mainFeaturedPost && (
                            <Link 
                            href={`/posts/${mainFeaturedPost.slug}`} 
                            className="card block group col-span-1 flex flex-col">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image 
                                    src={formatImageUrl(mainFeaturedPost.postImage)} 
                                    alt={mainFeaturedPost.title} width={800} 
                                    height={450} 
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"/>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-sm font-bold uppercase" style={{color:'var(--color-secondary)'}}>Bắt đầu tại đây</span>
                                    <h3 className="mt-2 text-2xl font-bold text-black">{mainFeaturedPost.title}</h3>
                                    <p className="mt-2 text-gray-600 flex-grow line-clamp-3">{mainFeaturedPost.excerpt}</p>
                                    <div className="mt-4 text-xs text-gray-500">Bởi <strong>{typeof mainFeaturedPost.author === 'object' && mainFeaturedPost.author.name ? mainFeaturedPost.author.name : 'Chuyên gia Momtek'}</strong></div>
                                </div>
                            </Link>
                        )}
                        <div className="flex flex-col gap-8">
                            {secondaryFeaturedPosts.map(post => (
                                <Link href={`/posts/${post.slug}`} key={post.id} className="card block group flex items-center h-full">
                                    <div className="relative w-32 h-full flex-shrink-0">
                                        <Image 
                                        src={formatImageUrl(post.postImage)} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover rounded-l-lg"/>
                                    </div>
                                    <div className="p-4">
                                        {typeof post.category === 'object' && <span className="text-xs font-semibold text-gray-500">{post.category.name}</span>}
                                        <h3 className="text-lg text-black font-bold mt-1 line-clamp-2">{post.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
        </section>

        {/* --- SECTION 2: BỘ LỌC VÀ DANH SÁCH BÀI VIẾT --- */}
        <section className="py-16 bg-gray-50 ">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8 text-black">Khám phá theo Chủ đề</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                        href="/posts" 
                        className={`px-5 py-3 rounded-full font-semibold transition ${!selectedCategory ? 'bg-blue-600 text-white shadow-lg' : 'bg-white shadow-sm hover:bg-gray-100'}`}>Tất cả</Link>
                        {categories.map(cat => (
                        <Link 
                        key={cat.id} 
                        href={`/posts?category=${cat.slug}`} 
                        className={`px-5 py-3 rounded-full font-semibold transition ${selectedCategory === cat.slug ? 'bg-blue-600 text-white shadow-lg' : 'bg-white shadow-sm hover:bg-gray-100'}`}>
                        {cat.name}
                        </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {posts.map(post => <PostCard key={post.id} post={post} />)}

                    {/* --- LEAD MAGNET FORM --- */}
                    <div className="lg:col-span-3 md:col-span-2 col-span-1 my-8">
                        <LeadMagnetForm />
                    </div>
                </div>

                {/* --- PHÂN TRANG --- */}
                {totalPages > 1 && (
                    <nav className="mt-16 flex justify-center">
                        <ul className="flex items-center -space-x-px h-10 text-base">
                            <li><Link href={`/posts?${selectedCategory ? `category=${selectedCategory}&` : ''}page=${currentPage - 1}`} className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}>Trước</Link></li>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                                <li key={pageNumber}>
                                    <Link 
                                    href={`/posts?${selectedCategory ? `
                                    category=${selectedCategory}&` : ''}page=${pageNumber}`} 
                                    className={`flex items-center justify-center px-4 h-10 leading-tight border ${currentPage === pageNumber ? 'z-10 text-white border-blue-300 bg-blue-600' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100'}`}>{pageNumber}</Link>
                                </li>
                            ))}
                            <li><Link 
                            href={`/posts?${selectedCategory ? `category=${selectedCategory}&` : ''}page=${currentPage + 1}`} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-e-lg hover:bg-gray-100 ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}`}>Sau</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
        </section>
    </main>
  );
}

