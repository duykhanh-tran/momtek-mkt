'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useModal } from '@/context/ModalContext'; 

export default function LoginForm() {
  const { setView } = useModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true); 
    
    try {
      const result = await signIn('credentials', { 
        redirect: false, 
        email, 
        password 
      });

      if (result?.error) {
        if (result.error === 'CredentialsSignin') {
          setError('Email hoặc mật khẩu không chính xác.');
        } else if (result.error === 'Configuration') {
          setError('Lỗi cấu hình hệ thống. Vui lòng thử lại sau.');
        } else {
          setError('Đăng nhập thất bại. Vui lòng thử lại.');
        }
      } else if (!result?.ok) {
        setError('Lỗi kết nối. Vui lòng kiểm tra kết nối mạng và thử lại.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Lỗi kết nối. Vui lòng kiểm tra kết nối mạng và thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">Đăng nhập</h1>
      
      {/* --- Nút đăng nhập bằng SSO --- */}
      <div className="space-y-3 pt-2">
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
           <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.82l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
          Đăng nhập với Google
        </button>
        <button
          onClick={() => signIn('facebook', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
          </svg>
          Đăng nhập với Facebook
        </button>
      </div>

      {/* --- Dải phân cách --- */}
      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase">Hoặc với email</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* --- Form đăng nhập bằng Email --- */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        
        <button
          type="submit"
          disabled={loading} // Vô hiệu hóa nút khi đang tải
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
        >
          {loading ? 'Đang xử lý...' : 'Đăng nhập'}
        </button>
      </form>
      <p className="text-center text-sm mt-4 text-gray-600">
        Chưa có tài khoản?{' '}
        <button onClick={() => setView('register')} className="font-medium text-indigo-600 hover:text-indigo-500">
          Đăng ký
        </button>
      </p>
    </div>
  );
}