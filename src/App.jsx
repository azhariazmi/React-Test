import { useEffect, useMemo, useState } from "react";
import {
  House, Smartphone, Puzzle, BookOpen, Menu, Search, Sun, Moon,
  Code2, Music2, Palette, Image, Link2, Home, BookOpenText,
  ExternalLink, ArrowUpRight, Sparkles, Github, Globe, X, Radio,
  UserRound, WandSparkles, Boxes
} from "lucide-react";

const projects = [
  { title: "Tinylink", category: "Software", description: "Turn long URLs into short, shareable links.", url: "https://tinylink.edgeone.dev/", icon: Link2, tag: "URL TOOL", color: "mint" },
  { title: "Compress It", category: "Software", description: "Compress images into modern formats without resizing.", url: "https://compressit.edgeone.dev/", icon: Image, tag: "IMAGE TOOL", color: "blue" },
  { title: "ImageNow Upload", category: "Software", description: "A simple place to upload and share images.", url: "https://imagenowupload.netlify.app/", icon: Image, tag: "IMAGE HOSTING", color: "peach" },
  { title: "Hex Color Code", category: "Software", description: "Explore colours and work with hex colour values.", url: "https://y0ur.netlify.app/", icon: Palette, tag: "DESIGN TOOL", color: "purple" },
  { title: "Azhari Music Playlist", category: "Music", description: "A personal online music player and playlist.", url: "https://musicplaylist.edgeone.dev/", icon: Music2, tag: "MUSIC PLAYER", color: "pink" },
  { title: "Dash FM", category: "Music", description: "Listen to selected online radio stations.", url: "https://musicplaylist.edgeone.dev/", icon: Radio, tag: "ONLINE RADIO", color: "blue" },
  { title: "Quran Azhari", category: "Guides", description: "A personal Quran web project.", url: "https://ayat2.netlify.app/", icon: BookOpenText, tag: "QURAN", color: "mint" },
  { title: "House For Rent", category: "Featured", description: "A furnished rental home listing in Pontian, Johor.", url: "https://rumah-sewa.netlify.app/", icon: Home, tag: "PROPERTY", color: "peach" },
  { title: "ShortLink", category: "Software", description: "Another lightweight URL-shortening project.", url: "https://yourshortlinker.netlify.app/", icon: Link2, tag: "URL TOOL", color: "purple" },
  { title: "Developer Profile", category: "About", description: "More about me, my work and my digital projects.", url: "https://azhari.netlify.app/", icon: UserRound, tag: "MY PROFILE", color: "mint" }
];

const navItems = [
  { id: "Home", label: "Home", icon: House },
  { id: "Software", label: "Software", icon: Smartphone },
  { id: "Extensions", label: "Extensions", icon: Puzzle },
  { id: "Guides", label: "Guides", icon: BookOpen },
  { id: "Menu", label: "Menu", icon: Menu }
];

function App() {
  const [active, setActive] = useState("Home");
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("azhari-galaxy-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#101a1a" : "#effaf6");
    localStorage.setItem("azhari-galaxy-theme", dark ? "dark" : "light");
  }, [dark]);

  const filtered = useMemo(() => {
    let list = projects;
    if (["Software", "Guides", "Music", "About", "Featured"].includes(active)) {
      list = list.filter(p => p.category === active || (active === "Software" && p.category === "Featured"));
    }
    if (active === "Extensions") list = [];
    const q = query.trim().toLowerCase();
    if (q) list = projects.filter(p => `${p.title} ${p.description} ${p.category} ${p.tag}`.toLowerCase().includes(q));
    return list;
  }, [active, query]);

  function navigate(id) {
    setActive(id);
    setQuery("");
    setMenuOpen(id === "Menu" ? !menuOpen : false);
    if (id !== "Menu") document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (menuOpen) setActive("Home");
  }

  const heading = query ? "Search results" : active === "Home" ? "Made for the curious ✨" : active === "Menu" ? "Explore my galaxy" : active;
  const subtitle = query ? `Showing matches for “${query}”` : active === "Home" ? "Little tools, big ideas, and things I've built on the web." : active === "Extensions" ? "Extension collections are coming soon. The internet has enough tabs already." : `Explore my ${active.toLowerCase()} collection.`;

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={() => { setActive("Home"); setQuery(""); }} aria-label="Azhari Galaxy home">
          <span className="brand-mark"><Sparkles size={25} strokeWidth={2.5} /></span>
          <span>Azhari<span className="brand-light">Galaxy</span></span>
        </a>
        <div className="top-actions">
          <span className="status-pill"><span className="status-dot" /> DIGITAL UNIVERSE</span>
          <button className="icon-button theme-button" onClick={() => setDark(v => !v)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="spark spark-one">✳</div><div className="spark spark-two">✦</div><div className="spark spark-three">＋</div>
          <div className="hero-orb"><div className="orb-inner"><Code2 size={82} strokeWidth={1.7} /><span className="orb-star">✦</span></div></div>
          <div className="eyebrow"><WandSparkles size={15} /> WEB DEVELOPER • CREATIVE EXPLORER</div>
          <h1>Welcome to my<br /><span>little universe.</span></h1>
          <p className="hero-copy">I'm Azhari from Pontian, Johor. I build web tools, play with code, and turn curious ideas into websites.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Explore projects <ArrowUpRight size={18} /></button>
            <a className="secondary-button" href="https://github.com/azhariazmi/profile" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
          <div className="hero-note"><span>✧</span> Built with curiosity, HTML, CSS & JavaScript <span>✧</span></div>
        </section>

        <section className="search-wrap" aria-label="Search projects">
          <Search size={23} className="search-icon" />
          <input value={query} onChange={e => { setQuery(e.target.value); if (e.target.value) setActive("Home"); }} placeholder="Search apps, tools, music, guides..." aria-label="Search apps, tools, music, guides" />
          {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="Clear search"><X size={18} /></button>}
          <kbd>⌕</kbd>
        </section>

        <section className="quick-links" aria-label="Social links">
          <a className="quick-link" href="https://azhari.netlify.app/" target="_blank" rel="noreferrer"><Globe size={23} /><span>Website</span></a>
          <a className="quick-link" href="https://github.com/azhariazmi" target="_blank" rel="noreferrer"><Github size={23} /><span>GitHub</span></a>
          <a className="quick-link" href="https://musicplaylist.edgeone.dev/" target="_blank" rel="noreferrer"><Music2 size={23} /><span>Music</span></a>
        </section>

        <section className="project-section" id="projects">
          <div className="section-heading">
            <div><span className="section-kicker">THE COLLECTION</span><h2>{heading}</h2><p>{subtitle}</p></div>
            <span className="count-badge">{filtered.length} {filtered.length === 1 ? "item" : "items"}</span>
          </div>

          {active === "Menu" && !query && (
            <div className="menu-panel">
              <button onClick={() => navigate("Music")}><Music2 /> Music projects <ArrowUpRight size={16} /></button>
              <button onClick={() => navigate("About")}><UserRound /> About me <ArrowUpRight size={16} /></button>
              <a href="https://github.com/azhariazmi" target="_blank" rel="noreferrer"><Github /> GitHub profile <ArrowUpRight size={16} /></a>
              <a href="https://azhari.netlify.app/" target="_blank" rel="noreferrer"><Globe /> Personal website <ArrowUpRight size={16} /></a>
            </div>
          )}

          {active === "Extensions" && !query ? (
            <div className="empty-state"><div className="empty-icon"><Puzzle size={30} /></div><h3>Extension station</h3><p>This section is ready for browser extensions and useful repositories. Add your favourites here when you're ready.</p><button className="secondary-button" onClick={() => navigate("Home")}>Back to home</button></div>
          ) : filtered.length ? (
            <div className="project-grid">
              {filtered.map((project, index) => {
                const Icon = project.icon;
                return <a className={`project-card ${project.color}`} href={project.url} target="_blank" rel="noreferrer" key={project.title} style={{ "--delay": `${index * 45}ms` }}>
                  <div className="card-top"><span className="project-icon"><Icon size={23} /></span><span className="card-arrow"><ExternalLink size={16} /></span></div>
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <span className="visit-link">Explore project <ArrowUpRight size={15} /></span>
                </a>;
              })}
            </div>
          ) : (
            <div className="empty-state"><div className="empty-icon"><Search size={30} /></div><h3>No matching projects</h3><p>Try another keyword. The search engine is small, but it tries its best.</p><button className="secondary-button" onClick={() => { setQuery(""); setActive("Home"); }}>Show all projects</button></div>
          )}
        </section>

        <section className="about-strip">
          <div className="about-icon"><Sparkles size={25} /></div>
          <div><span className="section-kicker">A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><span>Builder by habit.</span></h2><p>I enjoy frontend development, creative design, music, and making useful things for the web.</p><a href="https://azhari.netlify.app/" target="_blank" rel="noreferrer">More about Azhari <ArrowUpRight size={16} /></a></div>
        </section>
      </main>

      <footer className="footer"><span>© {new Date().getFullYear()} Azhari Galaxy</span><span>Made with <span className="heart">♥</span> and a suspicious amount of CSS.</span></footer>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navItems.map(item => {
          const Icon = item.icon;
          return <button key={item.id} className={`nav-item ${active === item.id ? "active" : ""}`} onClick={() => navigate(item.id)} aria-current={active === item.id ? "page" : undefined}>
            <Icon size={24} strokeWidth={active === item.id ? 2.3 : 1.9} /><span>{item.label}</span>{active === item.id && <i />}
          </button>;
        })}
      </nav>
    </div>
  );
}

export default App;