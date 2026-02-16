import { createElement } from 'react'

const LOTTIE_URL = 'https://lottie.host/69ea545f-e1f0-4c90-a6e4-7c6c9074771d/24QGaFWg0R.lottie'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">Alisher Karabaev</h1>
        <p className="hero-role">
          <span className="accent">Data Science Squad Lead / Data Engineering Lead / ML Architect</span>
        </p>
        <p className="hero-bio">
          I have 9 years of experience in the Data field, including 6+ years in building and scaling ML systems, data platforms, and technical teams.
        </p>
        <div className="social">
          <a href="https://www.linkedin.com/in/alisher-karabaev/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-1.34 0-1.89 1.11-1.89 2.26V19h-3v-9h2.87v1.3h.04c.4-.75 1.36-1.54 2.79-1.54 3 0 3.57 1.96 3.57 4.52V19z"/>
            </svg>
          </a>
          <a href="https://medium.com/@akarabaev96" className="social-link" aria-label="Medium" target="_blank" rel="noopener">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.2-2.58-1.2-5.75s.54-5.75 1.2-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
        </div>
        <a href="/alisher_karabaev_cv.pdf" className="btn btn-cta" download>Download CV</a>
      </div>
      <div className="hero-image-wrap">
        {createElement('dotlottie-wc', { src: LOTTIE_URL, className: 'hero-lottie', autoplay: true, loop: true })}
      </div>
    </section>
  )
}
