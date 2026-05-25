import { Database, Network, Search, ArrowRight, Zap, Combine } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const nodes = [
  { id: "core", type: "Core Subject", name: "Enterprise SaaS Optimization", x: 50, y: 50, size: 24, color: "var(--color-brand-blue)" },
  { id: "n1", type: "Silo", name: "Technical Structure", x: 20, y: 30, size: 16, color: "var(--color-white)" },
  { id: "n2", type: "Silo", name: "Content Architecture", x: 80, y: 30, size: 16, color: "var(--color-white)" },
  { id: "n3", type: "Silo", name: "Link Graph", x: 50, y: 80, size: 16, color: "var(--color-white)" },
  // Leaves
  { id: "l1", type: "Cluster", name: "Render Budget", x: 10, y: 15, size: 10, color: "var(--color-brand-gold)" },
  { id: "l2", type: "Cluster", name: "Schema Strategy", x: 30, y: 10, size: 10, color: "var(--color-brand-gold)" },
  { id: "l3", type: "Cluster", name: "Entity Salience", x: 70, y: 15, size: 10, color: "var(--color-brand-gold)" },
  { id: "l4", type: "Cluster", name: "Topical Maps", x: 90, y: 15, size: 10, color: "var(--color-brand-gold)" },
  { id: "l5", type: "Cluster", name: "Digital PR", x: 35, y: 90, size: 10, color: "var(--color-brand-gold)" },
  { id: "l6", type: "Cluster", name: "Authority Transfer", x: 65, y: 90, size: 10, color: "var(--color-brand-gold)" },
];

const edges = [
  { source: "core", target: "n1" },
  { source: "core", target: "n2" },
  { source: "core", target: "n3" },
  { source: "n1", target: "l1" },
  { source: "n1", target: "l2" },
  { source: "n2", target: "l3" },
  { source: "n2", target: "l4" },
  { source: "n3", target: "l5" },
  { source: "n3", target: "l6" },
];

export function ProgrammaticSEO() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50 z-0" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-brand-gold">
              <span className="w-10 h-[1px] bg-brand-gold"></span>
              <span>Topical Coverage Matrix</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight uppercase tracking-tighter mb-6 text-white">
              Scale at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">Speed of Thought.</span>
            </h2>
            
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-lg">
              We move beyond traditional keyword research. Our proprietary engines build comprehensive entity graphs, deploying thousands of highly-relevant, conversion-optimized pages programmatically.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Database className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Entity Salience Mapping</h4>
                  <p className="text-white/40 text-xs font-light leading-relaxed">Map the exact relationships Google's Knowledge Graph expects to see, ensuring your content satisfies user intent across the entire semantic cluster.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Combine className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Programmatic Architecture</h4>
                  <p className="text-white/40 text-xs font-light leading-relaxed">Generate hundreds of localized or category-specific landing pages simultaneously, maintaining strict quality control and zero duplication.</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Interactive Graph Node Explorer */}
          <div className="relative">
            <div className="glass-panel p-1 border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
              
              <div className="bg-[#0a0a0f] rounded-xl overflow-hidden relative" style={{ height: '450px' }}>
                
                {/* Node Info Panel */}
                <div className="absolute top-4 left-4 z-20 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-lg w-64">
                   <p className="text-[10px] uppercase font-bold text-brand-gold tracking-widest mb-1">{activeNode.type}</p>
                   <h4 className="text-white font-bold mb-2">{activeNode.name}</h4>
                   <div className="flex items-center gap-2 text-[10px] text-white/40">
                     <Zap className="w-3 h-3 text-brand-blue" /> AI Synced
                   </div>
                </div>

                {/* SVG Graph rendering */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute z-10 w-full h-full">
                  <defs>
                    <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-brand-gold)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {edges.map((edge, i) => {
                    const sourceNode = nodes.find(n => n.id === edge.source);
                    const targetNode = nodes.find(n => n.id === edge.target);
                    if (!sourceNode || !targetNode) return null;
                    
                    const isTargetActive = activeNode.id === edge.target || activeNode.id === edge.source;
                    
                    return (
                      <motion.line
                        key={`edge-${i}`}
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={isTargetActive ? "url(#edgeGradient)" : "rgba(255,255,255,0.1)"}
                        strokeWidth={isTargetActive ? 0.3 : 0.1}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    );
                  })}
                  
                  {nodes.map((node) => {
                    const isActive = activeNode.id === node.id;
                    return (
                      <g 
                        key={`node-${node.id}`} 
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveNode(node)}
                      >
                         {isActive && (
                           <motion.circle 
                             cx={node.x} cy={node.y} r={node.size * 0.15 + 2} 
                             fill="none" stroke={node.color} strokeWidth="0.2"
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1.5, opacity: 0 }}
                             transition={{ repeat: Infinity, duration: 1.5 }}
                           />
                         )}
                         <motion.circle
                            cx={node.x}
                            y={node.y}
                            r={node.size * 0.15}
                            fill={isActive ? node.color : "rgba(255,255,255,0.1)"}
                            stroke={isActive ? "white" : "rgba(255,255,255,0.2)"}
                            strokeWidth={isActive ? 0.3 : 0.1}
                            whileHover={{ scale: 1.2 }}
                            animate={{ 
                              cx: node.x, 
                              cy: node.y,
                            }}
                            className="transition-colors duration-300"
                         />
                      </g>
                    )
                  })}
                </svg>

                {/* Graph overlay scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />
              </div>
            </div>
            
            {/* Overlay stats */}
            <div className="absolute -bottom-6 -left-6 bg-brand-charcoal border border-white/10 p-4 rounded-lg shadow-2xl z-30 flex items-center gap-4 hidden sm:flex">
               <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                 <Network className="w-5 h-5 text-brand-blue" />
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Semantic Nodes Generated</p>
                  <p className="text-xl font-mono text-white font-bold">14,208</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
