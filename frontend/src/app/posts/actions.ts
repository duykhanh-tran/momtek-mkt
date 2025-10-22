'use server';

import { z } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

// Định nghĩa schema để xác thực dữ liệu
const FormSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  email: z.string().email({ message: "Vui lòng nhập một địa chỉ email hợp lệ." }),
});

// Kiểu dữ liệu cho trạng thái trả về
export type FormState = {
  message: string;
  status: 'success' | 'error';
} | null;

export async function submitLeadMagnetForm(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!API_URL) {
    return { status: 'error', message: 'Lỗi cấu hình server.' };
  }

  // Chuyển đổi FormData thành object
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
  };

  // Xác thực dữ liệu
  const validatedFields = FormSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    // Lấy lỗi đầu tiên và trả về
    const firstError = validatedFields.error.flatten().fieldErrors;
    const errorMessage = Object.values(firstError)[0]?.[0] || 'Dữ liệu không hợp lệ.';
    return { status: 'error', message: errorMessage };
  }
  
  // Gửi dữ liệu đến Payload
  try {
    const response = await fetch(`${API_URL}/api/form-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...validatedFields.data,
        source: 'Blog Lead Magnet', // Ghi nhận nguồn đăng ký
      }),
    });

    if (!response.ok) {
      return { status: 'error', message: 'Đã có lỗi xảy ra từ server. Vui lòng thử lại.' };
    }

    return { status: 'success', message: 'Cảm ơn bạn đã đăng ký! Hãy kiểm tra email để nhận cẩm nang nhé.' };
  } catch (error) {
    return { status: 'error', message: 'Lỗi kết nối. Vui lòng thử lại sau.' };
  }
}