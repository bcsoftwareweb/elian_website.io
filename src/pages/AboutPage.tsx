import { CallToAction } from '../components/common/CallToAction.tsx'
import { aboutContent } from '../content/about.ts'

export function AboutPage() {
  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-clay uppercase">
              About Elian
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {aboutContent.hero.title}
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              {aboutContent.hero.description}
            </p>
          </div>
          <img
            src={aboutContent.hero.image.src}
            alt={aboutContent.hero.image.alt}
            className="h-72 w-full rounded-none object-cover sm:h-96"
            width={900}
            height={720}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          {aboutContent.history.title}
        </h2>
        {aboutContent.history.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl text-lg text-ink-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {aboutContent.mission.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-muted">
            {aboutContent.mission.body}
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutContent.values.map((value) => (
              <li key={value.title} className="border border-ink/10 bg-cream p-6">
                <h3 className="font-serif text-2xl tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 text-ink-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img
          src={aboutContent.studio.image.src}
          alt={aboutContent.studio.image.alt}
          className="h-72 w-full rounded-none object-cover sm:h-96"
          width={800}
          height={640}
        />
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {aboutContent.studio.title}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            {aboutContent.studio.description}
          </p>
        </div>
      </section>

      <CallToAction
        title="Talk with the shop"
        description="Call to ask about a piece, pull a size, or stop by Orchard Street."
      />
    </>
  )
}
