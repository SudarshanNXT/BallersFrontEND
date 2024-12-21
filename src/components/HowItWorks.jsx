import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const defaultSteps = [
  {
    title: 'Get Invited',
    description:
      'Beyond just exclusive.\n\nBallers is an exclusive club limited to 1000 members—each representing the pinnacle of excellence. To join this esteemed group, you must be endorsed by a current member and apply for membership.',
  },
  {
    title: 'Get Approved',
    description:
      'The best deserve the absolute best.\n\nWe perform thorough background checks on anyone that gets invited and only extend exclusive, non-transferable memberships to those who meet our stringent criteria.',
  },
  {
    title: 'Get Started',
    description:
      'A lifestyle that fuels returns.\n\nInvest in sports assets, build a portfolio, access exclusive events, network with billionaires, and be part of a lifestyle that brings compounding returns to both your quality of life and wealth.',
  },
];

const philanthropySteps = [
  {
    title: 'Choose Your Cause',
    description:
      'Explore our carefully curated list of athletes and sports initiatives that need your support. Select the one that resonates with you.',
  },
  {
    title: 'Make Your Donation',
    description:
      'Decide how much you\'d like to give. Every contribution, no matter the size, makes a difference in shaping a champion\'s future.',
  },
  {
    title: 'Follow Their Story',
    description:
      'Stay connected with regular updates from Ballers on the athlete\'s progress and achievements, witnessing first hand the impact of your generosity.',
  },
];

export default function HowItWorks({ isPhilanthropy }) {
  const steps = isPhilanthropy ? philanthropySteps : defaultSteps;

  const handleContactClick = () => {
    window.location.href = 'https://cal.com/ballers/30min?user=ballers&date=2024-12-23&month=2024-12';
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-lime-500 mb-6">
          How it Works?
        </h1>
        <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="relative mb-12 last:mb-0"
          >
            <div className="flex items-start">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-6 top-10 bottom-0 w-0.5 bg-lime-500/20"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1],
                    delay: index * 0.3,
                  }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-lime-500 text-black font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.3,
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                {index + 1}
              </motion.div>

              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2 text-lime-500">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: steps.length * 0.3,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-4">Still not sure? Talk to us</p>
          <motion.button
            className="group inline-flex items-center gap-2 text-lime-500 hover:text-lime-400 transition-colors"
            whileHover={{
              scale: 1.05,
              color: '#22c55e',
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            onClick={handleContactClick}
          >
            Contact our team
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
