
import React from 'react';

const services = [
  { id: 1, name: 'Signature Chop', description: 'Precision fade or taper with hot towel neck shave and styling.', price: '$35', icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121' },
  { id: 2, name: 'Face Shave', description: 'Classic straight razor shave with premium oil and hot towel.', price: '$35', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 3, name: 'Beard Sculpture', description: 'Detailed beard shaping and razor line-up for the modern man.', price: '$20', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { id: 4, name: 'Head Shave', description: 'Smooth, straight razor head shave with scalp conditioning.', price: '$35', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Teal Feature Box */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-zeal p-12 md:p-16 rounded-[2rem] text-white flex-grow">
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight mb-8">
                EXCEPTIONAL GROOMING SERVICES TAILORED TO YOU
              </h2>
              <p className="text-white/80 font-medium leading-relaxed mb-8">
                At VA Chop Shop, we offer grooming services to keep you sharp and confident. From classic cuts to modern styles and premium beard care, our expert barbers have you covered.
              </p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-white opacity-20"></div>
              </div>
            </div>
            <div className="hidden lg:block h-20"></div> {/* Spacer for alignment */}
          </div>

          {/* Right Service List */}
          <div className="lg:w-3/5 space-y-6">
            {services.map((s) => (
              <div key={s.id} className="bg-zeal-light p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center group hover:bg-white hover:zeal-shadow transition-all duration-300 gap-6">
                <div className="flex items-start gap-6">
                  <div className="text-zeal group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon}></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider mb-2 text-slate-800">{s.name}</h4>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
                <div className="bg-zeal text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  {s.price} USD
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
