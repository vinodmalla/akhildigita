import React from 'react';

const services = [
  {
    title: 'Accessibility Audits & Implementation',
    description:
      'We analyze your website for accessibility compliance and implement changes to ensure it’s usable by all, including people with disabilities.',
    status: 'Live',
    link: 'https://www.fiverr.com/s/GzGG45d',
  },
  {
    title: 'Resume Crafting & LinkedIn Optimization',
    description:
      'We’ll help you create an eye-catching resume and optimize your LinkedIn profile to land your next job or career opportunity.',
    status: 'Live',
    link: 'https://www.fiverr.com/s/GzGG422',
  },
  {
    title: 'AI Model Development & Automation Consulting',
    description:
      'Transform your business with custom AI models and automation solutions that boost efficiency and solve complex problems.',
    status: 'Upcoming',
   
  },
  {
    title: 'Professional Video Editing',
    description:
      'From vlogs to corporate videos, we offer professional video editing services to help you create visually stunning content.',
    status: 'Upcoming',
  },
  {
    title: 'Custom Website & Landing Page Creation',
    description:
      'Build a stunning, mobile-responsive website or landing page that effectively represents your brand and boosts conversions.',
    status: 'Upcoming',
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Professional Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p
                className={`text-sm font-semibold mb-4 ${
                  service.status === 'Live' ? 'text-green-600' : 'text-yellow-500'
                }`}
              >
                {service.status}
              </p>
              {service.link && (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View on Fiverr →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
