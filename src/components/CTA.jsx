import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-solar-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-green/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-solar-green/10 rounded-full -ml-36 -mb-36 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Start Your <span className="text-solar-green">Solar Journey</span> Today
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-xl mb-10 max-w-xl"
            >
              Join thousands of happy customers and start your journey towards energy independence today. We provide end-to-end solutions for all your solar needs.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Free Site Assessment",
                "Custom System Design",
                "Expert Installation",
                "25-Year Warranty"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center space-x-3 text-white/90"
                >
                  <CheckCircle2 className="text-solar-green" size={20} />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl max-w-md w-full">
              <h4 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h4>
              <p className="text-white/70 mb-8">Fill out the form below and our experts will get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-2xl outline-none focus:border-solar-green text-white placeholder:text-white/40 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-solar-green text-solar-blue font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-xl"
                >
                  <span>Get Started Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
              <p className="text-white/40 text-xs text-center mt-6">No credit card required. No obligations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
