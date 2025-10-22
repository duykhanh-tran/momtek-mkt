// File: src/components/auth/UserMenu.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const UserMenu: React.FC = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (status === 'loading' || !session?.user) {
        return (
            <div className="w-40 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        );
    }

    // --- Logic lấy ảnh đại diện đã được cải tiến ---
    const payloadURL = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    const payloadAvatarUrl = session.user.avatar?.url
        ? `${payloadURL}${session.user.avatar.url}`
        : null;

    const userImage = payloadAvatarUrl 
        || session.user.image 
        || `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user.name || 'U')}&background=random`;

    const userName = session.user.name || session.user.email || 'User';
    const userEmail = session.user.email || '';

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full transition hover:bg-gray-100 p-1 pr-3"
            >
                <Image
                    src={userImage}
                    alt="User Avatar"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover border-2 border-white shadow"
                />
                <div className="hidden sm:flex flex-col items-start">
                    <span className="text-xs text-gray-500 -mb-1">Chào mừng</span>
                    <span className="font-semibold text-gray-800 text-sm truncate max-w-[100px]">{userName}</span>
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-60 rounded-xl border bg-white/95 shadow-lg">
                    <div className="p-2">
                        <div className="px-3 py-2 text-gray-700">
                            <p className="font-semibold">{userName}</p>
                            <p className="truncate text-sm text-gray-500">{userEmail}</p>
                        </div>
                        <hr className="my-1 border-gray-200" />
                        <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                            Bảng điều khiển
                        </Link>
                        <Link href="/profile-settings" onClick={() => setIsOpen(false)} className="flex items-center w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                            Cài đặt tài khoản
                        </Link>
                        <hr className="my-1 border-gray-200" />
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="flex items-center w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;