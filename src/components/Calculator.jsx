import { useState } from 'react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [bill, setBill] = useState(3000);
  const [roofSize, setRoofSize] = useState(500);
  const [orientation, setOrientation] = useState('South');
  const [location, setLocation] = useState('Urban');

  const calculateSavings = () => {
    // Basic calculation logic
    const costPerUnit = 7.5;
    const unitsUsed = bill / costPerUnit;
    
    let orientationMultiplier = 1;
    if (orientation === 'East/West') orientationMultiplier = 0.85;
    if (orientation === 'North') orientationMultiplier = 0.6;

    let locationMultiplier = 1;
    if (location === 'Rural') locationMultiplier = 1.1; // More sun/space
    if (location === 'Industrial') locationMultiplier = 0.95;

    const solarGenerationPerKW = 120; // units per month
    const requiredSystemSize = (unitsUsed / solarGenerationPerKW) / orientationMultiplier / locationMultiplier;
    
    const monthlySavings = bill * 0.9; // Assuming 90% offset
    const annualSavings = monthlySavings * 12;
    const systemCost = requiredSystemSize * 55000;
    const paybackPeriod = systemCost / annualSavings;

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      systemSize: requiredSystemSize.toFixed(1),
      payback: paybackPeriod.toFixed(1)
    };
  };

  const results = calculateSavings();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-solar-blue font-bold mb-2">Monthly Bill (₹)</label>
          <input 
            type="number" 
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-solar-blue font-bold mb-2">Roof Size (sq ft)</label>
          <input 
            type="number" 
            value={roofSize}
            onChange={(e) => setRoofSize(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-solar-blue font-bold mb-2">Orientation</label>
          <select 
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all appearance-none bg-white"
          >
            <option value="South">South (Best)</option>
            <option value="East/West">East / West</option>
            <option value="North">North</option>
          </select>
        </div>
        <div>
          <label className="block text-solar-blue font-bold mb-2">Location Type</label>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none transition-all appearance-none bg-white"
          >
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
      </div>

      <div className="mt-10 p-6 bg-solar-blue rounded-2xl text-white">
        <h4 className="text-solar-green font-bold uppercase tracking-widest text-xs mb-6">Estimated Results</h4>
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            key={results.monthlySavings}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="text-white/60 text-xs uppercase font-bold mb-1">Monthly Savings</p>
            <p className="text-2xl font-bold text-solar-green">₹{results.monthlySavings.toLocaleString()}</p>
          </motion.div>
          <motion.div
            key={results.annualSavings}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-white/60 text-xs uppercase font-bold mb-1">Annual Savings</p>
            <p className="text-2xl font-bold text-solar-green">₹{results.annualSavings.toLocaleString()}</p>
          </motion.div>
          <motion.div
            key={results.systemSize}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/60 text-xs uppercase font-bold mb-1">System Size</p>
            <p className="text-2xl font-bold text-white">{results.systemSize} kW</p>
          </motion.div>
          <motion.div
            key={results.payback}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/60 text-xs uppercase font-bold mb-1">Payback Period</p>
            <p className="text-2xl font-bold text-white">{results.payback} Years</p>
          </motion.div>
        </div>
      </div>
      
      <p className="text-[10px] text-gray-400 italic text-center">
        *Disclaimer: These are estimated values. Actual savings may vary based on site conditions and utility rates.
      </p>
    </div>
  );
}
