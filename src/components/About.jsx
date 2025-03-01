import React from "react";

function About() {
    return (
        <section className="py-16 text-white mt-20 mb-10"> {/* Added a dark background */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-1/2 flex justify-center"> {/* Centered the image */}
                        <img
                            src="../src/assets/about.png" // Replace with your image path
                            alt="About EzCode Community"
                            className="rounded-full w-100 h-100 object-cover mx-auto shadow-lg" // Made image small and circular
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-4xl font-bold mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">EzCode Community</span> {/* Changed to pink */}
                        </h2>
                        <p className="text-lg mb-6">
                            EzCode Community is a vibrant platform designed for beginner-level developers, especially BTech 1st and 2nd-year students, to kickstart their journey in web development. Our mission is to provide a supportive environment where you can learn, build, and grow.
                        </p>
                        <p className="text-lg mb-8">
                            Whether you're just starting out or looking to enhance your skills, EzCode offers resources, workshops, and a community of like-minded individuals to help you succeed.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;