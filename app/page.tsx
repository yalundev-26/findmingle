import React, { JSX } from 'react';

const highlights = [
  {
    title: "Sign-up now and get one-month premium membership",
    description:
      "Access advanced matching tools, curated events, and concierge support for your first 30 days.",
    action: "Sign-up now",
    accent: "blush",
  },
  {
    title: "Daily Login Rewards",
    description:
      "Check in every day to earn bonus credits you can spend on icebreakers, spotlights, and connections.",
    action: "Login",
    accent: "sunset",
  },
];

const features = [
  {
    icon: "heart",
    title: "Designed for mature dating",
    body: "A calm, caring space built for honest conversations—not endless swiping.",
  },
  {
    icon: "chat",
    title: "Real profiles, real stories",
    body: "Every member is identity-verified, so you can trust the faces you see.",
  },
  {
    icon: "gift",
    title: "Personalized matches",
    body: "Tell us what matters to you and we will curate thoughtful introductions.",
  },
  {
    icon: "spark",
    title: "Meaningful conversation prompts",
    body: "Enjoy guided starters that go deeper than small talk and respect your time.",
  },
];

const footerLinks = [
  "About Us",
  "How It Works",
  "Safety and Privacy",
  "Terms of Service",
  "Contact Support",
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "#" },
];

const iconMap: Record<string, JSX.Element> = {
  heart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-7.33-4.35-9.6-9.76C1.05 8.06 2.24 4.5 5.67 4.5c2.08 0 3.21 1.35 4.05 2.55C10.79 5.85 11.92 4.5 14 4.5c3.43 0 4.62 3.56 3.27 6.74C19.33 16.65 12 21 12 21z"
        fill="currentColor"
      />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 4H3a2 2 0 0 0-2 2v10.52a2 2 0 0 0 2 2h3v3.48L11.48 18H21a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
        fill="currentColor"
      />
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 7h-2.18a3 3 0 1 0-4.24-4.24L12 5.34 9.41 2.76A3 3 0 1 0 5.17 7H3v5h2v10h14V12h2V7zm-5.88-3.88a1 1 0 0 1 1.41 1.41L15.42 6H13V3.58l2.12-2.12zM6.47 4.53a1 1 0 0 1 1.41-1.41L11 6H8.58L6.47 4.53zM7 20V12h4v8H7zm6 0v-8h4v8h-4zm6-10H5V9h14v1z"
        fill="currentColor"
      />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m13 2 1.94 5.32L20 9.24l-4 3.7.94 5.56L13 16.9 9.06 18.5 10 12.94 6 9.24l5.06-1.92L13 2z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="site-wrapper">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="page-shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-icon" aria-hidden="true">
              <span className="icon-heart" />
            </div>
            <div>
              <p className="brand-name">findmingle</p>
              <p className="brand-tagline">where wisdom meets new chapters</p>
            </div>
          </div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications">
              🔔
            </button>
            <button className="ghost-btn">Login</button>
            <button className="solid-btn">Sign-up</button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="announcement">New: private supper clubs in 24 cities</span>
            <h1>Where experience meets real connection</h1>
            <p>
              It is never too late to meet someone who truly appreciates the life you have built. FindMingle is a
              supportive community for meaningful relationships, whether you are looking for romance or a trusted
              companion to share adventures with.
            </p>
            <div className="cta-row">
              <button className="cta-primary">Join FindMingle today</button>
              <button className="cta-secondary">See how it works</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="photo-panel bg-[center_21%]! bg-no-repeat  " aria-hidden="true">
              <div className="photo-overlay">
                <p>“We met on FindMingle and married last spring. Genuine conversations changed everything.”</p>
                <span>— Priya & Michael, Austin</span>
              </div>
            </div>
            <div className="hero-badge">
              <p>Trusted by 250K+ mature singles</p>
              <span>Matches curated by real hosts</span>
            </div>
          </div>
        </section>

        <section className="highlight-grid">
          {highlights.map((card) => (
            <article key={card.title} className={`highlight-card ${card.accent}`}>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <button>{card.action}</button>
            </article>
          ))}
        </section>

        <section className="features">
          <div className="section-heading">
            <p>Why choose FindMingle?</p>
            <h2>Designed for hearts with beautiful history</h2>
            <span>Thoughtful safety, authentic people, and conversations that go beyond small talk.</span>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{iconMap[feature.icon]}</div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story">
          <p>
            FindMingle is a dating platform created for mature adults who value honesty, meaningful conversation, and
            genuine companionship. Whether you want a serious relationship or someone to share life’s little joys, this is
            a place where connections happen naturally—without pressure or games.
          </p>
          <p className="wisdom">
            You have gained wisdom and know what truly matters. Now meet people who appreciate exactly who you are today.
          </p>
        </section>

        <section className="cta-banner">
          <div>
            <h3>Ready for a kinder dating experience?</h3>
            <p>Start with a guided profile session hosted by our concierge team.</p>
          </div>
          <button className="cta-primary">Schedule my welcome call</button>
        </section>

        <footer className="footer">
          <div className="footer-brand">
            <div className="brand-icon" aria-hidden="true">
              <span className="icon-heart" />
            </div>
            <p className="brand-name">findmingle</p>
          </div>
          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </nav>
          <div className="social-row">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                {social.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
