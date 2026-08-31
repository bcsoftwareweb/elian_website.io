import { ClickToCall } from './ClickToCall.tsx'

type CallToActionProps = {
  title: string
  description: string
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-cream/80">{description}</p>
        </div>
        <ClickToCall
          label="Call Now"
          className="bg-clay hover:bg-clay-dark text-cream"
        />
      </div>
    </section>
  )
}
