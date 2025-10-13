import React, { useEffect, useState } from 'react';
import {
  Home,
  Folder,
  LayoutTemplate,
  UploadCloud,
  MoreHorizontal,
  Settings,
  Lightbulb,
} from 'lucide-react';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  //Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  //Toggle light/dark mode
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

  //Cards data
  const cards = [
    {
      image: 'webpage.png',
      title: 'Web Pages',
      description: 'Good products deserve good websites.',
    },
    {
      image: 'presentation.png',
      title: 'Presentations',
      description: 'Easily edit our animated templates.',
    },
    {
      image: 'social.png',
      title: 'Social Media',
      description: 'Everything you need for social kits.',
    },
    {
      image: 'sales.png',
      title: 'Sales Pitch',
      description: 'Turn your dreams into reality.',
    },
  ];

  //Reusable Card component
  const Card = ({ image, title, description }) => (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
      {/* change card height here*/}
      <div className="h-20 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      {/* SIDEBAR */}
      <aside className="fixed top-0 left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-between py-6">
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

        {/* Bottom Icons */}
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Lightbulb size={20} className="text-gray-700 dark:text-gray-100" />
          </button>
          <Settings size={22} className="text-gray-600 dark:text-gray-300" />
          <img
            src="/avatar.png"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="ml-20 flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sonola Logo"
              className="w-10 h-10 object-cover"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Sonola
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* HERO */}
        <section className="bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 px-20 py-8 flex flex-col lg:flex-row items-center justify-between rounded-3xl mx-6 mt-4 shadow">
          {/* Text content */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Getting started in Sonola
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Create intriguing marketing contents with ease!
            </p>
            <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow transition">
              ➕ Start creating now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-md mt-6 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow">
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                Customer Retention +85%
              </p>
              <img
                src="/chart.png"
                alt="Chart"
                className="mt-2 rounded-lg object-cover w-full h-20"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow text-center">
              <img
                src="/emma.png"
                alt="Emma"
                className="rounded-xl w-full h-20 object-cover"
              />
              <p className="font-semibold text-gray-900 dark:text-white mt-2">
                Emma Owens
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Lead Director
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-center flex flex-col justify-center">
              <img
                src="/collaborate.png"
                alt="collaborate"
                className="rounded-xl w-full h-28 object-cover"
              />
              <p className="font-semibold text-gray-900 dark:text-white">
                Collaborate
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-center flex flex-col justify-center">
              <img
                src="/social.png"
                alt="social"
                className="rounded-xl w-full h-28 object-cover"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Invite people
              </p>
            </div>
          </div>
        </section>

        {/* MAIN SECTIONS */}
        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-6xl mx-auto space-y-4">
            {/* For You */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                For You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card) => (
                  <Card key={card.title} {...card} />
                ))}
              </div>
            </section>

            {/* Recent */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Recent
              </h2>
              <div className="h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      image: 'document.png',
                      title: 'Document',
                      description: 'Started 2 days ago',
                    },
                    {
                      image: 'web.png',
                      title: 'Web Pages',
                      description: 'Updated yesterday',
                    },
                    {
                      image: 'sec.png',
                      title: '60 Second Cut',
                      description: 'Edited today',
                    },
                    {
                      image: 'page.png',
                      title: 'Web Pages',
                      description: 'Created 3 days ago',
                    },
                  ].map((item) => (
                    <Card key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
