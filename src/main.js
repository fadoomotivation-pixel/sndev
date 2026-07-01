const amenities = ['Gated plotted development', 'Wide internal roads', 'Green landscape pockets', 'Street lighting', 'Planned drainage', 'Commercial frontage', 'Peaceful residential blocks', 'Easy site access'];
const plotTypes = [
  { title: 'Commercial Plots', icon: '🏬', copy: 'High-visibility spaces for shops, offices, showrooms, and future-ready business addresses.' },
  { title: 'Residential Plots', icon: '🏡', copy: 'Thoughtfully planned plots for modern homes with neighborhood comfort and everyday convenience.' },
];
const team = [
  { name: 'Nitin Bhati', role: 'Founder', image: '/images/nitin-bhati.jpg', initials: 'NB' },
  { name: 'Rahul Bhati', role: 'Leadership Team', image: '/images/rahul-bhati.jpg', initials: 'RB' },
];

document.querySelector('#root').innerHTML = `
<main>
  <header class="nav glass-panel">
    <a class="brand" href="#top"><span>SN</span> Developers</a>
    <nav><a href="#overview">Overview</a><a href="#plots">Plots</a><a href="#location">Location</a><a class="nav-cta" href="#contact">Enquire</a></nav>
  </header>
  <section id="top" class="hero section-grid">
    <div class="hero-copy">
      <p class="eyebrow">✦ Premium plotted development</p><h1>Shree Ji Vatika</h1><h2>Commercial and residential plots by SN Developers</h2>
      <p class="lead">A modern plotted destination designed with elegant streetscapes, practical amenities, business potential, and a calm residential environment near Chhata, Mathura.</p>
      <div class="hero-actions"><a class="button primary" href="#contact">Book a Site Visit</a><a class="button secondary" href="https://www.google.com/maps?q=27.641441,77.488289" target="_blank" rel="noreferrer">View on Google Maps</a></div>
      <div class="stats glass-panel"><span><strong>27.641441</strong> Latitude</span><span><strong>77.488289</strong> Longitude</span><span><strong>2</strong> Plot categories</span></div>
    </div>
    <div class="visual-wrap" aria-label="3D real estate illustration"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="plot-board glass-panel"><div class="sun"></div><div class="tower tower-a"></div><div class="tower tower-b"></div><div class="villa"></div><div class="road"></div><div class="plot-lines"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="floating-card card-one">🌿 Green pockets</div><div class="floating-card card-two">🧭 Planned access</div></div>
  </section>
  <section id="overview" class="section split"><div><p class="eyebrow">Project overview</p><h2>Built for lifestyle, visibility, and long-term value.</h2></div><p>Shree Ji Vatika brings residential comfort and commercial opportunity together in one plotted layout. The experience is intentionally premium: clean gradients, spacious planning, useful community features, and a location-ready proposition for buyers seeking ownership flexibility.</p></section>
  <section id="plots" class="section cards-section"><p class="eyebrow">Commercial & Residential Plots</p><h2>Choose the plot type that fits your plan.</h2><div class="card-grid two">${plotTypes.map(({title, icon, copy}) => `<article class="feature-card"><div class="card-icon">${icon}</div><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>
  <section class="section amenities"><p class="eyebrow">Amenities</p><h2>Everyday essentials in a polished plotted environment.</h2><div class="amenity-grid">${amenities.map((item) => `<span><b>✓</b> ${item}</span>`).join('')}</div></section>
  <section class="section split payment"><div><p class="eyebrow">💳 Payment plan</p><h2>Simple, guided booking process.</h2><p>Connect with the SN Developers team for updated pricing, plot availability, booking amount, installment options, and documentation support.</p></div><div class="plan-card glass-panel"><span>01</span><strong>Enquire</strong><p>Share your plot preference.</p><span>02</span><strong>Visit</strong><p>Tour the location and layout.</p><span>03</span><strong>Book</strong><p>Reserve your selected plot.</p></div></section>
  <section id="location" class="section location"><div class="location-copy"><p class="eyebrow">📍 Location</p><h2>Navigate directly to Shree Ji Vatika.</h2><p>Coordinates: <strong>27.641441, 77.488289</strong></p><a class="button primary" href="https://www.google.com/maps?q=27.641441,77.488289" target="_blank" rel="noreferrer">Open Google Maps</a></div><iframe title="Shree Ji Vatika Google Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=27.641441,77.488289&z=15&output=embed"></iframe></section>
  <section class="section team"><p class="eyebrow">👥 Founders / Team</p><h2>Meet the people behind the project.</h2><div class="card-grid two">${team.map(({name, role, image, initials}) => `<article class="team-card"><div class="avatar"><img src="${image}" alt="${name}" onerror="this.style.display='none'"><span>${initials}</span></div><div><h3>${name}</h3><p>${role}</p></div></article>`).join('')}</div></section>
  <section id="contact" class="section contact glass-panel"><p class="eyebrow">☎ Contact CTA</p><h2>Ready to own a plot at Shree Ji Vatika?</h2><p>Speak with SN Developers for availability, pricing, site visits, and payment details.</p><a class="button primary" href="tel:+910000000000">Call SN Developers</a></section>
</main>`;
