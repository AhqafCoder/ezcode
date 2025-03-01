import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Cosmic Code",
      date: "2023-11-15",
      
      description: "Join us for a 48-hour hackathon to innovate, code, and conquer!",
      image: "https://thumbs.dreamstime.com/b/abstract-background-bright-blue-pink-binary-code-flow-symbolizing-information-technology-illustration-copy-space-332456344.jpg", // Replace with your image URL
    },
    {
      title: "Onelab AI ",
      date: "2023-11-20",
      
      description: "Build AI agents and compete for prizes in this exciting hackathon.",
      image: "https://www.shutterstock.com/image-photo/screen-displays-intricate-python-code-600nw-2381879719.jpg", // Replace with your image URL
    },
    {
      title: "SeaTF",
      date: "2023-11-25",
      
      description: "A conference on the latest trends in technology and engineering.",
      image: "https://www.shutterstock.com/image-photo/screen-displays-intricate-python-code-600nw-2381879719.jpg", // Replace with your image URL
    },
    {
      title: "Hackerix",
      date: "2023-12-01",
      
      description: "Learn about the latest in cybersecurity and ethical hacking.",
      image: "https://www.shutterstock.com/image-photo/screen-displays-intricate-python-code-600nw-2381879719.jpg", // Replace with your image URL
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover mt-15 bg-center text-white p-8"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
    >
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center text-white mb-5">Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Events</span>🚀</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Explore the latest events that are creating a buzz among your peers!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-black border-1 border-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              style={{ height: '350px', width: '100%' }} // Fixed height and width for square cards
            >
              {/* Event Image */}
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-32 object-cover" // Fixed image height
              />

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
                  <p className="text-gray-400 mb-2">📅 {event.date}</p>
                  <p className="text-gray-300 mb-2 text-sm">{event.description}</p>
                  
                </div>

                {/* Participate Button */}
                <button 
                  className="mt-2 w-full bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Participate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;