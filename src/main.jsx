import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Mail, Menu, X, Download, Code2, Braces, Database, BrainCircuit, Trophy, ChevronDown } from 'lucide-react';
import './styles.css';

const projects = [
  { id: 'library', number: '01', title: 'Library Management System', type: 'JAVA · OOP', year: '2025 — 2026', description: 'A terminal-based library workflow for managing books and users, with persistent records and practical issue/return operations.', details: ['Add, update, delete, and search books', 'Issue and return workflows', 'Java file handling, serialization, and exception handling'], tags: ['Java', 'OOP', 'File Handling'], github: 'https://github.com/pranaypr9/library-management-system', visual: 'library' },
  { id: 'cattle', number: '02', title: 'Cattle Breed Detection', type: 'AI / MACHINE LEARNING', year: 'PROJECT', description: 'A computer-vision concept that explores cattle-breed identification from images.', details: ['Image classification workflow', 'Python-based computer-vision pipeline', 'Model weights and prediction accuracy should be verified before presenting it as production-ready'], tags: ['Python', 'Computer Vision', 'Image Classification'], github: 'https://github.com/pranaypr9/sih-cattle-breed-recognition', visual: 'cattle' },
  { id: 'train', number: '03', title: 'Train Delay Prediction', type: 'PYTHON · FASTAPI', year: 'PROJECT', description: 'A backend project for train-route and delay analysis using structured station and journey data.', details: ['API-based train and station processing', 'Route inputs paired with historical delay information', 'Backend built around structured journey data'], tags: ['Python', 'FastAPI', 'APIs'], github: 'https://github.com/pranaypr9/Railtrack', visual: 'train' },
  { id: 'ecommerce', number: '04', title: 'E-Commerce Website', type: 'JAVA · SQL', year: '2024 — 2025', description: 'A Java web application backend covering core e-commerce flows and database integration.', details: ['User authentication', 'Product catalogue and cart', 'Order processing with JDBC and SQL'], tags: ['Java', 'JDBC', 'SQL'], github: 'https://github.com/pranaypr9/E-commerce-Platform', visual: 'shop' },
];
const games = [
  { id: 'nexus', number: '05', title: 'NEXUS: 2097', type: 'BROWSER GAME · THREE.JS', year: 'GAME', description: 'A cyberpunk action game set in a rain-soaked megacity, with a multi-district campaign, combat abilities, upgrades, and a final boss encounter.', details: ['Browser-based 3D game built with Three.js and WebGL', 'Explore five districts, uncover story records, and fight enemy waves', 'Combat upgrades, saved progression, and a three-phase ARCHON boss'], tags: ['Game', 'JavaScript', 'Three.js', 'WebGL'], github: 'https://github.com/pranaypr9/nexus-2097', liveUrl: 'https://pranaypr9.github.io/nexus-2097/', visual: 'nexus' },
  { id: 'neon-rift', number: '06', title: 'Neon Rift', type: 'ARCADE GAME · CANVAS', year: 'GAME', description: 'A top-down neon space shooter where you dodge hunter ships, blast splitting asteroids, and survive increasingly difficult waves.', details: ['Vanilla JavaScript and Canvas API; no external libraries or assets', 'Momentum-based ship movement, mouse aiming, and screen wrapping', 'Wave-based survival, lives, score, and a saved best score'], tags: ['Game', 'JavaScript', 'Canvas', 'Arcade'], github: 'https://github.com/pranaypr9/neon-rift-game', liveUrl: 'https://pranaypr9.github.io/neon-rift-game/', visual: 'neon-rift' },
];
const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Frameworks & Libraries', icon: Braces, items: ['React.js', 'Node.js', 'NumPy', 'Pandas', 'FastAPI'] },
  { title: 'Data & Cloud', icon: Database, items: ['MySQL', 'MongoDB', 'AWS'] },
  { title: 'Core CS', icon: BrainCircuit, items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Machine Learning'] },
];
const timeline = [
  { date: 'APR — JUN 2026', title: 'Java Full Stack Development', org: 'EduSkills Academy / AICTE', text: 'Completed an 8-week virtual internship focused on Java full-stack development and worked on a project as part of the program.' },
  { date: '2024 — PRESENT', title: 'B.Tech, Computer Science Engineering', org: 'Galgotias University · Greater Noida', text: 'Building foundations across programming, software development, data structures, and computer science.' },
  { date: 'CAMPUS LEADERSHIP', title: 'Club Head · HackForge', org: 'Technical community', text: 'Leading technical activities, hackathons, and student engagement.' },
  { date: 'CAMPUS COMMUNITY', title: 'Campus Crew Member', org: 'HackerRank', text: 'Selected to contribute to coding and technical initiatives on campus.' },
];
const achievements = [
  ['200+', 'DSA problems solved', 'Algorithms · data structures · complexity'],
  ['JAVA', 'Object-oriented programming', 'Collections · exception handling · file I/O'],
  ['API', 'Backend development', 'FastAPI · REST concepts · structured data'],
  ['AI / ML', 'Computer vision projects', 'Python · image classification workflows'],
];
const certifications = ['Software Engineering Job Simulation — JPMorgan Chase', 'AI Practitioner — AWS', 'Generative AI Productivity — Microsoft', 'Technical Security Audit — LinkedIn', 'Java, Java Servlets, OOP, Java Collections, C Programming & Computational Thinking — HCL GUVI'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motion, setMotion] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const projectCount = projects.length + games.length;
  const filters = ['All', 'Java', 'AI / ML', 'Backend'];
  const filtered = projects.filter(p => {
    const categoryMatch = activeFilter === 'All' || (activeFilter === 'Java' && p.tags.some(t => ['Java','OOP','JDBC','SQL'].includes(t))) || (activeFilter === 'AI / ML' && p.id === 'cattle') || (activeFilter === 'Backend' && ['train','ecommerce'].includes(p.id));
    const textMatch = `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && textMatch;
  });
  useEffect(() => {
    document.body.classList.toggle('motion-off', !motion);
    const onKey = e => { if (e.key === 'Escape') { setSelected(null); setMenuOpen(false); } };
    window.addEventListener('keydown', onKey);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('keydown', onKey); observer.disconnect(); };
  }, [motion, selected]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.project-card.reveal:not(.visible)').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter, query]);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="grain" aria-hidden="true" />
    <div className="scroll-progress" aria-hidden="true" />
    <header className="header">
      <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Pranay Pratap Singh home"><span className="mark">P<span>.</span></span><span className="wordmark-text">PRANAY PRATAP SINGH<small>DEVELOPER PORTFOLIO</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#about" onClick={closeMenu}>About <span>02</span></a><a href="#games" onClick={closeMenu}>Games <span>03</span></a><a href="#journey" onClick={closeMenu}>Journey <span>04</span></a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
      <div className="header-actions"><button className="motion-toggle" onClick={() => setMotion(v => !v)} aria-pressed={motion}><span className={motion ? 'motion-dot on' : 'motion-dot'} /> Motion {motion ? 'On' : 'Off'}</button><button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-topline"><span><i className="live-dot"/> COMPUTER SCIENCE & ENGINEERING</span><span className="mono">INDIA · IST</span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="eyebrow-line"/> BUILDING WITH LOGIC. LEARNING BY DOING.</p>
            <h1 className="hero-title reveal">PRANAY<br/><span>PRATAP</span><br/>SINGH<span className="red-dot">.</span></h1>
            <div className="hero-bottom reveal"><p>Computer Science student turning ideas into useful software — from Java applications to web backends and machine-learning projects.</p><div className="hero-ctas"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={16}/></a><a className="button button-ghost" href="mailto:pranaypratap9@gmail.com">Get in touch <ArrowUpRight size={16}/></a></div><div className="social-links hero-socials" aria-label="Professional profiles"><a className="social-link" href="https://github.com/pranaypr9" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a><a className="social-link" href="https://codolio.com/profile/pranaypratap9" target="_blank" rel="noreferrer">Codolio <ArrowUpRight size={15}/></a><a className="social-link" href="https://www.linkedin.com/in/pranay-pratap-singh-95989527b/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a></div></div>
          </div>
          <div className="hero-art reveal" aria-label="Abstract graphic representing code and software systems">
            <div className="art-top"><span className="mono">FIG. 001 / SYSTEMS IN MOTION</span><span className="art-cross">✳</span></div>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="art-core"><span>&lt;</span><b>/</b><span>&gt;</span></div><div className="art-node node-a"/><div className="art-node node-b"/><div className="art-node node-c"/>
            <div className="art-label label-a"><span className="mono">01</span> LOGIC</div><div className="art-label label-b"><span className="mono">02</span> ITERATION</div><div className="art-label label-c"><span className="mono">03</span> IMPACT</div>
            <div className="art-bottom"><span>JAVA / WEB / AI</span><span className="mono">26° N · 81° E</span></div>
          </div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span><span className="mono">PORTFOLIO — 2026</span></div>
      </section>

      <section className="stats-band" aria-label="Highlights"><div className="stats-inner">{achievements.map((a,i)=><div className="stat" key={a[0]}><span className="stat-index">0{i+1} /</span><strong>{a[0]}</strong><span>{a[1]}</span></div>)}</div></section>

      <section className="section-wrap work-section" id="work">
        <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</p><h2>Ideas into<br/><span className="outline-text">APPLICATIONS.</span></h2></div><p className="section-intro">A selection of academic and independent projects exploring software design, backend systems, and applied machine learning.</p></div>
        <div className="work-controls reveal"><div className="filter-list" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={activeFilter===f?'filter active':'filter'} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div><label className="search-box"><span className="sr-only">Search projects</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..."/><span className="search-key">⌕</span></label></div>
        <div className="project-grid">{filtered.map((p,i)=><ProjectCard key={p.id} project={p} index={i} total={projectCount} onSelect={setSelected}/>)}</div>
        {filtered.length===0 && <div className="empty-state">No projects match that search. Try another keyword.</div>}
        <div className="work-end"><span className="mono">{String(filtered.length).padStart(2,'0')} PROJECTS FOUND</span></div>
      </section>

      <section className="section-wrap games-section" id="games">
        <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line"/> GAME DEVELOPMENT</p><h2>PLAYABLE<br/><span className="outline-text">WORLDS.</span></h2></div><p className="section-intro">Two browser games built around different worlds: a cyberpunk action campaign and a neon arcade shooter.</p></div>
        <div className="project-grid">{games.map((game,i)=><ProjectCard key={game.id} project={game} index={i} total={projectCount} onSelect={setSelected}/>)}</div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-grid"><div className="about-title reveal"><p className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT ME</p><h2>CURIOUS<br/>BY NATURE.<br/><span className="red-text">BUILT TO</span><br/>FIGURE IT OUT.</h2><div className="about-stamp"><span>ALWAYS</span><strong>LEARNING</strong><span>ALWAYS BUILDING ↗</span></div></div><div className="about-content reveal"><p className="about-lead">I’m a Computer Science Engineering student who enjoys breaking down complex problems and building practical solutions with code.</p><p>My foundation is in Java, data structures, algorithms, and object-oriented programming. I’m also exploring full-stack development, APIs, databases, and machine-learning applications through hands-on projects.</p><p>Beyond code, participation in hackathons, Model United Nations, and technical communities has helped me grow as a communicator and collaborator.</p><div className="about-facts"><div><span className="mono">01 / MINDSET</span><strong>Learn. Build. Refine.</strong></div><div><span className="mono">02 / FOCUS</span><strong>Software & problem solving</strong></div><div><span className="mono">03 / BASE</span><strong>Greater Noida, India</strong></div></div><a className="button button-outline" href="/assets/pranay-pratap-singh-resume.pdf" target="_blank" rel="noreferrer">View resume <Download size={16}/></a></div></div></section>

      <section className="section-wrap skills-section" id="skills"><div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line"/> TOOLKIT</p><h2>THE RIGHT TOOL<br/><span className="outline-text">FOR THE JOB.</span></h2></div><p className="section-intro">A growing toolkit grounded in core computer science, with room to keep experimenting and learning.</p></div><div className="skills-grid">{skillGroups.map((g,i)=><div className="skill-card reveal" key={g.title}><div className="skill-top"><span className="skill-index">0{i+1}</span><g.icon size={22} strokeWidth={1.5}/></div><h3>{g.title}</h3><div className="skill-pills">{g.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div><div className="tools-line reveal"><span className="mono">DAILY TOOLS</span><div>{['Git','GitHub','VS Code','IntelliJ IDEA'].map(t=><span key={t}>{t}</span>)}</div></div></section>

      <section className="journey-section" id="journey"><div className="section-wrap"><div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line"/> THE JOURNEY SO FAR</p><h2>GROWTH IN<br/><span className="outline-text">PROGRESS.</span></h2></div><p className="section-intro">A snapshot of the learning, leadership, and community experiences shaping how I work.</p></div><div className="journey-layout"><div className="timeline">{timeline.map((t,i)=><article className="timeline-item reveal" key={t.title}><div className="timeline-marker"><span>0{i+1}</span></div><div className="timeline-body"><span className="mono timeline-date">{t.date}</span><h3>{t.title}</h3><p className="timeline-org">{t.org}</p><p>{t.text}</p></div><ChevronDown className="timeline-chevron" size={17}/></article>)}</div><aside className="recognition reveal"><div className="recognition-head"><Trophy size={19}/><span className="mono">RECOGNITION / NOTES</span></div><div className="recognition-item"><span className="recognition-symbol">✳</span><div><strong>Smart India Hackathon</strong><p>Won the pre-qualifier and qualified for the Grand Finale.</p></div></div><div className="recognition-item"><span className="recognition-symbol">↗</span><div><strong>Hackathons & technical community</strong><p>Collaborative problem analysis, algorithm design, coding, and debugging.</p></div></div><div className="recognition-item"><span className="recognition-symbol">◎</span><div><strong>Communication & leadership</strong><p>50+ MUNs, campus initiatives, and school-level football and cricket.</p></div></div><div className="cert-block"><span className="mono">CERTIFICATIONS & TRAINING</span>{certifications.map(c=><div className="cert-row" key={c}><span>{c}</span><ArrowUpRight size={14}/></div>)}</div></aside></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><p className="eyebrow reveal"><span className="eyebrow-line"/> HAVE A PROJECT OR OPPORTUNITY?</p><h2 className="contact-title reveal">LET’S MAKE<br/><span>SOMETHING</span><br/>USEFUL<span className="red-dot">.</span></h2><div className="contact-bottom reveal"><p>Open to connecting about software development, collaborative projects, and opportunities to learn and contribute.</p><a className="contact-email" href="mailto:pranaypratap9@gmail.com"><span><Mail size={18}/> pranaypratap9@gmail.com</span><ArrowUpRight size={24}/></a></div><div className="contact-socials" aria-label="Connect with me"><span className="mono">FIND ME ONLINE</span><div className="social-links"><a className="social-link" href="https://github.com/pranaypr9" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a><a className="social-link" href="https://codolio.com/profile/pranaypratap9" target="_blank" rel="noreferrer">Codolio <ArrowUpRight size={15}/></a><a className="social-link" href="https://www.linkedin.com/in/pranay-pratap-singh-95989527b/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a></div></div><div className="contact-rule"/><div className="contact-foot"><span className="mono">BASED IN INDIA · WORKING EVERYWHERE</span><a href="/assets/pranay-pratap-singh-resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={14}/></a></div></div></section>
    </main>
    <footer className="footer"><a href="#top" className="footer-mark">P<span>.</span></a><span>Designed with intent. Built to keep evolving.</span><span className="mono">© {new Date().getFullYear()} PRANAY PRATAP SINGH</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close project details"><X/></button><div className="modal-visual"><ProjectVisual type={selected.visual}/></div><div className="modal-content"><span className="mono modal-kicker">PROJECT {selected.number} / {selected.type}</span><h2 id="modal-title">{selected.title}</h2><p>{selected.description}</p><h3>What it includes</h3><ul>{selected.details.map(d=><li key={d}>{d}</li>)}</ul><div className="tag-row">{selected.tags.map(t=><span key={t}>{t}</span>)}</div><div className="modal-project-links">{selected.liveUrl && <><span className="mono game-play-label">WANT TO PLAY?</span><a className="button button-primary" href={selected.liveUrl} target="_blank" rel="noreferrer">Play game <ArrowUpRight size={15}/></a></>}<a className="button button-ghost" href={selected.github} target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight size={15}/></a></div><p className="modal-note">Use the links above to launch the live demo or review the project source.</p></div></section></div>}
  </>;
}

function ProjectCard({ project, index, total, onSelect }) {
  return <article className={`project-card reveal ${project.visual}`} style={{'--delay':`${index*90}ms`}}>
    <button className="project-open" onClick={()=>onSelect(project)} aria-label={`View details for ${project.title}`}>
      <div className="project-visual"><ProjectVisual type={project.visual}/><span className="project-number">{project.number} / {String(total).padStart(2, '0')}</span><span className="project-arrow"><ArrowUpRight size={21}/></span></div>
      <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    </button>
  </article>;
}

function ProjectVisual({type}) {
  if(type==='library') return <div className="visual-library"><div className="library-sidebar"><i/><i/><i/><i/></div><div className="library-main"><div className="fake-topline"><span>LIBRARY / DASHBOARD</span><b>•••</b></div><div className="fake-heading">Your library<span>.</span></div><div className="fake-stats"><i/><i/><i/></div><div className="fake-table"><i/><i/><i/><i/></div></div></div>;
  if(type==='cattle') return <div className="visual-cattle"><div className="scan-grid"/><div className="scan-frame"><span className="scan-corner tl"/><span className="scan-corner tr"/><span className="scan-corner bl"/><span className="scan-corner br"/><div className="cattle-shape">♞</div><div className="scan-crosshair">+</div></div><div className="scan-caption"><span>IMAGE CLASSIFICATION</span><strong>BREED DETECTED <b>↗</b></strong></div><div className="scan-index mono">CV / 02</div></div>;
  if(type==='train') return <div className="visual-train"><div className="route-map"><svg viewBox="0 0 400 220" role="img" aria-label="Abstract train route diagram"><path d="M-20 50 C80 50 70 140 160 120 S250 20 420 70"/><path d="M-20 180 C60 160 120 210 190 160 S280 130 420 170"/><path d="M50 -20 C70 40 130 60 140 110 S130 180 180 240"/><path d="M280 -20 C260 40 320 80 300 120 S320 180 360 240"/></svg><div className="station s1"><i/>NDLS<span>NEW DELHI</span></div><div className="station s2"><i/>CNB<span>KANPUR</span></div><div className="station s3"><i/>LKO<span>LUCKNOW</span></div><div className="route-pulse"/></div><div className="train-data"><span className="mono">ROUTE INTELLIGENCE / API</span><strong>Journey data<span> →</span></strong><div><i/> LIVE-STYLE VISUAL / DEMO</div></div></div>;
  if(type==='nexus') return <div className="visual-nexus"><div className="nexus-grid"/><div className="nexus-scanline"/><div className="nexus-orbit nexus-orbit-one"/><div className="nexus-orbit nexus-orbit-two"/><div className="nexus-core">N<span>×</span></div><span className="nexus-label nexus-label-top">NEXUS CORE / OFFLINE</span><span className="nexus-label nexus-label-bottom">UNIT-07 <i/> CAMPAIGN COMPLETE</span><span className="nexus-coordinate">2097</span></div>;
  if(type==='neon-rift') return <div className="visual-neon-rift"><div className="rift-stars"/><div className="rift-sun"/><div className="rift-asteroid asteroid-one"/><div className="rift-asteroid asteroid-two"/><div className="rift-asteroid asteroid-three"/><div className="rift-ship"/><span className="rift-hud rift-hud-top">WAVE 07 <i/> SHIELDS ACTIVE</span><span className="rift-hud rift-hud-bottom">NEON RIFT <b>—</b> SURVIVE THE WAVE</span></div>;
  return <div className="visual-shop"><div className="shop-top"><span>OBJECTS / 001—004</span><span>STORE ↗</span></div><div className="shop-layout"><div className="shop-product product-one"><div className="product-shape shape-one"/><span>01 / ESSENTIAL</span></div><div className="shop-product product-two"><div className="product-shape shape-two"/><span>02 / EVERYDAY</span></div><div className="shop-product product-three"><div className="product-shape shape-three"/><span>03 / STUDIO</span></div></div><div className="shop-bottom"><strong>GOOD DESIGN.<br/>SIMPLE FLOW.</strong><span className="mono">CART [ 00 ]</span></div></div>;
}

createRoot(document.getElementById('root')).render(<App/>);
