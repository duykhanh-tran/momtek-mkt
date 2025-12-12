import { getUnitBySlug } from '@/lib/payload-api';
import { Unit } from '@/types/payload-types';
import { notFound } from 'next/navigation';
import RichTextRenderer from '@/components/unit/RichTextRenderer';
import UnitLayout from '@/components/unit/UnitLayout';

interface PageProps {
  params: Promise<{
    unitSlug: string;
  }>;
}

export default async function UnitPage({ params }: PageProps) {
  const { unitSlug } = await params;
  const unit: Unit | null = await getUnitBySlug(unitSlug);
  //  console.log("DATA MÀ SERVER NHẬN ĐƯỢC:", JSON.stringify(unit, null, 2));

  // 2. Xử lý không tìm thấy (Giữ nguyên)
  if (!unit) {
    notFound();
  }
  if (!unit.lessons || unit.lessons.length === 0) {
     return (
       <div className="p-8 max-w-7xl mx-auto  ">
         <h1 className="text-3xl font-bold mb-4">{unit.title}</h1>
         {/* Mô tả của Unit (nếu có) */}
         {unit.description && (
          <div className="prose prose-sm mb-4">
            <RichTextRenderer content={unit.description} />
          </div>
         )}
         <p className="text-red-500">Bài học này chưa có nội dung.</p>
       </div>
     );
  }

  return (
    <UnitLayout unit={unit} />
  );
}