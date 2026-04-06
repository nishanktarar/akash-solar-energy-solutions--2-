import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Akash Solar transformed our home energy usage. Our electricity bills have dropped by 80%! Highly recommended for their professional service.",
      image: "https://picsum.photos/seed/person1/100/100",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "The commercial installation was seamless. The team was efficient and the ROI has been incredible for our factory.",
      image: "https://picsum.photos/seed/person2/100/100",
    },
    {
      name: "Amit Patel",
      role: "Apartment Manager",
      text: "Maintenance services are top-notch. They are always on time and keep our panels performing at peak efficiency.",
      image: "https://picsum.photos/seed/person3/100/100",
    },
    {
      name: "Suresh Gupta",
      role: "Villa Owner",
      text: "Best decision we made for our new home. The green energy solution is not just saving money but also the environment.",
      image: "https://picsum.photos/seed/person4/100/100",
    },
  ];

  const visibleCards = 2;

  const handleNext = () => {
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-solar-grey">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl font-bold text-solar-blue">
            What Our <span className="text-solar-green">Clients Say</span>
          </h3>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 flex-shrink-0 px-4"
              >
                <div className="bg-white p-8 rounded-2xl shadow-md h-full border-l-4 border-solar-green">
                  <div className="flex items-center mb-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-solar-green"
                    />
                    <div>
                      <h4 className="font-bold text-solar-blue">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-solar-blue text-white hover:bg-solar-green disabled:opacity-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - visibleCards}
              className="p-3 rounded-full bg-solar-blue text-white hover:bg-solar-green disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}