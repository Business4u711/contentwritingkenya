import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const generateMockData = () => {
  return [
    { keyword: "best seo agency africa", volume: "12K", pos: 1, movement: 0, intent: "Commercial" },
    { keyword: "enterprise content strategy", volume: "8.5K", pos: 2, movement: 1, intent: "B2B" },
    { keyword: "ecommerce seo services", volume: "22K", pos: 3, movement: -1, intent: "Transactional" },
    { keyword: "b2b lead generation nairobi", volume: "4.2K", pos: 1, movement: 2, intent: "Local" },
    { keyword: "saas growth marketing", volume: "15K", pos: 4, movement: 3, intent: "Enterprise" },
    { keyword: "digital marketing global", volume: "45K", pos: 12, movement: 5, intent: "Informational" },
  ];
};

export function LiveRankTracker() {
  const [data, setData] = useState(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live fluctuating data
      const newData = [...data];
      const randomIdx = Math.floor(Math.random() * newData.length);
      const move = Math.random() > 0.5 ? 1 : -1;
      
      if (newData[randomIdx].pos > 1 || move > 0) {
        newData[randomIdx].pos = Math.max(1, newData[randomIdx].pos + move);
        newData[randomIdx].movement = move;
      }
      
      setData(newData);
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <section className="py-24 relative bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
              </span>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/50">Live Global SERP Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-tight">
              We Don't Guess. <br />
              <span className="text-white/40">We Monitor Dominance.</span>
            </h2>
          </div>
          
          <p className="text-white/50 font-light max-w-sm text-sm lg:text-right">
            Our proprietary intelligence engines track enterprise keyword volatility across 40+ global markets in real-time, ensuring our partners never lose market share.
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-6">
          <div className="min-w-[800px] ">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-white/40 border-b border-white/10 pb-4">
              <div className="col-span-2">Target Semantic Entity</div>
              <div>Search Volume</div>
              <div>User Intent</div>
              <div>Global Position</div>
              <div>24h Movement</div>
            </div>
            
            {/* Table Rows */}
            <div className="space-y-2">
              {data.map((item, idx) => (
                <motion.div 
                  key={idx}
                  layout
                  className="grid grid-cols-6 gap-4 items-center bg-white/5 p-4 border border-white/5 hover:border-brand-gold/30 transition-colors group"
                >
                  <div className="col-span-2 flex items-center gap-3">
                    <Globe className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="text-white font-medium text-sm group-hover:text-brand-gold transition-colors">{item.keyword}</span>
                  </div>
                  <div className="text-white/60 font-mono text-xs">{item.volume}</div>
                  <div className="text-xs uppercase tracking-widest">
                    <span className={`px-2 py-1 bg-white/5 text-[9px] font-bold
                      ${item.intent === 'Commercial' ? 'text-brand-gold' : ''}
                      ${item.intent === 'Transactional' ? 'text-brand-blue' : ''}
                      ${item.intent === 'B2B' ? 'text-white' : ''}
                    `}>
                      {item.intent}
                    </span>
                  </div>
                  <div className="font-heading font-black text-xl text-white">#{item.pos}</div>
                  <div>
                    {item.movement > 0 ? (
                      <div className="flex items-center gap-1 text-red-400 font-mono text-xs">
                        <ArrowDownRight className="w-3 h-3" /> {Math.abs(item.movement)} (Drop)
                      </div>
                    ) : item.movement < 0 ? (
                      <div className="flex items-center gap-1 text-green-400 font-mono text-xs">
                         <ArrowUpRight className="w-3 h-3" /> {Math.abs(item.movement)} (Gained)
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-white/40 font-mono text-xs">
                        - Stable
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
