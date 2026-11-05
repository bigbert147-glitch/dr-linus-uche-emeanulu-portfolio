import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../data/navLinks.js"

function Navbar() {
  // Tracks whether the mobile menu is open.
  // useState is a React hook that lets a component remember a value
  // and re-render when that value changes.
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu when a link is tapped.
  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-midnight-900 text-white shadow-md">
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Site identity — text-based until an approved logo is available */}
          <Link
            to="/"
            onClick={closeMenu}
            className="font-serif text-lg font-semibold text-white hover:text-teal-300 no-underline"
          >
            Dr. Linus Uche Emeanulu
          </Link>

          {/* Desktop navigation — hidden on small screens */}
          <ul className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    "block rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors " +
                    (isActive
                      ? "bg-teal-600 text-white"
                      : "text-midnight-100 hover:bg-midnight-800 hover:text-white")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle — visible only on small screens */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-midnight-100 hover:bg-midnight-800 hover:text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger icon (three lines) when menu is closed,
                X icon when menu is open */}
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel — slides in below the header on small screens */}
        {isOpen && (
          <ul
            id="mobile-menu"
            className="lg:hidden border-t border-midnight-700 pb-4 pt-2"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    "block rounded-md px-3 py-2.5 text-base font-medium no-underline transition-colors " +
                    (isActive
                      ? "bg-teal-600 text-white"
                      : "text-midnight-100 hover:bg-midnight-800 hover:text-white")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar
