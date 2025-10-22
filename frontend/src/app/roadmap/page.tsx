'use client'; 

import { useState } from 'react';

const faqData = [
  {
    question: "Ba mẹ không giỏi tiếng Anh có dạy được không?",
    answer: "Hoàn toàn được! Momtek được thiết kế dành riêng cho ba mẹ, kể cả những người bắt đầu từ con số 0. Mọi hoạt động đều có video hướng dẫn chi tiết, và công nghệ AI sẽ giúp bạn tự tin về phát âm. Vai trò của bạn là người đồng hành, tạo môi trường, còn phương pháp đã có Momtek lo."
  },
  {
    question: "Con tôi chưa biết gì có học được không?",
    answer: "Chắc chắn là được. Lộ trình của Momtek được xây dựng từ những viên gạch đầu tiên, dành cho trẻ chưa có nền tảng. Phương pháp học qua chơi, hình ảnh và video sẽ giúp bé tiếp thu một cách tự nhiên và không áp lực."
  },
  {
    question: "Học trong bao lâu thì có kết quả?",
    answer: "Với sự đồng hành đều đặn khoảng 15-20 phút mỗi ngày, bạn sẽ thấy sự thay đổi rõ rệt của con chỉ sau 1-2 tháng đầu tiên về sự tự tin và phản xạ. Toàn bộ lộ trình 36 tuần sẽ trang bị cho bé nền tảng vững chắc để đạt trình độ Pre-A1."
  }
];

export default function RoadmapPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="antialiased">
      {/* 1. Hero Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-5xl font-extrabold leading-tight" style={{ color: 'var(--color-primary)' }}>
            Bản đồ chinh phục tiếng Anh cho bé<br className="hidden md:block" /> từ Zero đến Pre-A1 ngay tại nhà.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hành trình 36 tuần học mà chơi, chơi mà học, vun đắp tình thân và xây nền Anh ngữ vững chắc cho con.
          </p>
          <div className="mt-10">
            <a href="#pricing" className="btn-primary inline-block w-full sm:w-auto text-lg font-bold py-4 px-8 rounded-full shadow-lg">
              Bắt đầu hành trình
            </a>
            <p className="mt-4 text-sm text-gray-500">Đã được tin tưởng bởi hơn 50.000+ phụ huynh Việt Nam</p>
          </div>
        </div>
      </section>
      {/* 2. Triết lý & Cam kết của Momtek */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Không chỉ là khóa học, đây là một hệ sinh thái<br />đồng hành cùng gia đình bạn.</h2>
          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>record_voice_over</span>
              <h3 className="text-black text-xl font-bold mt-4">Tự tin về phát âm</h3>
              <p className="text-gray-600 mt-1">Công nghệ AI và hướng dẫn chi tiết giúp ba mẹ tự tin dạy con dù phát âm chưa chuẩn.</p>
            </div>
            <div className="text-center p-4">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>map</span>
              <h3 className="text-black text-xl font-bold mt-4">Rõ ràng về lộ trình</h3>
              <p className="text-gray-600 mt-1">Một bản đồ 36 tuần chi tiết, giúp bạn biết chính xác cần làm gì mỗi ngày.</p>
            </div>
            <div className="text-center p-4">
              <span className="material-symbols-outlined text-5xl mx-auto p-4 rounded-full bg-blue-100" style={{ color: 'var(--color-primary)' }}>celebration</span>
              <h3 className="text-black text-xl font-bold mt-4">Đầy ắp niềm vui</h3>
              <p className="text-gray-600 mt-1">Biến giờ học thành giờ chơi, vun đắp tình cảm gia đình qua các hoạt động sáng tạo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Tổng quan Lộ trình 36 Tuần */}
      <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="section-title">Lộ trình 6 Cấp độ Vươn đến Trình độ Pre-A1</h2>
                    <p className="section-subtitle">Mỗi cấp độ là một bước tiến vững chắc trên hành trình ngôn ngữ của con, được công nhận theo chuẩn quốc tế.</p>
                </div>
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {/* Timeline Items */}
                        <div className="timeline-item relative pl-12">
                            <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg z-10">1</div>
                            <div className="card p-6 ml-4">
                                <h3 className="text-xl font-bold text-black">Level 1: Nền tảng Giao tiếp</h3>
                                <p className="text-sm text-gray-500 mt-1">Chủ đề: Chào hỏi, Gia đình, Màu sắc...</p>
                                <p className="mt-3 font-semibold text-green-600">Mục tiêu: Bé tự tin nói các câu giao tiếp đơn giản.</p>
                            </div>
                        </div>
                        {/* Add more timeline items here following the same structure */}
                         <div className="timeline-item relative pl-12">
                             <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg z-10">2</div>
                             <div className="card p-6 ml-4">
                                 <h3 className="text-xl font-bold text-black">Level 2: Khám phá Thế giới</h3>
                                 <p className="text-sm text-gray-500 mt-1">Chủ đề: Động vật, Đồ vật, Số đếm...</p>
                                 <p className="mt-3 font-semibold text-green-600">Mục tiêu: Mở rộng vốn từ và khả năng miêu tả sự vật.</p>
                             </div>
                         </div>
                         <div className="timeline-item relative pl-12">
                             <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg z-10">3</div>
                             <div className="card p-6 ml-4">
                                 <h3 className="text-xl font-bold text-black">Level 3: Hành động & Mệnh lệnh</h3>
                                 <p className="text-sm text-gray-500 mt-1">Chủ đề: Các hoạt động hàng ngày, mệnh lệnh đơn giản...</p>
                                 <p className="mt-3 font-semibold text-green-600">Mục tiêu: Bé hiểu và phản ứng lại với các yêu cầu.</p>
                             </div>
                         </div>
                         <div className="timeline-item relative pl-12">
                             <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg z-10">4</div>
                             <div className="card p-6 ml-4">
                                 <h3 className="text-xl font-bold text-black">Level 4: Cảm xúc & Cảm giác</h3>
                                 <p className="text-sm text-gray-500 mt-1">Chủ đề: Vui, buồn, nóng, lạnh...</p>
                                 <p className="mt-3 font-semibold text-green-600">Mục tiêu: Bé biết cách thể hiện cảm xúc cá nhân.</p>
                             </div>
                         </div>
                         <div className="timeline-item relative pl-12">
                             <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg z-10">5</div>
                             <div className="card p-6 ml-4">
                                 <h3 className="text-xl font-bold text-black">Level 5: Câu chuyện & Tưởng tượng</h3>
                                 <p className="text-sm text-gray-500 mt-1">Chủ đề: Kể chuyện đơn giản, các nhân vật cổ tích...</p>
                                 <p className="mt-3 font-semibold text-green-600">Mục tiêu: Bé bắt đầu hình thành tư duy kể chuyện.</p>
                             </div>
                         </div>
                         <div className="timeline-item relative pl-12">
                            <div className="absolute top-1 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-secondary)] text-white font-bold text-lg z-10">6</div>
                            <div className="card p-6 ml-4">
                                <h3 className="text-xl font-bold text-black">Level 6: Tổng hợp & Tự tin</h3>
                                <p className="text-sm text-gray-500 mt-1">Chủ đề: Ôn tập và kết hợp tất cả các chủ đề đã học.</p>
                                <p className="mt-3 font-semibold text-green-600">Mục tiêu: Bé tự tin giao tiếp trong các tình huống quen thuộc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* 4. Khám phá một Unit điển hình */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="section-title text-8xl">Bên trong một tuần học vui vẻ của bé</h2>
            <p className="section-subtitle">Mỗi bài học là một cuộc phiêu lưu 4 bước, kết hợp giữa ứng dụng công nghệ và học liệu vật lý sinh động.</p>
          </div>
          <div className="mt-16 space-y-16">
            {/* Steps */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-bold text-sm" style={{ color: 'var(--color-primary)' }}>BƯỚC 1</span>
                <h3 className="text-3xl font-bold mt-2 text-black">Học Từ vựng & Mẫu câu với AI</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">Bé làm quen từ vựng qua video ngữ cảnh, sau đó cùng ba mẹ thực hành phát âm với Trợ lý AI. Công nghệ sẽ chấm điểm và hướng dẫn chi tiết, giúp ba mẹ hoàn toàn tự tin đồng hành cùng con.</p>
              </div>
              <img src="https://placehold.co/600x400/E2F0FF/0353CC?text=App+AI+Luyện+âm" className="rounded-xl shadow-lg w-full" alt="App AI Luyện âm" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="https://placehold.co/600x400/FEF3E1/F5A623?text=Học+liệu+Active+Cards" className="rounded-xl shadow-lg w-full md:order-last" alt="Học liệu Active Cards"/>
                <div>
                    <span className="font-bold text-sm" style={{color: 'var(--color-primary)'}}>BƯỚC 2</span>
                    <h3 className="text-3xl font-bold mt-2 text-black">Thực hành qua Vận động</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">Sử dụng bộ học liệu Active Cards, bé sẽ tham gia các trò chơi vận động vui nhộn. Học mà chơi, chơi mà học giúp bé ghi nhớ kiến thức một cách tự nhiên và đầy hứng khởi.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="font-bold text-sm" style={{color: 'var(--color-primary)'}}>BƯỚC 3</span>
                    <h3 className="text-3xl font-bold mt-2 text-black">Ứng dụng Sáng tạo</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">Với bộ Creative Tools, bé sẽ được tô màu, cắt dán, làm thủ công... để tái hiện lại kiến thức đã học. Đây là lúc để trí tưởng tượng của bé bay cao và khả năng ghi nhớ được củng cố.</p>
                </div>
                <img src="https://placehold.co/600x400/E8F5E9/34A853?text=Sản+phẩm+sáng+tạo+của+bé" className="rounded-xl shadow-lg w-full" alt="Sản phẩm sáng tạo của bé"/>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="https://placehold.co/600x400/FCE8E6/EA4335?text=Cả+nhà+cùng+chơi+Board+Game" className="rounded-xl shadow-lg w-full md:order-last" alt="Cả nhà cùng chơi Board Game"/>
                <div>
                   <span className="font-bold text-sm" style={{color: 'var(--color-primary)'}}>BƯỚC 4</span>
                    <h3 className="text-3xl font-bold mt-2 text-black">Củng cố qua Trò chơi</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">Cả gia đình sẽ cùng nhau tham gia vào các trò chơi board game được thiết kế riêng. Đây không chỉ là lúc ôn bài, mà còn là khoảnh khắc quý giá để cả nhà thêm gắn kết.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. Công nghệ & Hệ thống Hỗ trợ thông minh */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center">
                  <h2 className="section-title">Bạn không bao giờ đơn độc trên hành trình này</h2>
                  <p className="section-subtitle">Momtek kết hợp giữa công nghệ thông minh và sự đồng hành tận tâm để hỗ trợ gia đình bạn mỗi ngày.</p>
              </div>
              <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                  <div className="card p-8">
                      <h3 className="text-2xl text-black font-bold flex items-center gap-3"><span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">smart_toy</span>Công nghệ dẫn dắt</h3>
                      <ul className="mt-6 space-y-4 text-gray-600">
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Trợ lý AI Luyện âm:</span> Chấm điểm, sửa lỗi, giúp ba mẹ tự tin.</div></li>
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Hệ thống Gamification:</span> Điểm thưởng, huy hiệu, bảng xếp hạng tạo động lực.</div></li>
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Nhiệm vụ hàng ngày:</span> Hệ thống tự động tạo bài ôn tập, giúp bé duy trì thói quen.</div></li>
                      </ul>
                  </div>
                  <div className="card p-8">
                      <h3 className="text-2xl text-black font-bold flex items-center gap-3"><span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">support_agent</span>Đội ngũ đồng hành</h3>
                      <ul className="mt-6 space-y-4 text-gray-600">
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Mentor hỗ trợ 1:1:</span> Luôn sẵn sàng giải đáp mọi thắc mắc của ba mẹ.</div></li>
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Giáo viên chấm bài:</span> Nhận xét chi tiết sau bài Speaking Test cuối mỗi Unit.</div></li>
                          <li className="flex items-start"><span className="material-symbols-outlined text-green-500 mr-3">check_circle</span><div><span className="font-semibold">Cộng đồng phụ huynh:</span> Nơi chia sẻ, học hỏi kinh nghiệm và tạo động lực.</div></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      {/* 6. Trọn bộ Giải pháp Momtek */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="text-center">
                  <h2 className="section-title">Tất cả những gì bạn cần trong một bộ sản phẩm</h2>
              </div>
              <div className="mt-12 max-w-4xl mx-auto card p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                      <div>
                          <h3 className="text-xl font-bold text-gray-700">Bộ học liệu vật lý cao cấp</h3>
                          <p className="text-sm text-gray-500">(Gửi về tận nhà)</p>
                          <ul className="mt-6 space-y-3">
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>36 bộ Flashcards (288 thẻ)</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>72 thẻ Active Cards</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>36 bộ Creative Tools</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>6 Board Games độc quyền</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Sách hướng dẫn chi tiết cho ba mẹ</li>
                          </ul>
                      </div>
                      <div className="border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8">
                          <h3 className="text-xl font-bold text-gray-700">Tài khoản App Momtek</h3>
                          <p className="text-sm text-gray-500">(Truy cập trọn đời)</p>
                          <ul className="mt-6 space-y-3">
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Toàn bộ 36 Unit học liệu số</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Công nghệ AI Luyện âm không giới hạn</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Thư viện bài hát, video & truyện kể</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Hệ thống Gamification & Nhiệm vụ</li>
                              <li className="flex items-center text-black"><span className="material-symbols-outlined text-blue-500 mr-2">check</span>Báo cáo tiến độ học tập của con</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* 7. Các gói sản phẩm & Bảng giá */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="section-title">Lựa chọn gói sản phẩm phù hợp nhất</h2>
          </div>
          <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
            {/* Pricing cards */}
            <div className="card p-8 h-full flex flex-col">
                 <h3 className="text-2xl font-bold text-black">Gói Digital</h3>
                 <p className="mt-2 text-gray-500">Truy cập toàn bộ học liệu số.</p>
                 <p className="my-6 text-4xl font-extrabold text-black">1.990.000<span className="text-lg font-medium">đ</span></p>
                 <ul className="space-y-3 text-gray-600 mb-8">
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Tài khoản App trọn đời</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Công nghệ AI Luyện âm</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Hệ thống Gamification</li>
                 </ul>
                 <button className="btn-secondary mt-auto font-bold w-full py-3 rounded-lg">Chọn gói Digital</button>
             </div>
             <div className="card p-8 border-2 border-[var(--color-secondary)] relative shadow-2xl h-full flex flex-col">
                 <p className="absolute top-0 -translate-y-1/2 bg-[var(--color-secondary)] text-white font-bold text-sm px-4 py-1 rounded-full">Khuyên dùng</p>
                 <h3 className="text-2xl font-bold text-black">Gói Toàn diện</h3>
                 <p className="mt-2 text-gray-500">Kết hợp App và học liệu vật lý.</p>
                 <p className="my-6 text-4xl font-extrabold text-black">3.490.000<span className="text-lg font-medium">đ</span></p>
                 <ul className="space-y-3 text-gray-600 mb-8">
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span><strong className="mr-1">Tất cả</strong> quyền lợi Gói Digital</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span><strong>Trọn bộ học liệu vật lý</strong> cao cấp</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Mentor hỗ trợ 1:1</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Giáo viên chấm bài Speaking</li>
                 </ul>
                 <button className="btn-primary mt-auto font-bold w-full py-3 rounded-lg">Chọn gói Toàn diện</button>
             </div>
             <div className="card p-8 h-full flex flex-col">
                 <h3 className="text-2xl font-bold text-black">Gói Premium</h3>
                 <p className="mt-2 text-gray-500">Hỗ trợ chuyên sâu cùng chuyên gia.</p>
                 <p className="my-6 text-4xl font-extrabold text-black">6.990.000<span className="text-lg font-medium">đ</span></p>
                 <ul className="space-y-3 text-gray-600 mb-8">
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span><strong className="mr-1">Tất cả</strong> quyền lợi Gói Toàn diện</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span><strong>4 buổi coaching 1:1</strong> cùng chuyên gia</li>
                     <li className="flex items-center"><span className="material-symbols-outlined text-green-500 mr-2">check</span>Lộ trình học cá nhân hóa</li>
                 </ul>
                 <button className="btn-secondary mt-auto font-bold w-full py-3 rounded-lg">Chọn gói Premium</button>
             </div>
          </div>
        </div>
      </section>
      {/* 8. Minh chứng từ các gia đình (Social Proof) */}
       <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title">Hàng ngàn gia đình đã tự tin đồng hành cùng con</h2>
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="card p-8 text-left">
                        <span className="material-symbols-outlined text-4xl" style={{color: 'var(--color-secondary)'}}>format_quote</span>
                        <p className="mt-4 text-gray-700">"Con mình từ một đứa trẻ nhút nhát, sợ nói tiếng Anh, giờ đã có thể tự tin giao tiếp các câu đơn giản sau 3 tháng theo học Momtek. Lộ trình chi tiết và các trò chơi thật sự hiệu quả, cả nhà mình đều vui."</p>
                        <div className="flex items-center mt-6">
                            <img src="https://placehold.co/48x48" 
                            className="rounded-full" 
                            alt="avatar"/>
                            <div className="ml-4">
                                <p className="font-bold text-black">Chị Thảo Vy</p>
                                <p className="text-sm text-gray-500">Mẹ bé Bắp, 4 tuổi</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-8 text-left">
                        <span className="material-symbols-outlined text-4xl" style={{color: 'var(--color-secondary)'}}>format_quote</span>
                        <p className="mt-4 text-gray-700">"Điều mình thích nhất ở Momtek là sự đồng hành. Bất cứ khi nào có thắc mắc, mentor đều hỗ trợ rất nhanh. Mình không còn cảm thấy đơn độc khi dạy con học nữa. Cảm ơn Momtek rất nhiều!"</p>
                        <div className="flex items-center mt-6">
                            <img src="https://placehold.co/48x48" 
                            className="rounded-full" 
                            alt="avatar"/>
                            <div className="ml-4">
                                <p className="font-bold text-black">Anh Quốc Hưng</p>
                                <p className="text-sm text-gray-500">Ba bé Nấm, 5 tuổi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* 9. Câu hỏi thường gặp (FAQ) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center">
            <h2 className="section-title">Giải đáp các thắc mắc thường gặp</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqData.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full flex justify-between items-center text-left text-lg text-black font-semibold p-5 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  <span>{item.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                    add
                  </span>
                </button>
                <div className={`accordion-content ${openFaqIndex === index ? 'open' : ''}`}>
                  <div className="overflow-hidden">
                    <p className="p-5 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 10. Lời kêu gọi Hành động cuối cùng */}
      <section className="py-20 bg-blue-100">
          <div className="container mx-auto px-6 text-center">
              <h2 className="section-title">Sẵn sàng bắt đầu hành trình ý nghĩa<br/>nhất cùng con?</h2>
              <p className="section-subtitle">Đầu tư vào nền tảng tiếng Anh cho con hôm nay là món quà vô giá cho tương lai. Hãy để Momtek đồng hành cùng gia đình bạn.</p>
              <div className="mt-8">
                  <a href="#pricing" className="btn-primary inline-block w-full sm:w-auto text-xl font-bold py-4 px-10 rounded-full shadow-lg">Xem các gói sản phẩm</a>
              </div>
          </div>
      </section>
    </main>
  );
}