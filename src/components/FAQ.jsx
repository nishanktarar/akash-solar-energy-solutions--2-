import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer: "A typical residential solar installation usually takes 1 to 3 days. However, the entire process, including site assessment, design, and permitting, can take 4 to 8 weeks."
  },
  {
    question: "Do solar panels work on cloudy days?",
    answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency is reduced. They rely on light, not just direct heat from the sun."
  },
  {
    question: "What maintenance do solar panels require?",
    answer: "Solar panels require very little maintenance. We recommend cleaning them twice a year to remove dust and debris, and a professional inspection every few years to ensure peak performance."
  },
  {
    question: "How much can I save on my electricity bills?",
    answer: "Savings vary based on your energy usage and system size, but most homeowners see a reduction of 70% to 90% in their monthly electricity bills."
  },
  {
    question: "What is the lifespan of a solar panel system?",
    answer: "Most modern solar panels come with a 25-year warranty and can continue to produce electricity for 30 to 40 years, though their efficiency gradually decreases over time."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4"
          >
            Common Questions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-solar-blue"
          >
            Frequently Asked <span className="text-solar-green">Questions</span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 border-b border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-solar-green' : 'text-solar-blue group-hover:text-solar-green'}`}>
                  {faq.question}
                </span>
                <span className={`p-1 rounded-full transition-all ${activeIndex === index ? 'bg-solar-green text-solar-blue rotate-180' : 'bg-solar-grey text-solar-blue'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
