
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
          <div className="flex items-center gap-2 mb-0.5">
            <svg className={`w-6 h-6 ${scrolled ? 'text-zeal' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
            <span className={`text-xl font-bold tracking-widest uppercase ${scrolled ? 'text-slate-900' : 'text-white'}`}>VA CHOP SHOP</span>
          </div>
          <span className={`text-[8px] tracking-[0.4em] uppercase font-semibold ${scrolled ? 'text-zeal' : 'text-white/60'}`}>Polaris • Columbus</span>
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
