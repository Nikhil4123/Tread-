/* eslint-disable no-unused-vars */
import React from "react";
import { ShieldCheck, Lock, Globe, Eye, UserCheck } from "lucide-react"; // Import icons from lucide-react
import Navbar2 from "../navbar/Navbar2";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gray-900">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-violet-800 to-purple-700 shadow-lg">
        <Navbar2 />
      </div>
      
      <div className="max-w-4xl mx-auto py-10 px-6 md:px-12 text-gray-800 dark:text-gray-100 transition duration-300 ease-in-out transform hover:scale-[101%]">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Privacy Policy
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck size={24} className="text-purple-700 dark:text-violet-400" /> 
            Our Commitment to Privacy
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            Your privacy is of utmost importance to us. At COZWEB, we prioritize
            transparency, security, and accountability in handling your personal
            information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Lock size={24} className="text-purple-700 dark:text-violet-400" /> 
            Information We Collect
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            We may collect personal data such as your name, email address, and
            contact details when you register or use our services. Additionally,
            we gather usage data to enhance your experience and provide
            customized solutions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Eye size={24} className="text-purple-700 dark:text-violet-400" /> 
            How We Use Your Information
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            We use the collected information to improve our services, communicate
            updates, offer personalized experiences, and protect against
            fraudulent activities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Globe size={24} className="text-purple-700 dark:text-violet-400" /> 
            Data Sharing and Security
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            Your data is secured using industry-standard encryption techniques.
            We only share your information with trusted partners to enhance
            service delivery, and we ensure they comply with strict privacy
            guidelines.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <UserCheck size={24} className="text-purple-700 dark:text-violet-400" /> 
            Your Rights and Control
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            You have the right to access, modify, or delete your personal
            information. If you have any concerns, please feel free to contact us
            using the information provided below.
          </p>
        </section>

        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
            <UserCheck size={24} className="text-purple-700 dark:text-violet-400" /> 
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-relaxed">
            If you have any questions regarding our privacy policy or your
            personal information, please reach out to us at{" "}
            <a
              href="mailto:support@cozweb.com"
              className="text-violet-600 dark:text-purple-400 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              support@cozweb.com
            </a>
            .
          </p>
        </section>

        <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} COZWEB. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPage;
