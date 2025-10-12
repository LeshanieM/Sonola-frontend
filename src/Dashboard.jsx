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

  const Card = ({ image, title, description }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <img src={image} alt={title} className="w-20 h-20 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden">
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
      <div className="ml-20 flex-1 overflow-x-hidden">
        {/* Header */}
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md px-6 py-4">
          {/* Left side: Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png" // replace with your logo path
              alt="Sonola Logo"
              className="w-10 h-10 object-cover"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Sonola
            </span>
          </div>

          {/* Middle: Search Bar */}
          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Right side: Dark Mode Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-12 px-6 lg:px-12 rounded-3xl shadow-inner mt-6 flex flex-col lg:flex-row items-start justify-start gap-6">
          {/* Left Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Getting started in Sonola
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create intriguing marketing contents with ease!
            </p>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg transition">
              <span className="mr-2">➕</span> Start creating now
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-2 max-w-lg">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                Increase Customer Retention by 85%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                AI Summarised Reports
              </p>
              <img
                src="/chart.png"
                alt="Chart"
                className="mt-3 rounded-lg object-cover w-full h-32"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow flex flex-col justify-center items-center">
              <img
                src="/emma.png"
                alt="Emma Owens"
                className="rounded-xl w-full h-28 object-cover"
              />
              <p className="font-semibold text-gray-900 dark:text-white mt-2">
                Emma Owens
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Lead Project Director
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Invite people
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-center flex flex-col justify-center">
              <img
                src="/inter.png"
                alt="integrate"
                className="rounded-xl w-full h-28 object-cover"
              />
              <p className="font-semibold text-gray-900 dark:text-white">
                Integrations
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect with your favourite apps
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <main className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* For You Section */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              For You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {cards.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </div>

            {/* Recent Section */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Recent
            </h2>
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
        </main>
      </div>
    </div>
  );
}
