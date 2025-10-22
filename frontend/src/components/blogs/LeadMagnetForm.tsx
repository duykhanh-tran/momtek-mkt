'use client';

import { useActionState } from 'react'; 
import { useFormStatus } from 'react-dom';
import { submitLeadMagnetForm, type FormState } from '@/app/posts/actions';
import Image from 'next/image';

const PRIMARY_COLOR_CLASS = 'text-[var(--color-primary)]'; 
const PRIMARY_BG_COLOR_CLASS = 'bg-[var(--color-primary)]'; // Màu nền nút

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      // Nút: Chữ trắng (text-white), nền màu primary (PRIMARY_BG_COLOR_CLASS)
      // Thêm hiệu ứng hover và disabled
      className={`w-full text-lg font-bold py-3 px-8 rounded-full shadow-lg transition-colors 
        text-white ${PRIMARY_BG_COLOR_CLASS} 
        hover:opacity-90 
        disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {pending ? 'Đang gửi...' : 'Đăng ký ngay'}
    </button>
  );
}

export const LeadMagnetForm = () => {
  const initialState: FormState = null;
  const [state, formAction] = useActionState(submitLeadMagnetForm, initialState);

  return (
    
    <section className="py-16 "> 
      <div className="container mx-auto px-6">
        <div className="card md:p-12 p-8 grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto bg-white rounded-xl shadow-2xl">
          <div>
            {/* TIÊU ĐỀ: Giữ nguyên size lớn và màu primary */}
            <h2 className={`section-title text-5xl font-extrabold ${PRIMARY_COLOR_CLASS}`}>
              Cẩm nang Chiến lược toàn tập!
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Tạo tài khoản miễn phí để nhận ngay "Cẩm nang Chiến lược" và mở khóa toàn bộ hoạt động được các chuyên gia của Momtek xây dựng.
            </p>
            {/* LIST */}
            <ul className="mt-6 space-y-3 text-left text-gray-700">
              <li className="flex items-start">
                {/* ICON: Giữ nguyên màu xanh lá cho icon check */}
                <span className="material-symbols-outlined mr-2 mt-0.5 text-green-500 flex-shrink-0">
                  check_circle
                </span>
                <span className="text-base">
                  <strong>Lộ trình chi tiết</strong> cho 30 ngày đầu tiên.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-2 mt-0.5 text-green-500 flex-shrink-0">
                  check_circle
                </span>
                <span className="text-base">
                  <strong>Checklist các công cụ</strong> cần chuẩn bị.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-2 mt-0.5 text-green-500 flex-shrink-0">
                  check_circle
                </span>
                <span className="text-base">
                  <strong>File in các hoạt động thực hành</strong> giá trị.
                </span>
              </li>
            </ul>
            {/* Form */}
            <form action={formAction} className="mt-6 space-y-4">
              <div className="flex gap-4">
                {/* Phần tử trống ban đầu đã bị loại bỏ */}
              </div>
              {/* Input Fields */}
              <input 
                type="text" 
                name="name"
                placeholder="Tên của bạn" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email của bạn"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
              {/* Submit Button (đã được cập nhật màu) */}
              <SubmitButton />
              
              {/* State Message */}
              {state?.message && (
                <p className={`mt-4 text-sm font-semibold text-center ${state.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {state.message}
                </p>
              )}
            </form>
          </div>
          <div className="hidden lg:block">
            <Image 
              src="data:image/jpeg;base64,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"
              alt="Bìa Cẩm nang Chiến lược Momtek"
              width={600}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};