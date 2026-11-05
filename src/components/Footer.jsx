import { Link } from "react-router-dom"
import { navLinks } from "../data/navLinks.js"

function Footer() {
  // Returns the current year for the copyright line.
  // new Date().getFullYear() reads the year from the user's clock,
  // so the footer always shows the correct year without manual updates.
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-midnight-900 text-midnight-100 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Site identity and description */}
          <div>
            <p className="font-serif text-lg font-semibold text-white mb-2">
              Dr. Linus Uche Emeanulu
            </p>
            <p className="text-sm leading-relaxed text-midnight-200 max-w-md">
              Academic portfolio presenting research interests, verified publications,
              teaching, and professional experience.
            </p>
            <a
              href="mailto:Macinfor20@gmail.com"
              className="mt-4 inline-block text-sm text-teal-300 underline decoration-teal-700 underline-offset-4 hover:text-teal-200"
            >
              Macinfor20@gmail.com
            </a>
          </div>

          {/* Quick navigation links */}
          <nav aria-label="Footer navigation" className="md:justify-self-end">
            <p className="text-sm font-semibold text-white mb-3">
              Pages
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-midnight-200 hover:text-teal-300 no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright line */}
        <div className="mt-8 border-t border-midnight-700 pt-6">
          <p className="text-sm text-midnight-300">
            &copy; {currentYear} Dr. Linus Uche Emeanulu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
