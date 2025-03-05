// src/components/Frontathon.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase'; // Assuming Firebase is set up
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Frontathon = () => {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  // Sample data for the Frontathon hackathon (hardcoded for now, can be fetched from Firebase)
  const event = {
    title: 'Frontathon 2025',
    organizer: 'EZCODE',
    location: 'Virtual (Online)',
    date: 'March 15-16, 2025',
    duration: '36 hrs',
    updatedOn: 'Feb 20, 2025',
    cashRewards: '₹5,00,000',
    tags: ['Hackathon', 'Coding Challenge', 'Innovation'],
    rounds: [
      { name: 'Ideation & Shortlisting', date: 'March 1, 2025', description: 'Participants submit a project proposal based on problem statements. Top teams are shortlisted for the on-site hackathon.' },
    ],
    participants: 1500,
    impressions: 25000,
    teamSize: '2-4 Members',
    registrationDeadline: 'March 10, 2025, 11:59 PM IST',
    eligibility: 'Engineering Students, MBA Students, Undergraduates, Postgraduates, Freshers, Experienced Professionals',
    image: 'https://via.placeholder.com/300x200/FFDAB9/000000?text=Frontathon', // Beige background with black text for the image
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'eventRegistrations', `frontathon_${currentUser.uid}`));
          setIsRegistered(userDoc.exists());
        } catch (error) {
          setError('Error checking registration status: ' + error.message);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    if (!user) {
      setError('Please sign in to register for the event.');
      return;
    }
    try {
      await setDoc(doc(db, 'eventRegistrations', `frontathon_${user.uid}`), {
        eventId: 'frontathon',
        userId: user.uid,
        registeredAt: new Date().toISOString(),
      });
      setIsRegistered(true);
      setError('');
    } catch (error) {
      setError('Error registering for the event: ' + error.message);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover mt-15 bg-center text-black p-8"
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/FF1493/000000?text=Pink+Wave')" }}
    >
      <div className="container mx-auto">
        {/* Main Content Grid: Full Width White Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* 2/3 Right: Event Banner, Name, and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left 1/3: Registration and Metrics (Inspired by Unstop Right Panel) */}
            <div className="md:col-span-1">
              <div className="bg-beige-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold mb-2">Free</p>
                {user && (
                  <>
                    <p className="text-gray-800 mb-2">Ahqaf Ali</p>
                    <p className="text-gray-600 mb-2">ahqafali@gmail.com</p>
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold text-white ${isRegistered ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors duration-300`}
                      disabled={isRegistered}
                      onClick={handleRegister}
                    >
                      {isRegistered ? 'Registered' : 'Register'}
                    </button>
                    <p className="text-green-500 mt-2 font-semibold">Eligible</p>
                  </>
                )}
                {!user && (
                  <Link to="/login" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 text-center block transition-colors duration-300">
                    Sign In to Register
                  </Link>
                )}
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700 flex items-center">
                    <span className="mr-2">✔</span> Registered: {event.participants} / 2000 (Limited Slots)
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="mr-2">👥</span> Team Size: {event.teamSize}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="mr-2">⭐</span> Impressions: {event.impressions}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="mr-2">📅</span> Registration Deadline: {event.registrationDeadline}
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h3>
                  <p className="text-gray-700">{event.eligibility}</p>
                </div>
              </div>
            </div>

            {/* Right 2/3: Event Banner, Name, and Details */}
            <div className="md:col-span-1">
              {/* Event Banner Image */}
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
              />

              {/* Event Name and Details */}
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              <p className="text-gray-600 mb-4">{event.organizer}</p>

              <div className="space-y-4">
                {/* Event Details */}
                <div>
                  <p className="text-gray-700"><span className="font-semibold">Location:</span> {event.location}</p>
                  <p className="text-gray-700"><span className="font-semibold">Date:</span> {event.date}</p>
                  <p className="text-gray-700"><span className="font-semibold">Duration:</span> {event.duration}</p>
                  <p className="text-gray-700"><span className="font-semibold">Updated On:</span> {event.updatedOn}</p>
                </div>

                {/* Cash Rewards */}
                <p className="text-yellow-500 font-semibold"><span className="text-black">Cash Rewards:</span> {event.cashRewards}</p>

                {/* Tags */}
                <div>
                  <p className="text-gray-700 font-semibold">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rounds */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Rounds</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {event.rounds.map((round, index) => (
                      <li key={index}>
                        <strong>{round.name}</strong> - {round.date}: {round.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Content (Details and Rules) */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">All That You Need to Know About Frontathon</h2>
                  <p className="text-gray-700">
                    Frontathon 2025 is a one-of-a-kind hackathon designed to challenge your innovation, problem-solving, and technical skills in an inspiring virtual setting. Compete with top minds, collaborate on groundbreaking ideas, and take your creativity to new heights.
                  </p>
                </div>

                {/* Format & Process */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Format & Process</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Open to students, professionals, and tech enthusiasts.</li>
                    <li>Inter-college teams allowed.</li>
                    <li>Teams of 2-4 members.</li>
                  </ul>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex space-x-4 mt-4">
                <Link to="#details" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200">Details</Link>
                <Link to="#dates" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200">Dates & Deadlines</Link>
                <Link to="#prizes" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200">Prizes</Link>
                <Link to="#reviews" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200">Reviews</Link>
                <Link to="#faqs" className="text-gray-700 hover:text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-200">FAQs & Discussions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pink Wave Overlay for Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1920x1080/FF1493/000000?text=Pink+Wave")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default Frontathon;