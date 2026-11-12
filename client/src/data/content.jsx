/* =========================================================
   All portfolio content lives here, so updating text,
   photos or links never means touching component code.
   ========================================================= */

const img = (name) => `/assets/${name}`;

export const profile = {
  name: 'Sonakshi Tripathi',
  firstName: 'Sonakshi',
  role: 'QA Engineer Intern, GoComet',
  education: "B.Tech CSE '27, LPU",
  location: 'Bangalore, India',
  email: 'tripathisonakshi705@gmail.com',
  resume: '/resume.pdf',
  target: 'Amazon',
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/sonakshi-tripathi2030',
  github: 'https://github.com/sonakshi-00007tripathi',
  leetcode: 'https://leetcode.com/u/sonakshi705/',
  youtube: 'https://www.youtube.com/@sonakshitripathi30',
};

export const navLinks = [
  { href: '#track', label: 'Journey' },
  { href: '#build', label: 'Builds' },
  { href: '#principles', label: 'Principles' },
  { href: '#why', label: 'Why SDE' },
  { href: '#contact', label: 'Contact' },
];

export const gate = {
  photo: { src: img('bench-laptop.jpg'), alt: 'Sonakshi smiling with her laptop on a campus bench', caption: 'handle with ownership' },
  bubble: 'Psst… my bags are already packed.',
};

export const hero = {
  photos: [
    { src: img('campus.jpg'), alt: 'Sonakshi at the LPU campus', caption: 'campus, chapter one', className: 'p1' },
    { src: img('car-window.jpg'), alt: 'Sonakshi in sunglasses leaning out of a car window', caption: 'always exploring ✌', className: 'p2' },
  ],
  sticker: '1st girl in my family to study away 🧡',
};

/* Numbers count up on scroll. `count` describes how to animate; omit it for text values. */
export const stats = [
  { icon: '⚡', value: '1 wk → 5 min' /* non-breaking spaces: wraps as "1 wk →" / "5 min" */, label: 'manual customs audit I automated' },
  { icon: '📄', value: '6,000+', label: 'reports validated per pipeline run', count: { to: 6000, suffix: '+' } },
  { icon: '✅', value: '500+', label: 'Jira tickets, 100% on time', count: { to: 500, suffix: '+' } },
  { icon: '🛡️', value: '0', label: 'post-release defects', count: { from: 9, to: 0 } },
  { icon: '🧠', value: '150+', label: 'LeetCode problems solved', count: { to: 150, suffix: '+' } },
  { icon: '🎥', value: '₹2.5L+', label: 'earned as a creator in college', count: { to: 2.5, prefix: '₹', suffix: 'L+', decimals: 1 } },
];

/* ---------- Journey ("Track your package") ---------- */
export const journey = [
  {
    chip: 'ORDER PLACED',
    place: '📍 Satna, Madhya Pradesh',
    title: 'Packed in a small city with big plans.',
    body: [<>I finished class 10 and 12 in Satna. Then I took the LPUNEST exam and got a <b>30% scholarship</b> to study Computer Science.</>],
  },
  {
    chip: 'SHIPPED · FIRST ONE OUT',
    place: '📍 LPU, Punjab · Aug 2023',
    title: "I didn't just take a path. I opened one.",
    body: [<>I was the <b>first girl in my whole family</b> to leave home to study. Everyone was so happy for me, and then something beautiful happened: families started sending their daughters out to study too.</>],
    note: "Others are walking the road now. That's my favourite thing I've ever built.",
    mediaLayout: 'duo',
    media: [
      { src: img('lpu-gate.jpg'), alt: 'Sonakshi pointing at the LPU building', caption: 'where it all started 👆', rot: -3, land: true },
      { src: img('parents.jpg'), alt: 'Sonakshi with her parents at LPU', caption: 'Mumma, Papa & me 🧡', rot: 5 },
    ],
  },
  {
    chip: 'IN TRANSIT · TURBULENCE',
    place: '📍 Hackathon halls, 2 a.m.',
    title: 'My first line of code was in college.',
    body: [
      <>It was hard. I wasn't the fastest in the room, so I chose to be the most consistent. I learnt DSA from scratch, solved <b>150+ LeetCode problems</b> and signed up for every hackathon I could find, including <b>36- and 48-hour ones</b> with zero sleep.</>,
      <>At <b>Smart India Hackathon 2025</b>, my team built a full-stack internship recommender and made it to <b>LPU's internal final round</b>.</>,
    ],
    media: [
      { src: img('sih-team.jpg'), alt: 'Sonakshi with her team at Gear Up Season 4, the 36-hour SIH 2025 qualifier hackathon', caption: 'my SIH squad · 36 hrs', rot: -4 },
      { src: img('hackathon.jpg'), alt: 'Sonakshi coding at a hackathon', caption: 'hour 30. still smiling.', rot: 3 },
    ],
  },
  {
    chip: 'SCENIC DETOUR · WORTH IT',
    place: '📍 Stage & camera',
    title: 'Dancer, singer, actor, creator.',
    body: [<>College was never just classrooms. I danced, sang and did drama. I also started documenting my college life on YouTube. A few videos crossed <b>50K+ views</b>, and I earned <b>₹2.5 lakh+</b> as a creator while still studying.</>],
    youtube: { handle: '@sonakshitripathi30', href: links.youtube },
    media: [
      { src: img('trophy.jpg'), alt: 'Sonakshi holding an overall winner trophy', caption: 'overall winner 🏆', rot: -2, land: true },
    ],
  },
  {
    chip: 'OUT FOR DELIVERY',
    place: '📍 GoComet, Bangalore · Mar 2026 →',
    title: '5th semester: time to crack something real.',
    body: [
      <>I learnt the stack, prepared hard and got placed at GoComet as the <b>first female student from LPU's 2027 batch</b>. I was also the youngest person in the whole office.</>,
      <>My parents distributed mithai to the entire family. Their smiles gave me the confidence to aim higher. I want to make them prouder still.</>,
    ],
    note: 'Since then: 2 production products, 500+ tickets, 0 post-release defects.',
    media: [
      { src: img('gocomet-sign.jpg'), alt: 'Sonakshi at the GoComet office under the neon GoComet sign', caption: 'my second home 💙', rot: 3, style: { width: 'min(290px, 72%)' } },
    ],
    gallery: {
      title: '📸 Life at GoComet',
      photos: [
        { src: img('office-team.jpg'), alt: 'Sonakshi building mini puzzle models with teammates at GoComet', caption: 'always building something 🧩', rot: -4 },
        { src: img('gocomet-girls.jpg'), alt: 'Sonakshi with two colleagues under the GoComet sign', caption: 'my GoComet girls 💙', rot: 3 },
        { src: img('office-view.jpg'), alt: 'Laptop and tablet by the window at the GoComet Bangalore office', caption: 'office with a view ☁️', rot: -2 },
        { src: img('office-desk.jpg'), alt: 'Sonakshi at her desk in the GoComet Bangalore office', caption: 'desk days, tumbler always 💻', rot: 4 },
      ],
    },
  },
  {
    pending: true,
    chip: 'ARRIVING',
    place: '📍 Amazon · SDE Intern',
    title: 'Next stop: Amazon.',
    body: [<>It's my dream company. I love that Amazon gives ownership to people who want it and treats every day like Day 1. That's how I work.</>],
    eta: 'Estimated delivery: the day you say yes.',
  },
];

/* ---------- Builds ---------- */
export const featureProject = {
  tags: ['TypeScript', 'Playwright', 'REST APIs', 'CSV'],
  title: 'AI-Assisted Document Validation Engine',
  summary: <>Checks data extracted by GoComet's DRDV product against <b>6,000+ Bill of Entry reports</b>, field by field, across 5 data sections.</>,
  points: [
    <><b>Dove deep when V1 was too slow.</b> The browser-driven version handled 3 records in 2.6 minutes. I captured the app's network calls and rebuilt it <b>API-first</b>. It now handles thousands of records per run with no browser at all.</>,
    <><b>Field-level comparison engine</b> that sorts every discrepancy into <b>5 error types</b>, with an alias-mapping layer for abbreviated columns.</>,
    <><b>Built for humans.</b> I replaced 3,000 lines of raw JSON with console tables and CSV reports, so the tool can be reused for any document type.</>,
    <><b>Adopted team-wide</b> as a reusable pattern.</>,
  ],
  bars: {
    title: 'Time to audit 6,000+ reports',
    rows: [
      { label: 'Manual audit', value: '~1 week', width: 100 },
      { label: 'My pipeline', value: '~5 min / batch', width: 2, fast: true },
    ],
  },
};

export const projects = [
  {
    kicker: 'Smart India Hackathon 2025 · MERN',
    title: 'PM Internship Recommender',
    body: 'A multi-tier app (React → Node/Express → MongoDB) that matches students to PM Internship Scheme roles using an ML model. I built the complete React frontend and the REST APIs, and wrote Playwright tests for the core user journeys.',
    badge: '🏁 LPU internal final round',
  },
  {
    kicker: 'GoComet · Refactor at scale',
    title: 'Java → TypeScript migration',
    body: <>Led the migration of <b>65+ DRDV test specs</b> from Java to TypeScript. I redesigned the modules with object-oriented design and checked parity with full regression runs before calling it done.</>,
    badge: '✓ parity verified',
  },
  {
    kicker: 'GoComet · Production ownership',
    title: 'Quality for DRDV & Textract',
    body: <>Owned quality for two production products: debugging, root-cause analysis and release sign-off. Automated <b>100% of in-scope Textract test cases</b> and caught 100+ defects before production.</>,
    badge: '0 post-release defects',
  },
];

/* ---------- Leadership Principles ---------- */
export const principles = [
  { lp: 'CUSTOMER OBSESSION', title: 'A bug I miss is a bug they find.', body: 'I signed off releases for two production products used by real logistics teams, and shipped with zero post-release defects.', proof: ['post-release defects', '0'] },
  { lp: 'OWNERSHIP', title: 'I raise my hand first.', body: 'Whatever lands on the team, I volunteer. I own quality for DRDV and Textract end to end: debugging, root cause and release sign-off.', proof: ['products owned', '2'] },
  { lp: 'INVENT AND SIMPLIFY', title: 'A week of work → 5 minutes.', body: 'I automated a manual customs audit into a batch pipeline, and turned a 3,000-line JSON dump into readable tables and CSVs.', proof: ['adopted', 'team-wide'] },
  { lp: 'DIVE DEEP', title: 'Opened DevTools, found the real fix.', body: "V1 was slow because it drove a browser. I captured the app's network calls and went API-first.", proof: ['records / run', '3 → 1000s'] },
  { lp: 'LEARN AND BE CURIOUS', title: 'Zero code to production in 3 years.', body: "First line of code in college; now TypeScript pipelines in production. Along the way I've been a dancer, singer, actor, YouTuber and explorer.", proof: ['certs', 'OCI Gen AI · GfG DSA'] },
  { lp: 'DELIVER RESULTS', title: 'On time, every time.', body: '500+ Jira tickets in an Agile team, every one delivered on schedule, and 100+ defects caught before they reached a customer.', proof: ['on-time delivery', '100%'] },
  { lp: 'INSIST ON THE HIGHEST STANDARDS', title: '"Done" means verified.', body: "I migrated 65+ specs and didn't call it done until full regression runs proved parity. I automated 100% of in-scope Textract cases.", proof: ['in-scope automated', '100%'] },
  { lp: 'BIAS FOR ACTION', title: "Didn't wait for final year.", body: 'In my 5th semester I decided it was time, prepared hard and got placed, the first female student from my batch to do it.', proof: ['placed in', 'sem 5'] },
  { lp: 'EARN TRUST', title: 'With developers, not after them.', body: 'I work alongside developers on fixes and root causes instead of just throwing bugs over the wall. The tooling I built became the pattern the whole team uses.', proof: ['bugs over the wall', '0'] },
  { lp: 'THINK BIG', title: 'I opened a door for a whole family.', body: "The first girl to leave home to study. Now families send their daughters too. That's the kind of impact I want my code to have: it outlives me and helps people I'll never meet.", proof: ['doors opened', '∞'], special: true },
];

/* ---------- Why QA → SDE ---------- */
export const whySde = {
  quote: ["I've spent 8 months breaking software for a living. ", 'Now I want to build what doesn\'t break.'],
  points: [
    { title: 'I already build.', body: "My validation engine isn't a test script; it's a real piece of software, with an architecture, a data pipeline, a comparison engine and reports people actually use." },
    { title: 'I think in edge cases.', body: "Testing taught me how systems fail. I'll write code with the bug report already in my head: null fields, slow APIs, the one customer with abbreviated columns." },
    { title: 'I love the making part.', body: 'Even as QA, I kept pairing with developers and building things. Creating something, then making sure it works, is the part of the job that lights me up.' },
  ],
};

/* ---------- Skills ("What's in the box") ---------- */
export const skills = [
  { group: 'Languages', items: ['TypeScript*', 'Java*', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Web & Databases', items: ['React*', 'Node.js*', 'Express.js', 'REST APIs', 'MongoDB', 'Multi-tier Architecture', 'HTML & CSS'] },
  { group: 'CS Fundamentals', items: ['Data Structures & Algorithms*', 'Object-Oriented Design', 'System Design', 'Complexity Analysis', 'Operating Systems', 'DBMS', 'Computer Networks'] },
  { group: 'Tools & Testing', items: ['Playwright*', 'Git', 'GitHub Actions', 'Jenkins', 'Maven', 'Postman', 'Selenium', 'JUnit', 'TestNG', 'Jira'] },
  { group: 'Ways of working', items: ['Agile / Scrum', 'SDLC', 'Debugging', 'Root-Cause Analysis', 'AI-assisted development'] },
  { group: 'Education', items: ['B.Tech CSE · Lovely Professional University · 2023 – 2027'] },
];

/* ---------- Off the clock ---------- */
export const life = [
  { src: img('ipl.jpg'), alt: 'Sonakshi in an RCB jersey at a cricket stadium', caption: 'RCB jersey in an away crowd. Loyalty: non-negotiable.' },
  { src: img('cultural.jpg'), alt: 'Sonakshi in a traditional costume at a cultural fest', caption: 'culture fest, crowned & fearless' },
  { src: img('car-window.jpg'), alt: 'Sonakshi enjoying a road trip', caption: 'window seat, always 🌍' },
];
