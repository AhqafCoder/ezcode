import React from "react";

function About() {
    return (
        <section id="about" className="py-16  text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/logo.png" // Replace with your image path
                            alt="About EzCode Community"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-blue-500">EzCode Community</span>
                        </h2>
                        <p className="text-lg mb-6">
                            EzCode Community is a vibrant platform designed for beginner-level developers, especially BTech 1st and 2nd-year students, to kickstart their journey in web development. Our mission is to provide a supportive environment where you can learn, build, and grow.
                        </p>
                        <p className="text-lg mb-8">
                            Whether you're just starting out or looking to enhance your skills, EzCode offers resources, workshops, and a community of like-minded individuals to help you succeed.
                        </p>
                        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;