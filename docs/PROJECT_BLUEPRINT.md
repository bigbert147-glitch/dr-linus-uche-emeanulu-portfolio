# PROJECT BLUEPRINT

## Dr. Linus Uche Emeanulu — Academic and Research Portfolio

## 1. Purpose

A professional academic portfolio presenting verified information about Dr. Linus Uche Emeanulu, including his biography, research interests, publications, teaching, professional experience, education, and approved contact channels.

The primary positioning is Academic and Researcher.

## 2. Scope

A static, front-end application built with React, Vite, Tailwind CSS, and React Router.

There is currently no database, backend, authentication system, or CMS. Content is maintained through structured JavaScript data files and React page components in VS Code.

## 3. Approved Design Direction

The approved direction combines Modern Scholar and Premium Editorial.

Brand palette:

- Deep teal: `#123C3A`
- Accent green: `#3B8F70`
- White: `#FFFFFF`
- Light background: `#F4F7F6`
- Dark text: `#202927`
- Muted text: `#5F6B68`

Typography uses serif headings and sans-serif body text. Layouts prioritise readability, clear hierarchy, generous spacing, and responsive behaviour.

## 4. Approved Website Pages

| # | Page | Route | Current status |
|---|---|---|---|
| 1 | Home | `/` | Implemented |
| 2 | About | `/about` | Implemented |
| 3 | Research & Publications | `/research` | Implemented |
| 4 | Teaching & Supervision | `/teaching` | Implemented |
| 5 | Experience & Education | `/experience` | Implemented |
| 6 | Contact | `/contact` | Implemented |
| — | Not Found | `*` | Implemented |

Legacy routes redirect to their relevant consolidated pages:

- `/publications` → `/research`
- `/cv` → `/experience`
- `/events` → `/research`
- `/articles` → `/research`

## 5. Technology Stack

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 |
| Language | JavaScript / JSX |
| Content data | JavaScript modules |
| Documentation | Markdown |

The application remains independent of Bolt and is maintained locally in VS Code.

## 6. Content and Verification Rules

Never invent or assume:

- Academic qualifications or degrees.
- Employment history or academic appointments.
- Publication details or co-authors.
- Awards, achievements, or statistics.
- Institutional affiliations.
- Testimonials or endorsements.
- Contact details.

Only verified and approved information may be presented as established fact. Unverified information must be excluded or clearly identified.

Publication records must retain their verification information and original source references.

See `CONTENT_STANDARDS.md`, `PROFESSIONAL_PROFILE_RESEARCH.md`, and `RESEARCH_REGISTER.md`.

## 7. Implemented Functionality

- Responsive desktop and mobile navigation.
- Six approved website pages.
- Shared navigation and footer.
- Research themes and publication display.
- Publication search and filtering.
- DOI and publisher links where available.
- Teaching and professional experience sections.
- Education records.
- CV viewing and download.
- Email and WhatsApp contact links.
- Academic and social profile links.
- Custom not-found page.
- Legacy route redirects.

## 8. Outstanding Work

- Complete SEO metadata and search optimisation.
- Accessibility evaluation against WCAG 2.2 AA.
- Final responsive and cross-browser quality checks.
- Contact form validation, spam protection, and message delivery configuration.
- Performance optimisation.
- Final content approval where still required.
- GitHub repository setup and push.
- Hosting, domain configuration, and deployment.

## 9. Release Principles

- Build and verify changes incrementally.
- Preserve the project owner's control over significant decisions.
- Do not publish fabricated or unverified academic claims.
- Keep the project portable and maintainable in VS Code.
- Test production builds, navigation, links, downloads, responsiveness, and accessibility before release.
