import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"
import { appointments } from "../data/professionalProfile.js"

function Teaching() {
  const teachingAppointments = appointments.filter(
    (entry) => entry.verified && entry.approved
  )

  return (
    <>
      <PageHeader
        eyebrow="Teaching & Supervision"
        title="Teaching, Learning & Academic Practice"
        description="Academic teaching and research in business and management."
      />

      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Academic Appointment"
            title="Teaching Experience"
            description="An overview of Dr. Linus Uche Emeanulu&apos;s documented academic teaching role."
          />

          <div className="space-y-6">
            {teachingAppointments.map((entry) => (
              <article
                key={entry.id}
                className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-teal-600">
                  {entry.startDate} – {entry.endDate}
                </p>

                <h2 className="mb-2 font-serif text-2xl font-semibold text-midnight-800">
                  {entry.position}
                </h2>

                <p className="mb-5 font-sans text-base font-medium text-midnight-500">
                  {entry.institution}
                </p>

                <div className="border-t border-midnight-100 pt-5">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-midnight-800">
                    Academic Responsibilities
                  </h3>

                  <p className="text-base leading-relaxed text-scholar-slate">
                    {entry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-midnight-100 bg-white p-6 sm:p-8">
            <h2 className="mb-3 font-serif text-xl font-semibold text-midnight-800">
              Academic Focus
            </h2>

            <p className="text-base leading-relaxed text-scholar-slate">
              Dr. Linus&apos;s academic work is situated within business and
              management, connecting teaching and research with areas such
              as operational risk management, knowledge management,
              leadership, and higher education.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Teaching
