'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative z-20 bg-black text-white px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Column: About Me */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="md:w-3/5"
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-12 tracking-tight">
            About Me
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed font-light">
            <p>
              I am an <strong className="text-white font-medium">AI/ML Engineer</strong> focused on building agent-based systems and autonomous workflows using LangChain and multi-agent frameworks.
            </p>
            <p>
              I specialize in Generative AI, RAG pipelines, and LLM fine-tuning, with a strong foundation in deep learning and data science.
            </p>
            <p>
              I enjoy transforming research ideas into production-ready, scalable AI solutions, consistently improving model performance metrics like accuracy and F1-score by 15%+ across projects.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Currently Building & Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 flex flex-col gap-12"
        >
          {/* Currently Building */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-6 tracking-tight text-white/90">
              What I&apos;m Currently Building
            </h4>
            <ul className="space-y-4">
              {['AI Agents', 'RAG Systems', 'Real-world ML apps'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70 text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Links / Buttons */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-6 tracking-tight text-white/90">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/YugSondagar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-sm font-medium">
                🔗 GitHub
              </a>
              <a href="https://leetcode.com/u/655Dh47FSU/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-sm font-medium">
                💻 LeetCode
              </a>
              <a href="https://www.linkedin.com/in/yug-sondagar-690015343/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-sm font-medium">
                🔗 LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-sm font-medium">
                📄 Resume
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
