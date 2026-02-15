
import React, { useState, useRef } from 'react';
import { getStyleConsultation } from '../services/geminiService';
import { StyleRecommendation } from '../types';

const StyleConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<StyleRecommendation | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleConsult = async () => {
    if (!prompt && !image) return;
    setLoading(true);
    try {
      const result = await getStyleConsultation(prompt || "Best look for me?", image || undefined);
      setRecommendation(result);
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  return (
    <section id="lab" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-zeal font-black uppercase tracking-[0.3em] text-xs mb-4">The Style Lab</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold uppercase text-slate-900 mb-6">AI ASSISTED GROOMING</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Get a professional style recommendation from our digital concierge before you book.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] zeal-shadow overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 space-y-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Tell us what you're looking for..."
              className="w-full h-40 bg-slate-50 border-none rounded-2xl p-6 text-slate-800 focus:ring-2 focus:ring-zeal focus:outline-none transition-all resize-none font-medium"
            />
            <div className="flex gap-4">
              <button onClick={() => fileInputRef.current?.click()} className="flex-1 bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-[10px] py-4 rounded-xl hover:bg-slate-200 transition-all">
                {image ? 'Photo Selected' : 'Upload Selfie'}
              </button>
              <button onClick={handleConsult} disabled={loading} className="flex-1 bg-zeal text-white font-bold uppercase tracking-widest text-[10px] py-4 rounded-xl hover:bg-zeal-dark transition-all">
                {loading ? 'Analyzing...' : 'Analyze Face'}
              </button>
              <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  const r = new FileReader();
                  r.onloadend = () => setImage(r.result as string);
                  r.readAsDataURL(f);
                }
              }} />
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12 bg-zeal/5 flex items-center justify-center min-h-[400px]">
            {recommendation ? (
              <div className="w-full space-y-6 animate-in fade-in duration-500">
                <span className="text-zeal font-black text-[10px] uppercase tracking-widest">Diagnostic Result</span>
                <h4 className="text-3xl font-extrabold uppercase text-slate-900">{recommendation.styleName}</h4>
                <p className="text-slate-600 italic leading-relaxed">"{recommendation.description}"</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Maint</span>
                      <span className="font-bold text-zeal">{recommendation.maintenanceLevel}</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="block text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Face Shape</span>
                      <span className="font-bold text-zeal">{recommendation.suitability}</span>
                   </div>
                </div>
              </div>
            ) : (
              <div className="text-center opacity-30">
                 <svg className="w-20 h-20 mx-auto mb-4 text-zeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                 <span className="text-xs uppercase font-bold tracking-widest">Awaiting Style Input</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleConsultant;
