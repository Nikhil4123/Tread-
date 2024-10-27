/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar2 from "../navbar/Navbar2";

const ServicesPage = () => {
 

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
       
      {/* Page Header */}
      <header className="w-full border-b border-gray-200 shadow-sm">
        <div
          className="max-w-[1440px] mx-auto px-6 py-12"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering Your Trading Journey with Advanced Technology
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Statistics Section */}
        <section
          className="container h-12 md:h-32 mb-16"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="mx-auto my-4 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:p-8">
            {/* Statistic Card */}
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                <CountUp end={234} suffix="+" duration={2.75} />
              </h1>
              <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                <CountUp end={56} suffix="+" duration={2.75} />
              </h1>
              <h1 className="sm:text-md text-xs md:text-lg">Projects</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                <CountUp end={234} suffix="k+" duration={2.75} />
              </h1>
              <h1 className="sm:text-md text-xs md:text-lg">Subscribers</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                <CountUp
                  start={0}
                  end={160527}
                  duration={2.75}
                  separator=","
                  suffix="+"
                />
              </h1>
              <h1 className="sm:text-md text-xs md:text-lg">Downloads</h1>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-semibold text-gray-900"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Our Expertise
          </h2>
          <p
            className="mt-4 mb-12 text-lg text-gray-700"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            As a leading trading dealer, we offer a wide range of services to
            help you achieve your financial goals. With our expertise in the
            latest technologies and trading strategies, we help you stay ahead
            of the competition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Automated Trading Solutions
              </h3>
              <p className="leading-relaxed">
                We provide custom-built automated trading bots and systems using
                AI and machine learning to help you execute trades faster and
                smarter. Maximize your profit margins with minimal effort.
              </p>
            </div>

            {/* Service Card 2 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Risk Management Strategies
              </h3>
              <p className="leading-relaxed">
                Our risk management solutions leverage advanced algorithms to
                minimize potential losses and safeguard your investments. Our
                priority is to maintain the security and reliability of your
                trades.
              </p>
            </div>

            {/* Service Card 3 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Market Analysis & Insights
              </h3>
              <p className="leading-relaxed">
                Gain valuable insights into market trends with our comprehensive
                analytics. Our team uses data-driven strategies to keep you
                informed and ahead of the market’s volatility.
              </p>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section>
          <h2
            className="text-3xl font-semibold text-gray-900"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Previous Projects
          </h2>
          <p
            className="mt-4 mb-12 text-lg text-gray-700"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            We’ve worked on numerous successful projects that demonstrate our
            expertise in the trading industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project Card 1 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Finance Tracker App
              </h3>
              <p className="leading-relaxed">
                Developed a secure finance tracker using Android, Firebase, and
                custom encryption to help users automatically analyze their
                financial data.
              </p>
            </div>

            {/* Project Card 2 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Real-time Trading Analytics Platform
              </h3>
              <p className="leading-relaxed">
                Created a comprehensive analytics platform that integrates
                real-time trading data to provide traders with actionable
                insights and market trends.
              </p>
            </div>

            {/* Project Card 3 */}
            <div
              className="rounded-lg bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Automated Trade Execution System
              </h3>
              <p className="leading-relaxed">
                Built a fully automated trade execution system that leverages
                machine learning to make split-second trading decisions with
                optimized efficiency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
