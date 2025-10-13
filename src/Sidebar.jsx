import React from 'react';
import {
  Home,
  Folder,
  LayoutTemplate,
  UploadCloud,
  MoreHorizontal,
  Settings,
  Lightbulb,
} from 'lucide-react';

export default function Sidebar({ darkMode, toggleTheme }) {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-between py-6">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-6">
        <div className="bg-blue-600 p-3 rounded-2xl">
          <Home size={22} className="text-white" />
        </div>

        <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          <Folder size={22} className="text-gray-800 dark:text-gray-100" />
        </div>

        <div className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
          <LayoutTemplate size={22} />
        </div>

        <div className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
          <UploadCloud size={22} />
        </div>

        <div className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
          <MoreHorizontal size={22} />
        </div>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-5">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <Lightbulb size={20} className="text-gray-700 dark:text-gray-100" />
        </button>

        <Settings size={22} className="text-gray-600 dark:text-gray-300" />

        {/* Profile image */}
        <img
          src="/avatar.png"
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
      </div>
    </aside>
  );
}
