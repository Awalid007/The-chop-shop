
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
            alt="Barber" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
            EXPERT GROOMING, <br />
            BOLD STYLE AT VA CHOP SHOP
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium opacity-80 mb-10">
            Where precision meets passion. Experience premium grooming tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="bg-zeal px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-zeal-dark transition-all">Book An Appointment</a>
            <a href="#services" className="border-2 border-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Browse Services</a>
          </div>
        </div>
      </section>

      {/* Floating Info Bar */}
      <div className="container mx-auto px-6 relative -mt-20 z-20">
        <div className="bg-white zeal-shadow rounded-2xl grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-8 md:p-12">
          <div className="flex items-start gap-6 p-4 md:p-0">
            <div className="bg-zeal/10 p-3 rounded-full text-zeal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-2">Address</h4>
              <p className="font-semibold text-slate-800">8330 Lyra Dr,<br />Columbus, OH 43240</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-4 md:p-0 md:pl-10">
            <div className="bg-zeal/10 p-3 rounded-full text-zeal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-2">Phone</h4>
              <p className="font-semibold text-slate-800">+1 (614) 947-0620</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-4 md:p-0 md:pl-10">
            <div className="bg-zeal/10 p-3 rounded-full text-zeal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-2">Hours</h4>
              <p className="font-semibold text-slate-800">Mon - Sat: 9AM - 8PM<br />Sun: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
