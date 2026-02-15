
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-zeal text-white flex items-center justify-center font-black rounded-lg transform group-hover:rotate-3 transition-transform">
              CS
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">THE CHOP SHOP</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zeal leading-none mt-0.5">STAFFORD, VA</span>
            </div>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#services" className={`text-xs font-bold uppercase tracking-widest hover:text-zeal transition-colors ${scrolled ? 'text-slate-600' : 'text-white'}`}>Services</a>
          <a href="#lab" className={`text-xs font-bold uppercase tracking-widest hover:text-zeal transition-colors ${scrolled ? 'text-slate-600' : 'text-white'}`}>AI Lab</a>
          <a href="#booking" className="bg-zeal text-white px-6 py-2.5 rounded text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zeal-dark transition-all">Book Appointment</a>
        </div>

        <button className={scrolled ? 'text-slate-900 lg:hidden' : 'text-white lg:hidden'}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
