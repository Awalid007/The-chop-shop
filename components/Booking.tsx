
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="bg-slate-900 py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="lg:w-2/5 p-12 md:p-16 bg-slate-950 text-white flex flex-col">
            <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-8">WHY STAND OUT?</h3>
            <p className="text-slate-400 text-sm mb-12 leading-relaxed">
              Discover why VA Chop Shop stands out. We provide personalized, luxury grooming with expert barbers, premium products, and unmatched convenience from our heart in Polaris.
            </p>
            
            <div className="mt-auto space-y-10">
              <div className="flex items-center gap-6">
                <div className="bg-zeal p-3 rounded-full"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                <div>
                  <span className="block text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Give Us A Call</span>
                  <p className="font-bold">+1 (614) 947-0620</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-zeal p-3 rounded-full"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                <div>
                  <span className="block text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Send Us An Email</span>
                  <p className="font-bold">booking@vachopshop.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 md:p-16 bg-slate-50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-zeal text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-2xl font-bold uppercase text-slate-900 mb-2">Request Received!</h4>
                <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">We'll contact you shortly to confirm.</p>
              </div>
            ) : (
              <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input required className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-zeal focus:outline-none transition-all text-sm font-medium" placeholder="Ex: John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input required className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-zeal focus:outline-none transition-all text-sm font-medium" placeholder="(614) --- ----" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Service Type</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-zeal focus:outline-none transition-all text-sm font-medium appearance-none">
                      <option>SELECT SERVICE</option>
                      <option>SIGNATURE CHOP</option>
                      <option>FACE SHAVE</option>
                      <option>BEARD SCULPTURE</option>
                    </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea className="w-full bg-white border border-slate-200 rounded-xl p-4 h-32 focus:ring-2 focus:ring-zeal focus:outline-none transition-all text-sm font-medium resize-none" placeholder="Anything else we should know?"></textarea>
                </div>
                <button className="w-full bg-zeal text-white font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-xl hover:bg-zeal-dark transition-all shadow-xl shadow-zeal/20">
                  Book An Appointment
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      
      {/* Map Placeholder as per image */}
      <div className="w-full h-80 mt-20 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 bg-zeal rounded-full animate-ping"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">8330 Lyra Dr, Columbus, OH</span>
              </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3051.487820468925!2d-82.9815024!3d40.1423456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ed5f3405785f%3A0xc077f3e4663d917b!2s8330%20Lyra%20Dr%2C%20Columbus%2C%20OH%2043240!5e0!3m2!1sen!2sus!4v1715620000000!5m2!1sen!2sus" 
            className="w-full h-full border-none" 
            allowFullScreen={false} 
            loading="lazy" 
          />
      </div>
    </section>
  );
};

export default Booking;
