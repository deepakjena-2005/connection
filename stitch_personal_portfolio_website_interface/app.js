/**
 * EDITORIAL OBSIDIAN WEB APPLICATION LOGIC
 * High-performance, zero-dependency architectural UI controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Case studies technical archive data
  const CASE_STUDIES = {
    'case-001': {
      id: 'case-001',
      number: 'CASE 001 // FINTECH CORE',
      year: '2023 — 2024',
      client: 'Tier-1 Challenger Bank (UK / Global)',
      title: 'Fintech Core Banking Overhaul & Settlement Mesh',
      role: 'Lead Staff Designer & UI Architect',
      stack: 'Next.js 14, WebSockets, Tailwind, Zod, TanStack Query, Radix Primitives',
      metrics: [
        { val: '-34%', label: 'Drop-off Velocity' },
        { val: '< 120ms', label: 'Ledger Sync Latency' },
        { val: '99.99%', label: 'Order Execution Accuracy' },
        { val: '1.4M+', label: 'Daily Settled Tranches' }
      ],
      abstract: 'Complete architectural reimagining of high-frequency settlement dashboards and multi-currency ledger onboarding. Replaced an antiquated, fragmented 7-step regulatory verification journey with an instantaneous, progressive ledger binding flow.',
      problem: 'Enterprise currency operators and liquidity managers faced persistent cognitive overload due to fragmented multi-pane trade stations, delayed REST order status polling (>1.8s), and uncalibrated visual hierarchy during market flash anomalies.',
      solution: 'We engineered an event-driven terminal interface utilizing strict tabular density, sub-120ms persistent WebSocket reconciliation, and high-contrast numerical states. Visual noise was ruthlessly minimized: zero decorative gradients, no gratuitous graphs, pure typographic precision.',
      schemaSnippet: `// Settlement Ledger Stream Specification
interface OrderBookTelemetry {
  orderId: string;
  sourceCurrency: "GBP" | "EUR" | "USD" | "JPY";
  targetCurrency: "GBP" | "EUR" | "USD" | "JPY";
  liquidityPoolId: \`lp_\${string}\`;
  trancheVolume: bigint;
  executionRate: number;
  syncTimestampNs: bigint;
  clearingLatencyMs: number; // SLA <= 120ms
  auditStatus: "VERIFIED" | "PENDING_CONSENSUS";
}`
    },
    'case-002': {
      id: 'case-002',
      number: 'CASE 002 // INFRASTRUCTURE',
      year: '2023',
      client: 'Enterprise Multi-Tenant SaaS Platform',
      title: 'Design Token Architecture & Cross-Platform Compiler',
      role: 'Principal Systems Architect',
      stack: 'Style Dictionary, GitHub Actions, AST Parser, Figma REST API, TypeScript',
      metrics: [
        { val: '45+', label: 'Synchronized Engineers' },
        { val: '0', label: 'Manual Translation Faults' },
        { val: '< 3m', label: 'Figma to Prod Pipeline' },
        { val: '4', label: 'Supported Platforms (Web/iOS/Android/Desktop)' }
      ],
      abstract: 'Engineered an end-to-end automated token compiler translating multi-brand theme variables directly from Figma Studio into platform-native primitives across React Web, iOS Swift, and Android Jetpack Compose without human translation discrepancies.',
      problem: 'Design divergence was compounding quarterly. 4 different product engineering teams manually translated hex codes, spacing units, and typographic scales, causing visual regressions, broken contrast compliance, and wasted engineering cycles.',
      solution: 'Constructed an automated continuous-integration pipeline. Designers publish changes in Figma Variables; a webhook invokes our GitHub Action runner, which executes custom AST transforms through Style Dictionary, outputting type-safe TS objects, Swift structures, and Compose themes.',
      schemaSnippet: `// Token Transformation Target Matrix
export interface CompiledDesignToken {
  $name: string;
  $value: string | number;
  $type: "color" | "dimension" | "fontFamily" | "duration";
  $extensions: {
    "org.architecture.specs": {
      wcagContrastRatio?: number;
      contrastTarget?: "AAA" | "AA";
      exportedPlatforms: ("web" | "ios" | "android" | "macos")[];
    }
  };
}`
    },
    'case-003': {
      id: 'case-003',
      number: 'CASE 003 // FIELD HARDWARE',
      year: '2022 — 2023',
      client: 'Emergency Healthcare Fleet Logistics',
      title: 'Healthcare Logistics Touch Dispatch Telemetry',
      role: 'Staff Interaction Architect',
      stack: 'Ruggedized Android Tablets, Chromium Embedded, WebGL, Leaflet, PWA',
      metrics: [
        { val: '< 850ms', label: 'Dispatch Ack Speed' },
        { val: 'Zero', label: 'Reported Route Errors' },
        { val: '56px', label: 'Min Touch Target (WCAG AAA)' },
        { val: '100%', label: 'Offline Resiliency' }
      ],
      abstract: 'A touch-first critical mission control interface for rapid emergency response couriers. Designed specifically to eliminate mis-taps under severe physical vehicle vibration, thick medical glove usage, and direct sunlight glare.',
      problem: 'Paramedic couriers and dispatchers transporting emergency organ and platelet payloads were making costly navigation errors when handling complex, cluttered commercial GPS apps on rattling dashboard mounts.',
      solution: 'We stripped down the UI to essential telemetry: 56px minimum physical target hitboxes, high-contrast monochrome mapping with terracotta vector paths, high-visibility monospaced speed/ETA indicators, and total local offline caching.',
      schemaSnippet: `// Telemetry & Hardware Emergency Protocol
interface FieldDispatchState {
  missionId: string;
  payloadType: "CRITICAL_BLOOD" | "ORGAN_TRANSIT" | "VACCINE_COLDCHAIN";
  maxTempThresholdCelsius: number;
  currentTempCelsius: number;
  routeWaypoints: [latitude: number, longitude: number][];
  vehicleVibrationIndexG: number;
  highContrastModeActive: boolean;
  offlineSyncQueueDepth: number;
}`
    }
  };

  // -------------------------------------------------------------
  // TACTILE SOUND SYNTHESIS (Web Audio API)
  // Subtle mechanical keystroke/switch feedback
  // -------------------------------------------------------------
  let audioContext = null;
  let audioEnabled = false;

  function playTactileClick(frequency = 800, type = 'sine') {
    if (!audioEnabled) return;
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + 0.045);
    } catch (e) {
      // Audio context policy safe ignore
    }
  }

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      const icon = soundToggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.innerText = audioEnabled ? 'volume_up' : 'volume_off';
      }
      soundToggleBtn.classList.toggle('active', audioEnabled);
      if (audioEnabled) {
        playTactileClick(1200);
      }
    });
  }

  // -------------------------------------------------------------
  // SCALE & DENSITY TOGGLE (Compact / Dense / Standard)
  // -------------------------------------------------------------
  const densityToggleBtn = document.getElementById('densityToggleBtn');
  const densityLabel = document.getElementById('densityLabel');
  const densityModes = [
    { key: 'compact', label: 'Scale: 85%', icon: 'zoom_out' },
    { key: 'dense', label: 'Scale: 75%', icon: 'close_fullscreen' },
    { key: 'normal', label: 'Scale: 100%', icon: 'zoom_in' }
  ];
  let currentDensityIdx = 0; // Default to Compact (85% reduced size)

  function applyDensity(idx) {
    currentDensityIdx = idx;
    const mode = densityModes[currentDensityIdx];
    if (mode.key === 'normal') {
      document.documentElement.removeAttribute('data-density');
    } else {
      document.documentElement.setAttribute('data-density', mode.key);
    }
    if (densityLabel) densityLabel.innerText = mode.label;
    const icon = densityToggleBtn ? densityToggleBtn.querySelector('.material-symbols-outlined') : null;
    if (icon) icon.innerText = mode.icon;
  }

  // Initialize at 85% reduced scale
  applyDensity(0);

  if (densityToggleBtn) {
    densityToggleBtn.addEventListener('click', () => {
      playTactileClick(750);
      const nextIdx = (currentDensityIdx + 1) % densityModes.length;
      applyDensity(nextIdx);
    });
  }

  // -------------------------------------------------------------
  // ELECTRONIC MAIL SELECTOR & DYNAMIC ROUTING
  // -------------------------------------------------------------
  const emailSelect = document.getElementById('emailSelect');
  const customEmailGroup = document.getElementById('customEmailGroup');
  const customEmailInput = document.getElementById('customEmailInput');
  const emailCategoryBadge = document.getElementById('emailCategoryBadge');
  const directMailLink = document.getElementById('directMailLink');
  const copyBtn = document.getElementById('copyBtn');
  const copyLabel = document.getElementById('copyLabel');
  const emailText = document.getElementById('emailText');

  function getActiveTargetEmail() {
    if (!emailSelect) return 'jenadeepak636@gmail.com';
    if (emailSelect.value === 'custom') {
      const custom = customEmailInput ? customEmailInput.value.trim() : '';
      return custom || 'jenadeepak636@gmail.com';
    }
    return emailSelect.value;
  }

  function updateEmailDestination() {
    if (!emailSelect || !emailText) return;
    const selectedOption = emailSelect.options[emailSelect.selectedIndex];
    const category = selectedOption ? selectedOption.getAttribute('data-category') : '';

    if (emailSelect.value === 'custom') {
      if (customEmailGroup) customEmailGroup.style.display = 'block';
      const customVal = customEmailInput ? customEmailInput.value.trim() : '';
      emailText.innerText = customVal || 'Type custom destination above...';
      if (emailCategoryBadge) emailCategoryBadge.innerText = '[ Custom Recipient ]';
      if (directMailLink) directMailLink.href = customVal ? `mailto:${customVal}` : 'mailto:jenadeepak636@gmail.com';
    } else {
      if (customEmailGroup) customEmailGroup.style.display = 'none';
      const activeEmail = emailSelect.value;
      emailText.innerText = activeEmail;
      if (emailCategoryBadge) emailCategoryBadge.innerText = `[ ${category || 'Direct'} ]`;
      if (directMailLink) directMailLink.href = `mailto:${activeEmail}`;
    }
  }

  if (emailSelect) {
    emailSelect.addEventListener('change', () => {
      playTactileClick(1100);
      updateEmailDestination();
    });
  }

  if (customEmailInput) {
    customEmailInput.addEventListener('input', () => {
      updateEmailDestination();
    });
  }

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
      const email = getActiveTargetEmail();
      playTactileClick(900);
      navigator.clipboard.writeText(email).then(() => {
        copyLabel.innerText = 'COPIED';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyLabel.innerText = 'COPY';
          copyBtn.classList.remove('copied');
        }, 2200);
      }).catch(() => {
        copyLabel.innerText = 'FAILED';
      });
    });
  }

  // -------------------------------------------------------------
  // MODAL / CASE STUDY INSPECTION DRAWER
  // -------------------------------------------------------------
  const modalOverlay = document.getElementById('caseModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalNumber = document.getElementById('modalCaseNumber');
  const modalTitle = document.getElementById('modalCaseTitle');
  const modalOrg = document.getElementById('modalCaseOrg');
  const modalRole = document.getElementById('modalCaseRole');
  const modalStack = document.getElementById('modalCaseStack');
  const modalMetrics = document.getElementById('modalCaseMetrics');
  const modalProblem = document.getElementById('modalCaseProblem');
  const modalSolution = document.getElementById('modalCaseSolution');
  const modalCode = document.getElementById('modalCaseCode');

  function openCaseStudy(caseId) {
    const data = CASE_STUDIES[caseId];
    if (!data || !modalOverlay) return;

    playTactileClick(700);

    modalNumber.innerText = data.number;
    modalTitle.innerText = data.title;
    modalOrg.innerText = data.client;
    modalRole.innerText = data.role;
    modalStack.innerText = data.stack;
    modalProblem.innerText = data.problem;
    modalSolution.innerText = data.solution;
    modalCode.innerText = data.schemaSnippet;

    // Render metrics
    if (modalMetrics) {
      modalMetrics.innerHTML = data.metrics.map(m => `
        <div class="metric-item">
          <span class="metric-val">${m.val}</span>
          <span class="metric-label">${m.label}</span>
        </div>
      `).join('');
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    if (!modalOverlay) return;
    playTactileClick(400);
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Attach inspection triggers
  document.querySelectorAll('[data-inspect-case]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = el.getAttribute('data-inspect-case');
      openCaseStudy(caseId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseStudy);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudy();
      }
    });
  }

  // -------------------------------------------------------------
  // CAPABILITY DISCIPLINE FILTERING
  // -------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const capabilityCards = document.querySelectorAll('.capability-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playTactileClick(600);
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      capabilityCards.forEach(card => {
        const discipline = card.getAttribute('data-discipline');
        if (filter === 'all' || discipline === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------
  // CONTACT TRANSMISSION FORM (DISPATCH TO jenadeepak636@gmail.com)
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    // Restore draft if saved
    const savedName = localStorage.getItem('draft_name');
    const savedEmail = localStorage.getItem('draft_email');
    if (savedName && document.getElementById('clientName')) document.getElementById('clientName').value = savedName;
    if (savedEmail && document.getElementById('clientEmail')) document.getElementById('clientEmail').value = savedEmail;

    contactForm.addEventListener('input', (e) => {
      if (e.target.id === 'clientName') localStorage.setItem('draft_name', e.target.value);
      if (e.target.id === 'clientEmail') localStorage.setItem('draft_email', e.target.value);
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      playTactileClick(1000);

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      const clientName = document.getElementById('clientName')?.value.trim() || 'Anonymous Client';
      const clientEmail = document.getElementById('clientEmail')?.value.trim() || 'Not provided';
      const scopeElem = document.getElementById('projectScope');
      const projectScopeText = scopeElem ? scopeElem.options[scopeElem.selectedIndex].text : 'General Inquiry';
      const projectMessage = document.getElementById('projectMessage')?.value.trim() || '';

      const targetEmail = getActiveTargetEmail();

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting to ${targetEmail}...</span><span class="material-symbols-outlined animate-spin">sync</span>`;

      const payload = {
        name: clientName,
        email: clientEmail,
        scope: projectScopeText,
        message: projectMessage,
        _subject: `New Portfolio Proposal Transmission from ${clientName}`
      };

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          if (formSuccess) {
            formSuccess.innerHTML = `
              <span class="material-symbols-outlined" style="color: var(--color-emerald); font-size: 18px;">check_circle</span>
              <span>Transmission recorded and dispatched to ${targetEmail}. Response will be sent within 24 hours.</span>
            `;
            formSuccess.classList.add('visible');
            contactForm.reset();
            localStorage.removeItem('draft_name');
            localStorage.removeItem('draft_email');
            setTimeout(() => {
              formSuccess.classList.remove('visible');
            }, 8000);
          }
        } else {
          throw new Error('Endpoint returned non-OK status');
        }
      } catch (err) {
        console.warn('Direct transmission API encountered an issue, launching mail fallback:', err);
        const subject = encodeURIComponent(`Portfolio Brief: ${clientName} — ${projectScopeText}`);
        const body = encodeURIComponent(`Name: ${clientName}\nEmail: ${clientEmail}\nScope: ${projectScopeText}\n\nProject Details:\n${projectMessage}`);
        window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');

        if (formSuccess) {
          formSuccess.innerHTML = `
            <span class="material-symbols-outlined" style="color: var(--color-emerald); font-size: 18px;">mark_email_read</span>
            <span>Transmission formatted for ${targetEmail}. Please dispatch via your mail client.</span>
          `;
          formSuccess.classList.add('visible');
          setTimeout(() => {
            formSuccess.classList.remove('visible');
          }, 8000);
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // -------------------------------------------------------------
  // COMMAND PALETTE (Cmd+K / Ctrl+K)
  // -------------------------------------------------------------
  const cmdPalette = document.getElementById('cmdPalette');
  const cmdInput = document.getElementById('cmdInput');
  const cmdList = document.getElementById('cmdList');
  const cmdToggleBtn = document.getElementById('cmdToggleBtn');

  const COMMANDS = [
    { name: 'Navigate: 01 // Monograph & Thesis', path: '#about', cat: 'Navigation' },
    { name: 'Navigate: 02 // Operational Matrix (Skills)', path: '#skills', cat: 'Navigation' },
    { name: 'Navigate: 03 // Selected Works (Projects)', path: '#projects', cat: 'Navigation' },
    { name: 'Navigate: 04 // Academic Pedagogy', path: '#education', cat: 'Navigation' },
    { name: 'Navigate: 05 // Honors & IP Contributions', path: '#achievements', cat: 'Navigation' },
    { name: 'Navigate: 06 // Transmission Terminal (Contact)', path: '#contact', cat: 'Navigation' },
    { name: 'Inspect: Case 001 (Fintech Core Overhaul)', action: () => openCaseStudy('case-001'), cat: 'Case Study' },
    { name: 'Inspect: Case 002 (Design Token Architecture)', action: () => openCaseStudy('case-002'), cat: 'Case Study' },
    { name: 'Inspect: Case 003 (Healthcare Logistics Dispatch)', action: () => openCaseStudy('case-003'), cat: 'Case Study' },
    { name: 'Action: Copy Primary Direct Email', action: () => { if (copyBtn) copyBtn.click(); }, cat: 'Action' },
    { name: 'Action: Toggle Tactile Audio Clicks', action: () => { if (soundToggleBtn) soundToggleBtn.click(); }, cat: 'System' }
  ];

  function renderCommands(query = '') {
    if (!cmdList) return;
    const filtered = COMMANDS.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.cat.toLowerCase().includes(query.toLowerCase()));
    
    if (filtered.length === 0) {
      cmdList.innerHTML = `<div class="cmd-item" style="cursor: default; opacity: 0.6;">No matching commands found.</div>`;
      return;
    }

    cmdList.innerHTML = filtered.map((c, idx) => `
      <div class="cmd-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
        <span>${c.name}</span>
        <span class="mono-spec">[${c.cat}]</span>
      </div>
    `).join('');

    cmdList.querySelectorAll('.cmd-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        executeCommand(filtered[idx]);
      });
    });
  }

  function executeCommand(cmd) {
    if (!cmd) return;
    playTactileClick(850);
    closeCmdPalette();
    if (cmd.path) {
      const target = document.querySelector(cmd.path);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cmd.action) {
      cmd.action();
    }
  }

  function openCmdPalette() {
    if (!cmdPalette) return;
    playTactileClick(650);
    cmdPalette.classList.add('open');
    if (cmdInput) {
      cmdInput.value = '';
      cmdInput.focus();
    }
    renderCommands('');
  }

  function closeCmdPalette() {
    if (!cmdPalette) return;
    cmdPalette.classList.remove('open');
  }

  if (cmdToggleBtn) {
    cmdToggleBtn.addEventListener('click', openCmdPalette);
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      renderCommands(e.target.value.trim());
    });
  }

  if (cmdPalette) {
    cmdPalette.addEventListener('click', (e) => {
      if (e.target === cmdPalette) closeCmdPalette();
    });
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (cmdPalette && cmdPalette.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    }

    // Escape key closes modals or cmd palette
    if (e.key === 'Escape') {
      if (cmdPalette && cmdPalette.classList.contains('open')) {
        closeCmdPalette();
      } else if (modalOverlay && modalOverlay.classList.contains('open')) {
        closeCaseStudy();
      }
    }
  });

  // -------------------------------------------------------------
  // SCROLL-SPY & ACTIVE SECTION HIGHLIGHTING
  // -------------------------------------------------------------
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.sidebar-rail .nav-item, .mobile-bottom-bar .mobile-tab');

  function updateActiveSection() {
    const scrollPos = window.scrollY + 120;
    let currentSectionId = '';

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (!currentSectionId && sections.length > 0 && window.scrollY < 300) {
      currentSectionId = 'monograph';
    }

    navLinks.forEach(link => {
      const targetPath = link.getAttribute('href')?.replace('#', '') || link.getAttribute('data-path');
      if (targetPath === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  // Smooth nav link click handler with tactile audio
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          playTactileClick(500);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Console colophon
  console.log(
    '%c [ Specimen Index: Architectural UX Portfolio ] %c \n Engineered with strict typographic restraint & high-contrast obsidian tokens.',
    'background: #181d22; color: #e05a34; font-family: monospace; font-size: 11px; padding: 4px;',
    'color: #8e98a4; font-size: 10px;'
  );
});
