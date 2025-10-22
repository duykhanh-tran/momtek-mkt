'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useModal } from '@/context/ModalContext';
import LoginForm from '@/components/auth/LoginForm'; 
import RegisterForm from '@/components/auth/RegisterForm';

export default function AuthModal() {
  const { isOpen, view, closeModal } = useModal();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      closeModal();
    }
  }, [session, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 text-2xl font-light text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          &times;
        </button>
        {view === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}