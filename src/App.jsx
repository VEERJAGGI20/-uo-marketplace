import { ArrowDown, ArrowRight, ArrowUpRight, Boxes, Code2, Compass, Gem, Menu, Package, Search, ShieldCheck, Sparkles, Store, Users } from "lucide-react";

const categories = [
  { icon: Package, name: "Resources", detail: "Texture packs, assets and tools", count: "COMING SOON" },
  { icon: Boxes, name: "Builds & Worlds", detail: "Maps, structures and creations", count: "COMING SOON" },
  { icon: Gem, name: "Collectibles", detail: "Cards and UO-exclusive items", count: "COMING SOON" },
  { icon: Code2, name: "Development", detail: "Plugins, scripts and projects", count: "COMING SOON" },
];

function App() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar shell">
        <a className="brand" href="#" aria-label="UO Marketplace home">
          <span className="brand-mark">UO</span>
          <span className="brand-copy"><strong>UNSTABLE ORIGINS</strong><small>MARKETPLACE</small></span>
        </a>
        <nav className="desktop-nav">
          <a className="active" href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#creators">Creators</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="https://discord.com/" target="_blank" rel="noreferrer">Join the network <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" aria-label="Menu"><Menu size={21}/></button>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> THE UNSTABLE ORIGINS NETWORK</div>
          <h1>MADE BY THE<br/><span>COMMUNITY.</span></h1>
          <p className="hero-subtitle">A home for creations, resources and ideas from across the UO universe.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#explore">Explore marketplace <ArrowRight size={17}/></a>
            <a className="button button-quiet" href="#about">Discover UO <ArrowDown size={16}/></a>
          </div>
          <div className="hero-footnote"><ShieldCheck size={15}/> COMMUNITY-DRIVEN · CURATED BY UO</div>
        </div>
        <div className="hero-art" aria-label="Abstract purple marketplace artwork">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="art-core"><span>UO</span><i>THE ORIGINS NETWORK</i></div>
          <div className="floating-card card-top"><Sparkles size={15}/><span>CREATOR<br/><b>ECONOMY</b></span></div>
          <div className="floating-card card-bottom"><Gem size={16}/><span>BUILT FOR<br/><b>THE COMMUNITY</b></span></div>
          <div className="art-grid" />
        </div>
      </section>

      <section className="ticker" aria-label="Marketplace values">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => <span key={i}>DISCOVER <b>✦</b> CREATE <b>✦</b> SHARE <b>✦</b> TRADE <b>✦</b> THE UO NETWORK <b>✦</b></span>)}
        </div>
      </section>

      <section className="section shell" id="explore">
        <div className="section-heading">
          <div><div className="eyebrow">01 / EXPLORE THE NETWORK</div><h2>Find your <span>next favourite.</span></h2></div>
          <a className="text-link" href="#categories">Browse categories <ArrowUpRight size={16}/></a>
        </div>
        <div className="searchbar"><Search size={18}/><span>Search creations, resources and creators...</span><kbd>⌘ K</kbd></div>
        <div className="category-grid" id="categories">
          {categories.map(({ icon: Icon, name, detail, count }, index) => (
            <article className="category-card" key={name}>
              <div className="category-top"><span className="category-icon"><Icon size={21}/></span><span className="category-index">0{index + 1}</span></div>
              <h3>{name}</h3><p>{detail}</p>
              <div className="category-bottom"><span>{count}</span><ArrowUpRight size={17}/></div>
            </article>
          ))}
        </div>
      </section>

      <section className="creator-band shell" id="creators">
        <div className="creator-symbol"><Store size={27}/></div>
        <div><div className="eyebrow">FOR THE CREATORS</div><h2>Your work deserves a place here.</h2><p>Creator applications and product submissions will open with the marketplace beta.</p></div>
        <span className="coming-pill">CREATOR PORTAL · IN DEVELOPMENT</span>
      </section>

      <section className="about shell" id="about">
        <div className="eyebrow">02 / THE IDEA</div>
        <h2>One network.<br/><span>Countless origins.</span></h2>
        <p>UO Marketplace is being built as a community-first place to discover and showcase digital creations connected to The Unstable Origins.</p>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#"><span className="brand-mark">UO</span><span className="brand-copy"><strong>UNSTABLE ORIGINS</strong><small>MARKETPLACE</small></span></a>
        <span>AN UNSTABLE ORIGINS PROJECT</span>
        <span>© {new Date().getFullYear()} UO NETWORK</span>
      </footer>
    </main>
  );
}

export default App;
