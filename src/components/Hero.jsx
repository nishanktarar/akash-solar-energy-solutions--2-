import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920" 
          alt="Solar Panels" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-solar-blue/60 via-solar-blue/40 to-solar-blue/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block bg-solar-green/20 backdrop-blur-md px-6 py-2 rounded-full border border-solar-green/30 shadow-lg"
          >
            <span className="text-solar-green font-bold text-sm tracking-widest uppercase">Sustainable Energy for Everyone</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Let The Sun <br />
            <span className="text-solar-green">Pay Your Bills</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 font-light max-w-2xl mx-auto leading-relaxed">
            Switch to clean, renewable energy and take control of your electricity costs with our premium solar solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(126 217 87 / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-solar-green text-solar-blue font-bold px-10 py-5 rounded-full text-lg hover:bg-white transition-all shadow-2xl min-w-[200px]"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white font-bold px-10 py-5 rounded-full text-lg hover:border-white transition-all min-w-[200px] backdrop-blur-sm"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
