// import { motion } from 'motion/react';
// import { CheckCircle2, Users, Lightbulb, Briefcase } from 'lucide-react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           <div className="lg:w-1/2">
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800" 
//                 alt="Solar Installation" 
//                 className="rounded-2xl shadow-2xl"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-solar-green p-8 rounded-2xl shadow-xl hidden md:block">
//                 <p className="text-solar-blue text-4xl font-bold">15+</p>
//                 <p className="text-solar-blue font-semibold">Years Experience</p>
//               </div>
//             </motion.div>
//           </div>
//           <div className="lg:w-1/2">
//             <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">About Our Company</h2>
//             <h3 className="text-4xl font-bold text-solar-blue mb-6">Leading the Way in <span className="text-solar-green">Solar Innovation</span></h3>
//             <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//               Akash Solar Energy Solutions is dedicated to providing high-quality, reliable, and sustainable solar energy systems. We believe in a future powered by clean energy, reducing carbon footprints while maximizing financial savings for our clients.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-solar-grey p-3 rounded-lg">
//                   <CheckCircle2 className="text-solar-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-solar-blue">Sustainability</h4>
//                   <p className="text-sm text-gray-500">Eco-friendly solutions for all.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-solar-grey p-3 rounded-lg">
//                   <Users className="text-solar-blue" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-solar-blue">Reliability</h4>
//                   <p className="text-sm text-gray-500">Trusted by thousands of clients.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-solar-grey p-3 rounded-lg">
//                   <Lightbulb className="text-solar-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-solar-blue">Innovation</h4>
//                   <p className="text-sm text-gray-500">Latest solar technology used.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-solar-grey p-3 rounded-lg">
//                   <Briefcase className="text-solar-blue" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-solar-blue">Savings</h4>
//                   <p className="text-sm text-gray-500">Drastic reduction in energy bills.</p>
//                 </div>
//               </div>
//             </div>
            
//             <button className="bg-solar-blue text-white px-8 py-3 rounded-full font-bold hover:bg-solar-green hover:text-solar-blue transition-all">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Users, Lightbulb, Briefcase } from 'lucide-react';
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => unsubscribe();
  }, []);

  return <span ref={ref}>{display}+</span>;
};

export default function About() {
  const badgeRef = useRef(null);
  const badgeInView = useInView(badgeRef, { once: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
              alt="Solar Installation"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* FLOATING COUNTER BADGE */}
            <motion.div
              ref={badgeRef}
              initial={{ opacity: 0, y: 50 }}
              animate={
                badgeInView
                  ? {
                      opacity: 1,
                      y: [0, -10, 0],
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 0.6 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-6 -right-6 bg-solar-green p-8 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-solar-blue text-4xl font-bold">
                <Counter value={15} />
              </p>
              <p className="text-solar-blue font-semibold">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={container}
            className="lg:w-1/2"
          >
            <motion.h2
              variants={fadeUp}
              className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4"
            >
              About Our Company
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="text-4xl font-bold text-solar-blue mb-6"
            >
              Leading the Way in{" "}
              <span className="text-solar-green">Solar Innovation</span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              Akash Solar Energy Solutions is dedicated to providing
              high-quality, reliable, and sustainable solar energy systems.
              We believe in a future powered by clean energy.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              {[
                {
                  icon: <CheckCircle2 className="text-solar-green" />,
                  title: "Sustainability",
                  desc: "Eco-friendly solutions for all.",
                },
                {
                  icon: <Users className="text-solar-blue" />,
                  title: "Reliability",
                  desc: "Trusted by thousands of clients.",
                },
                {
                  icon: <Lightbulb className="text-solar-green" />,
                  title: "Innovation",
                  desc: "Latest solar technology used.",
                },
                {
                  icon: <Briefcase className="text-solar-blue" />,
                  title: "Savings",
                  desc: "Drastic reduction in energy bills.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-start space-x-4 p-3 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="bg-solar-grey p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-blue">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-solar-blue text-white px-8 py-3 rounded-full font-bold hover:bg-solar-green hover:text-solar-blue transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}