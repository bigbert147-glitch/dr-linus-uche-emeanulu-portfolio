import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"
import {
  education,
  experienceTimeline,
  cvAvailability,
} from "../data/professionalProfile.js"

function Experience() {
  const approvedExperience = experienceTimeline.filter(
    (entry) => entry.verified && entry.approved
  )

  const approvedEducation = education.filter(
    (entry) => entry.verified && entry.approved
  )

  const cvUrl = `${import.meta.env.BASE_URL}assets/documents/${cvAvailability.fileName}`

  return (
    <>
      <PageHeader
        eyebrow="Experience & Education"
        title="Professional Experience & Education"
        description="An overview of Dr. Linus Uche Emeanulu&apos;s academic appointment, educational qualifications, and curriculum vitae."
      />

      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
            description="Documented academic and professional appointments."
          />

          {approvedExperience.length > 0 ? (
            <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-0.5 before:bg-midnight-100">
              {approvedExperience.map((entry) => (
                <article key={entry.id} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600">
                    <span
                      className="h-3 w-3 rounded-full bg-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
                    <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-teal-600">
                      {entry.period}
                    </p>

                    <h3 className="mb-1 font-serif text-xl font-semibold text-midnight-800">
                      {entry.position}
                    </h3>

                    <p className="mb-3 font-sans text-sm text-midnight-500">
                      {entry.institution}
                    </p>

                    <p className="text-base leading-relaxed text-scholar-slate">
                      {entry.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center leading-relaxed text-scholar-slate">
              Verified professional experience will appear here when available.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Academic Background"
            title="Education & Qualifications"
            description="Verified academic qualifications and institutions."
          />

          {approvedEducation.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {approvedEducation.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg border border-midnight-100 bg-scholar-paper p-6"
                >
                  <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-teal-600">
                    {item.period}
                  </p>

                  <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-800">
                    {item.programme}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-midnight-500">
                    {item.institution}
                  </p>

                  {item.focus && (
                    <p className="text-sm leading-relaxed text-scholar-slate">
                      <span className="font-semibold">Academic focus: </span>
                      {item.focus}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center leading-relaxed text-scholar-slate">
              Verified educational qualifications will appear here when available.
            </p>
          )}
        </div>
      </section>

      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Curriculum Vitae"
            title="Academic CV"
            description="Explore or download the full academic and professional curriculum vitae."
          />

          <div className="rounded-xl border border-midnight-100 bg-white p-8 text-center shadow-sm sm:p-12">
            {cvAvailability.available && cvAvailability.verified ? (
              <>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-midnight-800">
                  Curriculum Vitae
                </h3>

                <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-scholar-slate">
                  The CV provides further details about Dr. Linus Uche
                  Emeanulu&apos;s academic qualifications, professional experience,
                  research, and publications.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={cvUrl}
                    download
                    className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700"
                  >
                    Download CV (PDF)
                  </a>

                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-medium text-teal-700 transition-colors hover:bg-teal-50"
                  >
                    View CV
                  </a>
                </div>
              </>
            ) : (
              <p className="leading-relaxed text-scholar-slate">
                The downloadable CV is currently unavailable. Please use the
                Contact page to request a copy.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
