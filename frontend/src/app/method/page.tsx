import Link from 'next/link';
import Image from 'next/image';


export default function MethodologyPage() {
  return (
    <main>
      
      {/* Section 1: Hero Section */}
      <section className="py-20 md:py-32 text-center bg-blue-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
            Phương pháp Momtek
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            Biến Giờ Học Tiếng Anh Thành Khoảnh Khắc Gắn Kết Gia Đình
          </h2>
          <p className="section-subtitle mt-6">
            Chúng tôi tin rằng ba mẹ chính là người thầy tốt nhất, và công nghệ là trợ lý đắc lực. Khám phá hệ sinh thái học tập toàn diện, nơi việc học diễn ra tự nhiên như một cuộc trò chuyện.
          </p>
          <div className="mt-12 group max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0"
                alt="Mẹ và bé học cùng Momtek"
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

      {/* Section 2: Parent's Concerns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Hành trình dạy con đôi khi không hề dễ dàng...</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">record_voice_over</span>
              <h3 className="text-xl font-bold mt-4 text-black">&quot;Mẹ không tự tin phát âm?&quot;</h3>
              <p className="mt-2 text-gray-600">Momtek có AI luyện âm cho cả mẹ và bé, giúp cả nhà cùng nhau tiến bộ.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">sentiment_dissatisfied</span>
              <h3 className="text-xl font-bold mt-4 text-black">&quot;Con nhanh chán, không hợp tác?&quot;</h3>
              <p className="mt-2 text-gray-600">Momtek biến việc học thành trò chơi với board game, bài hát và các hoạt động sáng tạo.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">help_outline</span>
              <h3 className="text-xl font-bold mt-4 text-black">&quot;Không biết bắt đầu từ đâu?&quot;</h3>
              <p className="mt-2 text-gray-600">Momtek có lộ trình chi tiết, cung cấp học liệu và hướng dẫn mẹ từng bước một.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Giải pháp của chúng tôi: Một Hệ sinh thái Toàn diện</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-2xl text-center font-bold text-[var(--color-primary)]">1. Ba mẹ là người đồng hành</h3>
              <p className="mt-4 text-lg text-gray-700 text-justify">Momtek không thay thế vai trò của ba mẹ, mà trao cho ba mẹ &quot;siêu năng lực&quot; để trở thành người hướng dẫn tuyệt vời nhất của con thông qua các công cụ và lộ trình được thiết kế sẵn.</p>
            </div>
            <div>
              <h3 className="text-2xl text-center font-bold text-[var(--color-primary)]">2. Công nghệ là Trợ lý</h3>
              <p className="mt-4 text-lg text-gray-700 text-justify">Ứng dụng Momtek và Trợ lý AI đóng vai trò là một người bạn đồng hành tin cậy, giúp mẹ tự tin về phát âm, cung cấp các tài nguyên đa dạng và theo dõi tiến độ của con.</p>
            </div>
            <div>
              <h3 className="text-2xl text-center font-bold text-[var(--color-primary)]">3. Học qua Chơi &amp; Ngữ cảnh</h3>
              <p className="mt-4 text-lg text-gray-700 text-justify">Bé sẽ không học từ vựng đơn lẻ. Mọi kiến thức đều được lồng ghép trong các câu chuyện, bài hát, và tình huống thực tế, giúp con thẩm thấu ngôn ngữ một cách tự nhiên.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 6-Step Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="section-title">Bên trong một bài học: Hành trình 6 bước để làm chủ từ vựng</h2>
            <p className="mt-6 text-lg text-gray-600">Đây là quy trình cốt lõi giúp bé không chỉ ghi nhớ, mà còn thực sự hiểu và áp dụng được từ vựng vào đời sống.</p>
            <Link href="/experience" className="btn-primary mt-8 inline-block font-bold py-3 px-8 rounded-full shadow-lg">Trải nghiệm ngay →</Link>
          </div>
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">visibility</span></div>
              <h4 className="font-bold text-lg text-black">1. Nhận biết</h4>
              <p className="text-gray-600">Bé kết nối từ vựng với hình ảnh trực quan.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">smart_display</span></div>
              <h4 className="font-bold text-lg text-black">2. Hiểu ngữ cảnh</h4>
              <p className="text-gray-600">Bé xem video để thấy từ vựng trong tình huống thực tế.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">record_voice_over</span></div>
              <h4 className="font-bold text-lg text-black">3. Luyện phát âm</h4>
              <p className="text-gray-600">Bé được hướng dẫn chi tiết cách phát âm từng âm tiết.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">mic</span></div>
              <h4 className="font-bold text-lg text-black">4. Thực hành từ với AI</h4>
              <p className="text-gray-600">Bé và mẹ cùng thu âm và nhận điểm số từ AI.</p>
            </div>
             <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">chat</span></div>
              <h4 className="font-bold text-lg text-black">5. Thực hành câu với AI</h4>
              <p className="text-gray-600">Bé áp dụng từ vào câu hoàn chỉnh và được AI chấm điểm.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><span className="material-symbols-outlined text-[var(--color-primary)]">celebration</span></div>
              <h4 className="font-bold text-lg text-black">6. Kiểm tra thực tế</h4>
              <p className="text-gray-600">Mẹ đưa ra hiệu lệnh và bé thực hiện hành động tương ứng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="section-title">Sự kết hợp hoàn hảo giữa Digital và Physical</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Mockup ứng dụng Momtek" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black">Nền tảng Digital mạnh mẽ</h3>
              <ul className="mt-6 space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">route</span>
                  <span><b>Lộ trình cá nhân hóa:</b> Hướng dẫn mẹ và bé đi đúng hướng, không còn hoang mang.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">mic</span>
                  <span><b>Trợ lý AI chấm điểm:</b> Giúp mẹ và bé tự tin phát âm chuẩn ngay từ đầu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">video_library</span>
                  <span><b>Thư viện đa dạng:</b> Hàng trăm video, bài hát và trò chơi giúp việc học luôn mới mẻ.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <Image src="https://dl.dropboxusercontent.com/s/fi/dfz5euutpzn2vidox3t8l/M-v-con.png?rlkey=zpmfrf9sva5yzixnmwyfdz8dg&st=5z1m0nw2&dl=0" alt="Bộ học liệu vật lý Momtek" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto" />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-black">Bộ học liệu Vật lý cao cấp</h3>
              <ul className="mt-6 space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] mt-1">style</span>
                  <span><b>Tương tác đa giác quan:</b> Giúp bé học sâu và nhớ lâu hơn qua việc cầm, nắm, chạm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] mt-1">health_and_safety</span>
                  <span><b>Thiết kế đẹp mắt, an toàn:</b> Chất liệu cao cấp, an toàn cho trẻ, khơi gợi hứng thú học tập.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] mt-1">family_restroom</span>
                  <span><b>Gắn kết gia đình:</b> Tạo ra những khoảnh khắc &quot;chơi mà học&quot; chất lượng cao cho cả nhà.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Sẵn sàng để bắt đầu hành trình cùng Momtek?</h2>
          <p className="section-subtitle mt-4">Hãy để chúng tôi đồng hành cùng bạn và bé, biến mỗi giờ học tiếng Anh trở thành những kỷ niệm đáng nhớ.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/offers" className="btn-primary font-bold text-lg py-4 px-8 rounded-full shadow-lg">Khám phá bộ sản phẩm</Link>
            <Link href="/experience" className="font-semibold text-gray-700 hover:text-[var(--color-primary)]">Hoặc, quay lại Trung tâm Trải nghiệm</Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}
