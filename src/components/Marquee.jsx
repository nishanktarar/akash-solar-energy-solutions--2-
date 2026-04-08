import { motion } from 'motion/react';
import { Sun, Battery, Zap, Shield, Leaf, Award } from 'lucide-react';

const marqueeItems = [
  { Icon: Sun, text: "100% Clean Energy" },
  { Icon: Battery, text: "Smart Battery Storage" },
  { Icon: Zap, text: "Lower Electricity Bills" },
  { Icon: Shield, text: "25-Year Warranty" },
  { Icon: Leaf, text: "Eco-Friendly Solutions" },
  { Icon: Award, text: "Certified Installers" },
  { Icon: Sun, text: "Premium Solar Panels" },
  { Icon: Battery, text: "Energy Independence" },
  { Icon: Zap, text: "Sustainable Future" },
  { Icon: Shield, text: "Expert Maintenance" },
];

export default function Marquee({ variant = "blue" }) {
  const isGreen = variant === "green";
  const backgroundClass = isGreen ? "bg-solar-green" : "bg-solar-blue";
  const contentClass = isGreen ? "text-solar-blue" : "text-white";
  const iconClass = isGreen ? "text-solar-blue" : "text-solar-green";

  return (
    <div className={`${backgroundClass} py-8 overflow-hidden border-y border-white/10`}>
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
            <div key={index} className={`flex items-center space-x-3 ${contentClass} font-bold text-xl uppercase tracking-wider`}>
              <item.Icon className={iconClass} />
              <span>{item.text}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeItems.map((item, index) => (
            <div key={`dup-${index}`} className={`flex items-center space-x-3 ${contentClass} font-bold text-xl uppercase tracking-wider`}>
              <item.Icon className={iconClass} />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
