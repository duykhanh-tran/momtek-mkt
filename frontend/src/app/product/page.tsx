'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


// Dữ liệu cho FAQ để dễ quản lý
const faqData = [
  {
    question: 'Sự khác biệt chính giữa Gói Unit Trải nghiệm và Gói Toàn diện là gì?',
    answer: 'Gói Unit Trải nghiệm là một sản phẩm kỹ thuật số, cho bạn "nếm thử" toàn bộ nội dung của 1 Unit học đầu tiên. Gói Toàn diện là giải pháp trọn gói cho 1 năm học, bao gồm cả bộ học liệu vật lý cao cấp được giao đến tận nhà và quyền truy cập không giới hạn vào toàn bộ ứng dụng.'
  },
  {
    question: 'Tôi có thể nâng cấp từ Gói Unit lên Gói Toàn diện không?',
    answer: 'Chắc chắn rồi! Số tiền bạn đã trả cho Gói Unit Trải nghiệm sẽ được trừ trực tiếp vào giá của Gói Toàn diện khi bạn quyết định nâng cấp.'
  },
  {
    question: 'Momtek có những hình thức thanh toán nào?',
    answer: 'Chúng tôi chấp nhận các hình thức thanh toán phổ biến nhất, bao gồm chuyển khoản ngân hàng, thanh toán qua ví điện tử (Momo, ZaloPay), và thanh toán qua thẻ tín dụng/ghi nợ (Visa, Mastercard).'
  },
  {
    question: 'Thời gian giao bộ học liệu vật lý là bao lâu?',
    answer: 'Sau khi bạn hoàn tất thanh toán cho Gói Toàn diện, bộ học liệu sẽ được đóng gói và vận chuyển. Thời gian giao hàng dự kiến từ 2-4 ngày làm việc tùy thuộc vào địa chỉ của bạn.'
  }
];

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Mở FAQ đầu tiên mặc định

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
     
      {/* Section 1: Hero Section */}
      <section className="py-20 md:py-32 text-center bg-blue-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
            Tìm giải pháp Momtek phù hợp nhất cho gia đình bạn
          </h1>
          <p className="section-subtitle mt-6">
            Dù bạn đang muốn bắt đầu, tìm kiếm một lộ trình toàn diện, hay cần sự hỗ trợ chuyên sâu, Momtek đều có một gói sản phẩm được thiết kế dành riêng cho bạn.
          </p>
          <div className="mt-12 group max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                alt="Gia đình hạnh phúc lựa chọn sản phẩm giáo dục momtek"
                width={1280}
                height={720}
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full text-white" title="Cẩm nang & Blog">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Anchor Links */}
      <section className="sticky top-[72px] bg-gray-50 backdrop-blur-sm z-40 shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-center items-center gap-4 md:gap-8">
          <a href="#starters" className="font-semibold text-gray-600 hover:text-[var(--color-primary)] text-sm md:text-base text-center">Start Course</a>
          <a href="#comprehensive" className="font-semibold text-gray-600 hover:text-[var(--color-primary)] text-sm md:text-base text-center">Blend Course</a>
          <a href="#premium" className="font-semibold text-gray-600 hover:text-[var(--color-primary)] text-sm md:text-base text-center">Online Course</a>
        </div>
      </section>

      {/* Section 3: Starters */}
      <section id="starters" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="section-title">Dành cho ba mẹ muốn &quot;nếm thử&quot; phương pháp Momtek</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product Card 1 */}
            <div className="card flex flex-col text-left">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-black">Gói Unit Trải nghiệm Kỹ thuật số</h3>
                <p className="mt-2 text-gray-600">Trải nghiệm một &apos;lát cắt&apos; hoàn hảo của sản phẩm chính với chi phí thấp.</p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">Lý tưởng cho người mới bắt đầu</p>
              </div>
              <div className="p-6 border-t border-gray-100 flex justify-between items-center">
                <p className="text-2xl font-bold text-black">99.000đ</p>
                <Link href="/offers/goi-unit-trai-nghiem" className="btn-secondary font-semibold py-2 px-5 rounded-full">Tìm hiểu thêm</Link>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="card flex flex-col text-left">
                <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-black">Bài Test &amp; Tư vấn Lộ trình 1-1</h3>
                    <p className="mt-2 text-gray-600">Nhận chẩn đoán chính xác về trình độ của con và một lộ trình được cá nhân hóa.</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">Lý tưởng cho ba mẹ cần định hướng</p>
                </div>
                <div className="p-6 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-2xl font-bold text-black">299.000đ</p>
                    <Link href="/offers/test-va-tu-van-lo-trinh" className="btn-secondary font-semibold py-2 px-5 rounded-full">Tìm hiểu thêm</Link>
                </div>
            </div>
            {/* Product Card 3 */}
            <div className="card flex flex-col text-left">
                <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-black">Workshop Trực tuyến Chuyên sâu</h3>
                    <p className="mt-2 text-gray-600">Học các kỹ năng thực tế (kể chuyện, phát âm...) trực tiếp từ mentor của Momtek.</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">Lý tưởng cho ba mẹ muốn học hỏi</p>
                </div>
                <div className="p-6 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-2xl font-bold text-black">199.000đ</p>
                    <Link href="/offers/workshop-chuyen-sau" className="btn-secondary font-semibold py-2 px-5 rounded-full">Tìm hiểu thêm</Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Comprehensive */}
      <section id="comprehensive" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] text-white font-bold uppercase px-6 py-2 rounded-full shadow-lg">Lựa chọn Phổ biến nhất</div>
            <div className="pt-8 lg:pt-0">
              <Image src="" alt="Bộ sản phẩm Momtek Toàn diện" width={600} height={500} className="rounded-xl w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">Bộ sản phẩm Blend Course toàn diện</h2>
              <p className="mt-4 text-xl font-semibold text-gray-800">Tất cả những gì bạn cần cho một năm học hiệu quả và đầy cảm hứng.</p>
              <ul className="mt-6 space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-green-500 mt-1">inventory_2</span><span><b>Trọn bộ 36 Unit</b> học liệu vật lý cao cấp.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-green-500 mt-1">app_shortcut</span><span><b>1 năm truy cập</b> không giới hạn ứng dụng Momtek.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-green-500 mt-1">mic</span><span><b>Toàn quyền sử dụng</b> Trợ lý Luyện âm AI.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-green-500 mt-1">groups</span><span><b>Tham gia cộng đồng</b> phụ huynh Momtek độc quyền.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-green-500 mt-1">support_agent</span><span><b>Hỗ trợ 1-1</b> từ đội ngũ chuyên môn.</span></li>
              </ul>
              <div className="mt-8">
                <Link href="/offers/san-pham-chinh-momtek" className="btn-primary text-lg font-bold py-4 px-10 rounded-full shadow-xl inline-block">Xem chi tiết Gói Toàn diện</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Premium */}
      <section id="premium" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="section-title">Cần một lộ trình được &quot;may đo&quot; riêng?</h2>
          <h3 className="mt-2 text-2xl font-bold text-black">Gói Coaching 1-1 Cùng Chuyên gia</h3>
          <p className="section-subtitle mt-4">Nếu bạn cần sự hỗ trợ chuyên sâu và một lộ trình được xây dựng riêng biệt cho năng lực và tính cách của con, gói Coaching 1-1 sẽ là lựa chọn hoàn hảo. Bạn sẽ được làm việc trực tiếp với mentor của Momtek để giải quyết mọi vấn đề và tối ưu hóa hiệu quả học tập.</p>
          <div className="mt-8">
            <Link href="/offers/coaching-1-1" className="btn-secondary text-lg font-semibold py-3 px-8 rounded-full">Yêu cầu Tư vấn</Link>
          </div>
        </div>
      </section>

      {/* Section 6: Comparison Table */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <h2 className="section-title text-center">So sánh các lựa chọn chính</h2>
              <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="border-b-2 border-gray-200">
                              <th className="p-4 text-lg font-bold text-black">Tính năng</th>
                              <th className="p-4 text-lg font-bold text-center text-black">Gói Unit Trải nghiệm</th>
                              <th className="p-4 text-lg font-bold text-center text-[var(--color-primary)]">Gói Toàn diện</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-b border-gray-100"><td className="p-4 text-black">Số lượng Unit</td><td className="p-4 text-center font-semibold text-black">1 Unit Kỹ thuật số</td><td className="p-4 text-center font-semibold text-black">36 Unit</td></tr>
                          <tr className="border-b border-gray-100 bg-gray-50"><td className="p-4 text-black">Học liệu vật lý</td><td className="p-4 text-center text-red-500 font-bold text-xl"><span className="material-symbols-outlined">close</span></td><td className="p-4 text-center text-green-500 font-bold text-xl"><span className="material-symbols-outlined">check</span></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-4 text-black">Truy cập App</td><td className="p-4 text-center font-semibold text-black">Giới hạn</td><td className="p-4 text-center font-semibold text-black">Không giới hạn (1 năm)</td></tr>
                          <tr className="border-b border-gray-100 bg-gray-50"><td className="p-4 text-black">Luyện âm AI</td><td className="p-4 text-center font-semibold text-black">Giới hạn</td><td className="p-4 text-center text-green-500 font-bold text-xl"><span className="material-symbols-outlined">check</span></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-4 text-black">Hỗ trợ từ chuyên môn</td><td className="p-4 text-center text-red-500 font-bold text-xl"><span className="material-symbols-outlined">close</span></td><td className="p-4 text-center text-green-500 font-bold text-xl"><span className="material-symbols-outlined">check</span></td></tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl ">
          <h2 className="section-title text-center">Câu hỏi thường gặp</h2>
          <div className="mt-12 space-y-4 text-black">
            {faqData.map((faq, index) => (
              <div key={index}>
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold p-5 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-lg ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                >
                   <div className="p-5 pt-0">
                      <p className="text-gray-700">{faq.answer}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="section-title">Vẫn còn phân vân?</h2>
            <p className="section-subtitle mt-4">Nếu bạn vẫn chưa chắc chắn đâu là điểm khởi đầu tốt nhất, hãy làm bài Quiz nhanh của chúng tôi. Dựa trên câu trả lời, Momtek sẽ gửi cho bạn một lộ trình gợi ý được cá nhân hóa.</p>
            <div className="mt-8">
                <Link href="/experience/quiz-va-game" className="btn-primary font-bold text-lg py-4 px-8 rounded-full shadow-lg inline-block">Làm Quiz để nhận gợi ý</Link>
            </div>
        </div>
      </section>
      
    </main>
  );
}
