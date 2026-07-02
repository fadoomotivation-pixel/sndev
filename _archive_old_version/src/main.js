const NOTIFICATIONS = [
  { name: 'Praveen K.',      city: 'Delhi',      size: '50 Sq. Yd', project: 'Shree Jee Vatika', action: 'scheduled a site visit', emoji: '📅', ago: '10 mins ago' },
  { name: 'Sangeeta D.',     city: 'Agra',       size: '97.25 Sq. Yd', project: 'Shree Jee Vatika', action: 'just booked a plot', emoji: '🎉', ago: 'Just now' },
  { name: 'Mukesh G.',       city: 'Noida',      size: '100 Sq. Yd',project: 'Shree Jee Vatika', action: 'requested pricing details', emoji: '💬', ago: '1 hour ago' },
  { name: 'Sunita R.',       city: 'Lucknow',    size: '150 Sq. Yd', project: 'Shree Jee Vatika', action: 'booked a premium plot', emoji: '🏠', ago: '2 hours ago' },
  { name: 'Anil V.',         city: 'Mathura',    size: '50 Sq. Yd', project: 'Shree Jee Vatika', action: 'scheduled a site visit', emoji: '📅', ago: '15 mins ago' },
  { name: 'Kamla D.',        city: 'Jaipur',     size: '236 Sq. Yd', project: 'Shree Jee Vatika', action: 'is interested in estate plots', emoji: '👀', ago: '3 hours ago' },
  { name: 'Suresh K.',       city: 'Gurugram',   size: '100 Sq. Yd',project: 'Shree Jee Vatika', action: 'just booked a plot', emoji: '🎉', ago: 'Yesterday' },
  { name: 'Neetu S.',        city: 'Faridabad',  size: '50 Sq. Yd', project: 'Shree Jee Vatika', action: 'requested pricing details', emoji: '💬', ago: '20 mins ago' }
];

const CFG = {
  initialDelay: 2000,
  displayDuration: 6000,
  minInterval: 12000,
  maxInterval: 18000,
  waNumber: '918076146988',
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let notificationPool = shuffle(NOTIFICATIONS);
let poolIndex = 0;

// CSS for the Dark Cinematic Toast
const style = document.createElement('style');
style.textContent = `
  .sp-card {
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    position: relative;
    width: 320px;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: all;
  }
  
  .sp-card.show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .sp-accent {
    height: 3px;
    background: linear-gradient(90deg, #b38728, #fbf5b7, #aa771c);
  }

  .sp-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.05);
    border: none;
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  .sp-close:hover { background: rgba(255,255,255,0.1); color: #fff; }

  .sp-body {
    padding: 20px;
  }

  .sp-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 600;
  }
  
  .sp-proj { color: #D4AF37; font-family: 'Outfit', sans-serif; letter-spacing: 1px; text-transform: uppercase;}
  .sp-ago { color: rgba(255,255,255,0.4); font-weight: normal; }

  .sp-msg {
    font-size: 15px;
    color: rgba(255,255,255,0.8);
    margin: 0 0 16px 0;
    line-height: 1.5;
  }

  .sp-msg strong {
    color: #fff;
  }

  .sp-detail {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sp-chip {
    background: rgba(212, 175, 55, 0.1);
    color: #D4AF37;
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
  }

  .sp-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
    background: rgba(0,0,0,0.3);
  }
  
  .sp-foot-text {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
  }
  
  .sp-wa-btn {
    background: #D4AF37;
    color: #000;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.3s;
  }
  .sp-wa-btn:hover { background: #fbf5b7; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3); }
`;
document.head.appendChild(style);

function showNextNotification() {
  if (poolIndex >= notificationPool.length) {
    notificationPool = shuffle(NOTIFICATIONS);
    poolIndex = 0;
  }
  
  const data = notificationPool[poolIndex++];
  let container = document.getElementById('toast-container');
  if(!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '32px';
    container.style.left = '32px';
    container.style.zIndex = '99999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
  }
  
  container.innerHTML = '';
  
  const waText = `I am interested in ${data.size} plot in ${data.project}`;
  const waUrl = `https://wa.me/${CFG.waNumber}?text=${encodeURIComponent(waText)}`;
  
  const card = document.createElement('div');
  card.className = 'sp-card';
  card.innerHTML = `
    <div class="sp-accent"></div>
    <button class="sp-close" onclick="this.parentElement.remove()">✕</button>
    <div class="sp-body">
      <div class="sp-top">
        <span>${data.emoji}</span>
        <span class="sp-proj">${data.project}</span>
        <span style="color: rgba(255,255,255,0.2)">•</span>
        <span class="sp-ago">${data.ago}</span>
      </div>
      <p class="sp-msg">
        <strong>${data.name}</strong> from ${data.city} ${data.action}!
      </p>
      <div class="sp-detail">
        <span class="sp-chip">${data.size}</span>
      </div>
    </div>
    <div class="sp-foot">
      <span class="sp-foot-text">Join the community</span>
      <a href="${waUrl}" target="_blank" class="sp-wa-btn">Inquire Now</a>
    </div>
  `;
  
  container.appendChild(card);
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      card.classList.add('show');
    });
  });
  
  setTimeout(() => {
    card.classList.remove('show');
    setTimeout(() => {
      if (container.contains(card)) {
        card.remove();
      }
    }, 500);
  }, CFG.displayDuration);
  
  const nextDelay = rand(CFG.minInterval, CFG.maxInterval);
  setTimeout(showNextNotification, nextDelay);
}

// Start notifications loop
setTimeout(showNextNotification, CFG.initialDelay);


// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));


  // ==========================================
  // Vanilla JS 3D Tilt Effect
  // ==========================================
  const tiltElements = document.querySelectorAll('.tilt-card');
  
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 20;
      const tiltY = (centerX - x) / 20;
      
      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
});
