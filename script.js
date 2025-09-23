// Rope/thread removed: no decorative animation needed

// Modal project details
const projects = {
  1: `
    <h4>SSIS ETL Migration — Medical Client</h4>
    <p>Lead DBA and ETL Migration Specialist. Migrated complex ETL workflows from legacy SQL Server environments to new production environments, implemented logging and validation, and coordinated rollbacks to ensure data consistency.</p>
  `,
  2: `
    <h4>SSRS Report Migration — Restaurant Franchise</h4>
    <p>Migrated and deployed 50+ SSRS reports, optimized queries and scheduling, and configured report subscriptions to ensure timely delivery to stakeholders.</p>
  `,
  3: `
    <h4>10TB Migration — Azure PaaS to On-Prem</h4>
    <p>Planned and executed a 10TB migration from Azure SQL PaaS to on-prem SQL Server with minimal downtime and robust validation checks.</p>
  `,
  4: `
    <h4>Log Shipping Configuration — Fintech Client</h4>
    <p>Designed and implemented SQL Server Log Shipping to provide HA/DR using primary/secondary and monitor servers. Tuned schedules, implemented alerts, and validated failovers.</p>
  `,
  5: `
    <h4>Always On Availability Groups — Manufacturing Client</h4>
    <p>Implemented Always On AGs with listener endpoints, automatic failover policies and performed end-to-end failover testing and tuning for low-latency data synchronization.</p>
  `,
  6: `
    <h4>Large-Scale Migration (15TB, 500+ DBs)</h4>
    <p>Led migration of 500+ databases across 70+ SQL Server instances to a private cloud. Automated validation, partitioning and post-migration performance tuning.</p>
  `,
  7: `
    <h4>MySQL Monitoring & Alerts</h4>
    <p>Designed monitoring and alerting for MySQL: long-running queries, replication lag, disk usage and automated notifications to reduce incident detection time.</p>
  `,
}

let lastFocus = null;
document.querySelectorAll('[data-project]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = btn.getAttribute('data-project');
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');
    if (modal && content) {
      // store last focused element to restore after close
      lastFocus = document.activeElement;
      content.innerHTML = projects[id] || '<p>Not found</p>';
      modal.setAttribute('aria-hidden', 'false');
      // show backdrop and prevent background scroll
      document.documentElement.classList.add('modal-open');
      const backdrop = document.getElementById('backdrop');
      if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
      // move focus to close button
      const close = document.getElementById('modalClose');
      if (close) close.focus();
    }
  });
});

document.getElementById('modalClose')?.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  if (modal) modal.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('modal-open');
  const backdrop = document.getElementById('backdrop');
  if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  lastFocus = null;
});

// allow clicking backdrop to close modal
document.getElementById('backdrop')?.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  if (modal) modal.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('modal-open');
  const backdrop = document.getElementById('backdrop');
  if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  lastFocus = null;
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal');
    if (modal) modal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-open');
    const backdrop = document.getElementById('backdrop');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    lastFocus = null;
  }
});

// Resume download - generate PDF-like resume from text (simple)
document.getElementById('download-resume')?.addEventListener('click', () => {
  // generate a simple styled HTML resume and trigger download as .html
  const html = `<!doctype html><html><head><meta charset=\"utf-8\"><title>Resume - Dhivya Dharshini</title><style>body{font-family:Arial;padding:20px;color:#071124}h1{color:#0b1220}</style></head><body><h1>Dhivya Dharshini</h1><p>Database Administrator</p><p>Email: divyamurugan225@gmail.com • 6383282955</p><h3>Professional Summary</h3><p>Database Administrator with 3+ years experience managing SQL Server and MySQL databases. Experienced in migrations, high availability and performance tuning.</p></body></html>`;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Dhivya_Dharshini_Resume.html';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});

// add reveal class to cards and timeline items (so they are hidden until revealed)
document.querySelectorAll('.card, .timeline-item, .about, .projects, .experience').forEach(el => el.classList.add('reveal'));

// Scroll reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Theme toggle: persist and apply
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme){
  if (theme === 'light'){
    document.documentElement.classList.add('light');
    if (themeToggle) { themeToggle.textContent = '☀️'; themeToggle.setAttribute('aria-pressed','true'); }
  } else {
    document.documentElement.classList.remove('light');
    if (themeToggle) { themeToggle.textContent = '🌙'; themeToggle.setAttribute('aria-pressed','false'); }
  }
}
const stored = localStorage.getItem('theme');
if (stored) applyTheme(stored);
else {
  // default: respect prefers-color-scheme
  const pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(pref);
}
themeToggle?.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme(theme);
});

// Debug helper: if URL contains ?testhover=1, force hover visuals on cards to help debugging
// Pointer + focus fallback: toggle `.is-hover` on cards so hover visuals work even when :hover isn't applied
document.querySelectorAll('.card').forEach(card => {
  card.setAttribute('tabindex', '0'); // make focusable
  card.addEventListener('pointerenter', () => card.classList.add('is-hover'));
  card.addEventListener('pointerleave', () => card.classList.remove('is-hover'));
  card.addEventListener('focus', () => card.classList.add('is-hover'));
  card.addEventListener('blur', () => card.classList.remove('is-hover'));
});
