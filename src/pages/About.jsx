import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"
import {
  biography,
  education,
  appointments,
  institutionalAffiliation,
  academicProfiles,
} from "../data/professionalProfile.js"

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Biography"
        description="An overview of Dr. Linus's academic background, professional role, and research interests."
      />

      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Primary profile photograph */}
            <div>
              <img
                src="/images/IMG-20261015-WA0013.jpg"
                alt="Dr. Linus Uche Emeanulu, academic and business management professional"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top shadow-md"
              />
            </div>

            {/* Biography content */}
            <div>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-midnight-800">
                Academic Biography
              </h2>

              {/* Biography paragraphs */}
              {biography.map((para) => (
                <p
                  key={para.id}
                  className="mb-4 font-sans text-base leading-relaxed text-scholar-slate"
                >
                  {para.text}
                </p>
              ))}

              {/* Current academic role */}
              <h3 className="mb-3 mt-8 font-serif text-xl font-semibold text-midnight-700">
                Current Academic Role
              </h3>
              {appointments.length > 0 ? (
                <div className="space-y-3">
                  {appointments.map((appt) => (
                    <div
                      key={appt.id}
                      className="rounded-lg border border-midnight-100 bg-white p-4 shadow-sm"
                    >
                      <p className="font-sans text-base font-semibold text-midnight-800">
                        {appt.position}
                      </p>
                      <p className="font-sans text-sm text-midnight-500">
                        {appt.institution} &middot; {appt.startDate} – {appt.endDate}
                      </p>
                      {appt.description && (
                        <p className="mt-2 text-base leading-relaxed text-scholar-slate">
                          {appt.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-base leading-relaxed text-scholar-slate">
                  Professional appointment details will be listed here once
                  available.
                </p>
              )}

              {/* Academic background */}
              <h3 className="mb-3 mt-8 font-serif text-xl font-semibold text-midnight-700">
                Academic Background
              </h3>
              {education.length > 0 ? (
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="rounded-lg border border-midnight-100 bg-white p-4 shadow-sm"
                    >
                      <p className="font-sans text-base font-semibold text-midnight-800">
                        {edu.programme}
                      </p>
                      <p className="font-sans text-sm text-midnight-500">
                        {edu.institution} &middot; {edu.period}
                      </p>
                      {edu.focus && (
                        <p className="mt-2 text-base leading-relaxed text-scholar-slate">
                          Focus: {edu.focus}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-base leading-relaxed text-scholar-slate">
                  Academic background details will be listed here once
                  available.
                </p>
              )}

              {/* Academic and professional profile links */}
              <div className="mt-8">
                <h3 className="mb-3 font-serif text-xl font-semibold text-midnight-700">
                  Professional Profiles
                </h3>
                {academicProfiles.length > 0 ? (
                  <ul className="flex flex-wrap gap-4">
                    {academicProfiles.map((profile) => (
                      <li key={profile.id}>
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm font-medium text-teal-600 no-underline hover:text-teal-700"
                        >
                          {profile.label}
                          <span className="sr-only">
                            {" "}
                            (opens in a new tab)
                          </span>
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-sm leading-relaxed text-scholar-slate">
                    Professional profile links will appear here once
                    confirmed.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research interests summary */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Research Interests"
            title="Research and Contribution"
            description="Dr. Linus&apos;s research spans several connected areas reflected in his published work."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-scholar-slate">
              Dr. Linus&apos;s research interests include operational risk
              management, knowledge management, business and management,
              leadership, organisational behaviour, small and medium-sized
              enterprises, and higher education. His work examines how SMEs
              identify and manage operational risks, how transformational
              leadership influences employee behaviour and student learning,
              and how factors such as housing accessibility affect the
              well-being of international students.
            </p>
            <p className="text-base leading-relaxed text-scholar-slate">
              Through his teaching and research at the {institutionalAffiliation.institution},
              Dr. Linus contributes to understanding how organisations and
              educational institutions can apply effective management
              practices to improve performance, resilience, and student
              experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
