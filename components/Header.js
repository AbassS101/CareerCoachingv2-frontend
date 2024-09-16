// components/Header.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              Career Coaching
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/coaches" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Find a Coach
              </Link>
              {isLoggedIn && (
                <Link href="/profile" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Profile
                </Link>
              )}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                  Login
                </Link>
                <Link href="/register" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}