import { Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function TopBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#2d4c76] text-white py-2 px-4 hidden md:block"
    >
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="tel:+919876543210" className="flex items-center hover:text-solar-green transition-colors">
            <Phone size={14} className="mr-2 text-solar-green" /> +91 98765 43210
          </a>
          <a href="mailto:info@akashsolar.com" className="flex items-center hover:text-solar-green transition-colors">
            <Mail size={14} className="mr-2 text-solar-green" /> info@akashsolar.com
          </a>
        </div>
        <p className="font-medium italic">“Clean Energy for a Better Tomorrow”</p>
      </div>
    </motion.div>
  );
}
