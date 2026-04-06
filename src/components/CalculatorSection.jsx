import { CheckCircle2 } from 'lucide-react';
import Calculator from './Calculator';

export default function CalculatorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-solar-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 lg:p-16 text-white">
            <h2 className="text-solar-green text-sm font-bold uppercase tracking-widest mb-4">Savings Calculator</h2>
            <h3 className="text-4xl font-bold mb-6">Calculate Your <span className="text-solar-green">Solar Potential</span></h3>
            <p className="text-white/70 mb-10 leading-relaxed">
              Enter your details to get an instant estimate of how much you could save by switching to solar energy with Akash Solar.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-solar-green/20 p-3 rounded-full text-solar-green">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Instant Estimates</h4>
                  <p className="text-sm text-white/60">Get immediate results based on your inputs.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-solar-green/20 p-3 rounded-full text-solar-green">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Customized Reports</h4>
                  <p className="text-sm text-white/60">Tailored to your specific roof and location.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-solar-grey p-10 lg:p-16">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  );
}
