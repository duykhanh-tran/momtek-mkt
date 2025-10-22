import React from 'react';
import Link from 'next/link';

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Cột 1: Giới thiệu */}
          <div>
            <h3 className="text-xl font-bold text-orange-400">Momtek</h3>
            <p className="mt-4 text-gray-400">
              Đồng hành cùng phụ huynh Việt Nam trên hành trình dạy con học tiếng Anh tại nhà.
            </p>
          </div>
          {/* Cột 2: Sản phẩm */}
          <div>
            <h4 className="font-bold tracking-wider uppercase">Sản phẩm</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/experience" className="text-gray-400 hover:text-white">Trung tâm Trải nghiệm</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white">Trung tâm Tài nguyên</Link></li>
              <li><Link href="/offers" className="text-gray-400 hover:text-white">Tổng quan sản phẩm</Link></li>
            </ul>
          </div>
          {/* Cột 3: Về Momtek */}
          <div>
            <h4 className="font-bold tracking-wider uppercase">Về Momtek</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/ve-chung-toi" className="text-gray-400 hover:text-white">Về chúng tôi</Link></li>
              <li><Link href="/lien-he" className="text-gray-400 hover:text-white">Liên hệ</Link></li>
              <li><Link href="/cau-hoi-thuong-gap" className="text-gray-400 hover:text-white">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>
          {/* Cột 4: Pháp lý */}
          <div>
            <h4 className="font-bold tracking-wider uppercase">Pháp lý</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/chinh-sach-bao-mat" className="text-gray-400 hover:text-white">Chính sách bảo mật</Link></li>
              <li><Link href="/dieu-khoan-su-dung" className="text-gray-400 hover:text-white">Điều khoản sử dụng</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Momtek. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons */}
            <SocialIcon href="https://facebook.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
