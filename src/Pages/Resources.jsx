// src/components/Resources.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for resources with more cards per category
  const resources = {
    templates: [
      { id: 1, name: 'Basic HTML Template', description: 'A simple HTML/CSS template for a landing page.', url: '/resources/templates/basic-html', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 2, name: 'Responsive Blog Template', description: 'A responsive blog layout with CSS Grid.', url: '/resources/templates/blog', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 3, name: 'E-commerce Template', description: 'A stylish e-commerce layout with cart functionality.', url: '/resources/templates/ecommerce', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 4, name: 'Portfolio Template', description: 'A professional portfolio template for developers.', url: '/resources/templates/portfolio', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 5, name: 'Landing Page Template', description: 'A clean landing page for startups.', url: '/resources/templates/landing', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
    ],
    components: [
      { id: 1, name: 'Button Component', description: 'Reusable button with hover effects in React.', url: '/resources/components/button', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 2, name: 'Modal Component', description: 'A customizable modal for forms or alerts.', url: '/resources/components/modal', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 3, name: 'Navbar Component', description: 'A responsive navigation bar for websites.', url: '/resources/components/navbar', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 4, name: 'Card Component', description: 'A reusable card for displaying content.', url: '/resources/components/card', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 5, name: 'Form Component', description: 'A form component with validation.', url: '/resources/components/form', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
    ],
    projects: [
      { id: 1, name: 'To-Do List App', description: 'A JavaScript-based to-do list with local storage.', url: '/resources/projects/todo', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 2, name: 'Calculator Project', description: 'A simple calculator built with HTML, CSS, and JS.', url: '/resources/projects/calculator', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 3, name: 'Weather App', description: 'A weather app using API integration.', url: '/resources/projects/weather', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 4, name: 'Chat App', description: 'A real-time chat application with Firebase.', url: '/resources/projects/chat', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 5, name: 'Game Project', description: 'A simple game built with JavaScript.', url: '/resources/projects/game', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
    ],
    learn: [
      { id: 1, name: 'Learn HTML', description: 'Tutorials and examples for HTML basics.', url: '/resources/learn/html', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 2, name: 'Learn CSS', description: 'Guides for CSS styling and layouts.', url: '/resources/learn/css', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 3, name: 'Learn JavaScript', description: 'JavaScript fundamentals and projects.', url: '/resources/learn/js', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 4, name: 'Learn Python', description: 'Python programming basics and scripts.', url: '/resources/learn/python', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
    ],
    docs: [
      { id: 1, name: 'EZCODE Code Standards', description: 'Documentation for coding best practices.', url: '/resources/docs/standards', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 2, name: 'API Reference', description: 'API documentation for EZCODE projects.', url: '/resources/docs/api', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 3, name: 'JavaScript Docs', description: 'Detailed JS documentation.', url: '/resources/docs/js', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 4, name: 'Python Docs', description: 'Python library references.', url: '/resources/docs/python', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
      { id: 5, name: 'CSS Docs', description: 'CSS best practices and references.', url: '/resources/docs/css', image: 'https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg' },
    ],
  };

  // Filter resources based on search query
  const filteredResources = Object.keys(resources).reduce((acc, category) => {
    acc[category] = resources[category].filter(resource =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div 
      className="min-h-screen bg-cover mt-15 bg-center text-white p-8"
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/FF1493/000000?text=Pink+Wave')" }}
    >
      <div className="container mx-auto">
        {/* Resources Hub and Search Bar on Single Line */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-6xl font-bold text-white">Resources <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hub</span>📚</h1>
          <div className="max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full px-4 py-1 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {/* Templates */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-6">1. Templates</h2>
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
              {filteredResources.templates.map((resource, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] bg-black border border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl  transition-all duration-300 flex flex-col"
                  style={{ height: '350px', width: '300px' }} // Fixed size for cards
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-32 object-cover" // Fixed image height
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm">{resource.description}</p>
                    </div>
                    <Link 
                      to={resource.url}
                      className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-center"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
              {filteredResources.templates.length === 0 && (
                <p className="text-gray-400 text-center w-full">No templates found.</p>
              )}
            </div>
          </section>

          {/* Components */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-6">2. Components</h2>
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
              {filteredResources.components.map((resource, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] bg-black border border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl  transition-all duration-300 flex flex-col"
                  style={{ height: '350px', width: '300px' }} // Fixed size for cards
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-32 object-cover" // Fixed image height
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm">{resource.description}</p>
                    </div>
                    <Link 
                      to={resource.url}
                      className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-center"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
              {filteredResources.components.length === 0 && (
                <p className="text-gray-400 text-center w-full">No components found.</p>
              )}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-6">3. Projects</h2>
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
              {filteredResources.projects.map((resource, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] bg-black border border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl  transition-all duration-300 flex flex-col"
                  style={{ height: '350px', width: '300px' }} // Fixed size for cards
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-32 object-cover" // Fixed image height
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm">{resource.description}</p>
                    </div>
                    <Link 
                      to={resource.url}
                      className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-center"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
              {filteredResources.projects.length === 0 && (
                <p className="text-gray-400 text-center w-full">No projects found.</p>
              )}
            </div>
          </section>

          {/* Learn */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-6">4. Learn</h2>
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
              {filteredResources.learn.map((resource, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] bg-black border border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                  style={{ height: '350px', width: '300px' }} // Fixed size for cards
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-32 object-cover" // Fixed image height
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm">{resource.description}</p>
                    </div>
                    <Link 
                      to={resource.url}
                      className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-center"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
              {filteredResources.learn.length === 0 && (
                <p className="text-gray-400 text-center w-full">No learning resources found.</p>
              )}
            </div>
          </section>

          {/* Docs */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-6">5. Code Docs</h2>
            <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
              {filteredResources.docs.map((resource, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] bg-black border border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl  transition-all duration-300 flex flex-col"
                  style={{ height: '350px', width: '300px' }} // Fixed size for cards
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-32 object-cover" // Fixed image height
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm">{resource.description}</p>
                    </div>
                    <Link 
                      to={resource.url}
                      className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-center"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
              {filteredResources.docs.length === 0 && (
                <p className="text-gray-400 text-center w-full">No docs found.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;