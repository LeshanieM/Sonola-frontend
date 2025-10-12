import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const goNext = () => {
    navigate('/next');
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 relative">
      {/* 🌙 Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Box */}
      <div className="flex w-[80%] h-[80%] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
        <div className="w-1/2 p-12 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Welcome to Sonola
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              With Sonola, making stand-out marketing content is as easy as a
              few clicks. Let’s get started!
            </p>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-sm text-gray-700 dark:text-gray-200 mb-4">
              <p>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  63%
                </span>{' '}
                of marketers say creating engaging content consistently is their
                biggest challenge.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Content Marketing Institute, 2022
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-2 w-8 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
                <div className="h-2 w-8 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
                <div className="h-2 w-8 bg-blue-500 rounded-full"></div>
                <div className="h-2 w-8 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
              </div>

              <button
                onClick={goNext}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-gradient-to-br from-blue-400 to-blue-700 dark:from-blue-700 dark:to-blue-900 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 p-12 rounded-2xl">
            <img
              src="/logo.png"
              alt="Sonola Logo"
              className="w-48 opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
