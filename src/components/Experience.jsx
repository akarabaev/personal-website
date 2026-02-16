const EXPERIENCE = [
  {
    icon: 'https://www.google.com/s2/favicons?domain=nsure.ai&sz=64',
    title: 'Data Science Squad Lead / ML Architect / Data Engineering Lead',
    company: 'nSure.ai',
    period: 'Oct 2024–now',
    points: [
      'Lead design and development of a scalable AutoML platform automating the full ML lifecycle—training, evaluation, calibration, deployment, and serving.',
      'Technical lead for a Data Science team of six; mentor and supervise across technical and research domains.',
      'From Aug 2025: Data Engineering Lead—built Calibration, Simulation, and Optimization platform for model performance by traffic segment; enabled non-technical teams to audit and manage performance.',
    ],
  },
  {
    icon: 'https://www.google.com/s2/favicons?domain=nsure.ai&sz=64',
    title: 'Senior Data Scientist, MLOps',
    company: 'nSure.ai',
    period: 'Jan 2022–Nov 2024',
    points: [
      'Designed, deployed, and monitored ML models for crypto-related merchants in production.',
      'Led migration of model serving to AWS SageMaker; stabilized response times and enabled deployment of models of any size.',
      'Moved model training to AWS SageMaker; enabled parallel training jobs and models of any complexity.',
      'Mentored on Python best practices; led research initiatives for ML performance in production.',
    ],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230ea5e9'%3E%3Cpath d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E",
    title: 'Co-Founder',
    company: 'vsetendery.kg',
    period: 'Jan 2024–Jul 2025',
    points: [
      'Built end-to-end procurement intelligence platform aggregating 10+ local procurement sites: semantic search, personalized notifications, analytics (winners, procurement types by region).',
      'Backend, Data Science, DevOps, and Front-End; orchestrator (Prefect), LLM-based scrapers (crawl4ai), preprocessing with self-hosted LLaMA 3, Elasticsearch + embeddings, FastAPI for search and analytics UI.',
    ],
  },
  {
    icon: 'https://www.google.com/s2/favicons?domain=veon.com&sz=64',
    title: 'Lead Data Scientist',
    company: 'VEON',
    period: 'Jul 2021–Jan 2022',
    points: [
      'Managed and mentored a team of data scientists.',
      'Designed and implemented a service for analyzing financial entities using telecom data; sold to five largest local banks.',
      'Led ML models for churn prediction among new customers; achieved 14% churn reduction.',
      'Developed telecom-based credit scoring solution adopted by two partner banks.',
    ],
  },
  {
    icon: 'https://www.google.com/s2/favicons?domain=veon.com&sz=64',
    title: 'Data Scientist',
    company: 'VEON',
    period: 'Jul 2020–Jul 2021',
    points: [
      'ML model for upsell likelihood; 27% increase in upsell rate via targeted call center interventions.',
      'Designed and deployed user movement analysis service; widely adopted by Veon\'s partners.',
      'Built web interfaces for ML predictions; automated hours of manual work.',
      'Churn prediction model contributing to 9% overall churn decrease.',
    ],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230ea5e9'%3E%3Cpath d='M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z'/%3E%3C/svg%3E",
    title: 'Freelancer',
    company: '',
    period: 'Feb 2021–Nov 2021',
    points: [
      'Service for real estate price analysis: fair price per flat via ML; identified underpriced and overpriced listings.',
      'Web scraping for various sites.',
    ],
  },
  {
    icon: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=64',
    title: 'AI for Good',
    company: 'Microsoft',
    period: 'Dec 2019–Jun 2020',
    points: [
      'Solution for color-blind users: TensorFlow model to recognize traffic light colors and dominant object color on request. Android, Python, TensorFlow, Azure.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {EXPERIENCE.map((exp, i) => (
        <div key={i} className="exp-item">
          <div className="exp-header">
            <img className="exp-icon" src={exp.icon} width={48} height={48} alt="" />
            <p>
              <strong>{exp.title}</strong>
              {exp.company && ` at ${exp.company}`}
              {exp.period && ` · ${exp.period}`}
            </p>
          </div>
          <ul className="exp-details">
            {exp.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
