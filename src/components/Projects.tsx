'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer & Job Matcher',
    category: 'NLP Application',
    color: 'from-indigo-500/30 to-blue-500/30',
    description: 'AI-based system to analyze resumes vs job descriptions using NLP with TF-IDF/embeddings for relevance scoring.',
    tech: 'Python, NLP, TF-IDF, Streamlit',
    image: '/projects/movie_recsys_bg.png',
    link: 'https://huggingface.co/spaces/YugSondagar/resume-job-matcher'
  },
  {
    id: 2,
    title: 'Code Review Agent',
    category: 'AI Code Analysis',
    color: 'from-emerald-500/30 to-teal-500/30',
    description: 'AI-powered code review tool using Flask and Ollama for fast automated feedback and static analysis.',
    tech: 'Flask, Ollama, Pylint, LLM',
    image: '/projects/marketinsight_bg.png',
    link: 'https://github.com/YugSondagar/Code-Reveiw-Agent-Chatbot'
  },
  {
    id: 3,
    title: 'SafeSpace',
    category: 'AI Mental Health Chatbot',
    color: 'from-blue-500/30 to-purple-500/30',
    description: 'Empathetic AI chatbot detecting emotional distress with real-time sentiment & risk detection.',
    tech: 'Python, NLP, Twilio API, ML',
    image: '/projects/safespace_bg.png',
    link: 'https://github.com/YugSondagar/SAFESPACE----AI-Mental-Health-Chatbot'
  },
  {
    id: 4,
    title: 'Face Emotion Detection',
    category: 'Computer Vision',
    color: 'from-rose-500/30 to-orange-500/30',
    description: 'CNN-based system classifying facial expressions from live video into 7 categories.',
    tech: 'TensorFlow, OpenCV, CNN',
    image: '/projects/face_emotion_bg.png',
    link: 'https://github.com/YugSondagar/CNN-and-OpenCV---FACE_EMOTION_DETECTION'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 min-h-screen bg-black text-white px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-16 tracking-tight">
            Case Studies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="block group relative aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer bg-black/50"
            >
              {/* Background Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
              />

              {/* Glass context overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-0" />
              <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-10" />

              {/* Magic Glow Effect ("nano banana" inspired vibe) */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${p.color} mix-blend-screen blur-xl pointer-events-none z-10`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/50 mb-3">{p.category}</p>
                <h4 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{p.title}</h4>

                {/* Reveal on hover section */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.split(',').map(t => (
                      <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/5">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle hover icon */}
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
