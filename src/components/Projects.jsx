import { ArrowRight } from "lucide-react";
import { motion } from 'motion/react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
      <div className="relative mb-16">

  {/* Same structure as Services */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">
      Our Projects
    </h2>

    <h3 className="text-4xl font-bold text-solar-blue">
      Recent <span className="text-solar-green">Installations</span>
    </h3>
  </div>

  {/* Right aligned button */}
  <button className="mt-6 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-solar-blue font-bold border-b-2 border-solar-green pb-1 hover:text-solar-green transition-colors">
    View All Projects
  </button>

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Green Valley Residence",
              category: "Residential",
              img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
            },
            {
              title: "Tech Park Solar Farm",
              category: "Commercial",
              img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600"
            },
            {
              title: "Eco Friendly School",
              category: "Institutional",
              img: "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "City Mall Rooftop",
              category: "Commercial",
              img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920"
            },
            {
              title: "Sunset Villa Project",
              category: "Residential",
              img: "https://images.unsplash.com/photo-1721620845374-1cef4ceae9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Industrial Hub",
              category: "Commercial",
              img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600"
            }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-80"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-solar-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <span className="text-solar-green font-bold text-sm uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-bold mb-4">
                  {project.title}
                </h4>
                <button className="bg-solar-green text-solar-blue p-3 rounded-full">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
