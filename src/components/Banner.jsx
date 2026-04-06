import { motion } from 'motion/react';

export default function Banner() {
  return (
    <section className="py-16 bg-solar-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-solar-green/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-solar-green/10 rounded-full -ml-24 -mb-24"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Ready to Switch to <span className="text-solar-green">Clean Energy?</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-xl mb-10 max-w-2xl mx-auto"
        >
          Join thousands of happy customers and start your journey towards energy independence today.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-solar-green text-solar-blue font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition-all shadow-xl"
        >
          Get Your Free Quote Now
        </motion.button>
      </div>
    </section>
  );
}
