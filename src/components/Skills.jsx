const base = import.meta.env.BASE_URL

const SKILLS = [
  { name: 'Data Science', icon: `${base}assets/icons/scikitlearn.svg`, alt: 'Data Science' },
  { name: 'NLP', icon: `${base}assets/icons/nlp.svg`, alt: 'NLP' },
  { name: 'Agentic AI', icon: `${base}assets/icons/openai.svg`, alt: 'Agentic AI' },
  { name: 'MLOps', icon: `${base}assets/icons/kubernetes.svg`, alt: 'MLOps' },
  { name: 'Data Engineering', icon: `${base}assets/icons/postgresql.svg`, alt: 'Data Engineering' },
  { name: 'Python', icon: `${base}assets/icons/python.svg`, alt: 'Python' },
  { name: 'Web Development', icon: `${base}assets/icons/html5.svg`, alt: 'Web Development' },
  { name: 'Technical Leadership', icon: `${base}assets/icons/technical-leadership.svg`, alt: 'Technical Leadership' },
  { name: 'Cloud', icon: `${base}assets/icons/cloud.svg`, alt: 'Cloud' },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {SKILLS.map((s, i) => (
          <span key={i} className="skill">
            <img className="skill-icon" src={s.icon} width={36} height={36} alt={s.alt} />
            {s.name}
          </span>
        ))}
      </div>
    </section>
  )
}
