'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'BCG GenAI Job Simulation',
    role: 'AI Developer (Forage)',
    date: 'December 2025',
    bullets: [
      'Built an AI-powered financial chatbot for processing 10-K & 10-Q reports.',
      'Applied rule-based logic for insights generation using Python and pandas.'
    ]
  },
  {
    company: 'Deloitte',
    role: 'Data Analytics Simulation (Forage)',
    date: 'October 2025',
    bullets: [
      'Performed data analysis & forensic investigation.',
      'Built interactive dashboards using Tableau and derived business insights.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-black text-white px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-16 tracking-tight">
            Experience
          </h3>
        </motion.div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.6, delay: i * 0.2 }}
               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
             >
               {/* Timeline Dot */}
               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2 translate-y-0 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
                 <div className="w-3 h-3 rounded-full bg-white/50 group-hover:bg-white transition-colors duration-300" />
               </div>

               {/* Content Card */}
               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
                 <div className="flex flex-col gap-1 mb-4">
                   <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{exp.date}</span>
                   <h4 className="text-2xl font-semibold text-white/95">{exp.company}</h4>
                   <span className="text-white/60 text-lg">{exp.role}</span>
                 </div>
                 <ul className="space-y-2 text-white/70 font-light">
                   {exp.bullets.map((b, idx) => (
                     <li key={idx} className="flex gap-3">
                       <span className="text-white/30 mt-1.5">•</span>
                       <span className="leading-relaxed">{b}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
