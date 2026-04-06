import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-lg py-2' : 'absolute bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className=" flex items-center justify-center border border-white/20">
           <img src="/images/logo.png" alt="" className=" h-16 w-auto object-cover bg-white" />
          </div> 
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'Blog', 'FAQ', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-semibold transition-colors ${isSticky ? 'text-solar-blue hover:text-solar-green' : 'text-white hover:text-solar-green'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-solar-green text-solar-blue font-bold px-6 py-2.5 rounded-full hover:bg-solar-blue hover:text-white transition-all duration-300 shadow-md">
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`lg:hidden transition-colors ${isSticky ? 'text-solar-blue' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden mt-2"
          >
            <div className="flex flex-col p-4 space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-solar-blue font-semibold hover:text-solar-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-solar-green text-solar-blue font-bold px-6 py-3 rounded-full w-full">
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
