import { Link } from "react-router-dom"
import SectionHeading from "../components/SectionHeading.jsx"
import PublicationCard from "../components/PublicationCard.jsx"
import {
  researchThemes,
  expertiseAreas,
  careerMilestones,
} from "../data/homeContent.js"
import { getVerifiedPublications } from "../data/publications.js"
import { institutionalAffiliation } from "../data/professionalProfile.js"

function Home() {
  // Show up to 2 featured publications on the homepage.
  const featuredPubs = getVerifiedPublications().slice(0, 2)

  return (
    <>
      {/* ================================================================
          A. HERO SECTION
          Dr. Linus's name, academic identity, and professional summary.
          A photograph placeholder sits to the right on desktop.
      ================================================================= */}
      <section className="bg-midnight-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Text content */}
            <div>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-teal-300">
                Academic &middot; Researcher &middot; Business Management Professional
              </p>
              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Dr. Linus Uche Emeanulu
              </h1>

              <p className="mb-8 max-w-xl font-sans text-lg leading-relaxed text-midnight-100">
                Academic, researcher, and Business Management Associate
                Lecturer at the {institutionalAffiliation.institution}. His
                research examines operational risk management, knowledge
                management, transformational leadership, and student
                experience, with a focus on small and medium-sized
                enterprises and higher education.
              </p>

              {/* Call-to-action links to existing routes */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/research"
                  className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-sans font-medium text-white no-underline transition-colors hover:bg-teal-700"
                >
                  View Research
                </Link>
                <Link
                  to="/publications"
                  className="inline-block rounded-lg border border-midnight-300 px-6 py-3 font-sans font-medium text-white no-underline transition-colors hover:bg-midnight-800"
                >
                  Publications
                </Link>
                <Link
                  to="/contact"
                  className="inline-block rounded-lg border border-midnight-300 px-6 py-3 font-sans font-medium text-white no-underline transition-colors hover:bg-midnight-800"
                >
                  Contact
                </Link>
              </div>
            </div>

              {/* Primary profile photograph */}
            <div className="block w-full max-w-sm mx-auto lg:mx-0">
              <img
                src="/images/IMG-20261015-WA0013.jpg"
                alt="Dr. Linus Uche Emeanulu, academic and business management professional"
                className="mx-auto aspect-square w-full max-w-sm rounded-2xl object-cover object-top shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          B. RESEARCH FOCUS
          Research interests and themes derived from verified publications.
      ================================================================= */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Research Focus"
            title="Research Interests & Themes"
            description="Dr. Linus's research areas, reflected in his published work and professional profile."
          />

          {/* Research themes â€” data-driven cards from homeContent.js */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchThemes.map((theme) => (
              <div
                key={theme.id}
                className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                  {theme.title}
                </h3>
                <p className="text-base leading-relaxed text-scholar-slate">
                  {theme.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/research"
              className="font-sans font-medium text-teal-600 no-underline hover:text-teal-700"
            >
              Explore research in detail &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          C. FEATURED PUBLICATIONS
          Draws from the existing verified publication data.
      ================================================================= */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Publications"
            title="Featured Publications"
            description="Selected publications from Dr. Linus's verified record, with links to original sources."
          />

          <div className="grid gap-6">
            {featuredPubs.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/publications"
              className="font-sans font-medium text-teal-600 no-underline hover:text-teal-700"
            >
              Browse all publications &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          D. EXPERTISE
          Areas of expertise derived from publications and teaching role.
      ================================================================= */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Expertise"
            title="Areas of Expertise"
            description="Dr. Linus's areas of expertise, drawn from his published research and academic role."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                  {area.title}
                </h3>
                <p className="text-base leading-relaxed text-scholar-slate">
                  {area.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          E. CAREER AND IMPACT
          Professional milestones from Dr. Linus's approved profile.
      ================================================================= */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Career & Impact"
            title="Professional Milestones"
            description="Key milestones from Dr. Linus's academic and professional journey."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerMilestones.map((milestone) => (
              <div
                key={milestone.id}
                className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                  {milestone.title}
                </h3>
                <p className="text-base leading-relaxed text-scholar-slate">
                  {milestone.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/experience"
              className="font-sans font-medium text-teal-600 no-underline hover:text-teal-700"
            >
              View full experience &amp; achievements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          F. CONTACT CALL TO ACTION
          Links to the existing Contact page.
      ================================================================= */}
      <section className="bg-teal-700 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-teal-50">
            For academic collaboration, research enquiries, or professional
            contact, please use the contact page.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3.5 font-sans font-semibold text-teal-700 no-underline transition-colors hover:bg-teal-50"
          >
            Contact Dr. Linus
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
