const NOTIFICATIONS = [
  { name: 'Rahul Sharma',    city: 'Delhi',      size: '50 Sq. Yd', project: 'Shree Ji Vatika', price: '₹4.50L', emoji: '🏠', ago: '2 hours ago' },
  { name: 'Sangeeta Devi',   city: 'Agra',       size: '60 Sq. Yd', project: 'Shree Ji Vatika', price: '₹5.40L', emoji: '🏠', ago: 'Just now' },
  { name: 'Mukesh Gupta',    city: 'Noida',      size: '100 Sq. Yd',project: 'Shree Ji Vatika', price: '₹9.00L', emoji: '🏠', ago: '3 hours ago' },
  { name: 'Sunita Rani',     city: 'Lucknow',    size: '50 Sq. Yd', project: 'Shree Ji Vatika', price: '₹4.50L', emoji: '🏠', ago: 'Today morning' },
  { name: 'Pradeep Verma',   city: 'Mathura',    size: '150 Sq. Yd',project: 'Shree Ji Vatika', price: '₹13.50L', emoji: '🏠', ago: '1 day ago' },
  { name: 'Kamla Devi',      city: 'Jaipur',     size: '60 Sq. Yd', project: 'Shree Ji Vatika', price: '₹5.40L', emoji: '🏠', ago: '5 hours ago' },
  { name: 'Suresh Kumar',    city: 'Gurugram',   size: '100 Sq. Yd',project: 'Shree Ji Vatika', price: '₹9.00L', emoji: '🏠', ago: 'Yesterday' },
  { name: 'Neetu Singh',     city: 'Faridabad',  size: '50 Sq. Yd', project: 'Shree Ji Vatika', price: '₹4.50L', emoji: '🏠', ago: '4 hours ago' }
];

const CFG = {
  initialDelay: 3000,
  displayDuration: 6000,
  minInterval: 10000,
  maxInterval: 25000,
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
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
    position: relative;
    border: 1px solid rgba(0,0,0,0.05);
    width: 280px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: all;
  }
  
  .sp-card.show {
    opacity: 1;
    transform: translateY(0);
  }

  .sp-accent {
    height: 4px;
    background: linear-gradient(90deg, #0F3A5F, #D4AF37);
  }

  .sp-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 12px;
    color: #9ca3af;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sp-close:hover { background: #f3f4f6; color: #374151; }

  .sp-body {
    padding: 12px;
  }

  .sp-top {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 700;
  }
  
  .sp-proj { color: #0F3A5F; }
  .sp-ago { color: #9ca3af; font-weight: normal; }

  .sp-msg {
    font-size: 13px;
    color: #374151;
    margin: 0 0 8px 0;
  }

  .sp-msg strong {
    color: #111827;
  }

  .sp-detail {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sp-chip {
    background: #EFF6FF;
    color: #0F3A5F;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
  }

  .sp-price {
    font-size: 14px;
    font-weight: 800;
    color: #15803d;
  }

  .sp-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #f3f4f6;
    background: #fafafa;
  }
  
  .sp-foot-text {
    font-size: 10px;
    color: #6b7280;
  }
  
  .sp-wa-btn {
    background: #16a34a;
    color: #fff;
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }
  .sp-wa-btn:hover { background: #15803d; }
`;
document.head.appendChild(style);

function showNextNotification() {
  if (poolIndex >= notificationPool.length) {
    notificationPool = shuffle(NOTIFICATIONS);
    poolIndex = 0;
  }
  
  const data = notificationPool[poolIndex++];
  const container = document.getElementById('toast-container');
  
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
        <strong>${data.name}</strong> from ${data.city} just booked a plot!
      </p>
      <div class="sp-detail">
        <span class="sp-chip">${data.size}</span>
        <span class="sp-price">${data.price}</span>
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
