// export default function Clientele() {
//  const logos = [
//   {
//     id: 1,
//     url: "https://api.dicebear.com/7.x/shapes/svg?seed=alpha"
//   },
//   {
//     id: 2,
//     url: "https://api.dicebear.com/7.x/shapes/svg?seed=beta"
//   },
//   {
//     id: 3,
//     url: "https://api.dicebear.com/7.x/shapes/svg?seed=gamma"
//   },
//   {
//     id: 4,
//     url: "https://api.dicebear.com/7.x/shapes/svg?seed=delta"
//   },
//   {
//     id: 5,
//     url: "https://api.dicebear.com/7.x/identicon/svg?seed=random1"
//   },
//   {
//     id: 6,
//     url: "https://api.dicebear.com/7.x/identicon/svg?seed=random2"
//   },
//   {
//     id: 7,
//     url: "https://api.dicebear.com/7.x/initials/svg?seed=SolarX"
//   },
//   {
//     id: 8,
//     url: "https://api.dicebear.com/7.x/initials/svg?seed=Energo"
//   },
//   {
//     id: 9,
//     url: "https://robohash.org/company1?set=set4"
//   },
//   {
//     id: 10,
//     url: "https://robohash.org/company2?set=set4"
//   }
// ];
//   return (
//     <section className="py-16 bg-solar-grey">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <p className="text-solar-blue font-bold uppercase tracking-widest text-sm">
//             Trusted By Leading Brands
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
//           {logos.map((logo) => (
//             <div
//               key={logo.id}
//               className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
//             >
//               <img
//                 src={logo.url}
//                 alt={`logo-${logo.id}`}
//                 className="h-12 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";

export default function Clientele() {
  const logos = [
  {
    id: 1,
    url: "https://api.dicebear.com/7.x/shapes/svg?seed=alpha"
  },
  {
    id: 2,
    url: "https://api.dicebear.com/7.x/shapes/svg?seed=beta"
  },
  {
    id: 3,
    url: "https://api.dicebear.com/7.x/shapes/svg?seed=gamma"
  },
  {
    id: 4,
    url: "https://api.dicebear.com/7.x/shapes/svg?seed=delta"
  },
  {
    id: 5,
    url: "https://api.dicebear.com/7.x/identicon/svg?seed=random1"
  },
  {
    id: 6,
    url: "https://api.dicebear.com/7.x/identicon/svg?seed=random2"
  },
  {
    id: 7,
    url: "https://api.dicebear.com/7.x/initials/svg?seed=SolarX"
  },
  {
    id: 8,
    url: "https://api.dicebear.com/7.x/initials/svg?seed=Energo"
  },
  {
    id: 9,
    url: "https://robohash.org/company1?set=set4"
  },
  {
    id: 10,
    url: "https://robohash.org/company2?set=set4"
  }
];
  // Duplicate logos for a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-solar-grey overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <p className="text-solar-blue font-bold uppercase tracking-widest text-sm">
            Trusted By Leading Brands
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex space-x-12 items-center whitespace-nowrap"
          animate={{
            x: [0, -1032] // Adjust based on total width of one set of logos
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              <div className="w-40 h-16 flex items-center justify-center">
                <img
                  src={logo.url}
                  alt="client logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
