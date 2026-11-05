// Publications data — structured records for Dr. Linus's verified publications.
//
// Records are sourced from original institutional and publisher pages.
// Each record's `source` and `verificationNotes` fields document where
// the metadata was confirmed. See docs/RESEARCH_REGISTER.md for the
// full evidence trail.
//
// ── Record shape ──────────────────────────────────────────────────
//   {
//     id: "pub-001",                     // Stable internal ID (unique)
//     title: "Publication Title",         // Exact title as published
//     authors: "Author A, Author B",     // Full author list in order
//     year: 2024,                         // Publication or acceptance year
//     venue: "Journal or Publisher Name", // Journal, conference, book publisher
//     type: "Journal Article",            // See publicationTypes below
//     abstract: "Short verified summary", // Optional — concise neutral summary
//     doi: "10.0000/xxxxx",              // Optional — DOI when available
//     url: "https://...",                // Optional — source/publisher page URL
//     themes: ["theme-1"],               // Optional — related research theme IDs
//     verified: true,                     // Must be true for public display
//     source: "Source URL or document",   // Internal: where the record was confirmed
//     verificationNotes: "Notes",         // Internal: verification details
//   }
//
// Only records with verified: true appear on the public publications page.

export const publications = [
  {
    id: "pub-001",
    title:
      "An Analysis of the Relationship between Operational Risk Management and Knowledge Management in Improving Small and Medium Enterprises (SMEs) Performance in Nigeria",
    authors: "Linus Uche Emeanulu, Christian Harrison, Mary Fletcher",
    year: 2019,
    venue: "BAM2019 Conference Proceedings, British Academy of Management",
    type: "Conference Paper",
    abstract:
      "The study examines how operational risk management and knowledge management may support the performance and development of Nigerian SMEs.",
    doi: "",
    url: "https://research-portal.uws.ac.uk/en/publications/an-analysis-of-the-relationship-between-operational-risk-manageme/",
    themes: ["theme-orm", "theme-km"],
    verified: true,
    source:
      "UWS Research Portal — https://research-portal.uws.ac.uk/en/publications/an-analysis-of-the-relationship-between-operational-risk-manageme/",
    verificationNotes:
      "Title, authors, year, venue, and type confirmed from the UWS institutional research portal record. No DOI identified in the institutional record. Identity confirmed: Linus Uche Emeanulu listed as first author at UWS. Awaiting Dr. Linus's approval for public release.",
  },
  {
    id: "pub-002",
    title:
      "The Influence of Transformational Leadership Style on Students' Learning Motivation in UK Universities",
    authors: "Linus Uche Emeanulu, Hasan Sayed",
    year: 2024,
    venue: "Open Access Library Journal, Vol. 11, pp. 1–21",
    type: "Journal Article",
    abstract:
      "The study investigates the relationship between transformational leadership and university students' learning motivation.",
    doi: "10.4236/oalib.1111295",
    url: "https://www.scirp.org/journal/paperinformation?paperid=132072",
    themes: ["theme-leadership", "theme-higher-ed"],
    verified: true,
    source:
      "SCIRP publisher page — https://www.scirp.org/journal/paperinformation?paperid=132072",
    verificationNotes:
      "Title, authors, year, venue, DOI, and type confirmed from the SCIRP publisher page. Identity confirmed: Linus Uche Emeanulu listed as first author. Awaiting Dr. Linus's approval for public release.",
  },
  {
    id: "pub-003",
    title:
      "Effects of Housing Accessibility on the General Well-Being of International Students at the University of the West of Scotland (UWS)",
    authors: "Odenkey Abbey Godfred Nii, Linus Uche Emeanulu",
    year: 2025,
    venue: "Open Access Library Journal, Vol. 12, pp. 1–27",
    type: "Journal Article",
    abstract:
      "The study examines how access to housing relates to the well-being and student experience of international students at UWS.",
    doi: "10.4236/oalib.1113068",
    url: "https://www.scirp.org/journal/paperinformation?paperid=141521",
    themes: ["theme-higher-ed"],
    verified: true,
    source:
      "SCIRP publisher page — https://www.scirp.org/journal/paperinformation?paperid=141521",
    verificationNotes:
      "Title, authors, year, venue, DOI, and type confirmed from the SCIRP publisher page. Identity confirmed: Linus Uche Emeanulu listed as second author, affiliated with UWS. Awaiting Dr. Linus's approval for public release.",
  },
  {
    id: "pub-004",
    title:
      "Examining the Role of Transformational Leadership in Shaping Employee Behaviour: An Empirical Analysis of Pakistani SMEs",
    authors: "Rabia Munir, Linus Uche Emeanulu, Adejoke Adeyemi",
    year: 2025,
    venue: "Open Access Library Journal, Vol. 12, pp. 1–23",
    type: "Journal Article",
    abstract:
      "The study examines transformational leadership in relation to job satisfaction, employee motivation, and innovative work behaviour in Pakistani SMEs.",
    doi: "10.4236/oalib.1113067",
    url: "https://www.scirp.org/journal/paperinformation?paperid=142443",
    themes: ["theme-leadership", "theme-orm"],
    verified: true,
    source:
      "SCIRP publisher page — https://www.scirp.org/journal/paperinformation?paperid=142443",
    verificationNotes:
      "Title, authors, year, venue, DOI, and type confirmed from the SCIRP publisher page. Identity confirmed: Linus Uche Emeanulu listed as second author. Awaiting Dr. Linus's approval for public release.",
  },
  {
    id: "pub-005",
    title:
      "Risk Communication Model: An Efficient and Effective Way to Manage the Operational Risks Faced by Nigerian SMEs",
    authors: "Linus Uche Emeanulu",
    year: 2026,
    venue: "Modern Studies in African Society, Ch. 8, Emerald Publishing",
    type: "Book Chapter",
    abstract:
      "The chapter explores communication strategies for managing operational risks in Nigerian SMEs.",
    doi: "10.1108/978-1-83608-260-620261008",
    url: "https://www.emerald.com/books/edited-volume/21677/chapter-abstract/117660992/Risk-Communication-Model-An-Efficient-and",
    themes: ["theme-orm"],
    verified: true,
    source:
      "Emerald Publishing — https://www.emerald.com/books/edited-volume/21677/chapter-abstract/117660992/Risk-Communication-Model-An-Efficient-and",
    verificationNotes:
      "Title, author, year, venue, DOI, chapter number, and type confirmed from the Emerald publisher page. Identity confirmed: Linus Uche Emeanulu listed as sole author. Awaiting Dr. Linus's approval for public release.",
  },
]

// Publication types used for filtering. These are functional UI labels.
export const publicationTypes = [
  "Journal Article",
  "Book",
  "Book Chapter",
  "Conference Paper",
  "Thesis",
  "Report",
]

// Helper: returns only verified publications for public display.
export function getVerifiedPublications() {
  return publications.filter((pub) => pub.verified === true)
}

// Helper: returns a sorted list of unique years from verified publications.
// Used to populate the year filter dropdown dynamically.
export function getVerifiedYears() {
  const years = getVerifiedPublications()
    .map((pub) => pub.year)
    .filter((year) => typeof year === "number")
  return [...new Set(years)].sort((a, b) => b - a)
}
