/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Navbar2 from "../navbar/Navbar2";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    phone: "",
    profile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age || !formData.dob || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("age", formData.age);
    submitData.append("dob", formData.dob);
    submitData.append("phone", formData.phone);
    if (formData.profile) {
      submitData.append("profile", formData.profile);
    }

    try {
      await axios.post("YOUR_BACKEND_URL/api/signup", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Signup successful!");
    } catch (error) {
      alert("Signup failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-violet-800 to-purple-700 shadow-lg">
        <Navbar2 />
      </div>

      {/* Signup Form Container */}
      <div className="max-w-lg mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-violet-700 dark:text-violet-400">
          Create Account
        </h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              min="1"
              max="120"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              placeholder="Enter your age"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              placeholder="1234567890"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label htmlFor="profile" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Profile Picture (Optional)
            </label>
            <input
              type="file"
              id="profile"
              name="profile"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
