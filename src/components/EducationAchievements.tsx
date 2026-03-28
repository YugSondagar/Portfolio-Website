'use client';
import { motion } from 'framer-motion';

export default function EducationAchievements() {
  return (
    <section className="relative z-20 bg-black text-white px-6 md:px-12 py-32 border-t border-b border-white/5 pb-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Education */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Education</h3>
          <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-colors">
             <div className="flex flex-col gap-2">
                <span className="text-white/50 uppercase tracking-widest text-sm font-semibold mb-2">Degree</span>
                <h4 className="text-2xl md:text-3xl font-semibold mb-2 leading-snug">B.E. in Computer Science & Artificial Intelligence</h4>
                <p className="text-xl text-white/80">Parul University</p>
                <div className="mt-12 inline-flex">
                  <span className="px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium tracking-wide">
                    CGPA: 8.54
                  </span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Achievements</h3>
          <ul className="space-y-4">
            {[
              'Improved ML model performance (accuracy & F1-score by 15%+)',
              'Built multiple end-to-end AI systems with real-world use cases',
              'Hands-on experience with Agentic AI & LLM-based applications',
              'Completed industry-level simulations from BCG & Deloitte'
            ].map((achievement, i) => (
              <li key={i} className="flex gap-5 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <p className="text-lg text-white/80 leading-relaxed font-light">{achievement}</p>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
