import { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Code2, Database, Globe, Cpu, Zap } from 'lucide-react';

/* ─────────────────────────── DATA ─────────────────────────── */

interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  blurb: string;
  tech: string[];
  gradient: string;
  accentColor: string;
  icon: typeof Code2;
  detail: {
    context: string;
    problem: string;
    howItWorks: string;
    role: string[];
    techStack: string[];
    outcome: string;
  };
}

const projects: Project[] = [
  {
    id: 'crm-rag',
    tag: 'Internship · Elena Geo Tech',
    tagColor: 'from-orange-500 to-amber-400',
    title: 'AI-Powered CRM & RAG Chatbot',
    subtitle: 'NavIC Navigation Tech Company · 2026',
    blurb:
      'A full-stack CRM platform for a NavIC-based navigation tech company, featuring an AI chatbot that answers questions directly from company documents using Retrieval-Augmented Generation.',
    tech: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'ChromaDB'],
    gradient: 'from-orange-600/20 via-amber-500/10 to-transparent',
    accentColor: 'text-orange-400',
    icon: Globe,
    detail: {
      context: 'Elena Geo Tech Pvt. Ltd. · Internship Project · 2026',
      problem:
        'Elena Geo Tech, a Bengaluru-based navigation technology company building NavIC-powered products, was managing customers and leads across spreadsheets and scattered notes — while employees repeatedly dug through product manuals to answer routine technical questions. Information was duplicated, follow-ups got missed, and answers to customers weren\'t always consistent.',
      howItWorks:
        'Company documents are chunked, converted into vector embeddings, and stored in ChromaDB. When a user asks a question, it\'s embedded the same way, matched against the document store for semantically relevant sections, and passed — along with the original question — to an LLM that generates a grounded, accurate answer. No hallucinated specs, no digging through PDFs.',
      role: [
        'Built the React.js frontend (dashboard, customer/lead management, chatbot UI)',
        'Developed REST APIs in Node.js/Express.js for auth, CRM logic, and data validation',
        'Designed the MongoDB schema for Users, Customers, Leads, Activities, and Conversations',
        'Built the RAG pipeline — document ingestion, chunking, embeddings, and semantic retrieval with ChromaDB',
        'Stood up a FastAPI microservice to orchestrate retrieval + LLM response generation',
        'Implemented token-based authentication with encrypted password storage',
        'Tested across module, integration, and API levels throughout development',
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'ChromaDB', 'LLM / OpenAI API'],
      outcome:
        'A single platform now handles customer records, lead tracking, and technical Q&A — cutting down manual document searches and giving the sales team a consistent, centralized source of truth.',
    },
  },
  {
    id: 'saarthi',
    tag: 'Group Project · Product Design',
    tagColor: 'from-violet-500 to-purple-400',
    title: 'Saarthi AI',
    subtitle: 'AI Sales Co-Pilot for Indian B2B Teams · 2026',
    blurb:
      'A SaaS platform combining an AI-powered Lead Intelligence Agent with a real-time voice-based sales coaching agent — helping Indian B2B teams find better leads and train better sellers in one workspace.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Gemini Live API'],
    gradient: 'from-violet-600/20 via-purple-500/10 to-transparent',
    accentColor: 'text-violet-400',
    icon: Zap,
    detail: {
      context: 'Group Project · Business Proposal / Product Design · 2026',
      problem:
        'Indian B2B sales teams face two compounding pain points: lead generation tools built for the US market poorly cover Indian companies, forcing reps to waste time on badly-targeted prospect lists; and sales talent ramps up slowly, with most reps feeling under-skilled and most formal training forgotten within 90 days. CRMs, prospecting databases, and training vendors each solve only one piece of the problem — none close the loop between finding the right buyer and rehearsing the conversation that closes them.',
      howItWorks:
        'Saarthi AI runs two tightly integrated agents on one platform. LeadForge ingests a client\'s product details and best existing accounts, builds a lookalike model from firmographic and technographic signals, crawls public data sources and registries to discover matching Indian companies, enriches them with verified decision-maker contacts, and uses an LLM to summarize each company\'s activity and infer likely pain points — producing a scored, sales-ready lead list. VoiceCoach then turns each enriched lead into a lifelike buyer persona a rep can call and talk to in real time, using a low-latency streaming speech model for natural interruption and objection-handling practice. After each session, it generates a structured coaching report scoring objection-handling, discovery-question quality, talk-to-listen ratio, and overall readiness.',
      role: [
        'Defined the two-agent product architecture and the unified workspace linking lead generation to coaching',
        'Designed the LeadForge pipeline: lookalike modeling → enrichment → scoring → export/CRM push',
        'Specified the VoiceCoach flow: persona-grounding from lead data → streaming voice session → rubric-based coaching report',
        'Mapped the tech stack (Next.js, FastAPI, PostgreSQL, pgvector, Redis, S3-compatible storage, Kubernetes)',
        'Built out market sizing, competitive analysis, pricing tiers, and financial projections for the business case',
      ],
      techStack: ['Next.js', 'FastAPI (Python)', 'PostgreSQL', 'pgvector', 'Redis', 'S3-compatible storage', 'Gemini Live API', 'Kubernetes'],
      outcome:
        'A single integrated platform replacing 3–5 disconnected tools (CRM, prospecting database, outbound tool, LMS, human coach) — designed to shorten time-to-first-meeting, cut rep ramp-time, and give sales managers a measurable readiness score before reps make real calls.',
    },
  },
  {
    id: 'emotilearn',
    tag: 'Solo Project · Applied ML Systems',
    tagColor: 'from-emerald-500 to-teal-400',
    title: 'EmotiLearn',
    subtitle: 'Emotion-Adaptive E-Learning Platform · 2026',
    blurb:
      'An e-learning platform that reads learner focus and emotion through the webcam in real time and adapts lesson pacing, hints, and quiz difficulty accordingly — closing the loop between how a student feels and what the platform does about it.',
    tech: ['FastAPI', 'Express.js', 'React', 'MediaPipe', 'MongoDB', 'SQLite'],
    gradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
    accentColor: 'text-emerald-400',
    icon: Cpu,
    detail: {
      context: 'Solo Project · Full-Stack Build / Applied ML Systems · 2026',
      problem:
        'Most e-learning platforms treat every learner identically once a lesson is published — a video plays, a quiz appears, and the platform has no idea whether the student is actually absorbing the material, silently confused, or has mentally checked out. Instructors get almost no signal until a student fails a quiz or drops off entirely, by which point the teaching moment has already been missed. EmotiLearn asks a simple question: what if the platform could notice a learner is confused or fatigued while it\'s happening, and respond immediately — the way a good human tutor would?',
      howItWorks:
        'EmotiLearn runs as three cooperating services. A MediaPipe inference microservice analyzes webcam frames in real time using Face Mesh (468 landmarks), Pose (33 landmarks), and Hand tracking (21 landmarks per hand), combining facial expression, posture, and gesture signals with session-level temporal patterns into a weighted focus/emotion score — Face 35%, Pose 25%, Hands 25%, Temporal 15%. That signal streams into the backend, which runs a rules engine mapping detected states (confused, frustrated, fatigued, bored, engaged, focused) to concrete adaptations: surfacing a hint, offering a remedial section, suggesting a break, or picking up the pace. On the quiz side, the system generates personalized adaptive quizzes that prioritize previously-missed questions and adjust hint delivery based on the student\'s emotional state.',
      role: [
        'Architected the three-service split (FastAPI backend, MediaPipe inference microservice, frontend) to keep ML inference cleanly decoupled from application logic',
        'Built the emotion capture pipeline (useEmotionCapture hook) — webcam frame sampling, inference calls, graceful fallback to interaction-based heuristics when inference is unreachable',
        'Designed the adaptation rules engine and anti-spam logic (rate-limiting repeated interventions per user/lesson)',
        'Built the adaptive quiz generator, blending quiz-attempt history with lesson-time emotional struggle percentage',
        'Built session-grouping logic (30-minute-gap heuristic) and the focus-scoring algorithm powering learner and instructor reports',
        'Instrumented the inference service with signal-coverage logging/diagnostics to verify all four weighted modules were contributing in practice',
        'Re-implemented the full application layer as a parallel MERN stack (Express + MongoDB + React) while leaving the Python/MediaPipe inference service untouched — validating the architecture\'s portability',
      ],
      techStack: ['FastAPI + SQLAlchemy', 'Express.js + Mongoose', 'Next.js 14 (TypeScript)', 'React (Vite)', 'MediaPipe', 'SQLite / MongoDB', 'JWT + bcrypt', 'Recharts', 'Tailwind CSS'],
      outcome:
        'A working platform where three learner roles (learner, instructor, admin) each get a purpose-built view into the same underlying emotion data — students get real-time nudges, instructors get visibility into why a lesson is or isn\'t landing, and the whole pipeline was proven portable across two full backend/frontend stacks without touching the ML core.',
    },
  },
];

/* ─────────────────────────── MODAL ─────────────────────────── */

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-end"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* panel */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#0f0f13] border-l border-white/10 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 z-20 bg-[#0f0f13]/95 backdrop-blur-md border-b border-white/10 px-8 py-6`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${project.tagColor} bg-opacity-20`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest ${project.accentColor}`}>
                  {project.tag}
                </span>
                <h2 className="text-xl font-bold text-white mt-0.5">{project.title}</h2>
                <p className="text-sm text-gray-400">{project.detail.context}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.detail.techStack.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-10">

          {/* The Problem */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">The Problem</h3>
            <p className="text-gray-300 leading-relaxed">{project.detail.problem}</p>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">How It Works</h3>
            <div className={`border-l-2 border-gradient-to-b pl-4`}
              style={{ borderColor: project.accentColor.replace('text-', '').includes('orange') ? '#f97316' : project.accentColor.includes('violet') ? '#8b5cf6' : '#10b981' }}
            >
              <p className="text-gray-300 leading-relaxed">{project.detail.howItWorks}</p>
            </div>
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">My Role</h3>
            <ul className="space-y-3">
              {project.detail.role.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${project.accentColor}`} />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className={`rounded-2xl p-6 bg-gradient-to-br ${project.gradient} border border-white/10`}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Outcome</h3>
            <p className="text-white leading-relaxed font-medium">{project.detail.outcome}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── CARD ─────────────────────────── */

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer rounded-2xl border border-white/10 bg-[#111118] overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`View ${project.title} case study`}
    >
      {/* Gradient wash */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Glow border on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ boxShadow: `inset 0 0 0 1px ${project.accentColor.includes('orange') ? 'rgba(249,115,22,0.3)' : project.accentColor.includes('violet') ? 'rgba(139,92,246,0.3)' : 'rgba(16,185,129,0.3)'}` }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full">

        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.tagColor} bg-opacity-10 ring-1 ring-white/10 group-hover:ring-white/20 transition-all`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className={`text-[11px] font-semibold uppercase tracking-widest ${project.accentColor} opacity-80`}>
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-xs text-gray-500 mb-4">{project.subtitle}</p>

        {/* Blurb */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{project.blurb}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/20 transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex items-center gap-2 text-sm font-semibold ${project.accentColor} transition-all duration-200`}>
          <span>View Case Study</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${hovered ? 'translate-x-1' : ''}`} />
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────── SECTION ─────────────────────────── */

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From internship-grade production systems to solo applied ML builds — click any card to read the full case study.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;
