import { motion } from "motion/react";
import { MoveRight, Network, Layers, Server, Activity, ArrowRightLeft, Cpu, Database, Cable, Linkedin } from "lucide-react";
import { NetworkGraphic } from "./components/NetworkGraphic";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram";
import imgMicroVCSEL from "../assets/9cd99a06fa1c9dda098e33591e47594b3739ce89.png";
import imgSEM from "../assets/6351bf30dce9d2c3884750b299c41073f676c97b.png";
import imgNRZ from "../assets/ce95939bd73893bce7b3ce011262558eb0f56a0f.png";
import imgPAM4 from "../assets/2b5413a8393716b0d2e0519b63576c3bbe42aee5.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5 bg-black/50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-cyan-500 rounded-sm shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        <span className="text-lg font-medium tracking-tight text-white">LightXcelerate</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#vision" className="hover:text-white transition-colors">Vision</a>
        <a href="#fabric" className="hover:text-white transition-colors">Scale-Up Fabric</a>
        <a href="#technology" className="hover:text-white transition-colors">Technology</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/company/lightxcelerate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="#contact" className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-slate-200 transition-colors hidden md:inline-block">
          Get in Touch
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Background gradients and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#050505] to-[#050505]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            OPTICAL AI INTERCONNECT
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
            Electrical I/O has hit its ceiling.<br />
            AI's next leap runs on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">light.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
            LightXcelerate engineers optical chiplets that replace electrical I/O at the package edge — delivering terabit-class bandwidth, sub-2 pJ/bit efficiency, and 50-meter reach to unify GPUs, memory, and switches into a single optical fabric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#fabric" className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
              Explore the Fabric <MoveRight size={16} />
            </a>
            <a href="#technology" className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium border border-slate-800 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              View Specs
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <NetworkGraphic />
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const cards = [
    {
      icon: <Network className="text-amber-500" size={24} />,
      title: "The Copper Ceiling",
      desc: "Copper interconnects top out at short reach and high power draw. Scaling large GPU clusters demands bandwidth densities that copper physically cannot deliver."
    },
    {
      icon: <Database className="text-cyan-400" size={24} />,
      title: "The Memory Wall",
      desc: "On-package memory is physically bounded. Disaggregated memory pooling requires fast, low-latency optical transport — not electrical bridges with limited range."
    },
    {
      icon: <ArrowRightLeft className="text-amber-500" size={24} />,
      title: "Switching Inefficiency",
      desc: "Electrical switch fabrics burn significant power moving data across boards. Optical switching delivers higher throughput at a fraction of the energy cost."
    },
    {
      icon: <Server className="text-cyan-400" size={24} />,
      title: "Power & Space Constraints",
      desc: "Data center power budgets are fixed. Optical disaggregation lets accelerators, memory, and switches occupy separate locations while behaving as one unified system."
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">The Bottlenecks Holding AI Back</h2>
          <p className="text-slate-400 text-lg">Peak AI performance isn't limited by compute — it's limited by how data moves. LightXcelerate solves the four structural bottlenecks preventing AI systems from scaling.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/20 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 bg-slate-800/50 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Building the infrastructure <br />
              <span className="text-cyan-400">AI demands next.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
              Future AI systems require optical paths that carry scale-up traffic across packages, racks, and clusters — without latency penalties or bandwidth gaps. Our optical chiplets make that possible today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
               <div>
                  <h4 className="text-white font-medium mb-2 text-lg">50-Meter Protocol Extension</h4>
                  <p className="text-slate-400 text-sm">Extend UCIe, UALink, PCIe, CXL, and NVLink links up to 50 meters over fiber. Near-zero added latency. No protocol overhead.</p>
               </div>
               <div>
                  <h4 className="text-white font-medium mb-2 text-lg">Chip-Edge Bandwidth Density</h4>
                  <p className="text-slate-400 text-sm">Dense micro-VCSEL arrays mount directly at the processor package edge, delivering terabit-class I/O precisely where the data originates.</p>
               </div>
               <div>
                  <h4 className="text-white font-medium mb-2 text-lg">Unified Traffic Fabric</h4>
                  <p className="text-slate-400 text-sm">One optical network carries compute, memory, and networking traffic simultaneously — eliminating redundant fabric layers and simplifying system architecture.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FabricSection() {
  return (
    <section id="fabric" className="py-32 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">The Optical Scale-Up Fabric.</h2>
          <p className="text-lg text-slate-400">
            Our chiplets integrate at the processor package edge, creating direct optical paths to disaggregated memory pools, optical switches, and remote accelerators — spanning all three scaling dimensions simultaneously.
          </p>
        </div>

        <div className="mb-12">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const features = [
    { title: "Micro-VCSEL Laser Arrays", desc: "High-density III-V laser arrays deliver the per-lane count and modulation bandwidth required for massively parallel optical I/O at the chip edge." },
    { title: "Universal Protocol Support", desc: "Native support for UCIe, UALink, PCIe, CXL, and NVLink — covering scale-in, scale-up, and scale-out interconnect use cases without protocol conversion." },
    { title: "Package-Edge Co-Integration", desc: "Placed directly alongside the processor die using standard electrical interfaces. No external transceiver cages, no additional PCB signal routing." },
    { title: "Terabit Bandwidth Density", desc: "Record-breaking I/O packed into millimeters of chip edge — delivering the data rates that modern AI accelerators demand at full throughput." },
    { title: "Sub-2 pJ/bit Efficiency", desc: "Less than 2 pJ/bit end-to-end. An order of magnitude more efficient than pluggable transceivers, preserving power budget for compute." },
    { title: "50-Meter Optical Reach", desc: "High-fidelity signal transmission up to 50 meters over single-mode fiber, enabling rack-to-rack and cluster-scale disaggregation without repeaters." }
  ];

  return (
    <section id="technology" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Built for Exascale AI.</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Every design decision targets the performance, density, and power efficiency required by hyperscale AI data centers — from the laser aperture to the system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/40 border border-white/5"
            >
              <div className="mt-1 text-cyan-500 shrink-0"><Cpu size={20} /></div>
              <div>
                <h4 className="text-white font-medium mb-2">{f.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HardwareSection() {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            HARDWARE ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Micro-VCSEL Arrays.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">III-V on Si Integration.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Our optical engines are built on heterogeneous III-V-on-silicon integration. Bonding high-performance compound semiconductor lasers directly onto silicon substrates delivers the optical output density, drive efficiency, and thermal coupling that co-packaged AI accelerators require.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Image: Micro-VCSEL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 group relative rounded-2xl border border-white/10 bg-black overflow-hidden h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <img src={imgMicroVCSEL} alt="Micro-VCSEL array" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-xl font-medium text-white mb-2">Micro-VCSEL Array (Top-Down)</h3>
              <p className="text-slate-400 text-sm">III-V-on-Si die-bonded array with hundreds of laser apertures per square millimeter — enabling massively parallel optical channel density.</p>
            </div>
          </motion.div>

          {/* Secondary Image: SEM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-end group relative rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden h-[400px]"
          >
             <div className="absolute inset-0 flex items-center justify-center p-8 bg-black">
               <img src={imgSEM} alt="Cross-section SEM" className="w-full h-auto max-h-full object-contain opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
             </div>
             <div className="relative z-20 mt-auto p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h3 className="text-xl font-medium text-white mb-2">Cross-Section SEM</h3>
              <p className="text-slate-400 text-sm">SEM cross-section of the III-V-to-Si bond interface, confirming sub-micron layer alignment and defect-free integration at manufacturing scale.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SignalTestingSection() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SIGNAL INTEGRITY
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Open eyes at speed.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">NRZ and PAM4 validated.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Every micro-VCSEL is individually characterized. Wide-open eye diagrams across NRZ and PAM4 confirm the signal margin, jitter performance, and extinction ratio required for reliable, error-free AI interconnect operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/30 overflow-hidden"
          >
            <div className="aspect-[4/3] p-6 lg:p-10 flex items-center justify-center bg-black/50 border-b border-white/5">
              <img src={imgNRZ} alt="NRZ eye diagram" className="w-full h-auto object-contain rounded border border-white/10 shadow-2xl group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-2">NRZ Eye Diagram</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Measured per micro-VCSEL. Wide eye opening with low jitter and strong noise margin confirm reliable NRZ operation at speed.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/30 overflow-hidden"
          >
            <div className="aspect-[4/3] p-6 lg:p-10 flex items-center justify-center bg-black/50 border-b border-white/5">
              <img src={imgPAM4} alt="PAM4 eye diagram" className="w-full h-auto object-contain rounded border border-white/10 shadow-2xl group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-2">PAM4 Eye Diagram</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Four-level pulse amplitude modulation at 2× the NRZ data rate. All three eye openings remain well-defined across operating conditions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const capabilities = [
    {
      title: "Optoelectronic Devices",
      desc: "Fundamental physics and high-speed laser design.",
      color: "from-cyan-400 to-cyan-500"
    },
    {
      title: "Silicon Photonics",
      desc: "High-density integrated optical routing and modulation.",
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Advanced Packaging",
      desc: "Heterogeneous III-V on Si and 2.5D/3D integration.",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      title: "Mixed-Signal ICs",
      desc: "Ultra-low power, terabit-scale transceiver circuitry.",
      color: "from-violet-400 to-violet-500"
    },
    {
      title: "System Architecture",
      desc: "Datacenter-scale fabric and AI cluster topology.",
      color: "from-purple-400 to-purple-500"
    }
  ];

  const credentials = [
    "PhD-Led Founding Team",
    "Stanford & Princeton Roots",
    "ex-Apple Engineering",
    "Hyperscale Datacenter Expertise",
    "Production-Minded Execution"
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-900/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
              PhD-Led Team <br className="hidden md:block" />
              <span className="text-slate-500">Built to Execute.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              We combine deep expertise across multiple engineering domains to build next-generation optical interconnects for AI infrastructure. A collective technical force translating breakthrough physics into production-ready hardware.
            </p>
          </motion.div>
        </div>

        {/* Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-24">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative pt-6 border-t border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              {/* Animated top border gradient */}
              <div className={`absolute top-[-1px] left-0 h-[1px] w-0 bg-gradient-to-r ${cap.color} group-hover:w-full transition-all duration-700 ease-out`} />
              
              <h3 className="text-lg font-medium text-white mb-3 tracking-wide">{cap.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Credibility Band */}
        

        {/* Backed By Row */}
        

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-8" />
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
            Deep technical depth. <span className="text-slate-500">Strong execution.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Built to deliver next-generation optical interconnects.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
           <Cable className="text-cyan-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          Optically connected.<br className="hidden md:block"/> Infinitely scalable.
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Partner with LightXcelerate to eliminate the electrical I/O bottleneck and build AI infrastructure that scales without compromise.
        </p>
        
        <a 
          href="mailto:manchen@lightxcelerate.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          manchen@lightxcelerate.com <MoveRight size={20} />
        </a>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-mono">
          <div>© {new Date().getFullYear()} LightXcelerate Inc.</div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/lightxcelerate" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-cyan-500/30 scroll-smooth font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <VisionSection />
        <FabricSection />
        <TechnologySection />
        <HardwareSection />
        <SignalTestingSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
