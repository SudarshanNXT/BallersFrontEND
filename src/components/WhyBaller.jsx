import React from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, Trophy, Globe, User } from "lucide-react"; // Use appropriate icons for Philanthropy

const philanthropyFeatures = [
  {
    icon: Heart, // Icon for Direct Impact
    title: "Direct Impact",
    description:
      "Your donations go directly to the athletes who need it most. Every contribution you make helps nurture the next generation of champions, providing them with the resources they need to excel.",
  },
  {
    icon: DollarSign, // Icon for Transparency
    title: "Transparency",
    description:
      "We prioritize complete transparency in our philanthropic process. You'll always know where your donations are going and see the tangible difference they make in the lives of athletes.",
  },
  {
    icon: Trophy, // Icon for Genuine Talent
    title: "Genuine Talent",
    description:
      "At Ballers, we conduct thorough vetting to ensure that only deserving athletes benefit from your generosity. No scammers, just real stories of perseverance, passion, and potential waiting to be unlocked.",
  },
];

const defaultFeatures = [
  {
    icon: Globe,
    title: "Sports beyond the game.",
    description:
      "Valued at nearly $1 trillion, sports is more than just about the game. With top athletes, exclusive clubs, global leagues, and more, it offers a vast opportunity for lifestyle experiences and investments.",
  },
  {
    icon: DollarSign,
    title: "Exclusive Access. Extraordinary Returns.",
    description:
      "Beyond traditional investments, wealth creation hinges on spotting the right opportunities. Given sports' substantial potential upside, it's an opportunity too big to miss.",
  },
  {
    icon: User,
    title: "For Those Who Don’t Just Play the Game.",
    description:
      "It's the 0.01% experience for the 0.01%. Get access to exclusive events, invite-only clubs, unique opportunities, and VIPs. It's a lifestyle that yields compounded returns in experiences & wealth.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
};

const WhyBallers = ({ isPhilanthropy }) => {
  const features = isPhilanthropy ? philanthropyFeatures : defaultFeatures;

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-lime-500 mb-6">
          {isPhilanthropy ? "Why Give Through Ballers?" : "Why Sport as an asset class?"}
        </h1>
        <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full" />
      </motion.div>

      {/* Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-lime-500/10 rounded-lg transform transition-transform group-hover:scale-105" />
              <motion.div
                className="relative p-6 rounded-lg border border-lime-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }} // Pop effect when hovered
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-12 h-12 text-lime-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-lime-500">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WhyBallers;
