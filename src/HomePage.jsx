import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700">JobBoard</span>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-700">Home</a></li>
          <li><a href="#" className="hover:text-blue-700">Browse Jobs</a></li>
          <li><a href="#" className="hover:text-blue-700">Pages</a></li>
          <li><a href="#" className="hover:text-blue-700">Blog</a></li>
          <li><a href="#" className="hover:text-blue-700">Contact</a></li>
        </ul>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-lg border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition">Log In</button>
          <button className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">Post a Job</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container flex flex-col-reverse md:flex-row items-center gap-10 py-16">
        {/* Left: Headline & CTA */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Find your <span className="text-green-500">Dream Job</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover thousands of jobs and apply easily. Your next career move is just a click away!
          </p>
          <button className="px-8 py-3 rounded-lg bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 transition mb-8">
            Upload Your Resume
          </button>
          {/* Job Search Bar */}
          <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Keyword (e.g. designer, developer)"
              className="search-bar flex-1"
            />
            <input
              type="text"
              placeholder="Location"
              className="search-bar flex-1"
            />
            <select className="search-bar flex-1">
              <option value="">Category</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Other</option>
            </select>
            <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-800 transition w-full md:w-auto">
              Find Job
            </button>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center">
          {/* SVG Illustration */}
          <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chart */}
            <rect x="40" y="60" width="260" height="140" rx="16" fill="#E0E7FF"/>
            <rect x="60" y="170" width="30" height="30" rx="6" fill="#60A5FA"/>
            <rect x="110" y="130" width="30" height="70" rx="6" fill="#34D399"/>
            <rect x="160" y="100" width="30" height="100" rx="6" fill="#2563EB"/>
            <rect x="210" y="150" width="30" height="50" rx="6" fill="#FBBF24"/>
            {/* Person 1 */}
            <ellipse cx="90" cy="230" rx="22" ry="10" fill="#D1FAE5"/>
            <circle cx="90" cy="210" r="14" fill="#60A5FA"/>
            <rect x="80" y="220" width="20" height="20" rx="6" fill="#2563EB"/>
            {/* Person 2 */}
            <ellipse cx="240" cy="230" rx="22" ry="10" fill="#DBEAFE"/>
            <circle cx="240" cy="210" r="14" fill="#34D399"/>
            <rect x="230" y="220" width="20" height="20" rx="6" fill="#059669"/>
            {/* Chart lines */}
            <polyline points="70,180 125,150 175,120 225,170" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
            {/* Data points */}
            <circle cx="70" cy="180" r="4" fill="#2563EB"/>
            <circle cx="125" cy="150" r="4" fill="#2563EB"/>
            <circle cx="175" cy="120" r="4" fill="#2563EB"/>
            <circle cx="225" cy="170" r="4" fill="#2563EB"/>
          </svg>
        </div>
      </section>
    </div>
  );
}
