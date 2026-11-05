# DECISIONS

## Approved Decisions

### D-001: React and Vite Technology Stack

| Field | Value |
|-------|-------|
| Decision | Use React, Vite, Tailwind CSS, JavaScript, and React Router for the portfolio website. |
| Reason | The project owner wants a simple, portable website that can be maintained in VS Code. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-002: Modern Scholar Visual Identity

| Field | Value |
|-------|-------|
| Decision | Use midnight/deep blue, refined teal, Manrope, Lora, spacious layouts, and restrained academic styling. |
| Reason | This visual direction presents a credible and professional academic identity. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-003: No Database or Authentication at Current Stage

| Field | Value |
|-------|-------|
| Decision | Keep the website front-end-only while content is being assembled and verified. |
| Reason | The current requirements do not need persistent user data, accounts, or a content management system. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-004: Content Verification Before Public Display

| Field | Value |
|-------|-------|
| Decision | Do not publish unverified academic claims. Use explicit placeholders or omit content until verified and approved. |
| Reason | The website represents a real academic and must protect professional accuracy. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-005: Static Contact Page Until Delivery Service Is Selected

| Field | Value |
|-------|-------|
| Decision | Show approved contact routes without adding a form until a secure message-delivery service is selected and configured. |
| Reason | A form without real delivery would be misleading, and the provider choice affects cost, privacy, and security. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-006: Publication Dataset Requires Verification

| Field | Value |
|-------|-------|
| Decision | Store publication records in `src/data/publications.js` and expose only records with `verified: true`. |
| Reason | Publication information must be checked against original sources before display. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-007: Five Verified Publications Added

| Field | Value |
|-------|-------|
| Decision | Add five publication records after checking institutional and publisher sources. |
| Reason | These records provide the first usable publication dataset while preserving source links and verification notes. |
| Status | Implemented — awaiting final approval for public release |
| Date | 2026-10-15 |

---

### D-008: Publication Search and Filters

| Field | Value |
|-------|-------|
| Decision | Provide case-insensitive search across title, authors, venue, and abstract, plus year and type filters. |
| Reason | Visitors need a practical way to explore the publication record without adding unnecessary complexity. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-009: No Fake CV Download

| Field | Value |
|-------|-------|
| Decision | Show an online CV summary but do not create a download link until an approved CV document is supplied. |
| Reason | A fabricated or unapproved document would misrepresent Dr. Linus's credentials. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-010: Empty States for Unverified Sections

| Field | Value |
|-------|-------|
| Decision | Use honest empty states for events, articles, achievements, and other sections without approved records. |
| Reason | Empty states are clearer and safer than invented content or decorative controls that imply unavailable information. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-011: External Links Open Safely

| Field | Value |
|-------|-------|
| Decision | External profile and publication links open in a new tab with `rel="noopener noreferrer"`. |
| Reason | This improves visitor experience while preventing the opened page from controlling the portfolio tab. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-012: Page-Level Headers Use Shared Component

| Field | Value |
|-------|-------|
| Decision | Use the shared `PageHeader` component for dedicated page titles and descriptions. |
| Reason | Consistent headers improve navigation and reduce duplicated presentation code. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-013: Homepage Content Uses Structured Data

| Field | Value |
|-------|-------|
| Decision | Keep research themes, expertise areas, and career milestones in `src/data/homeContent.js`. |
| Reason | A beginner can update content without editing the page layout. |
| Status | Implemented |
| Date | 2026-10-15 |

---

### D-014: Approved Photographs Stored Locally

| Field | Value |
|-------|-------|
| Decision | Store approved photographs in `public/images/` and reference them with local paths. |
| Reason | Local assets remain available after the project is downloaded and avoid dependence on temporary or external image URLs. |
| Status | Implemented |
| Date | 2026-10-17 |

---

### D-015: Primary and Supporting Photograph Placement

| Field | Value |
|-------|-------|
| Decision | Use `IMG-20261015-WA0013.jpg` as the primary profile photograph on Home and About. Use `IMG-20261015-WA0007.jpg` once as a supporting professional portrait on About only. |
| Reason | The first portrait supports the main academic identity, while the second adds variety without repeating photographs throughout the site. |
| Status | Implemented |
| Date | 2026-10-17 |

---

### D-016: Approved Direct Contact Email

| Field | Value |
|-------|-------|
| Decision | Display `Macinfor20@gmail.com` as a clickable `mailto:` contact on the Contact page and in the shared footer. |
| Reason | Dr. Linus supplied this approved contact channel. No phone number or postal address was added. |
| Status | Implemented |
| Date | 2026-10-17 |

---

## Open Decisions

### O-001: Contact Form Processing Service

| Field | Value |
|-------|-------|
| Question | Which service will process contact form submissions? |
| Context | Needed for Stage 7. Options include Formspree, Netlify Forms, or a Supabase Edge Function. |
| Status | Open |
| Notes | Cost, privacy, and architecture implications must be reviewed before selection. |

---

### O-002: Hosting and Domain

| Field | Value |
|-------|-------|
| Question | Where will the production website be hosted, and will a custom domain be used? |
| Context | Needed for Stage 11. Options include Netlify, Vercel, GitHub Pages, or others. |
| Status | Open |
| Notes | Affects deployment configuration and HTTPS setup. |

---

### O-003: Academic Profile Links

| Field | Value |
|-------|-------|
| Question | Which verified academic profiles (ORCID, Google Scholar, etc.) will be linked? |
| Context | Needed for homepage and publications page. |
| Status | Resolved — ResearchGate and LinkedIn profiles approved by Dr. Linus. Links displayed on About, CV, and Contact pages. ORCID and Google Scholar not found. |
| Notes | Identity consistent with verified publication records. Dr. Linus has approved these links for public display. |

---

### O-004: Approved Photographs

| Field | Value |
|-------|-------|
| Question | Which photographs are approved for use on the website? |
| Context | Needed for homepage, about page, and potentially other pages. |
| Status | Resolved — two photographs supplied and approved for portfolio use. |
| Notes | `IMG-20261015-WA0013.jpg` is the primary profile photograph used on Home and About. `IMG-20261015-WA0007.jpg` is used once as a supporting professional portrait on About. |

---

### O-005: CV Document

| Field | Value |
|-------|-------|
| Question | What is the approved CV document for download? |
| Context | Needed for CV page. |
| Status | Open |
| Notes | Must be supplied and approved by Dr. Linus. |
