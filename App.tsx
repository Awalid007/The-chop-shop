
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StyleConsultant from './components/StyleConsultant';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Doorstep Service / Promo Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-zeal font-black uppercase tracking-[0.3em] text-[10px] mb-4">Since 2023</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-slate-900 mb-8">
                  PREMIUM GROOMING FOR MEN, WOMEN & KIDS IN STAFFORD
                </h3>
                <p className="text-slate-500 leading-relaxed mb-10 max-w-lg font-medium">
                  Experience Stafford's premier barbershop. Whether you need a precision fade, a beard sculpt, or a fresh cut for the little ones, our expert team delivers top-notch service in a family-friendly atmosphere.
                </p>
                <div className="flex gap-12">
                  <div>
                    <span className="block text-4xl font-extrabold text-slate-900 mb-1">5.0</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Star Rating</span>
                  </div>
                  <div className="border-l border-slate-100 pl-12">
                    <span className="block text-4xl font-extrabold text-slate-900 mb-1">100+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Daily Cuts</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074" className="rounded-3xl zeal-shadow relative z-10" alt="Barbering" />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-zeal/10 rounded-full z-0"></div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-slate-100 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* Home Comfort Promo / Mid Banner */}
        <section className="relative py-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase text-white mb-8 max-w-3xl mx-auto leading-tight">
              MILITARY & FIRST RESPONDER DISCOUNTS AVAILABLE
            </h3>
            <a href="#booking" className="inline-block bg-zeal text-white px-10 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-zeal transition-all">Book An Appointment</a>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-extrabold uppercase text-slate-900 mb-4">WHY THE CHOP SHOP?</h3>
              <p className="text-slate-400 uppercase font-bold tracking-widest text-[10px]">Expertise, Luxury, and Family Values</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-zeal mb-6 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="font-extrabold uppercase text-slate-800 mb-4 tracking-widest">EXPERT</h4>
                <p className="text-slate-500 text-sm font-medium">Skilled professionals dedicated to delivering top-quality results.</p>
              </div>
              <div>
                <div className="text-zeal mb-6 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                <h4 className="font-extrabold uppercase text-slate-800 mb-4 tracking-widest">PREMIUM</h4>
                <p className="text-slate-500 text-sm font-medium">Only the best products used for a superior grooming experience.</p>
              </div>
              <div>
                <div className="text-zeal mb-6 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <h4 className="font-extrabold uppercase text-slate-800 mb-4 tracking-widest">COMFORT</h4>
                <p className="text-slate-500 text-sm font-medium">Relax in our modern Polaris shop while we handle the rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Changer / Testimonial Card */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-zeal-light rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-xl w-full aspect-square object-cover" alt="James Carter" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-extrabold uppercase text-slate-900 mb-6">A GAME-CHANGER IN GROOMING!</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  "VA Chop Shop has redefined my grooming experience! The expert team provides impeccable service and attention to detail. Each visit feels like a personal pampering session, and I always leave looking and feeling my best. Highly recommend!"
                </p>
                <div>
                  <h5 className="font-extrabold text-slate-900">JAMES CARTER</h5>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zeal">CEO of InnovateTech</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StyleConsultant />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;
