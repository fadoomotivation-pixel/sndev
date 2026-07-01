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

// CSS for the toast injected dynamically
const style = document.createElement('style');
style.textContent = `
  .sp-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    position: relative;
    border: 1px solid rgba(0,0,0,0.05);
    width: 300px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: all;
  }
  
  .sp-card.show {
    opacity: 1;
    transform: translateY(0);
  }

  .sp-accent {
    height: 4px;
    background: linear-gradient(90deg, #12151A, #D4AF37);
  }

  .sp-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 14px;
    color: #9ca3af;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .sp-close:hover { background: #f3f4f6; color: #12151A; }

  .sp-body {
    padding: 16px;
  }

  .sp-top {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 600;
  }
  
  .sp-proj { color: #12151A; font-family: 'Outfit', sans-serif;}
  .sp-ago { color: #9ca3af; font-weight: normal; }

  .sp-msg {
    font-size: 14px;
    color: #4b5563;
    margin: 0 0 12px 0;
    line-height: 1.4;
  }

  .sp-msg strong {
    color: #12151A;
  }

  .sp-detail {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sp-chip {
    background: #fdfaf4;
    color: #D4AF37;
    border: 1px solid rgba(212, 175, 55, 0.3);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }

  .sp-price {
    font-size: 16px;
    font-weight: 700;
    color: #12151A;
    font-family: 'Outfit', sans-serif;
  }

  .sp-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-top: 1px solid rgba(0,0,0,0.05);
    background: #fafafa;
  }
  
  .sp-foot-text {
    font-size: 12px;
    color: #6b7280;
  }
  
  .sp-wa-btn {
    background: #12151A;
    color: #fff;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s;
  }
  .sp-wa-btn:hover { background: #D4AF37; color: #12151A; }
`;
document.head.appendChild(style);

function showNextNotification() {
  if (poolIndex >= notificationPool.length) {
    notificationPool = shuffle(NOTIFICATIONS);
    poolIndex = 0;
  }
  
  const data = notificationPool[poolIndex++];
  // We check if toast-container exists because we overwrote index.html. Wait, did I keep toast-container in index.html?
  // I need to make sure index.html has #toast-container
  let container = document.getElementById('toast-container');
  if(!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.left = '20px';
    container.style.zIndex = '99999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
  }
  
  // Clear any existing toasts
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
        <span style="color:#d1d5db">•</span>
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
      <span class="sp-foot-text">Want to book yours?</span>
      <a href="${waUrl}" target="_blank" class="sp-wa-btn">💬 Inquire</a>
    </div>
  `;
  
  container.appendChild(card);
  
  // Trigger animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      card.classList.add('show');
    });
  });
  
  // Remove after displayDuration
  setTimeout(() => {
    card.classList.remove('show');
    setTimeout(() => {
      if (container.contains(card)) {
        card.remove();
      }
    }, 400); // Wait for transition
  }, CFG.displayDuration);
  
  // Schedule next
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
        // Optional: stop observing once animated
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
});
