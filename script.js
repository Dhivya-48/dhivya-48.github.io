// Rope/thread removed: no decorative animation needed

// Modal project details
const projects = {
  1: `
    <h4>SSIS ETL Migration — Medical Domain Client</h4>
    <p><strong>Role:</strong> Lead DBA / ETL Migration Specialist</p>
    <ul>
      <li>Migrated complex ETL workflows from legacy SQL Server environments to new production environments.</li>
      <li>Deployed, tested, and validated SSIS packages to ensure accurate data extraction, transformation, and load across multiple databases.</li>
      <li>Coordinated with developers to resolve data mapping issues and optimize package execution performance.</li>
      <li>Implemented logging and error handling mechanisms in SSIS packages to monitor ETL success and failures.</li>
      <li>Ensured minimal downtime and data consistency during migration by executing well-planned migration strategies and rollback procedures.</li>
    </ul>
  `,
  2: `
    <h4>SSRS Report Migration — Restaurant Franchise Client</h4>
    <p><strong>Role:</strong> Lead DBA / Reporting Migration Specialist</p>
    <ul>
      <li>Migrated and deployed over 50 SSRS reports from development to production environments.</li>
      <li>Validated report data accuracy and functionality post-migration to maintain business intelligence reliability.</li>
      <li>Optimized report queries to improve report generation time and performance under heavy data loads.</li>
      <li>Configured report subscriptions and schedules to ensure timely delivery of critical reports to stakeholders.</li>
      <li>Provided training and documentation to application teams for ongoing report maintenance and troubleshooting.</li>
    </ul>
  `,
  3: `
    <h4>10TB Migration — Azure PaaS to On-Prem (UAT & Migration)</h4>
    <p><strong>Role:</strong> Lead DBA / Migration Specialist</p>
    <ul>
      <li>Set up and configured the UAT SQL Server environment for testing and validation before production rollout.</li>
      <li>Planned and executed migration of a 10TB database from Azure SQL PaaS to on-premise SQL Server, ensuring data integrity and minimal downtime.</li>
      <li>Designed and implemented backup/restore strategy and bulk data transfer methods to handle high-volume migration efficiently.</li>
      <li>Optimized database storage, indexing, and partitioning strategies post-migration to improve query performance.</li>
      <li>Coordinated with cloud and infrastructure teams to ensure seamless connectivity, security compliance, and environment stability.</li>
      <li>Performed data validation and reconciliation post-migration to guarantee 100% data accuracy and documented migration procedures.</li>
    </ul>
  `,
  4: `
    <h4>Log Shipping Configuration — Fintech Client</h4>
    <p><strong>Role:</strong> Database Administrator / High Availability Specialist</p>
    <ul>
      <li>Designed and implemented SQL Server Log Shipping between primary and secondary servers to ensure high availability and disaster recovery.</li>
      <li>Configured primary, secondary, and monitor servers, automating backup, copy, and restore jobs.</li>
      <li>Tuned job schedules to balance latency and performance while minimizing data loss (RPO) and improving recovery time (RTO).</li>
      <li>Conducted failover testing and validation with application teams to confirm business continuity.</li>
      <li>Implemented alerts and monitoring jobs to detect log shipping failures and ensure proactive remediation.</li>
      <li>Delivered documentation and training to the client’s IT team for ongoing support and maintenance.</li>
    </ul>
  `,
  5: `
    <h4>Always On Availability Groups Setup — Manufacturing Client</h4>
    <p><strong>Role:</strong> Database Administrator / High Availability Consultant</p>
    <ul>
      <li>Designed and implemented SQL Server Always On Availability Groups to provide HA and DR for critical manufacturing applications.</li>
      <li>Configured primary and secondary replicas, listener endpoints, and automatic failover policies for seamless business continuity.</li>
      <li>Coordinated with infrastructure teams to configure Windows Server Failover Clustering (WSFC) and necessary networking components.</li>
      <li>Performed end-to-end failover testing to validate availability and disaster recovery scenarios.</li>
      <li>Optimized replication performance by tuning log synchronization and monitoring data latency.</li>
      <li>Delivered operational documentation and best practices to the client’s IT and DBA teams.</li>
    </ul>
  `,
  6: `
    <h4>Large-Scale Database Migration — On-Premises to Private Cloud</h4>
    <p><strong>Role:</strong> Database Engineer / Migration Engineer → Post-Migration Team Lead</p>
    <ul>
      <li>Planned and executed end-to-end migration of 500+ databases across 70+ SQL Server instances from on-premises data centers to a private cloud environment.</li>
      <li>Successfully migrated a 15TB mission-critical database, ensuring zero data loss and minimal downtime.</li>
      <li>Designed migration strategy covering Always On Availability Groups and standalone instances for target systems.</li>
      <li>Implemented migration methodologies including backup/restore, log shipping, and replication-based cutovers depending on workload criticality.</li>
      <li>Led post-migration validation and performance tuning, ensuring applications ran seamlessly in the new private cloud setup.</li>
      <li>Worked as Migration Engineer during execution and later promoted to Post-Migration Team Lead, coordinating with DBA, infra, and application teams.</li>
      <li>Automated routine post-migration validation checks, reducing manual verification efforts by 40%.</li>
      <li>Documented migration playbooks, rollback strategies, and operational guidelines for long-term client reference.</li>
    </ul>
  `,
  7: `
    <h4>MySQL Monitoring & Alerts — Internal Project</h4>
    <p><strong>Role:</strong> Monitoring & Reliability Engineer</p>
    <ul>
      <li>Designed and implemented a proactive monitoring framework for MySQL databases, focusing on query performance, replication lag, CPU/memory usage, and disk I/O.</li>
      <li>Developed and configured custom alerting rules based on SLA thresholds to ensure timely detection of potential database issues.</li>
      <li>Automated email notifications and reporting to notify the team immediately when thresholds were breached, reducing response time for critical incidents.</li>
      <li>Collaborated with internal teams and stakeholders to define acceptable performance and reliability benchmarks.</li>
      <li>Integrated monitoring scripts to track long-running queries and deadlocks, providing actionable insights for performance optimization.</li>
      <li>Conducted post-incident analysis to refine alert thresholds and enhance system reliability.</li>
      <li>Achieved significant reduction in Mean Time To Recovery (MTTR) and improved overall database uptime and operational stability.</li>
      <li>Documented processes, configurations, and troubleshooting steps to ensure knowledge sharing and maintainability across the team.</li>
    </ul>
  `,
  8: `
    <h4>Archival & Purging Activity — Manufacturing Client</h4>
    <p><strong>Role:</strong> Database Engineer / Archival Specialist</p>
    <ul>
      <li>Migrated and archived 40+ largest tables (each ranging from 500GB to 1TB) from production environments with minimal downtime.</li>
      <li>Designed and executed purging strategies and bulk insertion techniques that prevented log file growth while maintaining data integrity.</li>
      <li>Handled tables with foreign key and primary key constraints, ensuring relational integrity throughout the process.</li>
      <li>Performed index optimization, index rebuilds, and stored procedure recompilation to enhance performance post-archival.</li>
      <li>Successfully implemented different approaches to ensure no impact on production workloads during large-scale archival operations.</li>
    </ul>
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

// Resume download now uses the real PDF in `document/Dhivyadharshini_DBA_resume.pdf`.

// Gather elements to reveal, include hero pieces so the header/hero animate nicely
const revealSelectors = ['.site-header', '.hero-inner', '.hero-left', '.hero-right', '.profile-card', '.card', '.timeline-item', '.about', '.projects', '.experience'];
let revealElements = Array.from(document.querySelectorAll(revealSelectors.join(', ')));

// Sort by vertical position so reveal order feels natural top-to-bottom
revealElements = revealElements.sort((a, b) => {
  return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
});

// Apply reveal class and set a CSS variable to stagger via CSS transition-delay
revealElements.forEach((el, idx) => {
  el.classList.add('reveal');
  el.style.setProperty('--reveal-order', idx);
});

// Scroll reveal using IntersectionObserver (adds `.visible` when element enters view)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

// Smooth scroll-linked animation using requestAnimationFrame
// - Parallax the hero section slightly
// - Apply a gentle offset to reveal elements to enhance the stagger
(() => {
  const hero = document.querySelector('.hero');
  const scrollTargets = revealElements; // array already ordered top->bottom
  let latestY = 0;
  let ticking = false;

  function onScroll(){
    latestY = window.scrollY || window.pageYOffset || 0;
    if (!ticking){
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

  function update(){
    // small parallax effect: map scrollY [0..600] to hero translate [0..18]
    const heroOffset = clamp(Math.round(latestY * 0.03), 0, 18);
    if (hero) hero.style.setProperty('--hero-translate', heroOffset);

    // subtle per-element micro-offsets to exaggerate stagger when near viewport
    // compute viewport midpoint
    const vpMid = window.innerHeight * 0.6 + latestY;
    scrollTargets.forEach((el, idx) => {
      // distance from element top to viewport mid
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + latestY;
      const dist = Math.abs(elTop - vpMid);
      // map dist to a small translateY in range [0, 8]
      const t = clamp(Math.round((1 - clamp(dist / (window.innerHeight), 0, 1)) * 8), 0, 8);
      // Update the CSS var so we don't overwrite the element's transform entirely
      if (el.classList.contains('visible')) {
        el.style.removeProperty('--reveal-offset');
      } else {
        el.style.setProperty('--reveal-offset', String(10 - t));
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // run once to set initial positions
  onScroll();
})();

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
  card.addEventListener('focus', () => card.classList.add('is-hover'));
  card.addEventListener('blur', () => card.classList.remove('is-hover'));
});

// Card pointermove tilt + shine
// Track active card to keep pop until pointer leaves all cards
(() => {
  let activeCard = null;
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(card => {
    function onPointerMove(e){
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    // rotate ranges: ry [-8..8], rx [8..-8]
    const ry = (px - 0.5) * 16; // left -> negative, right -> positive
    const rx = (0.5 - py) * 16; // top -> positive, bottom -> negative
    card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    // shine position
    const sx = Math.round(px * 100) + '%';
    const sy = Math.round(py * 100) + '%';
    card.style.setProperty('--shine-x', sx);
    card.style.setProperty('--shine-y', sy);
  }
    function onPointerLeave(){
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--shine-x', '50%');
      card.style.setProperty('--shine-y', '20%');
      card.style.setProperty('--card-scale', '1');
      // if pointer left this card and no other card is active, clear active
      if (activeCard === card) activeCard = null;
    }

    function onPointerEnter(e){
      activeCard = card;
      card.classList.add('is-hover');
      card.style.setProperty('--card-scale', '1.06');
      card.classList.add('popping');
    }

    function onPointerMoveWrapped(e){
      onPointerMove(e);
      // keep card hovered while pointer moves inside it
      activeCard = card;
    }

    card.addEventListener('pointermove', onPointerMoveWrapped);
    card.addEventListener('pointerleave', onPointerLeave);
    card.addEventListener('pointerdown', onPointerMoveWrapped);
    card.addEventListener('pointerup', onPointerMoveWrapped);
    card.addEventListener('pointerenter', onPointerEnter);
  });

  // Global pointermove: if pointer is outside any card, clear hover on active
  window.addEventListener('pointermove', (e) => {
    const under = document.elementFromPoint(e.clientX, e.clientY);
    if (!under) return;
    const inCard = !!under.closest('.card');
    if (!inCard && activeCard) {
      activeCard.classList.remove('is-hover');
      activeCard.style.setProperty('--card-scale', '1');
      activeCard = null;
    }
  }, { passive: true });

})();
// increase default pointerenter scale for a more visible pop
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('pointerenter', () => card.style.setProperty('--card-scale', '1.06'));
  card.addEventListener('pointerleave', () => card.style.setProperty('--card-scale', '1'));
});
// Temporary pop animation: add `popping` class briefly on pointerenter
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('pointerenter', () => {
    card.classList.add('popping');
  });
  card.addEventListener('animationend', (e) => {
    if (e.animationName === 'card-pop') card.classList.remove('popping');
  });
});

// Ensure when an element becomes visible we remove the reveal offset so it snaps into final place
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.removeProperty('--reveal-offset');
    }
  });
}, { threshold: 0.12 });
revealElements.forEach(el => revealObserver.observe(el));
