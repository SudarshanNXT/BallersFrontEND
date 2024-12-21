import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Code, Megaphone, DollarSign } from "lucide-react"; // Importing relevant icons
import { motion } from "framer-motion"; // For animations
import { Link } from "react-router-dom"; // For navigation

const AboutUs = () => {
  const ctaText = {
    title: "Join the Game-Changers Today!",
    button: "Get Started",
  };

  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-10">
        {/* Header */}
        <header className="text-center py-10">
          <div className="bg-lime-500 text-black border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg transform transition-transform hover:scale-105">
            <h1 className="text-3xl md:text-5xl font-extrabold font-sans tracking-wide">
              Invest in Sports. Support Champions.
            </h1>
            <p className="mt-4 text-sm md:text-lg leading-relaxed italic">
  " At the core of what we do lies a powerful vision: merging the
  passion for sports with the possibilities of investment and
  support. We believe that sports transcend the boundaries of
  entertainment—they inspire communities, shape legacies, and create
  opportunities. By investing in sports, you’re not only
  contributing to the growth of promising athletes but also taking
  part in a transformative journey that empowers champions to excel
  on and off the field."
</p>

          </div>
        </header>

        {/* Mission and Vision Section */}
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-lime-500 text-black border border-gray-700 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
              <h2 className="text-2xl md:text-4xl font-bold text-center">Our Mission</h2>
              <p className="mt-4 text-sm md:text-lg text-center italic">
               " To redefine the sports experience by empowering individuals to
                invest in exclusive sports assets, support promising athletes,
                and enjoy unparalleled sports lifestyles."
              </p>
            </div>
            <div className="bg-lime-500 text-black border border-gray-700 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
              <h2 className="text-2xl md:text-4xl font-bold text-center">Our Vision</h2>
              <p className="mt-4 text-sm md:text-lg text-center italic">
               " To create a global community of sports enthusiasts who transcend
                the game by investing, supporting, and experiencing sports in
                extraordinary ways."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
{/* CTA Section */}
<section
  className="relative py-20"
  style={{
    backgroundImage: "url('/sports.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full text-center relative z-10"
  >
    <h2 className="text-3xl md:text-6xl font-clash font-bold mb-6 tracking-tight text-white">
      For the ones who do more than just play the game.
    </h2>
    <Link
      to="/register"
      className="inline-block bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
    >
      {ctaText.button}
    </Link>
  </motion.div>
</section>



        {/* Team Section */}
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Developers",
                description: "Building the tech backbone.",
                icon: <Code className="text-4xl md:text-5xl text-black mb-4" />,
              },
              {
                name: "Marketing",
                description: "Spreading the vision.",
                icon: <Megaphone className="text-4xl md:text-5xl text-black mb-4" />,
              },
              {
                name: "Financial Team",
                description: "Managing wealth creation.",
                icon: <DollarSign className="text-4xl md:text-5xl text-black mb-4" />,
              },
            ].map((team, index) => (
              <div
                key={index}
                className="group relative bg-lime-500 text-black border border-gray-700 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 overflow-hidden"
              >
                <div className="text-center z-10 relative">
                  {team.icon}
                  <h3 className="text-xl md:text-2xl font-bold">{team.name}</h3>
                  <p className="mt-4 text-sm md:text-lg">{team.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer className="mb-0" />
    </div>
  );
};

export default AboutUs;
