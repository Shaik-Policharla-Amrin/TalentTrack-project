import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RegisterForm from '../components/forms/RegisterForm';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-16rem)] bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8 text-center">
              <Link to="/" className="inline-flex items-center">
                <BriefcaseBusiness size={40} className="h-10 w-auto text-blue-600" />
                <span className="ml-3 text-2xl font-bold text-gray-900">TalentTrack</span>
              </Link>
              <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Create an account</h1>
              <p className="mt-2 text-lg text-gray-600">
                Join our platform and discover exciting job opportunities or find the perfect candidates.
              </p>
            </div>
            
            <RegisterForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;