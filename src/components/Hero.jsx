import { motion } from 'motion/react';
import { Lightbulb, Sun, LayoutGrid } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-solar-blue/80 via-solar-blue/50 to-solar-blue/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white mb-16 mt-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block bg-solar-green/20 backdrop-blur-md px-6 py-2 rounded-full border border-solar-green/30 shadow-lg"
          >
            <span className="text-solar-green font-bold text-sm tracking-widest uppercase">Sustainable Energy for Everyone</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Let The Sun <br />
            <span className="text-solar-green">Pay Your Bills</span>
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(126 217 87 / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-solar-green text-solar-blue font-bold px-10 py-5 rounded-full text-lg hover:bg-white transition-all shadow-2xl min-w-[200px]"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* New Cards Section */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-auto">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-center shadow-2xl"
          >
            <div className="w-full sm:w-1/2 h-48 sm:h-full min-h-[200px] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" alt="Modern home with solar panels" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center text-left py-2">
              <h3 className="text-white font-bold text-2xl mb-3 leading-tight">When Sustainability Meets Style</h3>
              <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                Clean energy solutions designed to look great and perform efficiently that fits your lifestyle perfectly.
              </p>
              <div>
                <button className="border border-white text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-solar-blue transition-colors">
                  View Services
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col shadow-2xl"
          >
            <div className="bg-[#7ED957] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Lightbulb className="text-solar-blue w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-white font-bold text-xl mb-4 leading-tight">Clean Energy for a Future</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Choosing solar is a step toward a future powered by clean, renewable, and reliable energy for generations to come.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 bg-[#7ED957] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-8 right-8">
              <div className="relative">
                <Sun className="text-solar-blue w-8 h-8 absolute -top-5 -right-2" strokeWidth={2.5} />
                <LayoutGrid className="text-solar-blue w-12 h-12 relative z-10" strokeWidth={2} />
              </div>
            </div>
            <div className="mt-auto pt-24">
              <h3 className="text-solar-blue font-black text-5xl mb-2 tracking-tight">100K+</h3>
              <p className="text-solar-blue font-bold text-xl leading-tight">
                home installed<br/>solar panel
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
