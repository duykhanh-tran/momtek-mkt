import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.5] md:leading-[1.35]">
            <span style={{ color: 'var(--color-primary)' }}>
              Mẹ tự tin dạy con tiếng Anh tại nhà,
            </span>
            <br className="hidden md:block" />
            <span className="text-[#000000]">
              ngay cả khi bắt đầu từ con số 0.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trải nghiệm phương pháp học qua chơi độc quyền và công nghệ AI chấm điểm phát âm từ Momtek.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/experience/luyen-am-ai" className="btn-primary w-full sm:w-auto text-lg font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">mic</span>
              Thử ngay Trợ lý Luyện âm AI
            </Link>
            <Link href="/offers/san-pham-chinh-momtek" className="btn-secondary w-full sm:w-auto text-lg font-bold py-4 px-8 rounded-full">
              Khám phá Lộ trình học
            </Link>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="w-[720px] h-[405px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                alt="Mẹ và bé vui học cùng Momtek"
                width={720}
                height={405}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2. Vấn đề & Giải pháp */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Muốn đồng hành cùng con, nhưng mẹ lo...?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 ignore-dark-mode">
              <span className="material-symbols-outlined text-4xl " style={{ color: 'var(--color-primary)' }} >explore_off</span>
              <h3 className="text-xl font-bold mt-4 text-black">Loay hoay không biết bắt đầu từ đâu?</h3>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl " style={{ color: 'var(--color-primary)' }}>record_voice_over</span>
              <h3 className="text-xl font-bold mt-4 text-black">Sợ mình phát âm sai sẽ ảnh hưởng đến con?</h3>
            </div>
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-4xl " style={{ color: 'var(--color-primary)' }}>lightbulb_circle</span>
              <h3 className="text-xl font-bold mt- text-black ">Thiếu ý tưởng và hoạt động để chơi mỗi ngày?</h3>
            </div>
          </div>
          <p className="mt-8 text-xl font-semibold text-black">Momtek ở đây để đồng hành cùng bạn với một hệ sinh thái học tập toàn diện.</p>
        </div> 
      </section>
      {/* 2a. Bằng chứng tín nhiệm */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-base font-semibold text-gray-700 tracking-wider uppercase">
            Được tin tưởng và nhắc đến bởi
          </h3>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-6">
            <Link href="#" target="_blank" aria-label="Đọc bài viết trên VnExpress" className="flex-1 max-w-[120px] flex justify-center">
              <Image
                className="h-[90px] w-auto object-contain filter hover:grayscale transition duration-300"
                src="https://dl.dropboxusercontent.com/s/fi/idpxl6ehe9wsojo70icck/Vnexpress.png?rlkey=y1xz8q3iiowhtkatdp7dzsd7b&st=dit93w05&dl=0"
                alt="VnExpress Logo"
                width={120}
                height={90}
              />
            </Link>
            <Link href="#" target="_blank" aria-label="Xem chương trình trên VTV" className="flex-1 max-w-[120px] flex justify-center">
              <Image
                className="h-[90px] w-auto object-contain filter hover:grayscale transition duration-300"
                src="https://dl.dropboxusercontent.com/s/fi/o9uwkskzkfhdp3gyv6bk9/vtv.png?rlkey=koqngnthu0ejtfh5h1xib45n7&st=qzaxr5pe&dl=0"
                alt="VTV Logo"
                width={120}
                height={90}
              />
            </Link>
            <Link href="#" target="_blank" aria-label="Đối tác ABC Education" className="flex-1 max-w-[120px] flex justify-center">
              <Image
                className="h-[90px] w-auto object-contain filter hover:grayscale transition duration-300"
                src="https://dl.dropboxusercontent.com/s/fi/idpxl6ehe9wsojo70icck/Vnexpress.png?rlkey=y1xz8q3iiowhtkatdp7dzsd7b&st=dit93w05&dl=0"
                alt="Partner Logo"
                width={120}
                height={90}
              />
            </Link>
            <Link href="#" target="_blank" aria-label="Đọc bài viết trên Dân trí" className="flex-1 max-w-[120px] flex justify-center">
              <Image
                className="h-[90px] w-auto object-contain filter hover:grayscale transition duration-300"
                src="https://dl.dropboxusercontent.com/s/fi/phb8tssud2siws37rnn8r/Dantri.png?rlkey=n7cfhik8o7bqkf0xxtdetkrul&st=kogox998&dl=0"
                alt="Dân trí Logo"
                width={120}
                height={90}
              />
            </Link>
            <Link href="#" target="_blank" aria-label="Chuyên gia Tâm lý XYZ" className="flex-1 max-w-[120px] flex justify-center">
              <Image
                className="h-[90px] w-auto object-contain filter hover:grayscale transition duration-300"
                src="https://dl.dropboxusercontent.com/s/fi/zl874axqfiost2hizmchv/National.png?rlkey=puhtpoee53tw4hu8smdo44579&st=gm49gzb1&dl=0"
                alt="Expert Logo"
                width={120}
                height={90}
              />
            </Link>
          </div>
        </div>
      </section>
      {/* 3. Trung tâm Trải nghiệm */}
      <section id="experience" className="py-20 bg-gray-50" >
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Không chỉ là lý thuyết, hãy 'thử' ngay!</h2>
          <p className="section-subtitle">Tương tác trực tiếp với các công cụ độc quyền của Momtek để cảm nhận sự khác biệt.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>mic</span>
              <h3 className="text-2xl font-bold mt-6 text-black">Luyện âm cùng AI</h3>
              <p className="mt-2 text-gray-600">Nhận phản hồi và chấm điểm phát âm tức thì từ công nghệ AI hiện đại.</p>
              <Link href="/experience/luyen-am-ai" className="mt-6 font-semibold inline-flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                Chấm điểm miễn phí <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="card p-8 text-center">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>palette</span>
              <h3 className="text-2xl font-bold mt-6 text-black">Studio Sáng tạo</h3>
              <p className="mt-2 text-gray-600">Cùng bé tô màu, lồng tiếng cho video để thỏa sức sáng tạo và ghi nhớ từ vựng.</p>
              <Link href="/experience/studio-sang-tao" className="mt-6 font-semibold inline-flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                Sáng tạo cùng bé <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="card p-8 text-center">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>sports_esports</span>
              <h3 className="text-2xl font-bold mt-6 text-black">Quiz & Game</h3>
              <p className="mt-2 text-gray-600">Khám phá kho game giáo dục và các bài quiz vui nhộn giúp củng cố kiến thức.</p>
              <Link href="/experience/quiz-va-game" className="mt-6 font-semibold inline-flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                Chơi và khám phá <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/experience" className="btn-secondary font-bold py-3 px-6 rounded-full">Khám phá toàn bộ Trung tâm Trải nghiệm</Link>
          </div>
        </div>
      </section>
      {/* 5. Phương pháp Momtek */}
      <section id="method" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Học mà chơi, chơi mà học</h2>
          <p className="section-subtitle">Lộ trình 4 bước đơn giản, trực quan trong mỗi bài học giúp con tiếp thu tự nhiên và hiệu quả.</p>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 ignore-dark-mode">
  {/* Block 1 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
      <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--color-primary)' }}>visibility</span>
    </div>
    <h3 className="text-xl font-bold text-black">Học Từ & Câu</h3>
    <p className="mt-1 text-black">Với Video và AI</p>
  </div>

  {/* Block 2 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
      <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--color-primary)' }}>groups</span>
    </div>
    <h3 className="text-xl font-bold text-black">Thực hành giao tiếp</h3>
    <p className="mt-1 text-black">Qua bộ thẻ Flashcards</p>
  </div>

  {/* Block 3 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
      <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--color-primary)' }}>construction</span>
    </div>
    <h3 className="text-xl font-bold text-black">Ứng dụng sáng tạo</h3>
    <p className="mt-1 text-black">Với các công cụ thủ công</p>
  </div>

  {/* Block 4 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
      <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--color-primary)' }}>extension</span>
    </div>
    <h3 className="text-xl font-bold text-black">Củng cố kiến thức</h3>
    <p className="mt-1 text-black">Qua bộ Board Game gia đình</p>
  </div>
</div>
        </div>
      </section>

      {/* 6. Bằng chứng Xã hội */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="section-title">Các gia đình nói gì về Momtek?</h2>
       <div className="mt-12 max-w-full mx-auto auto-scroll-container"> 
      <div className="auto-scroll-content"> 
        {/* Testimonial 1 */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
          <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
          <blockquote className="mt-4 text-gray-700 leading-relaxed">
            &quot;Từ ngày có Momtek, mình không còn sợ sai khi dạy tiếng Anh cho con nữa. Tính năng chấm điểm AI thật sự tuyệt vời!&quot;
          </blockquote>
          <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
            <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
          </div>
          <figcaption className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Lan Anh" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-black">Chị Lan Anh</p>
              <p className="text-sm text-gray-500">Mẹ bé Bin, 4 tuổi</p>
            </div>
          </figcaption>
        </figure>
        
        {/* Testimonial 2 */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
          <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
          <blockquote className="mt-4 text-gray-700 leading-relaxed">
            &quot;Mỗi tối hai mẹ con đều mong đến giờ học cùng Momtek. Các trò chơi và bài hát rất vui, bé nhà mình thích lắm.&quot;
          </blockquote>
          {/* Rating và Figcaption giữ nguyên */}
          <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
            <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
          </div>
          <figcaption className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Minh Hà" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-black">Chị Minh Hà</p>
              <p className="text-sm text-gray-500">Mẹ bé Sóc, 5 tuổi</p>
            </div>
          </figcaption>
        </figure>
        
        {/* Testimonial 3 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Giao diện thân thiện, dễ sử dụng, ngay cả với người lớn tuổi. Công cụ sáng tạo là điểm cộng lớn!&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện cô Hồng" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Cô Hồng</p>
                    <p className="text-sm text-gray-500">Mẹ bé Táo, 6 tuổi</p>
                </div>
            </figcaption>
        </figure>
        
        {/* Testimonial 4 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Nhờ Momtek, con mình không còn ngại ngùng khi nói tiếng Anh nữa. Sự tiến bộ thấy rõ rệt sau vài tuần.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện anh Tuấn" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Anh Tuấn</p>
                    <p className="text-sm text-gray-500">Bố bé Na, 7 tuổi</p>
                </div>
            </figcaption>
        </figure>

        {/* Testimonial 5 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Kho tài nguyên rất phong phú! Giúp mình có thêm nhiều ý tưởng hoạt động chơi mà học cùng con mỗi ngày.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Thảo" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Chị Thảo</p>
                    <p className="text-sm text-gray-500">Mẹ bé Bống, 4 tuổi</p>
                </div>
            </figcaption>
        </figure>

        {/* Testimonial 6 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Chức năng luyện âm thanh AI thực sự tiện lợi! Giúp mình tự tin hơn khi đồng hành cùng con tại nhà.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện anh Việt" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Anh Việt</p>
                    <p className="text-sm text-gray-500">Bố bé Kem, 5 tuổi</p>
                </div>
            </figcaption>
        </figure>

         {/* Testimonial 1 */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
          <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
          <blockquote className="mt-4 text-gray-700 leading-relaxed">
            &quot;Từ ngày có Momtek, mình không còn sợ sai khi dạy tiếng Anh cho con nữa. Tính năng chấm điểm AI thật sự tuyệt vời!&quot;
          </blockquote>
          <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
            <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
          </div>
          <figcaption className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Lan Anh" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-black">Chị Lan Anh</p>
              <p className="text-sm text-gray-500">Mẹ bé Bin, 4 tuổi</p>
            </div>
          </figcaption>
        </figure>
        
        {/* Testimonial 2 */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
          <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
          <blockquote className="mt-4 text-gray-700 leading-relaxed">
            &quot;Mỗi tối hai mẹ con đều mong đến giờ học cùng Momtek. Các trò chơi và bài hát rất vui, bé nhà mình thích lắm.&quot;
          </blockquote>
          {/* Rating và Figcaption giữ nguyên */}
          <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
            <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
          </div>
          <figcaption className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Minh Hà" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-black">Chị Minh Hà</p>
              <p className="text-sm text-gray-500">Mẹ bé Sóc, 5 tuổi</p>
            </div>
          </figcaption>
        </figure>
        
        {/* Testimonial 3 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Giao diện thân thiện, dễ sử dụng, ngay cả với người lớn tuổi. Công cụ sáng tạo là điểm cộng lớn!&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện cô Hồng" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Cô Hồng</p>
                    <p className="text-sm text-gray-500">Mẹ bé Táo, 6 tuổi</p>
                </div>
            </figcaption>
        </figure>
        
        {/* Testimonial 4 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Nhờ Momtek, con mình không còn ngại ngùng khi nói tiếng Anh nữa. Sự tiến bộ thấy rõ rệt sau vài tuần.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện anh Tuấn" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Anh Tuấn</p>
                    <p className="text-sm text-gray-500">Bố bé Na, 7 tuổi</p>
                </div>
            </figcaption>
        </figure>

        {/* Testimonial 5 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Kho tài nguyên rất phong phú! Giúp mình có thêm nhiều ý tưởng hoạt động chơi mà học cùng con mỗi ngày.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện chị Thảo" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Chị Thảo</p>
                    <p className="text-sm text-gray-500">Mẹ bé Bống, 4 tuổi</p>
                </div>
            </figcaption>
        </figure>

        {/* Testimonial 6 (Mới) */}
         <figure className="card p-8 text-left rounded-xl ring-1 ring-gray-200 flex flex-col h-full min-w-[320px] md:min-w-[400px] whitespace-normal shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]" aria-hidden="true">format_quote</span>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &quot;Chức năng luyện âm thanh AI thực sự tiện lợi! Giúp mình tự tin hơn khi đồng hành cùng con tại nhà.&quot;
            </blockquote>
            <div className="mt-4 flex items-center gap-0.5 text-yellow-400" aria-label="Đánh giá 5 trên 5 sao">
                <span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span><span className="material-symbols-outlined text-base leading-none">star</span>
            </div>
            <figcaption className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Ảnh đại diện anh Việt" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-black">Anh Việt</p>
                    <p className="text-sm text-gray-500">Bố bé Kem, 5 tuổi</p>
                </div>
            </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

      {/* 6b. Bằng chứng Social */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Tham gia Cộng đồng Phụ huynh Momtek</h2>
          <p className="section-subtitle">Kết nối, học hỏi và chia sẻ kinh nghiệm cùng hàng chục ngàn gia đình Việt Nam khác trên hành trình đồng hành cùng con.</p>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
            <div className="flex justify-center items-center space-x-3">
              <svg className="h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.35-2.1-6.73.22-2.37 1.62-4.62 3.64-5.77 2.4-1.35 5.33-.94 7.5.97.02 2.38-.01 4.75.02 7.12.01.15.02.3.02.45.01-.2.01-.4-.02-.6v-7.65c-.81.21-1.63.34-2.43.51-.83.18-1.64.3-2.42.52V8.47c.82-.17 1.64-.32 2.47-.45.83-.13 1.67-.23 2.5-.33.01-.82.01-1.64.02-2.46.01-1.29-.24-2.56-.83-3.7-.49-.96-1.22-1.83-2.12-2.52Z" /></svg>
              <div>
                <p className="text-xl font-bold text-left text-black">50K+</p>
                <p className="text-sm text-gray-500 text-left">Followers</p>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
              <div>
                <p className="text-xl font-bold text-left text-black ">1M+</p>
                <p className="text-sm text-gray-500 text-left">Views</p>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" /></svg>
              <div>
                <p className="text-xl font-bold text-left text-black">35K+</p>
                <p className="text-sm text-gray-500 text-left">Members</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 items-stretch">
            <Link href="https://www.tiktok.com/en/" className="card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                  alt="TikTok video thumbnail"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                  <span className="material-symbols-outlined text-6xl text-white/90 transition-transform duration-300 group-hover:scale-110">play_circle</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>TIKTOK</span>
                <h3 className="text-xl font-bold mt-1 leading-snug text-black">3 Mẹo giúp bé nhớ từ vựng siêu tốc</h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow leading-relaxed">Áp dụng ngay tại nhà chỉ với 5 phút mỗi ngày...</p>
              </div>
            </Link>
            <Link href="https://www.youtube.com" className="card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                  alt="YouTube video thumbnail"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                  <span className="material-symbols-outlined text-6xl text-white/90 transition-transform duration-300 group-hover:scale-110">play_circle</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-sm font-bold text-red-600">YOUTUBE</span>
                <h3 className="text-xl font-bold mt-1 leading-snug text-black">Bài hát Karaoke: Head, Shoulders, Knees &amp; Toes</h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow leading-relaxed">Cùng bé hát và vận động theo bài hát quen thuộc...</p>
              </div>
            </Link>
            <Link href="https://www.facebook.com" className="card overflow-hidden group rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                  alt="Facebook post image"
                  width={500}
                  height={281}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition duration-300 group-hover:bg-black/40">
                  <span className="material-symbols-outlined text-6xl text-white/90 transition-transform duration-300 group-hover:scale-110">article</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-sm font-bold text-blue-600">FACEBOOK</span>
                <h3 className="text-xl font-bold mt-1 leading-snug text-black">Download bộ flashcard chủ đề động vật</h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow leading-relaxed">Tài liệu miễn phí dành cho các ba mẹ trong cộng đồng...</p>
              </div>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="#social-links" className="btn-secondary font-bold py-3 px-6 rounded-full">Theo dõi Momtek ngay</Link>
          </div>
        </div>
      </section>

      {/* 6c. Tâm thư nhà sáng lập */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 text-center">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Chân dung Nhà sáng lập Momtek" width={250} height={250} className="rounded-full shadow-2xl mx-auto w-48 h-48 md:w-full md:h-auto object-cover" />
              <h3 className="mt-4 text-xl font-bold text-black">ThS. [Tên Nhà Sáng Lập]</h3>
              <p className="text-gray-500 font-bold">Nhà sáng lập & Giám đốc Học thuật</p>
            </div> 
            {/* Founder's Letter */}
            <div className="md:col-span-2">
              <span className="material-symbols-outlined text-5xl" style={{ color: 'var(--color-secondary)' }}>format_quote</span>
              <blockquote className="mt-2 text-xl md:text-2xl font-semibold italic" style={{ color: 'var(--color-primary)' }}>
                &quot;Hành trình vĩ đại nhất của một đứa trẻ bắt đầu từ những bài học đầu tiên cùng cha mẹ.&quot;
              </blockquote>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Thân gửi các bậc phụ huynh,
                <br /><br />
                Là một nhà giáo, tôi luôn trăn trở làm thế nào để biến những năm tháng đầu đời của trẻ trở thành giai đoạn vàng cho việc học ngôn ngữ. Tôi tin rằng, không có trung tâm nào có thể thay thế được vai trò của cha mẹ - những người thầy đầu tiên và quan trọng nhất.
                <br /><br />
                Momtek ra đời từ chính tâm huyết đó: trao cho bạn một bộ công cụ hiệu quả, một phương pháp đã được nghiên cứu kỹ lưỡng, và quan trọng nhất, là sự tự tin để đồng hành cùng con trên hành trình chinh phục tiếng Anh, vun đắp nên những khoảnh khắc học tập vui vẻ và gắn kết ngay tại gia đình.
              </p>
            </div>
          </div>
        </div>
      </section>
  

  <section id="offers" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0353CC] to-[#023E99] rounded-2xl p-8 md:p-12 lg:p-16 text-white grid md:grid-cols-2 gap-8 items-center">
          {/* Cột Nội dung */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              Trải nghiệm trọn vẹn <br /> một bài học Momtek
            </h2>
            <p className="mt-4 text-base md:text-lg opacity-90 leading-relaxed">
              Khám phá đầy đủ bộ học liệu kỹ thuật số của một bài học hoàn chỉnh:
              video, bài hát, AI luyện âm, flashcards và board game PDF...
            </p>
            <a href="/offers/goi-unit-trai-nghiem" className="btn-primary mt-6 md:mt-8 inline-block text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg"
            >Tìm hiểu thêm</a>
          </div>
          {/* Cột Hình ảnh */}
          <div className="md:block hidden">
            <Image
              src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
              alt="Gói Unit Trải nghiệm Kỹ thuật số"
              width={400} 
              height={360} 
              className="rounded-lg shadow-xl max-h-[360px] w-auto ml-auto mt-[15px] mb-[15px] mr-[15px]"
            />
          </div>
        </div>
      </div>
  </section>

  <section className="py-24 text-center bg-gray-50 ">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Mẹ và con đã sẵn sàng học tiếng Anh?</h2>
        <p className="section-subtitle">
          Làm bài Quiz nhanh trong 2 phút và nhận ngay &apos;Báo cáo Phân tích Môi trường Tiếng Anh&apos; được cá nhân hóa dành riêng cho gia đình bạn.
        </p>
        <div className="mt-8 mb-8">
          <a href="#" className="btn-primary w-full sm:w-auto text-xl font-bold py-4 px-10 rounded-full shadow-lg">
            Nhận Báo cáo Miễn phí Ngay!
          </a>
        </div>
      </div>
    </section>
    
    </main>
   
  );
};

export default HomePage;