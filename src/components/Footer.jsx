import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-solar-blue text-white pt-20 pb-10">
     <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Text */}
              <span className="text-xl font-bold text-white tracking-tight">
                AKASH <span className="text-solar-green">SOLAR</span>
              </span>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed">
              Empowering homes and businesses with clean, sustainable, and
              affordable solar energy solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-solar-green hover:text-solar-blue transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-solar-green hover:text-solar-blue transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-solar-green hover:text-solar-blue transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-solar-green hover:text-solar-blue transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-solar-green pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Our Services",
                "Projects",
                "Latest Blog",
                'FAQ',
                "Contact Us"
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-solar-green transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 text-solar-green" />{" "}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-solar-green pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Solar Maintenance",
                "Energy Consultation",
                "System Design",
                "Battery Storage"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-solar-green transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 text-solar-green" />{" "}
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-solar-green pb-2 inline-block">
              Contact Us
            </h4>

            <div className="space-y-4 text-white/80">
              {/* Address */}
              <div>
                <p className="font-semibold text-white">📍 Address</p>
                <p>
                  123 Solar Street, Green Energy Park, New Delhi, India - 110001
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="font-semibold text-white">📞 Phone</p>
                <p>+91 98765 43210</p>
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-white">📧 Email</p>
                <p>info@akashsolar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>© 2026 Akash Solar Energy Solutions. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-solar-green">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-solar-green">
              Terms of Service
            </a>
            <a href="#" className="hover:text-solar-green">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </footer>
  );
}
