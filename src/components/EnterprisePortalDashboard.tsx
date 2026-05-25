import { motion } from "motion/react";
import { LayoutDashboard, Users, Activity, Settings, Bell, Search, BarChart3, PieChart, FileText, CheckCircle2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const generateDashboardData = () => {
  return [
    { name: 'Week 1', traffic: 4000, leads: 24, revenue: 24000 },
    { name: 'Week 2', traffic: 3000, leads: 13, revenue: 13980 },
    { name: 'Week 3', traffic: 5000, leads: 98, revenue: 98000 },
    { name: 'Week 4', traffic: 7500, leads: 39, revenue: 39080 },
    { name: 'Week 5', traffic: 8200, leads: 48, revenue: 48000 },
    { name: 'Week 6', traffic: 12000, leads: 78, revenue: 78000 },
    { name: 'Week 7', traffic: 15400, leads: 93, revenue: 93000 },
    { name: 'Week 8', traffic: 17800, leads: 110, revenue: 110000 },
    { name: 'Week 9', traffic: 19900, leads: 130, revenue: 130000 },
    { name: 'Week 10', traffic: 22000, leads: 155, revenue: 155000 },
    { name: 'Week 11', traffic: 23500, leads: 172, revenue: 172000 },
    { name: 'Week 12', traffic: 24592, leads: 412, revenue: 142500 }
  ];
};

export function EnterprisePortalDashboard() {
  const [data] = useState(generateDashboardData());
  const [activeTab, setActiveTab] = useState("traffic");

  return (
    <section className="py-32 relative bg-brand-charcoal overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-white/50">
            <span className="w-10 h-[1px] bg-white/20"></span>
            <span>Client Command Center</span>
            <span className="w-10 h-[1px] bg-white/20"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[70px] font-heading font-black leading-none uppercase tracking-tighter mb-8">
            Complete <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-white)' }}>Transparency.</span>
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto">
            Every enterprise partner receives access to our proprietary growth dashboard. Monitor rankings, approve content, and track revenue attribution in real-time.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/20 blur-[120px] z-0 pointer-events-none" />
          
          <div className="relative z-10 glass-panel border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
            
            {/* Top Bar */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="w-px h-4 bg-white/10 mx-2" />
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Workspace / Acxelerate Inc.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-white/40 absolute left-2 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search metrics..." className="bg-white/5 border border-white/10 rounded-md pl-8 pr-3 py-1 text-xs focus:outline-none w-48 text-white focus:border-brand-blue transition-colors" />
                </div>
                <button className="text-white/40 hover:text-white transition-colors"><Bell className="w-4 h-4" /></button>
                <div className="w-6 h-6 rounded-full bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center cursor-pointer">
                  <span className="text-[10px] font-bold text-brand-blue">AX</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Sidebar */}
              <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible items-center md:items-stretch h-auto md:h-auto shrink-0">
                <button className="flex items-center gap-3 px-3 py-2 text-brand-gold bg-brand-gold/10 rounded-md whitespace-nowrap md:whitespace-normal w-full text-left">
                  <LayoutDashboard className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Overview</span>
                </button>
                <button className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors whitespace-nowrap md:whitespace-normal w-full text-left">
                  <Activity className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Rankings</span>
                </button>
                <button className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors whitespace-nowrap md:whitespace-normal w-full text-left">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Content Auth</span>
                </button>
                <button className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors whitespace-nowrap md:whitespace-normal w-full text-left">
                  <Users className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Leads CRM</span>
                </button>
                
                <div className="md:mt-auto flex items-center gap-3 px-3 py-2 text-white/30 hover:text-white hover:bg-white/5 rounded-md transition-colors md:border-t md:border-white/10 pt-4 whitespace-nowrap md:whitespace-normal w-full text-left cursor-not-allowed">
                  <Settings className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Settings</span>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col h-full w-full max-w-full">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8">
                  <div>
                     <h3 className="text-xl font-heading font-bold text-white mb-1">Growth Overview</h3>
                     <p className="text-white/40 text-xs">Last updated: Just now | Showing Data for Q3</p>
                  </div>
                  <div className="flex text-[10px] uppercase font-bold tracking-widest border border-white/10 rounded divide-x divide-white/10 overflow-hidden text-white/60">
                    <button className="px-3 py-1 cursor-pointer hover:bg-white/5 bg-transparent transition-colors">7D</button>
                    <button className="px-3 py-1 cursor-pointer hover:bg-white/5 bg-white/10 text-white transition-colors">30D</button>
                    <button className="px-3 py-1 cursor-pointer hover:bg-white/5 bg-transparent transition-colors">90D</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <button 
                    onClick={() => setActiveTab('traffic')}
                    className={`bg-white/5 border rounded-lg p-4 text-left transition-colors ${activeTab === 'traffic' ? 'border-brand-blue bg-brand-blue/10' : 'border-white/10 hover:border-brand-blue/30'}`}
                  >
                     <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Organic Traffic</p>
                     <p className="text-2xl font-mono text-white mb-2">24,592</p>
                     <p className="text-[10px] text-brand-blue font-bold">+14.2% vs last mo</p>
                  </button>
                  <button 
                    onClick={() => setActiveTab('leads')}
                    className={`bg-white/5 border rounded-lg p-4 text-left transition-colors ${activeTab === 'leads' ? 'border-brand-gold bg-brand-gold/10' : 'border-white/10 hover:border-brand-gold/30'}`}
                  >
                     <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Qualified Leads</p>
                     <p className="text-2xl font-mono text-white mb-2">412</p>
                     <p className="text-[10px] text-brand-gold font-bold">+28.5% vs last mo</p>
                  </button>
                  <button 
                    onClick={() => setActiveTab('revenue')}
                    className={`bg-white/5 border rounded-lg p-4 text-left transition-colors ${activeTab === 'revenue' ? 'border-green-400 bg-green-400/10' : 'border-white/10 hover:border-green-400/30'}`}
                  >
                     <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Est. Revenue Value</p>
                     <p className="text-2xl font-mono text-white mb-2">$142,500</p>
                     <p className="text-[10px] text-green-400 font-bold">+34.1% vs last mo</p>
                  </button>
                </div>
                
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 relative w-full h-[300px]">
                   <p className="text-xs uppercase font-bold text-white/60 mb-4">
                     {activeTab === 'traffic' ? 'Traffic Trajectory' : 
                      activeTab === 'leads' ? 'Lead Velocity' : 'Revenue Growth'}
                   </p>
                   
                   <div className="w-full h-full min-h-[250px] absolute inset-0 pt-12 pb-4 px-4 overflow-hidden">
                     <ResponsiveContainer width="100%" height="100%" >
                       <LineChart data={data}>
                         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                         <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                         <YAxis 
                           stroke="rgba(255,255,255,0.3)" 
                           fontSize={10} 
                           tickLine={false} 
                           axisLine={false} 
                           tickFormatter={(val) => activeTab === 'revenue' ? `$${val/1000}k` : val >= 1000 ? `${(val/1000).toFixed(1)}k` : val}
                         />
                         <Tooltip 
                           contentStyle={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.1)' }} 
                           itemStyle={{ color: '#fff' }}
                           labelStyle={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}
                         />
                         <Line 
                           type="monotone" 
                           dataKey={activeTab} 
                           stroke={activeTab === 'traffic' ? 'var(--color-brand-blue)' : activeTab === 'leads' ? 'var(--color-brand-gold)' : '#4ade80'} 
                           strokeWidth={2}
                           dot={{ r: 0 }}
                           activeDot={{ r: 6, fill: activeTab === 'traffic' ? 'var(--color-brand-blue)' : activeTab === 'leads' ? 'var(--color-brand-gold)' : '#4ade80' }}
                         />
                       </LineChart>
                     </ResponsiveContainer>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
