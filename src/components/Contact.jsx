import { useState } from 'react';
import { Phone, Mail, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-solar-blue text-sm font-bold uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-solar-blue mb-8">Get in Touch <span className="text-solar-green">With Us</span></h3>
            <p className="text-gray-600 mb-10">Have questions about solar energy? Our team of experts is ready to help you find the best solution for your needs.</p>
            
            <div className="space-y-6">
              {[
                { icon: <Phone size={24} />, title: "Call Us", detail: "+91 98765 43210" },
                { icon: <Mail size={24} />, title: "Email Us", detail: "info@akashsolar.com" },
                { icon: <Home size={24} />, title: "Our Office", detail: "123 Solar Street, Green City, India" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-solar-blue p-4 rounded-full text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-blue">{item.title}</h4>
                    <p className="text-gray-500">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-solar-grey p-10 rounded-3xl shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-solar-blue font-bold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-solar-blue font-bold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-solar-blue font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-solar-blue font-bold mb-2">Your Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-solar-blue text-white font-bold py-4 rounded-xl hover:bg-solar-green hover:text-solar-blue transition-all shadow-lg"
                >
                  Send Message
                </motion.button>
                
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-600 font-bold text-center"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {formStatus === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-600 font-bold text-center"
                    >
                      Please fill in all required fields.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
