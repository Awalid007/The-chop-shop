
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-zeal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <span className="text-xl font-bold tracking-widest uppercase text-slate-900">VA CHOP SHOP</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed italic">
              "We take pride in our work and ensure that every guest who walks through our doors leaves looking and feeling their best."
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium">
              <li><a href="#services" className="hover:text-zeal transition-colors">Services</a></li>
              <li><a href="#lab" className="hover:text-zeal transition-colors">Style Lab</a></li>
              <li><a href="#booking" className="hover:text-zeal transition-colors">Booking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">Social</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium">
              <li><a href="#" className="hover:text-zeal transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-zeal transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-zeal transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <span>© 2024 VA CHOP SHOP • COLUMBUS, OHIO</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
