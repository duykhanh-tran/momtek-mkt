import Link from 'next/link';
import Image from 'next/image';


export default function AboutUsPage() {
  return (
    <main>
      
      {/* Section 1: Hero Section */}
      <section className="py-20 md:py-32 text-center bg-blue-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
            Mọi trẻ em đều xứng đáng
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            có một khởi đầu tốt nhất, ngay tại nhà
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
                priority
              />
              <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full text-white" title="Cẩm nang & Blog">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Founder's Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="lg:order-2">
            <Image 
              src="https://dl.dropboxusercontent.com/s/fi/tl3aorh8t0adytk0c31vo/McMillan-23-8.jpg?rlkey=zx6ylu4kyipps9ibc1ckvq2e8&st=kdzvfyra&dl=0" 
              alt="Nhà sáng lập Momtek" 
              width={800} 
              height={800} 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="section-title">Hành trình của Momtek bắt đầu từ trăn trở của một người mẹ...</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-700">
              <p>&quot;Tôi đã từng bất lực khi thấy con sợ đến trung tâm, từng loay hoay không biết phải dạy con từ đâu, và từng mất tự tin vì sợ mình phát âm không chuẩn. Tôi tin rằng hàng triệu ba mẹ ngoài kia cũng có chung nỗi niềm đó.&quot;</p>
              <p>Đó là khoảnh khắc tôi nhận ra, không có phương pháp nào hiệu quả bằng việc ba mẹ đồng hành cùng con trong một môi trường học-mà-chơi đầy yêu thương, ngay tại chính ngôi nhà của mình.</p>
              <p>Và Momtek ra đời từ đó - một quyết tâm cháy bỏng để xây dựng một giải pháp toàn diện, giúp mọi gia đình có thể biến giờ học tiếng Anh trở thành những khoảnh khắc gắn kết quý giá.</p>
              <p className="mt-6 font-bold text-gray-800">— Trần Thu Lan, Nhà sáng lập &amp; CEO Momtek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-primary)]">Sứ mệnh của chúng tôi</h3>
            <p className="mt-4 text-xl text-gray-700 text-justify">Trao cho 1 triệu ba mẹ Việt Nam sự tự tin, công cụ và lộ trình rõ ràng để đồng hành cùng con chinh phục tiếng Anh ngay tại nhà.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-primary)]">Tầm nhìn của chúng tôi</h3>
            <p className="mt-4 text-xl text-gray-700 text-justify">Trở thành người bạn đồng hành đáng tin cậy nhất trong tủ sách và trong tim của mọi gia đình Việt, kiến tạo một thế hệ trẻ em yêu thích học hỏi và gắn kết sâu sắc với ba mẹ.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Những trái tim và khối óc đằng sau Momtek</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member Card 1 */}
            <div className="text-center">
              <Link href="#" className="inline-block">
                <Image
                  src="https://dl.dropboxusercontent.com/s/fi/tl3aorh8t0adytk0c31vo/McMillan-23-8.jpg?rlkey=zx6ylu4kyipps9ibc1ckvq2e8&st=kdzvfyra&dl=0"
                  alt="Trần Thu Lan"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mx-auto rounded-full object-cover shadow-lg"
                />
              </Link>
              <h4 className="mt-4 text-xl font-bold text-black">Trần Thu Lan</h4>
              <p className="text-[var(--color-primary)] font-semibold">Nhà sáng lập &amp; CEO</p>
              <p className="mt-2 text-sm text-gray-600">&quot;Với 10 năm kinh nghiệm trong lĩnh vực giáo dục sớm, tôi tin rằng tình yêu của ba mẹ là chất liệu tốt nhất cho sự phát triển của con.&quot;</p>
            </div>
            {/* Team Member Card 2 */}
            <div className="text-center">
                <Link href="#" className="inline-block">
                    <Image
                        src="https://dl.dropboxusercontent.com/s/fi/tl3aorh8t0adytk0c31vo/McMillan-23-8.jpg?rlkey=zx6ylu4kyipps9ibc1ckvq2e8&st=kdzvfyra&dl=0"
                        alt="Lê Quang Minh"
                        width={60} height={60}
                        className="w-[60px] h-[60px] mx-auto rounded-full object-cover shadow-lg"
                    />
                </Link>
                <h4 className="mt-4 text-xl font-bold text-black">Lê Quang Minh</h4>
                <p className="text-[var(--color-primary)] font-semibold">Cố vấn Chuyên môn</p>
                <p className="mt-2 text-sm text-gray-600">&quot;Phương pháp của Momtek được xây dựng trên nền tảng khoa học về tâm lý và sự phát triển ngôn ngữ của trẻ.&quot;</p>
            </div>
            {/* Team Member Card 3 */}
            <div className="text-center">
                <Link href="#" className="inline-block">
                    <Image
                        src="https://dl.dropboxusercontent.com/s/fi/tl3aorh8t0adytk0c31vo/McMillan-23-8.jpg?rlkey=zx6ylu4kyipps9ibc1ckvq2e8&st=kdzvfyra&dl=0"
                        alt="Phạm Quỳnh Anh"
                        width={60} height={60}
                        className="w-[60px] h-[60px] mx-auto rounded-full object-cover shadow-lg"
                    />
                </Link>
                <h4 className="mt-4 text-xl font-bold text-black">Phạm Quỳnh Anh</h4>
                <p className="text-[var(--color-primary)] font-semibold">Trưởng nhóm Sản phẩm</p>
                <p className="mt-2 text-sm text-gray-600">&quot;Mỗi chi tiết trong học liệu và ứng dụng đều được chúng tôi chăm chút để mang lại trải nghiệm tốt nhất.&quot;</p>
            </div>
            {/* Team Member Card 4 */}
            <div className="text-center">
                <Link href="#" className="inline-block">
                    <Image
                        src="https://dl.dropboxusercontent.com/s/fi/tl3aorh8t0adytk0c31vo/McMillan-23-8.jpg?rlkey=zx6ylu4kyipps9ibc1ckvq2e8&st=kdzvfyra&dl=0"
                        alt="Nguyễn Tiến Dũng"
                        width={60} height={60}
                        className="w-[60px] h-[60px] mx-auto rounded-full object-cover shadow-lg"
                    />
                </Link>
                <h4 className="mt-4 text-xl font-bold text-black">Nguyễn Tiến Dũng</h4>
                <p className="text-[var(--color-primary)] font-semibold">Trưởng nhóm Công nghệ</p>
                <p className="mt-2 text-sm text-gray-600">&quot;Chúng tôi tự hào mang đến công nghệ AI luyện âm tiên tiến để hỗ trợ các gia đình Việt Nam.&quot;</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 5: Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">La bàn dẫn lối cho mọi quyết định của chúng tôi</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">family_restroom</span>
              </div>
              <h4 className="mt-4 text-xl font-bold text-black">Lấy gia đình làm trung tâm</h4>
              <p className="mt-2 text-gray-600">Mọi sản phẩm đều được thiết kế để vun đắp tình cảm và sự gắn kết gia đình.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">psychology</span>
              </div>
              <h4 className="mt-4 text-xl font-bold text-black">Thấu hiểu trẻ em</h4>
              <p className="mt-2 text-gray-600">Phương pháp học tôn trọng tâm lý và nhịp độ phát triển tự nhiên của trẻ.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">tips_and_updates</span>
              </div>
              <h4 className="mt-4 text-xl font-bold text-black">Đổi mới và Sáng tạo</h4>
              <p className="mt-2 text-gray-600">Luôn ứng dụng công nghệ và các phương pháp sư phạm tiên tiến nhất.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">verified</span>
              </div>
              <h4 className="mt-4 text-xl font-bold text-black">Cam kết và Đồng hành</h4>
              <p className="mt-2 text-gray-600">Chúng tôi không chỉ bán sản phẩm, chúng tôi đồng hành cùng ba mẹ trong suốt hành trình.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 6: Final CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Hãy cùng Momtek viết nên câu chuyện thành công của riêng bạn</h2>
          <p className="section-subtitle mt-4">Chúng tôi rất mong được trở thành một phần trong hành trình nuôi dạy con đầy ý nghĩa của bạn.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/offers" className="btn-primary font-bold text-lg py-4 px-8 rounded-full shadow-lg">Khám phá các gói sản phẩm</Link>
            <Link href="/lien-he" className="font-semibold text-gray-700 hover:text-[var(--color-primary)]">Hoặc liên hệ với chúng tôi</Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}