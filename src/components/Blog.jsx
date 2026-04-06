import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">Our Blog</h2>
          <h3 className="text-4xl font-bold text-solar-blue">Latest <span className="text-solar-green">Solar News</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The Future of Solar Energy in 2026", date: "April 5, 2026", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600" },
            { title: "How to Maintain Your Solar Panels", date: "March 28, 2026", img: "https://plus.unsplash.com/premium_photo-1663091847749-7f8f4f6cd255?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Solar vs Wind: Which is Better?", date: "March 15, 2026", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600" }
          ].map((blog, index) => (
             <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-solar-green font-bold text-sm">{blog.date}</span>
                <h4 className="text-xl font-bold text-solar-blue mt-2 mb-4 group-hover:text-solar-green transition-colors">{blog.title}</h4>
                <a href="#" className="text-solar-blue font-bold flex items-center">
                  Read Article <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
