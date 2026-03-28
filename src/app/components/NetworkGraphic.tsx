import { motion } from "motion/react";

export function NetworkGraphic() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-cyan-500/30 overflow-visible"
      >
        <defs>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Optical Fabric Mesh (Links) */}
          {[
            { id: 'ab', x1: 152, y1: 138, x2: 248, y2: 138, angle: 0 },
            { id: 'cd', x1: 152, y1: 262, x2: 248, y2: 262, angle: 0 },
            { id: 'ac', x1: 138, y1: 152, x2: 138, y2: 248, angle: 90 },
            { id: 'bd', x1: 262, y1: 152, x2: 262, y2: 248, angle: 90 },
            { id: 'ad', x1: 152, y1: 152, x2: 248, y2: 248, angle: 45 },
            { id: 'bc', x1: 248, y1: 152, x2: 152, y2: 248, angle: 135 },
          ].map((link, i) => {
            const rad = (link.angle * Math.PI) / 180;
            const perpX = Math.cos(rad + Math.PI / 2);
            const perpY = Math.sin(rad + Math.PI / 2);

            return (
              <g key={`link-${link.id}`}>
                {[-6, -2, 2, 6].map((offset, j) => {
                  const offX = perpX * offset;
                  const offY = perpY * offset;
                  const lineX1 = link.x1 + offX;
                  const lineY1 = link.y1 + offY;
                  const lineX2 = link.x2 + offX;
                  const lineY2 = link.y2 + offY;

                  const isForward = j % 2 === 0;
                  const startCx = isForward ? lineX1 : lineX2;
                  const startCy = isForward ? lineY1 : lineY2;
                  const endCx = isForward ? lineX2 : lineX1;
                  const endCy = isForward ? lineY2 : lineY1;

                  return (
                    <g key={`fiber-${link.id}-${j}`}>
                      <line
                        x1={lineX1}
                        y1={lineY1}
                        x2={lineX2}
                        y2={lineY2}
                        stroke="url(#fiberGrad)"
                        strokeWidth="1.5"
                      />
                      <motion.circle
                        r="1.5"
                        fill="#fff"
                        filter="url(#glowEffect)"
                        initial={{ cx: startCx, cy: startCy, opacity: 0 }}
                        animate={{ cx: endCx, cy: endCy, opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 1.5 + Math.random() * 0.5,
                          repeat: Infinity,
                          delay: i * 0.2 + j * 0.15 + Math.random() * 0.2,
                          ease: "linear",
                        }}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Compute Nodes */}
          {[
            { id: 'A', x: 60, y: 60, label: 'NODE 01' },
            { id: 'B', x: 260, y: 60, label: 'NODE 02' },
            { id: 'C', x: 60, y: 260, label: 'NODE 03' },
            { id: 'D', x: 260, y: 260, label: 'NODE 04' },
          ].map(node => (
            <g key={`node-${node.id}`}>
              <rect x={node.x} y={node.y} width="80" height="80" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
              <rect x={node.x + 8} y={node.y + 8} width="64" height="64" rx="4" fill="#1e293b" />
              <g opacity="0.3">
                {[0, 1, 2, 3].map(row => 
                  [0, 1, 2, 3].map(col => (
                    <rect 
                      key={`grid-${row}-${col}`} 
                      x={node.x + 14 + col * 14} 
                      y={node.y + 14 + row * 14} 
                      width="10" 
                      height="10" 
                      fill="#3b82f6" 
                      rx="2" 
                    />
                  ))
                )}
              </g>
              <text x={node.x + 40} y={node.y - 8} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace" letterSpacing="1">
                {node.label}
              </text>
            </g>
          ))}

          {/* LX Interconnect Chiplets */}
          {[
            { id: 'LX-A', x: 124, y: 124 },
            { id: 'LX-B', x: 248, y: 124 },
            { id: 'LX-C', x: 124, y: 248 },
            { id: 'LX-D', x: 248, y: 248 },
          ].map(lx => (
            <g key={`lx-${lx.id}`}>
              <rect x={lx.x} y={lx.y} width="28" height="28" rx="4" fill="#050505" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.8" filter="url(#glowEffect)" />
              <g opacity="0.8">
                {[0, 1, 2].map(r => 
                  [0, 1, 2].map(c => (
                    <circle 
                      key={`vcsel-${r}-${c}`} 
                      cx={lx.x + 6 + c * 8} 
                      cy={lx.y + 6 + r * 8} 
                      r="1.5" 
                      fill="#22d3ee" 
                    />
                  ))
                )}
              </g>
            </g>
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
