const SKILLS = [
  { name: 'Data Science', icon: '/assets/icons/scikitlearn.svg', alt: 'Data Science' },
  { name: 'NLP', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230ea5e9'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z'/%3E%3C/svg%3E", alt: 'NLP' },
  { name: 'Agentic AI', icon: 'https://cdn.simpleicons.org/openai', alt: 'Agentic AI' },
  { name: 'MLOps', icon: '/assets/icons/kubernetes.svg', alt: 'MLOps' },
  { name: 'Data Engineering', icon: '/assets/icons/postgresql.svg', alt: 'Data Engineering' },
  { name: 'Python', icon: '/assets/icons/python.svg', alt: 'Python' },
  { name: 'Web Development', icon: 'https://cdn.simpleicons.org/html5', alt: 'Web Development' },
  { name: 'Technical Leadership', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230ea5e9'%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E", alt: 'Technical Leadership' },
  { name: 'Cloud', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230ea5e9'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/%3E%3C/svg%3E", alt: 'Cloud' },
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
