import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Akash Solar transformed our home energy usage. Our electricity bills have dropped by 80%! Highly recommended for their professional service and seamless installation process.",
      image: "https://picsum.photos/seed/person1/100/100",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "The commercial installation was seamless. The team was efficient and the ROI has been incredible for our factory. We are proud to be running on 100% clean energy now.",
      image: "https://picsum.photos/seed/person2/100/100",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Apartment Manager",
      text: "Maintenance services are top-notch. They are always on time and keep our panels performing at peak efficiency. The monitoring app makes it so easy to track our savings.",
      image: "https://picsum.photos/seed/person3/100/100",
      rating: 5,
    },
    {
      name: "Suresh Gupta",
      role: "Villa Owner",
      text: "Best decision we made for our new home. The green energy solution is not just saving money but also the environment. The 25-year warranty gives us complete peace of mind.",
      image: "https://picsum.photos/seed/person4/100/100",
      rating: 5,
    },
  ];

  const visibleCards = 2;
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCards
  );

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
    <section className="relative overflow-hidden py-20 bg-solar-grey">
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-[520px] w-[420px] -translate-y-1/2 overflow-hidden rounded-r-lg opacity-25 lg:block">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
          alt=""
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-blue/40 via-solar-green/20 to-solar-grey"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">
            Testimonials
          </h2>

          <h3 className="text-4xl font-bold text-solar-blue mb-4">
            What Our <span className="text-solar-green">Clients Say</span>
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners and businesses alike—discover how our solar solutions are making a real difference.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {visibleTestimonials.map((t, index) => (
              <motion.article
                key={`${t.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="relative flex h-full flex-col rounded-lg border border-solar-blue/10 bg-white p-7 shadow-[0_18px_45px_rgba(46,49,146,0.08)] transition-shadow hover:shadow-[0_24px_60px_rgba(46,49,146,0.14)]"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-10 w-10 rotate-180 text-solar-green/30" />
                </div>

                <p className="mb-8 flex-1 text-base leading-7 text-gray-600">
                  "{t.text}"
                </p>

                <div className="mt-auto flex items-center border-t border-gray-100 pt-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="mr-4 h-16 w-16 rounded-full border-2 border-solar-green object-cover"
                  />

                  <div>
                    <h4 className="text-lg font-bold text-solar-blue">
                      {t.name}
                    </h4>
                    <p className="text-sm font-semibold text-solar-green">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-solar-blue text-white hover:bg-solar-green disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Show previous testimonials"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - visibleCards}
              className="p-3 rounded-full bg-solar-blue text-white hover:bg-solar-green disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Show next testimonials"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
