'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useModal } from '@/context/ModalContext'; 
import UserMenu from './auth/UserMenu'; 

type NavItem = { href: string; label: string; isBold?: boolean };
type NavLink = { title: string; href: string; submenu?: NavItem[] };


const navLinks: NavLink[] = [
  {
    title: 'Trải nghiệm',
    href: '/experience',
    submenu: [
      { href: '/experience', label: 'Tổng quan Trải nghiệm', isBold: true },
      { href: '/experience/luyen-am-ai', label: 'Luyện âm AI' },
      { href: '/experience/studio-sang-tao', label: 'Studio Sáng tạo' },
      { href: '/experience/quiz-va-game', label: 'Quiz & Game' },
    ],
  },
  {
    title: 'Tài nguyên',
    href: '/resources',
    submenu: [
      { href: '/resources', label: 'Tổng quan Tài nguyên', isBold: true },
      { href: '/posts', label: 'Cẩm nang & Blog' },
      { href: '/resources/thu-vien-hoat-dong', label: 'Thư viện Hoạt động' },
      { href: '/resources/podcast', label: 'Podcast & Video' },
    ],
  },
  { title: 'Phương pháp', href: '/method' },
  { title: 'Sản phẩm', href: '/product' },
  { title: 'Về Momtek', href: '/about-us' },
  { title: 'Lộ trình học', href: '/roadmap' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { data: session, status } = useSession();
  const { openModal } = useModal();
  

  // Đóng menu mobile khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };
  
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="container mx-auto px-6 h-[72px] md:h-[80px]">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://dl.dropboxusercontent.com/s/fi/2115q1brthf2bst968ovm/Logo-MomTek-v4.png?rlkey=5x9axm7dq6nx56etdsl3r4ixg&st=8s1ea6d1&dl=0"
              alt="Momtek"
              width={120}
              height={36}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => 
              link.submenu ? (
                <div key={link.title} className="relative group flex items-center">
                  <Link href={link.href} className="text-gray-700 hover:text-blue-700 transition-colors">{link.title}</Link>
                  <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border bg-white/95 shadow-lg opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <nav className="py-2 px-2">
                      {link.submenu.map((item) => (
                        <Link key={item.href} href={item.href} className={`block px-4 py-2.5 rounded-lg transition-colors ${item.isBold ? 'font-bold text-blue-700 bg-gray-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              ) : (
                <Link key={link.title} href={link.href} className="text-gray-700 hover:text-blue-700 transition-colors">{link.title}</Link>
              )
            )}
          </div>

          {/* Nút xác thực & Nút mở menu mobile */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center space-x-4">
                {status === 'loading' && <div className="w-40 h-10 bg-gray-200 rounded-full animate-pulse"></div>}
                {status === 'unauthenticated' && (
                  <>
                    <button onClick={() => openModal('register')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Đăng kí</button>
                    <button onClick={() => openModal('login')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all">Đăng nhập</button>
                  </>
                )}
                {status === 'authenticated' && <UserMenu /> }
            </div>
            <button className="md:hidden p-2 rounded-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`md:hidden bg-white shadow-lg border-t transition-all duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'max-h-[calc(100vh-72px)]' : 'max-h-0'}`}>
        <div className="py-4">
          {navLinks.map((link) => 
            link.submenu ? (
              <div key={link.title}>
                <button className="w-full flex justify-between items-center py-3 px-6" onClick={() => toggleAccordion(link.title)}>
                  <span className="font-medium text-gray-800">{link.title}</span>
                  <svg className={`w-5 h-5 transition-transform ${openAccordion === link.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`bg-gray-50 pl-8 overflow-hidden transition-all duration-300 ${openAccordion === link.title ? 'max-h-96' : 'max-h-0'}`}>
                  {link.submenu.map((item) => (
                    <Link key={item.href} href={item.href} className={`block py-2.5 ${item.isBold ? 'font-semibold text-blue-700' : 'text-gray-600'}`} onClick={handleMobileLinkClick}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.title} href={link.href} className="block py-3 px-6 font-medium text-gray-800" onClick={handleMobileLinkClick}>{link.title}</Link>
            )
          )}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
            {status === 'loading' && <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>}
            {status === 'unauthenticated' && (
                <div className="space-y-3">
                    <button onClick={() => { openModal('login'); handleMobileLinkClick(); }} className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg">Đăng nhập</button>
                    <button onClick={() => { openModal('register'); handleMobileLinkClick(); }} className="w-full bg-gray-100 text-gray-800 font-semibold py-2.5 rounded-lg">Đăng kí</button>
                </div>
            )}
            {status === 'authenticated' && <UserMenu /> }
        </div>
      </div>
    </header>
  );
};

export default Header;