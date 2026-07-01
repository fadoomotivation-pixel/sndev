import './styles.css';

const amenities = [
  'Gated plotted development', 'Wide internal roads (20 & 40 ft)', 
  'Club House & Swimming Pool', 'Green landscape & Parks',
  'Planned drainage & Sewer', 'Commercial & Residential Plots', 
  '24x7 Security System', 'Peaceful environment'
];

const plotTypes = [
  { title: 'Commercial Plots', icon: '🏬', copy: 'High-visibility spaces for shops, offices, and showrooms on wide 40 feet roads.' },
  { title: 'Residential Plots', icon: '🏡', copy: 'Thoughtfully planned plots (30, 50, 100, 120 sq. yards) for modern homes with neighborhood comfort.' },
];

const team = [
  { name: 'Nitin Bhati', role: 'Founder', image: '/images/DSC_6632.JPG', initials: 'NB' },
  { name: 'Rahul Bhati', role: 'Leadership Team', image: '/images/5x7=15 (2).jpg', initials: 'RB' },
];

document.querySelector('#root').innerHTML = `
<main>
  <div class="ambient-grid"></div>
  <header class="nav glass-panel">
    <a class="brand" href="#top"><span>SN</span> SN Developers</a>
    <nav>
      <a href="#overview">Overview</a>
      <a href="#plots">Plots</a>
      <a href="#location">Location</a>
      <a class="nav-cta" href="#contact">Enquire Now</a>
    </nav>
  </header>
  
  <section id="top" class="hero">
    <div class="hero-copy">
      <p class="eyebrow">✦ Premium Plotted Society</p>
      <h1>Shree Ji Vatika</h1>
      <p class="lead">A modern plotted destination designed with elegant streetscapes, practical amenities, and a calm residential environment. A prestigious project by SN Developers.</p>
      <div class="hero-actions">
        <a class="button primary" href="#contact">Book a Site Visit</a>
        <a class="button secondary" href="https://www.google.com/maps?q=27.641441,77.488289" target="_blank" rel="noreferrer">View on Google Maps</a>
      </div>
      <div class="stats glass-panel">
        <span><strong>Mathura</strong> Location</span>
        <span><strong>30 - 414</strong> Sq.Yards</span>
        <span><strong>EMI</strong> Available</span>
      </div>
    </div>
    
    <div class="visual-wrap">
      <div class="plot-board">
        <div class="sun"></div>
        <div class="road"></div>
        <div class="plot-lines">
          <i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i>
        </div>
        <div class="model tree tree-1"></div>
        <div class="model tree tree-2"></div>
        <div class="model tree tree-3"></div>
        <div class="model house"></div>
      </div>
      <div class="floating-badge badge-1">🌿 Lush Green Parks</div>
      <div class="floating-badge badge-2">🛣️ 40FT Wide Roads</div>
    </div>
  </section>
  
  <section id="overview" class="section split">
    <div>
      <p class="eyebrow">Project overview</p>
      <h2>Built for lifestyle and long-term value.</h2>
    </div>
    <p>Shree Ji Vatika brings residential comfort and commercial opportunity together in one carefully planned plotted layout. Enjoy club house access, swimming pools, wide roads, and easy connectivity to major landmarks in Mathura and Vrindavan. Developed exclusively by SN Developers.</p>
  </section>
  
  <section id="plots" class="section">
    <p class="eyebrow">Commercial & Residential Plots</p>
    <h2>Choose the plot size that fits your vision.</h2>
    <div class="card-grid two">
      ${plotTypes.map(({title, icon, copy}) => `
        <article class="feature-card">
          <div class="card-icon">${icon}</div>
          <h3>${title}</h3>
          <p>${copy}</p>
        </article>
      `).join('')}
    </div>
  </section>
  
  <section class="section">
    <p class="eyebrow">Amenities</p>
    <h2>Everyday essentials in a premium environment.</h2>
    <div class="amenities">
      ${amenities.map((item) => `<div class="amenity-item"><b>✓</b> ${item}</div>`).join('')}
    </div>
  </section>
  
  <section class="section team">
    <p class="eyebrow">👥 Our Founders</p>
    <h2>Meet the visionaries behind SN Developers.</h2>
    <div class="card-grid two">
      ${team.map(({name, role, image, initials}) => `
        <div class="founder-card">
          <div class="founder-avatar">
            <img src="${image}" alt="${name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23185235\\'/><text x=\\'50\\' y=\\'55\\' font-size=\\'30\\' font-family=\\'Arial\\' fill=\\'white\\' text-anchor=\\'middle\\' alignment-baseline=\\'middle\\'>${initials}</text></svg>'">
          </div>
          <div>
            <h3>${name}</h3>
            <p>${role}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
  
  <section id="location" class="section split">
    <div>
      <p class="eyebrow">📍 Location</p>
      <h2>Navigate directly to Shree Ji Vatika.</h2>
      <p>Coordinates: <strong>27°38'29.2"N, 77°29'17.8"E (27.641441, 77.488289)</strong></p>
      <p>Close to Govardhan Railway Station, Prem Mandir, and Yamuna Expressway.</p>
    </div>
    <div class="map-container">
      <iframe title="Shree Ji Vatika Google Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=27.641441,77.488289&z=15&output=embed"></iframe>
    </div>
  </section>
  
  <section id="contact" class="cta-section">
    <p class="eyebrow" style="color: rgba(255,255,255,0.8);">Ready to secure your plot?</p>
    <h2>Book your visit to Shree Ji Vatika today.</h2>
    <p>Speak with SN Developers for availability, pricing, site visits, and our flexible 12 to 24-month interest-free payment plans.</p>
    <a class="button primary" href="tel:+910000000000">Call SN Developers</a>
  </section>
</main>`;
