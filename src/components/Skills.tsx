'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'R', 'C'],
    color: 'emerald'
  },
  {
    title: 'Generative AI & Agents',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Engineering', 'Google ADK'],
    color: 'blue'
  },
  {
    title: 'AI / Machine Learning',
    skills: ['Transformers', 'CNNs', 'RNNs', 'NLP'],
    color: 'purple'
  },
  {
    title: 'Frameworks',
    skills: ['Flask', 'Django'],
    color: 'rose'
  },
  {
    title: 'Databases & Vector DBs',
    skills: ['MySQL', 'MongoDB', 'Pinecone', 'ChromaDB', 'Astra DB'],
    color: 'orange'
  },
  {
    title: 'Tools & Libraries',
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'MLflow', 'Dagshub', 'Git', 'Docker', 'SQL'],
    color: 'slate'
  },
  {
    title: 'Core CS',
    skills: ['DBMS', 'Networking', 'Data Structures', 'OOP'],
    color: 'emerald'
  }
];

const getPointColor = (color: string) => {
  switch (color) {
    case 'emerald': return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]';
    case 'blue': return 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]';
    case 'purple': return 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]';
    case 'rose': return 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]';
    case 'orange': return 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]';
    default: return 'bg-slate-500 shadow-[0_0_10px_rgba(100,116,139,0.8)]';
  }
};

export default function Skills() {
  return (
    <section className="relative z-20 bg-black text-white px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-16 tracking-tight">
            Skills & Tools
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${getPointColor(category.color)}`} />
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
