import { PayloadResponse, Unit } from '@/types/payload-types';

const PAYLOAD_API_URL = process.env.PAYLOAD_CMS_URL || 'http://localhost:3000/api';

/**
 * Lấy dữ liệu 1 Unit chi tiết từ Payload
 * @param unitSlug Slug của bài học
 */
export async function getUnitBySlug(unitSlug: string): Promise<Unit | null> {
  try {
    const query = `where[slug][equals]=${unitSlug}`;
    
    // Quan trọng: depth=3 như trong kế hoạch
    // depth=1: Lấy Unit
    // depth=2: Lấy mảng 'lessons'
    // depth=3: Lấy data của trường 'content' (Video, Quiz...) và 'topic'
    const url = `${PAYLOAD_API_URL}/units?${query}&depth=3`;

    console.log(`Đang fetch: ${url}`); // Dùng để debug

    const res = await fetch(url, {
      // CẬP NHẬT TẠI ĐÂY:
      // Tắt cache để xem thay đổi ngay lập tức (cho dev)
      // Khi nào deploy (production), bạn có thể đổi lại thành revalidate: 3600
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Lỗi khi fetch unit: ${res.statusText}`);
    }

    const data: PayloadResponse = await res.json();

    if (data.docs && data.docs.length > 0) {
      return data.docs[0]; // Trả về Unit đầu tiên tìm thấy
    }

    return null; // Không tìm thấy
  } catch (error) {
    console.error('Lỗi trong getUnitBySlug:', (error as Error).message);
    return null;
  }
}