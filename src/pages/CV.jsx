import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { cvAvailability } from "../data/professionalProfile.js";

function CV() {
  const cvUrl = `${import.meta.env.BASE_URL}assets/documents/${cvAvailability.fileName}`;

  return (
    <>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="Academic CV"
        description="Explore or download Dr. Linus Uche Emeanulu&apos;s curriculum vitae."
      />

      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          {cvAvailability.available ? (
            <div className="rounded-xl border border-midnight-100 bg-white p-8 shadow-sm sm:p-12">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-midnight-800">
                Curriculum Vitae
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-scholar-slate">
                Dr. Linus Uche Emeanulu&apos;s academic and professional
                qualifications, experience, research, and publications are
                presented in his curriculum vitae.
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
            </div>
          ) : (
            <div className="rounded-xl border border-midnight-100 bg-white p-8 shadow-sm">
              <p className="leading-relaxed text-scholar-slate">
                The downloadable CV is currently unavailable. Please contact Dr.
                Linus directly to request a copy.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-block font-medium text-teal-600 hover:text-teal-700"
              >
                Request the CV directly â†’
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default CV;
