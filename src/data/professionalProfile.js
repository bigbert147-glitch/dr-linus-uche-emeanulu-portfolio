// Professional profile data — structured fields for biography, education,
// professional appointments, research themes, achievements, and academic
// profile links.
//
// EVIDENCE LEVELS:
// - verified: true  → Confirmed by an institutional or publisher source.
// - approved: true  → Reviewed and approved by Dr. Linus for public display.
// - profileReported: true → Reported by a public professional profile
//   (ResearchGate, LinkedIn). Dr. Linus has approved the use of these
//   details on his portfolio.
//
// See docs/PROFESSIONAL_PROFILE_RESEARCH.md for the full audit.

// ── Biography ────────────────────────────────────────────────────
export const biography = [
  {
    id: "bio-1",
    text: "Dr. Linus Uche Emeanulu is an academic, researcher, and business management professional affiliated with the University of the West of Scotland. His published work spans operational risk management, knowledge management, transformational leadership, and higher education, with a particular focus on small and medium-sized enterprises and student experience.",
    verified: true,
    approved: true,
  },
  {
    id: "bio-2",
    text: "As a Business Management Associate Lecturer at the University of the West of Scotland, Dr. Linus contributes to teaching and research in business and management. His research examines how organisations identify, communicate, and manage operational risks, and how leadership shapes employee behaviour and student learning motivation.",
    verified: true,
    approved: true,
  },
];

// ── Education and qualifications ─────────────────────────────────
export const education = [
  {
    id: "edu-1",
    institution: "University of the West of Scotland",
    programme: "Doctor of Business Administration (DBA)",
    period: "February 2017 – November 2021",
    focus: "Operational risk management and knowledge management",
    verified: true,
    approved: true,
  },
  {
    id: "edu-2",
    institution: "Northumbria University at Newcastle, London Campus",
    programme: "Business with International Management",
    period: "September 2015 – November 2016",
    focus: "",
    verified: true,
    approved: true,
  },
];

// ── Professional appointments ────────────────────────────────────
export const appointments = [
  {
    id: "appt-1",
    position: "Business Management Associate Lecturer",
    institution: "University of the West of Scotland",
    startDate: "May 2022",
    endDate: "Present",
    description:
      "Teaching and research in business and management at the University of the West of Scotland.",
    verified: true,
    approved: true,
  },
];

// ── Institutional affiliation ────────────────────────────────────
export const institutionalAffiliation = {
  institution: "University of the West of Scotland",
  confirmedFrom: "UWS Research Portal and publication records (2019-2026)",
  verified: true,
  approved: true,
};

// ── Achievements ─────────────────────────────────────────────────
export const achievements = [];

// ── Academic and professional profile links ──────────────────────
export const academicProfiles = [
  {
    id: "profile-researchgate",
    platform: "ResearchGate",
    label: "ResearchGate Profile",
    url: "https://www.researchgate.net/profile/Linus-Emeanulu",
    verified: true,
    approved: true,
  },
  {
    id: "profile-linkedin",
    platform: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://uk.linkedin.com/in/dr-linus-uche-emeanulu-373b04141",
    verified: true,
    approved: true,
  },
];

// ── CV availability ──────────────────────────────────────────────
export const cvAvailability = {
  available: true,
  fileName: "Linus_Emeanulu_CV.pdf",
  verified: true,
};

// ── Professional experience timeline ─────────────────────────────
export const experienceTimeline = [
  {
    id: "exp-1",
    period: "May 2022 – Present",
    position: "Business Management Associate Lecturer",
    institution: "University of the West of Scotland",
    description:
      "Contributing to teaching and research in business and management, with a focus on operational risk, knowledge management, leadership, and higher education.",
    verified: true,
    approved: true,
  },
];
