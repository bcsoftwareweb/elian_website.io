import { ClickToCall } from './ClickToCall.tsx'

type CallToActionProps = {
  title: string
  description: string
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="border-t-4 border-cream bg-clay text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-3 text-base text-cream/85">{description}</p>
        </div>
        <ClickToCall
          label="Call Now"
          className="border border-cream bg-cream text-clay hover:bg-ink"
        />
      </div>
    </section>
  )
}
