export default function Header({ navOpen, setNavOpen }) {
  const closeNav = () => setNavOpen(false)

  return (
    <header className={navOpen ? 'nav-open' : ''}>
      <a href="#" className="logo">A&nbsp;K</a>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <nav>
        <a href="#hero" onClick={closeNav}>About</a>
        <a href="#experience" onClick={closeNav}>Experience</a>
        <a href="#blog" onClick={closeNav}>Blog</a>
        <a href={`${import.meta.env.BASE_URL}alisher_karabaev_cv.pdf`} className="btn btn-nav" download onClick={closeNav}>CV</a>
      </nav>
    </header>
  )
}
