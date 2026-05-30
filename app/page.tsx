<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>CopilotSolutions365 — Enterprise Microsoft 365 Transformation</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #04050d;
    --surface: #0b0d1a;
    --surface2: #101428;
    --border: rgba(255,255,255,0.07);
    --accent: #6c63ff;
    --accent2: #00d4ff;
    --accent3: #ff6b6b;
    --text: #e8eaf6;
    --muted: #7b82a8;
    --gold: #f0c040;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  /* Custom cursor */
  .cursor {
    width: 12px; height: 12px;
    background: var(--accent2);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: screen;
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1px solid rgba(108,99,255,0.5);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.18s ease, width 0.2s, height 0.2s;
  }

  /* Noise overlay */
  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }

  /* ─── NAV ─── */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 5vw;
    background: rgba(4,5,13,0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    background: linear-gradient(135deg, var(--accent2), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }

  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }

  .nav-cta {
    background: var(--accent);
    color: #fff !important;
    padding: 0.5rem 1.2rem;
    border-radius: 100px;
    transition: background 0.2s, transform 0.2s !important;
  }
  .nav-cta:hover { background: var(--accent2) !important; color: #000 !important; transform: scale(1.05); }

  /* ─── HERO ─── */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center;
    padding: 8rem 5vw 4rem;
    position: relative;
    overflow: hidden;
  }

  /* Animated grid lines */
  .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(108,99,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(108,99,255,0.08) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridDrift 20s linear infinite;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%);
  }
  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }

  /* Glowing orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    animation: orbFloat 12s ease-in-out infinite;
  }
  .orb-1 { width: 600px; height: 600px; background: rgba(108,99,255,0.18); top: -200px; left: -200px; }
  .orb-2 { width: 500px; height: 500px; background: rgba(0,212,255,0.12); top: 100px; right: -150px; animation-delay: -5s; }
  .orb-3 { width: 400px; height: 400px; background: rgba(255,107,107,0.08); bottom: 0; left: 30%; animation-delay: -8s; }
  @keyframes orbFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.05); }
    66% { transform: translate(-20px, 20px) scale(0.97); }
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    border: 1px solid rgba(108,99,255,0.4);
    background: rgba(108,99,255,0.1);
    padding: 0.4rem 1rem;
    border-radius: 100px;
    font-size: 0.78rem;
    color: var(--accent2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    position: relative; z-index: 2;
    animation: fadeUp 0.8s ease both;
  }
  .hero-badge span { width: 6px; height: 6px; background: var(--accent2); border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.8rem, 7vw, 6.5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    position: relative; z-index: 2;
    animation: fadeUp 0.8s 0.1s ease both;
  }

  .hero h1 .line1 { display: block; color: var(--text); }
  .hero h1 .line2 {
    display: block;
    background: linear-gradient(135deg, var(--accent2) 0%, var(--accent) 50%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero h1 .line3 { display: block; color: var(--text); }

  .hero-sub {
    max-width: 600px;
    margin: 1.5rem auto 0;
    font-size: 1.1rem;
    color: var(--muted);
    line-height: 1.7;
    position: relative; z-index: 2;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-actions {
    display: flex; gap: 1rem; flex-wrap: wrap;
    justify-content: center;
    margin-top: 2.5rem;
    position: relative; z-index: 2;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff;
    padding: 0.85rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 40px rgba(108,99,255,0.3);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(0,212,255,0.4); }

  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.5rem;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.85rem 2rem;
    border-radius: 12px;
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    background: rgba(255,255,255,0.03);
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }
  .btn-outline:hover { border-color: var(--accent); background: rgba(108,99,255,0.1); transform: translateY(-2px); }

  /* Scroll indicator */
  .scroll-hint {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    color: var(--muted); font-size: 0.75rem; letter-spacing: 0.1em;
    z-index: 2;
    animation: fadeUp 1s 1s ease both;
  }
  .scroll-line {
    width: 1px; height: 50px;
    background: linear-gradient(to bottom, transparent, var(--accent));
    animation: scrollLine 1.5s ease-in-out infinite;
  }
  @keyframes scrollLine { 0%,100% { opacity: 0.3; transform: scaleY(0.5); } 50% { opacity: 1; transform: scaleY(1); } }

  /* Stats row */
  .stats {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 0; margin-top: 3rem;
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    max-width: 750px;
    position: relative; z-index: 2;
    animation: fadeUp 0.8s 0.4s ease both;
  }
  .stat {
    flex: 1; min-width: 150px;
    padding: 1.5rem 2rem;
    text-align: center;
    border-right: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    transition: background 0.2s;
  }
  .stat:last-child { border-right: none; }
  .stat:hover { background: rgba(108,99,255,0.08); }
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2rem; font-weight: 800;
    background: linear-gradient(135deg, var(--accent2), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .stat-label { font-size: 0.78rem; color: var(--muted); margin-top: 0.2rem; letter-spacing: 0.05em; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ─── SECTIONS ─── */
  section { padding: 7rem 5vw; position: relative; }

  .section-label {
    display: inline-block;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent2);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h2.section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    max-width: 600px;
  }

  .section-header { margin-bottom: 4rem; }
  .section-header p { color: var(--muted); margin-top: 1rem; max-width: 500px; line-height: 1.7; font-size: 1rem; }

  /* ─── PROBLEM / OPPORTUNITY ─── */
  .problem { background: var(--surface); }

  .problem-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    max-width: 1100px;
  }

  .prob-item {
    padding: 2.5rem;
    background: var(--bg);
    transition: background 0.2s;
    border-bottom: 1px solid var(--border);
  }
  .prob-item:hover { background: rgba(108,99,255,0.05); }
  .prob-item:nth-child(odd) { border-right: 1px solid var(--border); }

  .prob-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .prob-item h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .prob-item p { color: var(--muted); font-size: 0.88rem; line-height: 1.65; }

  /* ─── SERVICES ─── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 24px;
    overflow: hidden;
  }

  .service-card {
    background: var(--bg);
    padding: 2.5rem;
    transition: background 0.3s;
    position: relative;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .service-card:hover { background: rgba(108,99,255,0.07); }
  .service-card:hover::before { opacity: 1; }

  .service-num {
    font-family: 'Syne', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.1em;
    margin-bottom: 1.5rem;
  }

  .service-icon {
    width: 52px; height: 52px;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    border: 1px solid var(--border);
  }

  .service-card h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    line-height: 1.3;
  }
  .service-card p { color: var(--muted); font-size: 0.875rem; line-height: 1.7; }

  .service-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.2rem; }
  .tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.65rem;
    border-radius: 100px;
    border: 1px solid var(--border);
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  /* ─── TRANSFORMATION PHASES ─── */
  .phases { background: var(--surface); }

  .timeline {
    max-width: 860px;
    position: relative;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 28px; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--accent), var(--accent2), transparent);
  }

  .phase-item {
    display: flex; gap: 2rem;
    margin-bottom: 2.5rem;
    position: relative;
  }

  .phase-dot {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: var(--bg);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--accent2);
    flex-shrink: 0;
    z-index: 1;
    transition: background 0.2s, border-color 0.2s;
  }

  .phase-item:hover .phase-dot {
    background: rgba(108,99,255,0.15);
    border-color: var(--accent);
  }

  .phase-body {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.5rem 2rem;
    flex: 1;
    transition: border-color 0.2s, background 0.2s;
  }
  .phase-item:hover .phase-body { border-color: rgba(108,99,255,0.3); background: rgba(108,99,255,0.04); }

  .phase-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.5rem; }
  .phase-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; }
  .phase-duration {
    font-size: 0.72rem;
    color: var(--accent2);
    border: 1px solid rgba(0,212,255,0.25);
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
    white-space: nowrap;
  }
  .phase-body p { color: var(--muted); font-size: 0.85rem; line-height: 1.65; }

  /* ─── INVESTMENT ─── */
  .investment-wrap {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
    max-width: 1100px;
    align-items: start;
  }

  .inv-table {
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
  }
  .inv-row {
    display: flex; justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border);
    font-size: 0.88rem;
    transition: background 0.15s;
  }
  .inv-row:hover { background: rgba(108,99,255,0.05); }
  .inv-row:last-child { border-bottom: none; background: rgba(108,99,255,0.1); }
  .inv-label { color: var(--muted); }
  .inv-row:last-child .inv-label { color: var(--text); font-weight: 600; }
  .inv-amount { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--text); }
  .inv-row:last-child .inv-amount {
    font-size: 1.1rem;
    background: linear-gradient(135deg, var(--gold), #ff9d00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .inv-highlights {
    display: flex; flex-direction: column; gap: 1rem;
  }

  .inv-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.5rem;
    transition: border-color 0.2s;
  }
  .inv-card:hover { border-color: var(--accent); }
  .inv-card-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
  .inv-card-val {
    font-family: 'Syne', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent2), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .inv-card p { font-size: 0.8rem; color: var(--muted); margin-top: 0.3rem; line-height: 1.5; }

  .payment-milestones {
    display: flex; gap: 0.75rem; margin-top: 1.5rem;
  }
  .milestone {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
  }
  .m-pct { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--accent); }
  .m-label { font-size: 0.7rem; color: var(--muted); margin-top: 0.2rem; line-height: 1.4; }

  /* ─── WHY US ─── */
  .why { background: var(--surface); }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1000px;
  }

  .why-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    transition: transform 0.2s, border-color 0.2s;
  }
  .why-card:hover { transform: translateY(-4px); border-color: rgba(108,99,255,0.4); }

  .why-icon { font-size: 2rem; margin-bottom: 1rem; }
  .why-card h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
  .why-card p { color: var(--muted); font-size: 0.85rem; line-height: 1.65; }

  /* ─── OPTIONAL SERVICES ─── */
  .opt-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
    max-width: 1100px;
  }

  .opt-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.4rem 1.6rem;
    display: flex; justify-content: space-between; align-items: flex-start;
    gap: 1rem;
    transition: border-color 0.2s, background 0.2s;
  }
  .opt-card:hover { border-color: rgba(0,212,255,0.3); background: rgba(0,212,255,0.03); }
  .opt-card h4 { font-size: 0.88rem; font-weight: 600; margin-bottom: 0.3rem; }
  .opt-card p { font-size: 0.78rem; color: var(--muted); }
  .opt-price {
    white-space: nowrap;
    font-family: 'Syne', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent2);
    background: rgba(0,212,255,0.1);
    border: 1px solid rgba(0,212,255,0.2);
    padding: 0.25rem 0.6rem;
    border-radius: 100px;
    flex-shrink: 0;
  }

  /* ─── CTA BANNER ─── */
  .cta-section {
    padding: 7rem 5vw;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,99,255,0.15), transparent);
  }

  .cta-section h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
    position: relative; z-index: 1;
  }
  .cta-section p { color: var(--muted); font-size: 1.05rem; margin-bottom: 2.5rem; position: relative; z-index: 1; }
  .cta-section .actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

  .contact-chips { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; position: relative; z-index: 1; }
  .contact-chip {
    display: flex; align-items: center; gap: 0.5rem;
    border: 1px solid var(--border);
    padding: 0.6rem 1.2rem;
    border-radius: 100px;
    font-size: 0.85rem;
    color: var(--muted);
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }
  .contact-chip:hover { border-color: var(--accent2); color: var(--accent2); }

  /* ─── FOOTER ─── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--muted);
  }

  .footer-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent2), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ─── REVEAL ANIM ─── */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .problem-grid { grid-template-columns: 1fr; }
    .prob-item:nth-child(odd) { border-right: none; border-bottom: 1px solid var(--border); }
    .why-grid { grid-template-columns: 1fr; }
    .investment-wrap { grid-template-columns: 1fr; }
    nav .nav-links { display: none; }
  }
</style>
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- NAV -->
<nav>
  <div class="nav-logo">CopilotSolutions365</div>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#phases">Process</a></li>

    <li><a href="#why">Why Us</a></li>
    <li><a href="#contact" class="nav-cta">Book Demo</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <div class="hero-badge">
    <span></span>
    Microsoft Copilot Studio · M365 · Azure · Power Platform
  </div>

  <h1>
    <span class="line1">Transform Your</span>
    <span class="line2">Digital Workplace</span>
    <span class="line3">with Enterprise AI</span>
  </h1>

  <p class="hero-sub">
    We deploy secure, governed Microsoft 365 ecosystems — from identity management and 
    SharePoint architecture to Copilot AI agents — for global enterprises ready to scale.
  </p>

  <div class="hero-actions">
    <a href="mailto:Founder@CopilotSolutions365.com?subject=Demo%20Request" class="btn-primary">
      ↗ Book a Demo
    </a>
    <a href="#services" class="btn-outline">
      Explore Services
    </a>
  </div>

  <div class="stats reveal">
    <div class="stat">
      <div class="stat-num">7</div>
      <div class="stat-label">Implementation Phases</div>
    </div>
    <div class="stat">
      <div class="stat-num">3–4</div>
      <div class="stat-label">Week Deployment</div>
    </div>
    <div class="stat">
      <div class="stat-num">15</div>
      <div class="stat-label">Days Post-Live Support</div>
    </div>
    <div class="stat">
      <div class="stat-num">E3+E5</div>
      <div class="stat-label">License Expertise</div>
    </div>
  </div>

  <div class="scroll-hint">
    SCROLL
    <div class="scroll-line"></div>
  </div>
</section>

<!-- PROBLEM / OPPORTUNITY -->
<section class="problem" id="services">
  <div class="section-header reveal">
    <span class="section-label">The Challenge</span>
    <h2 class="section-title">Modern Businesses Need a Secure Digital Foundation</h2>
    <p>Unmanaged collaboration tools create governance gaps, data leakage risks, and compliance failures. We solve all six critical dimensions.</p>
  </div>

  <div class="problem-grid reveal">
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(108,99,255,0.15);">🔐</div>
      <h3>Enterprise Security & Data Protection</h3>
      <p>Prevent unauthorized sharing, restrict external file movement, control document access, audit user activities, and enforce governance policies across the organization.</p>
    </div>
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(0,212,255,0.1);">🏗️</div>
      <h3>Structured Role-Based Access Control</h3>
      <p>Define access tiers across your operational hierarchy — each level gets the exact permissions it needs and no more, enforced automatically.</p>
    </div>
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(240,192,64,0.1);">📂</div>
      <h3>Centralized Document Collaboration</h3>
      <p>Eliminate version conflicts and sync issues with a SharePoint-based architecture that enables real-time collaboration with controlled access and version history.</p>
    </div>
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(255,107,107,0.1);">💬</div>
      <h3>Controlled Communication Environment</h3>
      <p>Enforce Teams and Outlook governance: block external sharing, restrict guest access, disable message deletion, and control mobile access to corporate data.</p>
    </div>
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(108,99,255,0.15);">🏠</div>
      <h3>Secure Remote Work Architecture</h3>
      <p>Enable compliant WFH through company-managed devices, endpoint governance, personal device restrictions, and future-ready Azure Virtual Desktop infrastructure.</p>
    </div>
    <div class="prob-item">
      <div class="prob-icon" style="background:rgba(0,212,255,0.1);">✅</div>
      <h3>Compliance-Oriented Governance</h3>
      <p>MFA enforcement, password lifecycle policies, USB blocking, session timeout controls, and administrative oversight aligned with international security standards.</p>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="capabilities">
  <div class="section-header reveal">
    <span class="section-label">What We Build</span>
    <h2 class="section-title">Full-Stack Microsoft 365 Implementation</h2>
    <p>Everything your enterprise needs — designed, deployed, and documented by Microsoft ecosystem specialists.</p>
  </div>

  <div class="services-grid reveal">
    <div class="service-card">
      <div class="service-num">01</div>
      <div class="service-icon" style="background:rgba(108,99,255,0.1); border-color:rgba(108,99,255,0.2);">🛡️</div>
      <h3>Microsoft 365 Environment Setup & Governance</h3>
      <p>Complete tenant configuration, domain onboarding, organizational identity structure, and governance policy frameworks aligned with your business hierarchy.</p>
      <div class="service-tags">
        <span class="tag">Entra ID</span>
        <span class="tag">MFA</span>
        <span class="tag">Conditional Access</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">02</div>
      <div class="service-icon" style="background:rgba(0,212,255,0.08); border-color:rgba(0,212,255,0.2);">📁</div>
      <h3>SharePoint Secure Document Management</h3>
      <p>Department-wise document libraries, role-based permissions, version control, and collaboration workflows that replace chaotic file-sharing with governed architecture.</p>
      <div class="service-tags">
        <span class="tag">SharePoint</span>
        <span class="tag">RBAC</span>
        <span class="tag">Version Control</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">03</div>
      <div class="service-icon" style="background:rgba(240,192,64,0.08); border-color:rgba(240,192,64,0.2);">👥</div>
      <h3>Microsoft Teams Governance & Security</h3>
      <p>Messaging policies, guest access controls, external sharing restrictions, mobile access limitations, and disabling unauthorized features organization-wide.</p>
      <div class="service-tags">
        <span class="tag">Teams Policies</span>
        <span class="tag">Guest Access</span>
        <span class="tag">DLP</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">04</div>
      <div class="service-icon" style="background:rgba(108,99,255,0.1); border-color:rgba(108,99,255,0.2);">🪪</div>
      <h3>Identity & Access Management with MFA</h3>
      <p>Microsoft Entra ID-powered multi-factor authentication, password expiration policies, wrong-attempt lockouts, and conditional access based on device compliance.</p>
      <div class="service-tags">
        <span class="tag">Entra ID MFA</span>
        <span class="tag">Password Policy</span>
        <span class="tag">Zero Trust</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">05</div>
      <div class="service-icon" style="background:rgba(255,107,107,0.08); border-color:rgba(255,107,107,0.2);">🔍</div>
      <h3>Data Loss Prevention & Compliance</h3>
      <p>Sensitivity labels, DLP policies, restricted sharing controls, audit logging, and compliance governance that meet international enterprise and financial data standards.</p>
      <div class="service-tags">
        <span class="tag">Sensitivity Labels</span>
        <span class="tag">Audit Logs</span>
        <span class="tag">Compliance</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">06</div>
      <div class="service-icon" style="background:rgba(0,212,255,0.08); border-color:rgba(0,212,255,0.2);">💻</div>
      <h3>Endpoint & Device Security with Intune</h3>
      <p>Microsoft Intune enrollment, USB/peripheral blocking, session timeout policies, mobile device governance, and RBAC-based device compliance enforcement.</p>
      <div class="service-tags">
        <span class="tag">Intune</span>
        <span class="tag">Endpoint Security</span>
        <span class="tag">USB Control</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">07</div>
      <div class="service-icon" style="background:rgba(240,192,64,0.08); border-color:rgba(240,192,64,0.2);">🤖</div>
      <h3>Microsoft Copilot Studio AI Agents</h3>
      <p>Custom AI copilots for HR automation, IT helpdesk, and workflow digitization — deployed inside your Microsoft 365 ecosystem with full governance and security.</p>
      <div class="service-tags">
        <span class="tag">Copilot Studio</span>
        <span class="tag">Power Automate</span>
        <span class="tag">Azure Logic Apps</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">08</div>
      <div class="service-icon" style="background:rgba(108,99,255,0.1); border-color:rgba(108,99,255,0.2);">📧</div>
      <h3>Exchange Email Flow & Security</h3>
      <p>Governed mail flow rules, external email restrictions, organizational email setup, and anti-phishing controls to secure all corporate communications.</p>
      <div class="service-tags">
        <span class="tag">Exchange Online</span>
        <span class="tag">Mail Flow Rules</span>
        <span class="tag">Anti-Phishing</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-num">09</div>
      <div class="service-icon" style="background:rgba(255,107,107,0.08); border-color:rgba(255,107,107,0.2);">📚</div>
      <h3>Training, Documentation & Handover</h3>
      <p>Comprehensive user and admin training, SOP documentation, governance walkthrough, and handover support for long-term organizational sustainability.</p>
      <div class="service-tags">
        <span class="tag">User Training</span>
        <span class="tag">SOP Docs</span>
        <span class="tag">Admin Handover</span>
      </div>
    </div>
  </div>
</section>

<!-- PHASES -->
<section class="phases" id="phases">
  <div class="section-header reveal">
    <span class="section-label">Implementation Process</span>
    <h2 class="section-title">Seven Phases. Zero Disruption.</h2>
    <p>A structured rollout with validation checkpoints at every stage, delivering a complete enterprise transformation in 3–4 weeks.</p>
  </div>

  <div class="timeline reveal">
    <div class="phase-item">
      <div class="phase-dot">01</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Discovery & Security Assessment</span>
          <span class="phase-duration">2–3 Days</span>
        </div>
        <p>Requirement workshops, security assessment, user hierarchy analysis, governance planning, licensing consultation, and implementation roadmap preparation.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">02</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Tenant Setup & Identity Management</span>
          <span class="phase-duration">3–5 Days</span>
        </div>
        <p>Microsoft 365 tenant configuration, domain onboarding, user setup and grouping, MFA implementation, password policy configuration, and conditional access setup.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">03</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Email Flow, SharePoint & Document Management</span>
          <span class="phase-duration">5–7 Days</span>
        </div>
        <p>Configured email flow rules, SharePoint architecture, department-wise document libraries, role-based access, version control, and secure collaboration workflows.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">04</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Teams Governance & Security</span>
          <span class="phase-duration">Parallel</span>
        </div>
        <p>Teams governance setup, external sharing restrictions, guest access configuration, mobile access restrictions, and disabling unauthorized collaboration features.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">05</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">DLP, Compliance & Sensitivity Labels</span>
          <span class="phase-duration">4–6 Days</span>
        </div>
        <p>Sensitivity label setup, Data Loss Prevention policies, restricted sharing controls, compliance governance, and audit logging configuration.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">06</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Endpoint Security & Device Governance</span>
          <span class="phase-duration">4–5 Days</span>
        </div>
        <p>Microsoft Intune setup, device enrollment, USB restriction policies, endpoint compliance, session timeout policies, and mobile device governance.</p>
      </div>
    </div>

    <div class="phase-item">
      <div class="phase-dot">07</div>
      <div class="phase-body">
        <div class="phase-header">
          <span class="phase-title">Testing, Training & Handover</span>
          <span class="phase-duration">2–3 Days</span>
        </div>
        <p>User and administrator training, SOP documentation, governance walkthrough, and handover support for long-term operational sustainability.</p>
      </div>
    </div>
  </div>
</section>



<!-- WHY US -->
<section class="why" id="why">
  <div class="section-header reveal">
    <span class="section-label">Why CopilotSolutions365</span>
    <h2 class="section-title">Built for Enterprises That Can't Afford Gaps</h2>
  </div>

  <div class="why-grid reveal">
    <div class="why-card">
      <div class="why-icon">🏢</div>
      <h3>Microsoft Ecosystem Depth</h3>
      <p>Deep expertise across Microsoft 365, Teams, Graph API, Azure, Entra ID, Intune, and Power Platform — not generalist consultants, but specialists.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">⚡</div>
      <h3>Security-First Architecture</h3>
      <p>Every design decision starts with security and governance. We embed controls at every layer before deployment, not as an afterthought.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">📐</div>
      <h3>Structured, Low-Risk Rollout</h3>
      <p>Phased implementation with validation checkpoints ensures your operations continue uninterrupted while we build your enterprise infrastructure.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">📄</div>
      <h3>Complete Documentation</h3>
      <p>Every configuration, policy, and governance decision is documented in SOPs your team can operate independently long after handover.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🌍</div>
      <h3>International Standards</h3>
      <p>We design environments that meet the compliance expectations of international clients — audit-ready, governance-mature, and enterprise-credible.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🤝</div>
      <h3>Long-Term Partnership</h3>
      <p>Beyond implementation, we remain available as a trusted technology partner for ongoing governance, modernization, and AI capability expansion.</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
  <h2>Ready to Build Your<br/>Enterprise Digital Workplace?</h2>
  <p>Talk to our consultants. We'll scope your transformation and show you exactly how it works.</p>
  <div class="actions">
    <a href="mailto:Founder@CopilotSolutions365.com?subject=Consultation%20Request&body=Hello%20CopilotSolutions365,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20an%20M365%20transformation%20project.%0D%0A%0D%0AThanks." class="btn-primary">
      ↗ Book a Consultation
    </a>
    <a href="mailto:copilotsolution365@gmail.com?subject=Demo%20Request&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20demo.%0D%0A%0D%0AThanks." class="btn-outline">
      Request Demo
    </a>
  </div>

  <div class="contact-chips">
    <a href="mailto:Founder@CopilotSolutions365.com" class="contact-chip">
      ✉ Founder@CopilotSolutions365.com
    </a>
    <a href="mailto:copilotsolution365@gmail.com" class="contact-chip">
      ✉ copilotsolution365@gmail.com
    </a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <span class="footer-logo">CopilotSolutions365</span>
  <span>Let's build your own secured ecosystem</span>
  <span>© 2026 CopilotSolutions365. All rights reserved.</span>
</footer>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '56px'; ring.style.height = '56px';
      ring.style.borderColor = 'rgba(0,212,255,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '36px'; ring.style.height = '36px';
      ring.style.borderColor = 'rgba(108,99,255,0.5)';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => obs.observe(r));
</script>
</body>
</html>
