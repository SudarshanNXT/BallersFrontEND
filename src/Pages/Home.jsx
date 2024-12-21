import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyBallers from "../components/WhyBaller";
import HowItWorks from "../components/HowItWorks";
import { Link } from "react-router-dom";

export default function Home() {
  const [headerText, setHeaderText] = useState({
    title: "Playground for the world’s 0.01%",
    subtitle: "Rare opportunities. Rare access. Rarer people.",
  });
  const [buttonText, setButtonText] = useState("Join Exclusive Club");
  const [ctaText, setCtaText] = useState({
    title: "DARE TO DREAM? DARE TO JOIN!",
    button: "Join Exclusive Club",
  });
  const [isPhilanthropy, setIsPhilanthropy] = useState(false);

  const sportsLogos = [
    { src: "/img/premier-league.png", alt: "Premier League" },
    { src: "/img/ipl.png", alt: "Indian Premier League" },
    { src: "/img/laliga.png", alt: "LaLiga" },
    { src: "/img/nba.png", alt: "NBA" },
    { src: "/img/bundesliga.png", alt: "Bundesliga" },
    { src: "/img/mls.png", alt: "MLS" },
    { src: "/img/the-hundred.png", alt: "The Hundred" },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ["100%", "-100%"],
        transition: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      });
    }
  }, [inView, controls]);

  const handleTextChange = (section) => {
    if (section === "philanthropy") {
      setHeaderText({
        title: "Empower Sports through Philanthropy",
        subtitle: "Impactful Giving. Genuine Opportunities. Unmatched Influence.",
      });
      setButtonText("Contribute Now");
      setCtaText({
        title: "BACK A WINNER. CREATE A LEGEND.",
        button: "Contribute Now",
      });
      setIsPhilanthropy(true);
    } else {
      setHeaderText({
        title: "Playground for the world’s 0.01%",
        subtitle: "Rare opportunities. Rare access. Rarer people.",
      });
      setButtonText("Join Exclusive Club");
      setCtaText({
        title: "DARE TO DREAM? DARE TO JOIN!",
        button: "Join Exclusive Club",
      });
      setIsPhilanthropy(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <Navbar onLinkClick={handleTextChange} />

      {/* Header Section */}
      <div className="relative flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle, #22c55e, transparent)",
            filter: "blur(10px)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <div className="z-10 text-center max-w-3xl mx-auto bg-black/80 p-8 rounded-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {headerText.title.split(" ").map((word, index) => {
              if (["world’s", "0.01%", "Sports"].includes(word)) {
                return (
                  <span key={index} className="text-lime-400">
                    {word}{" "}
                  </span>
                );
              }
              return <span key={index}>{word} </span>;
            })}
          </h1>
          <p className="text-xl sm:text-2xl mb-8">{headerText.subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#22c55e", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-lime-500 text-black font-bold text-lg rounded-full"
          >
            <Link to="/register">{buttonText}</Link>
          </motion.button>
        </div>
      </div>

      {/* Logos Animation */}
      <div className="overflow-hidden px-4">
        <motion.div
          className="flex justify-center space-x-12"
          animate={controls}
          ref={ref}
        >
          {sportsLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img src={logo.src} alt={logo.alt} className="h-20 sm:h-24" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Why Ballers Section */}
      <WhyBallers isPhilanthropy={isPhilanthropy} />

      {/* CTA Section */}
      <section
        className="relative flex items-center justify-center w-full min-h-[30vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/sports.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">{ctaText.title}</h2>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-lime-500 text-black font-bold rounded-full hover:bg-lime-400"
          >
            {ctaText.button}
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks isPhilanthropy={isPhilanthropy} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
