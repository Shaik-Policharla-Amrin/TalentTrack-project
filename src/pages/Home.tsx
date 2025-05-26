import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/forms/SearchBar';
import FeaturedJobs from '../components/jobs/FeaturedJobs';
import { Briefcase as BriefcaseBusiness, Building2, Users, TrendingUp, Zap, Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6 leading-tight">
              Find Your Dream Job in India's Top Companies
            </h1>
            <p className="text-xl mb-10 text-blue-100">
              Connect with leading employers across India and discover opportunities that match your skills and career aspirations. Join thousands of professionals who found their perfect role through TalentTrack.
            </p>
            <div className="mb-8">
              <SearchBar variant="hero" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm mt-6">
              <span className="bg-white/20 rounded-full px-4 py-2">Remote Jobs</span>
              <span className="bg-white/20 rounded-full px-4 py-2">IT & Software</span>
              <span className="bg-white/20 rounded-full px-4 py-2">Digital Marketing</span>
              <span className="bg-white/20 rounded-full px-4 py-2">Data Science</span>
              <span className="bg-white/20 rounded-full px-4 py-2">Product Management</span>
            </div>
          </div>
        </div>
        <div className="w-full h-16 bg-wave-pattern bg-repeat-x bg-top"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Jobs Section */}
        <FeaturedJobs />

        {/* Job Categories */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Job Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-transform duration-200 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Technology</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Software development, data science, cloud computing, and other tech roles at India's leading IT companies.
              </p>
              <Link to="/jobs?category=Development" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Explore jobs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-transform duration-200 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-3">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Business</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Digital marketing, sales, finance, HR, and business operations roles in startups and established companies.
              </p>
              <Link to="/jobs?category=Marketing" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Explore jobs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-transform duration-200 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                UX/UI design, product design, graphic design, and creative roles in India's top design studios and tech companies.
              </p>
              <Link to="/jobs?category=Design" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Explore jobs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="my-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Choose TalentTrack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              India's premier platform connecting talented professionals with the country's most innovative companies. Here's what sets us apart:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Opportunities</h3>
              <p className="text-gray-600">
                Access exclusive job openings at India's top startups, MNCs, and emerging companies across all major tech hubs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our advanced algorithms match your skills and preferences with the perfect opportunities in your desired location.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Employers</h3>
              <p className="text-gray-600">
                All companies on our platform are thoroughly verified to ensure a safe and reliable job search experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Your Career to the Next Level?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who found their dream jobs through TalentTrack. Whether you're a fresher or an experienced professional, we have the right opportunity for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Create an Account
            </Link>
            <Link
              to="/jobs"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors"
            >
              Browse Jobs
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;