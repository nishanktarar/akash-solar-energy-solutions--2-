import { motion } from 'motion/react';
import { Home, Briefcase, Wrench, MessageSquare, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-solar-grey">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-solar-blue">Comprehensive <span className="text-solar-green">Solar Solutions</span></h3>
          <p className="text-gray-600 mt-4">We offer a wide range of solar services tailored to meet your specific energy needs, from residential to large-scale commercial projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Residential Solar", icon: <Home size={32} />, desc: "Custom solar panel installations for homes to eliminate electricity bills." },
            { title: "Commercial Solar", icon: <Briefcase size={32} />, desc: "Large-scale energy solutions for businesses and industrial complexes." },
            { title: "Maintenance", icon: <Wrench size={32} />, desc: "Regular cleaning and technical support to keep your system at peak performance." },
            { title: "Consultation", icon: <MessageSquare size={32} />, desc: "Expert advice and energy audits to find the perfect solar fit for you." }
          ].map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-solar-blue hover:border-solar-green transition-all"
            >
              <div className="text-solar-green mb-6 bg-solar-blue/5 w-16 h-16 flex items-center justify-center rounded-xl">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-solar-blue mb-4">{service.title}</h4>
              <p className="text-gray-500 mb-6">{service.desc}</p>
              <a href="#" className="text-solar-blue font-bold flex items-center hover:text-solar-green">
                Read More <ChevronRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
