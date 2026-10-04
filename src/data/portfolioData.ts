import type { Project, ExperienceItem, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Vaishak S',
  roleHeadline: 'Cyber Security Analyst | SOC Operations | Blue Team | Threat Detection & VAPT',
  shortRole: 'Cybersecurity Analyst & SOC Specialist',
  location: 'Trivandrum, Kerala, India',
  status: 'Open to Work / Entry-Level SOC & Security Analyst Roles',
  statusShort: 'Available for Blue Team / SOC roles',
  email: 'karthivaishak95@gmail.com',
  linkedin: 'https://www.linkedin.com/in/-vaishak-s-',
  github: 'https://github.com/vaishak-io',
  bio: 'Cybersecurity analyst focused on defensive security operations, SOC environments, and proactive threat detection. Hands-on experience in vulnerability assessment, SIEM event investigation, Wi-Fi security auditing, and Python-driven automation. Actively training in offensive and defensive workflows to protect critical digital infrastructure.',
  stats: [
    { label: 'Detection Scenarios', value: '40+', change: 'Simulated Labs' },
    { label: 'Security Tools', value: '15+', change: 'Production & CLI' },
    { label: 'Packet Inspection', value: '100%', change: 'Wireshark & PCAP' },
    { label: 'Response Readiness', value: '24/7', change: 'Blue Team Focus' },
  ],
  socTelemetry: [
    { metric: 'SIEM Correlation Rule Accuracy', value: '98.4%' },
    { metric: 'Triage Mean Time to Detect (MTTD)', value: '< 4.2 min' },
    { metric: 'Defense Framework Alignment', value: 'MITRE ATT&CK & OWASP' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'pi-pentest-workstation',
    title: 'Raspberry Pi Pentest & Auditing Workstation',
    subtitle: 'Portable Hardware Security & Wireless Telemetry Platform',
    description: 'Engineered a custom portable hardware penetration testing station for Wi-Fi auditing, localized network reconnaissance, and automated vulnerability scanning.',
    longDescription: 'Developed a dedicated headless ARM Linux penetration auditing node built on Raspberry Pi 4 hardware. Configured dual external Alfa Wi-Fi adapters supporting 2.4GHz/5GHz monitor mode and packet injection. Integrated custom automation scripts to isolate BSSIDs, monitor deauthentication anomalies, map rogue access points, and perform stealth host discovery without disrupting production LAN traffic.',
    category: 'Hardware & Recon',
    status: 'Operational',
    tags: ['Raspberry Pi', 'Linux', 'Wi-Fi Security', 'Network Reconnaissance', 'Python', 'Aircrack-ng', 'Kismet'],
    highlights: [
      'Dual-band monitor mode & RF 802.11 frame capture pipeline',
      'Autonomous cron-driven rogue AP triangulation & alerting',
      'Hardened headless Debian/Raspbian OS with encrypted LUKS container',
      'Automated Nmap service enumeration pipe direct to reporting dashboard'
    ],
    architectureBadges: ['ARM Architecture', '802.11 Injection', 'Stealth Recon', 'Local Telemetry'],
    telemetryLog: [
      '[*] [SYS_INIT] Loading interface wlan1mon (Alfa AWUS036ACH - Realtek RTL8812AU)...',
      '[+] [MONITOR_MODE] Interface switched to IEEE 802.11 monitor mode on channel 6.',
      '[*] [RECON] Scanning Beacon frames and probe requests in radius...',
      '[!] [ALERT] Rogue AP detected with SSID matching target whitelist (BSSID: 94:83:C4:2E:7A:1B).',
      '[+] [SCAN_COMPLETE] Target profile compiled. Report saved to /var/log/audit/station_01.json'
    ],
    demoCommand: 'python3 /opt/recon/pi_audit.py --interface wlan1mon --stealth-level 4'
  },
  {
    id: 'soc-threat-detection-lab',
    title: 'SOC Event Investigation & Threat Detection Lab',
    subtitle: 'Enterprise Telemetry, SIEM Ingestion & Incident Triage Pipeline',
    description: 'Configured log collection pipelines and simulated attack scenarios (enumeration, brute force, web attacks) to analyze telemetry and validate alert correlation inside SIEM environments.',
    longDescription: 'Architected a multi-tier virtualized Security Operations Center (SOC) testbed replicating enterprise network topology. Implemented centralized log forwarding from endpoints and firewalls into an Elastic/Wazuh SIEM cluster. Simulated adversary TTPs including SSH brute-force attacks, directory brute-forcing, and SQL injection to build custom alert correlation rules and evaluate false-positive reduction.',
    category: 'SOC & Telemetry',
    status: 'Active Lab',
    tags: ['SIEM', 'Log Analysis', 'Incident Response', 'Threat Hunting', 'Suricata/Snort', 'Wazuh', 'Elasticsearch'],
    highlights: [
      'Configured Sysmon & Linux Auditd telemetry shipping to centralized SIEM',
      'Mapped attack simulations against MITRE ATT&CK Enterprise Matrix (T1110, T1059)',
      'Fine-tuned Suricata NIDS signatures with custom thresholding for alert fatigue mitigation',
      'Crafted automated triage runbooks for rapid incident containment'
    ],
    architectureBadges: ['SIEM / SOAR', 'MITRE ATT&CK', 'Packet Analysis', 'Correlation Rules'],
    telemetryLog: [
      '{"timestamp": "2026-10-04T18:42:11Z", "rule": {"id": "100204", "level": 12, "description": "SSH Brute Force Attempt (High Volume)"}}',
      '{"agent": {"id": "002", "name": "srv-prod-db01", "ip": "10.10.40.15"}, "src_ip": "192.168.1.184"}',
      '[!] [ALERT_TRIAGE] 42 failed authentication attempts detected within 30-second window.',
      '[*] [CORRELATION] Correlating with Suricata Alert SID 2001219 (ET SCAN Potential SSH Scan).',
      '[+] [ACTION_TAKEN] IP 192.168.1.184 isolated via host-level iptables drop rule.'
    ],
    demoCommand: 'soar-ctl --investigate-incident --incident-id INC-2026-9921 --export-pcap'
  },
  {
    id: 'automated-vapt-pipeline',
    title: 'Automated Vulnerability Assessment Pipeline',
    subtitle: 'Modular Python & Bash Reconnaissance & Scanning Engine',
    description: 'Scripted custom Python/Bash routines to streamline reconnaissance, automate port scanning with Nmap, and format structured reporting for web and network targets.',
    longDescription: 'Engineered an end-to-end vulnerability triage engine designed to eliminate repetitive manual phases during vulnerability assessments. Orchestrates sub-domain discovery, passive OSINT queries, aggressive Nmap NSE scripting, and web banner fingerprinting into a single pipeline outputting standardized JSON and Markdown executive reports.',
    category: 'Automation & VAPT',
    status: 'Operational',
    tags: ['Python', 'Bash', 'Nmap', 'OWASP Top 10', 'Security Automation', 'Nikto', 'JSON Triage'],
    highlights: [
      'Multi-threaded port discovery with adaptive rate-limiting to prevent WAF bans',
      'Automated service banner grabbing and CVE correlation via NVD API integration',
      'OWASP Top 10 web surface scanner wrapper with structured defect categorization',
      'Generates client-ready executive summary & remediation priority matrix'
    ],
    architectureBadges: ['Python 3.11', 'Nmap NSE', 'OWASP Compliant', 'CLI Pipeline'],
    telemetryLog: [
      '[>] [STAGE 1] Initiating fast SYN stealth sweep across target subnet 10.0.80.0/24...',
      '[+] [PORTS_FOUND] 80/tcp (http), 443/tcp (https), 8080/tcp (http-proxy), 22/tcp (ssh).',
      '[*] [STAGE 2] Triggering NSE script engine (vuln, default, banner)...',
      '[!] [VULN_FLAGGED] CVE-2021-41773 (Apache HTTP Server Path Traversal) suspected on port 80.',
      '[+] [EXPORT] Audit report compiled: /reports/vapt_summary_20261004.json'
    ],
    demoCommand: 'python3 vapt_engine.py --target 192.168.1.0/24 --vuln-scan --export-json'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'RedTeam Hacker Academy',
    role: 'Cyber Security Analyst Trainee (CICSA)',
    program: 'Certified Information & Cyber Security Associate',
    period: 'September 2026 – Present',
    location: 'Trivandrum, Kerala',
    current: true,
    type: 'Intensive Practical Program',
    highlights: [
      'Enrolled in CICSA (Certified Information & Cyber Security Associate), mastering SOC workflows, VAPT methodologies, and incident response procedures.',
      'Deep-dive into log analysis, traffic inspection using Wireshark, SIEM threat tracking, and event triage.',
      'Hands-on exploitation and defense drills across OWASP Top 10 vulnerabilities, Metasploit, Burp Suite, and Kali Linux tooling.',
      'Exploring AI-integrated security operations for automated vulnerability correlation and threat intelligence ingestion.'
    ],
    technologies: ['Wireshark', 'SIEM Operations', 'Burp Suite', 'Metasploit', 'OWASP Top 10', 'Kali Linux', 'Nmap', 'Python']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Defensive & SOC Operations',
    badge: 'Blue Team Operations',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'SOC Monitoring', level: 'Advanced', focus: 'Real-time alert queues & event triage' },
      { name: 'Log Analysis', level: 'Advanced', focus: 'Syslog, Windows Event Logs, Sysmon' },
      { name: 'Threat Hunting', level: 'Proficient', focus: 'Hypothesis-driven IOC searching' },
      { name: 'SIEM Concepts', level: 'Advanced', focus: 'Log pipelines, correlation & alert rules' },
      { name: 'Incident Response', level: 'Proficient', focus: 'Containment, eradication & recovery' },
      { name: 'Network Traffic Analysis', level: 'Advanced', focus: 'Protocol dissection & packet inspection' },
    ]
  },
  {
    title: 'Offensive Security & VAPT',
    badge: 'Assessment & Testing',
    iconName: 'Crosshair',
    skills: [
      { name: 'Vulnerability Assessment', level: 'Advanced', focus: 'Flaw identification & risk scoring' },
      { name: 'Web App Security', level: 'Advanced', focus: 'OWASP Top 10 vulnerabilities' },
      { name: 'Reconnaissance', level: 'Advanced', focus: 'Passive & active intelligence gathering' },
      { name: 'Penetration Testing Methodologies', level: 'Proficient', focus: 'Structured PTES & NIST guidelines' },
      { name: 'Exploitation Drills', level: 'Hands-on', focus: 'Controlled lab payload delivery' },
      { name: 'Wireless Auditing', level: 'Advanced', focus: '802.11 security & frame capture' },
    ]
  },
  {
    title: 'Tools & Ecosystem',
    badge: 'Security Tooling',
    iconName: 'Terminal',
    skills: [
      { name: 'Wireshark', level: 'Advanced', focus: 'Deep PCAP dissection & stream carving' },
      { name: 'Nmap', level: 'Advanced', focus: 'Custom NSE scripts & stealth scans' },
      { name: 'Burp Suite', level: 'Advanced', focus: 'Proxy, Repeater, Intruder web analysis' },
      { name: 'Metasploit', level: 'Proficient', focus: 'Framework payload & exploit testing' },
      { name: 'Kali Linux', level: 'Advanced', focus: 'Primary security operating system' },
      { name: 'Gobuster & Nikto', level: 'Advanced', focus: 'Directory enumeration & web checks' },
      { name: 'Hydra & John the Ripper', level: 'Proficient', focus: 'Credential & hash validation' },
      { name: 'SQLmap & Netcat', level: 'Proficient', focus: 'Injection analysis & raw network piping' },
    ]
  },
  {
    title: 'Platforms & Scripting',
    badge: 'Infrastructure & Code',
    iconName: 'Cpu',
    skills: [
      { name: 'Linux Administration', level: 'Advanced', focus: 'Hardening, permissions, iptables, systemd' },
      { name: 'Bash Scripting', level: 'Advanced', focus: 'Automation pipes & batch processing' },
      { name: 'Python Automation', level: 'Advanced', focus: 'Security tooling, socket programming' },
      { name: 'TCP/IP & Networking', level: 'Advanced', focus: 'Subnetting, routing, DNS, OSI model' },
      { name: 'Secure Networking', level: 'Proficient', focus: 'VLANs, VPNs, Firewalls & segmentation' },
      { name: 'Raspberry Pi Labs', level: 'Advanced', focus: 'Custom ARM pentest & hardware setups' },
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Lourdes Matha College of Science and Technology',
    location: 'Kuttichal, Thiruvananthapuram, Kerala',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
    period: '2022 – 2026',
    completedYear: 'Completed 2026',
    focus: [
      'Computer & Engineering Systems Core',
      'Network Architecture & Data Communication',
      'Operating Systems & Algorithmic Problem Solving',
      'Hands-on Lab Engineering & Technical Projects'
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  whoami       - Display analyst identity & credentials',
    '  status       - Check SOC availability & current location',
    '  skills       - View top technical proficiencies',
    '  projects     - List active security projects & labs',
    '  contact      - Display verified contact channels',
    '  clear        - Clear the terminal screen',
    '  resume       - View CV credentials & download link'
  ],
  whoami: [
    'Vaishak S',
    'Role: Cyber Security Analyst | SOC Operations | Blue Team | Threat Detection & VAPT',
    'Academy: RedTeam Hacker Academy (CICSA Trainee)',
    'Philosophy: Proactive defensive telemetry, rigorous log correlation, and defense-in-depth.'
  ],
  status: [
    '[+] SOC Status: ACTIVE & READY',
    '[*] Target Roles: SOC Analyst (Tier 1/2), Blue Team, Incident Response, Cyber Security Analyst',
    '[*] Location: Trivandrum, Kerala, India (UTC +5:30)',
    '[!] Availability: Immediate / Short Notice'
  ],
  skills: [
    '[DEFENSIVE]  SOC Monitoring, Log Analysis (Sysmon/Event Logs), Threat Hunting, SIEM, Incident Response',
    '[OFFENSIVE]  VAPT, Web App Security (OWASP Top 10), Reconnaissance, Wireless Auditing',
    '[TOOLING]    Wireshark, Nmap, Burp Suite, Metasploit, Kali Linux, Gobuster, Nikto, SQLmap',
    '[PLATFORMS]  Linux (Debian/Kali), Python Automation, Bash Scripting, TCP/IP, Raspberry Pi'
  ],
  projects: [
    '1. Raspberry Pi Pentest & Auditing Workstation [Operational]',
    '2. SOC Event Investigation & Threat Detection Lab [Active Lab]',
    '3. Automated Vulnerability Assessment Pipeline [Operational]'
  ],
  contact: [
    'Email:    karthivaishak95@gmail.com',
    'LinkedIn: https://www.linkedin.com/in/-vaishak-s-',
    'Location: Trivandrum, Kerala, India'
  ],
  resume: [
    'Vaishak_S_Cybersecurity_Analyst_Resume.pdf',
    'Status: Ready for download.',
    'Use the "Download CV" button on the hero section or in the top navigation.'
  ]
};
