import { useState } from "react";
import { motion } from "motion/react";

export default function Calculator() {
  const [bill, setBill] = useState("3000");
  const [roofSize, setRoofSize] = useState("500");
  const [orientation, setOrientation] = useState("South");
  const [location, setLocation] = useState("Urban");
  const [state, setState] = useState("Delhi");

  const calculateSavings = () => {
    const billValue = Number(bill) || 0;
    const roofValue = Number(roofSize) || 0;

    const costPerUnit = 7.5;
    const unitsUsed = billValue / costPerUnit;

    // 🌍 State sunlight factor
    const stateFactor = {
      Rajasthan: 1.2,
      Gujarat: 1.15,
      Maharashtra: 1.05,
      Delhi: 1.0,
      Punjab: 0.95,
      "Uttar Pradesh": 0.9,
      Karnataka: 1.1,
      "Tamil Nadu": 1.15,
    };

    const sunlight = stateFactor[state] || 1;

    // 🧭 Orientation factor
    let orientationFactor = 1;
    if (orientation === "East/West") orientationFactor = 0.85;
    if (orientation === "North") orientationFactor = 0.6;

    // 📍 Location factor
    let locationFactor = 1;
    if (location === "Rural") locationFactor = 1.1;
    if (location === "Industrial") locationFactor = 0.95;

    // ☀️ Base solar generation
    const baseGeneration = 120;

    const adjustedGeneration =
      baseGeneration * sunlight * orientationFactor * locationFactor;

    // 🏠 Roof capacity
    const maxSystemByRoof = roofValue / 100;

    // ⚡ Required system size
    let requiredSystemSize = unitsUsed / adjustedGeneration;

    requiredSystemSize = Math.min(requiredSystemSize, maxSystemByRoof);

    // 💰 Savings
    const monthlySavings = billValue * 0.85;
    const annualSavings = monthlySavings * 12;

    const systemCost = requiredSystemSize * 55000;
    const paybackPeriod =
      annualSavings > 0 ? systemCost / annualSavings : 0;

    return {
      monthlySavings: billValue
        ? Math.round(monthlySavings)
        : 0,
      annualSavings: billValue
        ? Math.round(annualSavings)
        : 0,
      systemSize: billValue
        ? requiredSystemSize.toFixed(1)
        : "0.0",
      payback: billValue
        ? paybackPeriod.toFixed(1)
        : "0.0",
    };
  };

  const results = calculateSavings();

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bill */}
        <div>
          <label className="block text-solar-blue font-bold mb-2">
            Monthly Bill (₹)
          </label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none"
          />
        </div>

        {/* Roof */}
        <div>
          <label className="block text-solar-blue font-bold mb-2">
            Roof Size (sq ft)
          </label>
          <input
            type="number"
            value={roofSize}
            onChange={(e) => setRoofSize(e.target.value)}
            placeholder="Enter roof size"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none"
          />
        </div>

        {/* Orientation */}
        <div>
          <label className="block text-solar-blue font-bold mb-2">
            Orientation
          </label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none bg-white"
          >
            <option value="South">South (Best)</option>
            <option value="East/West">East / West</option>
            <option value="North">North</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-solar-blue font-bold mb-2">
            Location Type
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none bg-white"
          >
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        {/* State */}
        <div className="md:col-span-2">
          <label className="block text-solar-blue font-bold mb-2">
            State
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 outline-none bg-white"
          >
            <option>Delhi</option>
            <option>Rajasthan</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Punjab</option>
            <option>Uttar Pradesh</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 p-6 bg-solar-blue rounded-2xl text-white">
        <h4 className="text-solar-green font-bold uppercase tracking-widest text-xs mb-6">
          Estimated Results
        </h4>

        <div className="grid grid-cols-2 gap-6">
          <motion.div>
            <p className="text-white/60 text-xs uppercase font-bold mb-1">
              Monthly Savings
            </p>
            <p className="text-2xl font-bold text-solar-green">
              ₹{results.monthlySavings.toLocaleString()}
            </p>
          </motion.div>

          <motion.div>
            <p className="text-white/60 text-xs uppercase font-bold mb-1">
              Annual Savings
            </p>
            <p className="text-2xl font-bold text-solar-green">
              ₹{results.annualSavings.toLocaleString()}
            </p>
          </motion.div>

          <motion.div>
            <p className="text-white/60 text-xs uppercase font-bold mb-1">
              System Size
            </p>
            <p className="text-2xl font-bold text-white">
              {results.systemSize} kW
            </p>
          </motion.div>

          <motion.div>
            <p className="text-white/60 text-xs uppercase font-bold mb-1">
              Payback Period
            </p>
            <p className="text-2xl font-bold text-white">
              {results.payback} Years
            </p>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-gray-400 italic text-center">
        *Estimates vary based on sunlight, roof conditions, and electricity tariffs.
      </p>
    </div>
  );
}
