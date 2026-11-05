# ARCHITECTURE

## Dr. Linus Uche Emeanulu — Academic Portfolio

## 1. Technology

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 |
| Language | JavaScript / JSX |
| Content data | JavaScript modules |
| Documentation | Markdown |

The application is front-end only. It does not currently require a database, backend, authentication system, or CMS.

## 2. Project Structure

```text
uche portfolio/
├── docs/                  # Project documentation
├── public/
│   ├── images/            # Approved photographs and images
│   └── assets/
│       └── documents/     # Approved CV and documents
├── src/
│   ├── components/        # Shared interface components
│   ├── data/              # Structured JavaScript content
│   ├── pages/             # Page-level React components
│   ├── App.jsx            # Application routes
│   ├── main.jsx           # Application entry point
│   └── index.css          # Tailwind directives and base styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
