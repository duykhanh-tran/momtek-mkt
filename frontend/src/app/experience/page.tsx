import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function ExperiencePage() {
  // Dữ liệu cho các section được chuyển vào đây
  const steps = [
    { icon: 'visibility', title: '1. Nhận biết', desc: 'Qua hình ảnh trực quan' },
    { icon: 'smart_display', title: '2. Hiểu ngữ cảnh', desc: 'Qua video tình huống' },
    { icon: 'record_voice_over', title: '3. Luyện âm', desc: 'Phân tích chi tiết' },
    { icon: 'mic', title: '4. Thực hành từ', desc: 'Với AI chấm điểm' },
    { icon: 'chat', title: '5. Thực hành câu', desc: 'Với AI chấm điểm' },
    { icon: 'celebration', title: '6. Kiểm tra', desc: 'Bằng hành động thực tế' },
  ];

  const tools = [
    {
      icon: 'mic',
      title: 'Trợ lý Luyện âm AI',
      desc: 'Nói chuẩn ngay từ đầu. Thử thu âm và nhận ngay điểm chấm phát âm từ công nghệ AI của Momtek.',
      link: '/experience/luyen-am-ai',
      cta: 'Thử chấm điểm phát âm',
    },
    {
      icon: 'palette',
      title: 'Studio Sáng tạo',
      desc: 'Bé thỏa sức sáng tạo. Cùng bé tô màu các bức tranh theo chủ đề và tự lồng tiếng cho nhân vật hoạt hình.',
      link: '/experience/studio-sang-tao',
      cta: 'Bắt đầu sáng tạo',
    },
    {
      icon: 'quiz',
      title: 'Quiz & Game Vui học',
      desc: 'Kiểm tra và Ghi nhớ. Các trò chơi trí nhớ và bài quiz nhanh giúp bé ôn lại kiến thức một cách vui vẻ.',
      link: '/experience/quiz-va-game',
      cta: 'Chơi ngay',
    },
  ];

  return (
    <main className="antialiased">
      
      
      {/* --- HeroSection --- */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
              Trải nghiệm phương pháp Momtek
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Không chỉ là lý thuyết, hãy cùng bé "nếm thử" các hoạt động tương tác, trò chơi và công nghệ AI độc quyền của chúng tôi.
            </p>
            <div className="mt-8">
              <Link href="#" className="btn-primary text-lg font-bold py-4 px-8 rounded-full shadow-lg inline-flex items-center gap-2">
                Học thử 1 từ vựng trong 5 phút
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex justify-center group">
            <div className="relative w-full max-w-4xl transition-all duration-300 ease-in-out group-hover:scale-[1.02]">
              {/* Hiệu ứng Glow mềm mại phía sau */}
              <div className="absolute -inset-4 bg-blue-200 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Container chứa video với bóng đổ và bo góc lớn hơn */}
              <div className="relative w-full aspect-video bg-gray-200 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden ring-1 ring-gray-900/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/n0A28QAr50g"
                  title="Video minh họa phương pháp Momtek"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FlagshipExperienceSection --- */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Học trọn vẹn 1 từ vựng theo phương pháp 6 bước độc quyền</h2>
          <p className="section-subtitle">
            Phương pháp này giúp bé không chỉ "biết" từ, mà còn "hiểu sâu" và "sử dụng được" trong ngữ cảnh thực tế.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]">{step.icon}</span>
                </div>
                <h3 className="mt-4 font-bold text-black">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="#" className="btn-secondary text-lg font-bold py-3 px-8 rounded-full">
              Bắt đầu học thử ngay!
            </Link>
          </div>
        </div>
      </section>

      {/* --- InteractiveToolsSection --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center">Khám phá các "sân chơi" khác của Momtek</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.link} className="card p-8 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">{tool.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mt-6 text-black">{tool.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{tool.desc}</p>
                <span className="mt-6 font-semibold inline-flex items-center gap-2 text-[var(--color-primary)]">
                  {tool.cta}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- LeadMagnetSection --- */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                alt="Mockup Báo cáo Phân tích"
                width={1080}
                height={1080}
                className="rounded-lg max-w-sm w-full h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-[#D98200]">Con bạn có đang học đúng cách?</h2>
              <p className="mt-4 text-lg text-gray-700">
                Hãy thực hiện bài Quiz nhanh của chúng tôi để khám phá phong cách học của con và nhận một bản "Báo cáo Phân tích & Lộ trình Gợi ý" được cá nhân hóa dành riêng cho bé.
              </p>
              <div className="mt-8">
                <Link href="#" className="btn-primary text-lg font-bold py-4 px-8 rounded-full shadow-lg inline-flex items-center gap-2">
                  Làm Quiz ngay để nhận Báo cáo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CommunityEngagementSection --- */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Bạn không đơn độc, hãy tham gia cùng chúng tôi</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <div className="card p-8 rounded-xl ring-1 ring-gray-200 grid grid-rows-[56px_64px_1fr_auto] gap-3 h-full justify-items-center text-center">
              <span className="material-symbols-outlined text-[40px] text-[var(--color-primary)]">groups</span>
              <h3 className="text-2xl font-bold leading-snug line-clamp-2 text-black">Lớp học thử Trực tuyến</h3>
              <div className="text-gray-600 leading-relaxed overflow-hidden">
                <p>Đăng ký tham gia một lớp học thử 30 phút miễn phí qua Zoom, được hướng dẫn trực tiếp bởi mentor của Momtek.</p>
                <p className="mt-3 font-semibold text-gray-800">Lớp gần nhất: 10:00, Thứ Bảy tuần này</p>
              </div>
              <Link href="/experience/su-kien" className="btn-secondary inline-block py-2 px-6 rounded-full font-semibold mt-2">
                Đăng ký giữ chỗ
              </Link>
            </div>
            <div className="card p-8 rounded-xl ring-1 ring-gray-200 grid grid-rows-[56px_64px_1fr_auto] gap-3 h-full justify-items-center text-center">
              <span className="material-symbols-outlined text-[40px] text-[var(--color-primary)]">emoji_events</span>
              <h3 className="text-2xl font-bold leading-snug line-clamp-2 text-black">Showcase Tài năng Nhí</h3>
              <div className="text-gray-600 leading-relaxed overflow-hidden">
                <p>Xem các sản phẩm sáng tạo và video kể chuyện của các bạn nhỏ trong cộng đồng Momtek.</p>
                <p className="mt-9 font-semibold text-gray-800">Chủ đề tháng này: Kể chuyện Động vật</p>
              </div>
              <Link href="#" className="btn-secondary inline-block py-2 px-6 rounded-full font-semibold mt-2">
                Xem Thư viện Tài năng
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}