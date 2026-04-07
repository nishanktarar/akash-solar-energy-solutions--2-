import { motion } from 'motion/react';
import { Sun, Battery, Zap, Shield, Leaf, Award } from 'lucide-react';

const marqueeItems = [
  { icon: <Sun className="text-solar-green" />, text: "100% Clean Energy" },
  { icon: <Battery className="text-solar-green" />, text: "Smart Battery Storage" },
  { icon: <Zap className="text-solar-green" />, text: "Lower Electricity Bills" },
  { icon: <Shield className="text-solar-green" />, text: "25-Year Warranty" },
  { icon: <Leaf className="text-solar-green" />, text: "Eco-Friendly Solutions" },
  { icon: <Award className="text-solar-green" />, text: "Certified Installers" },
  { icon: <Sun className="text-solar-green" />, text: "Premium Solar Panels" },
  { icon: <Battery className="text-solar-green" />, text: "Energy Independence" },
  { icon: <Zap className="text-solar-green" />, text: "Sustainable Future" },
  { icon: <Shield className="text-solar-green" />, text: "Expert Maintenance" },
];

export default function Marquee() {
  return (
    <div className="bg-solar-blue py-8 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center space-x-12 pr-12"
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-white font-bold text-xl uppercase tracking-wider">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeItems.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center space-x-3 text-white font-bold text-xl uppercase tracking-wider">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
