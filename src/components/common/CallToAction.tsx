import { ClickToCall } from './ClickToCall.tsx'

type CallToActionProps = {
  title: string
  description: string
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="border-t-4 border-clay bg-stone text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl text-clay sm:text-5xl">{title}</h2>
          <p className="mt-3 text-base text-ink-muted">{description}</p>
        </div>
        <ClickToCall label="Call Now" />
      </div>
    </section>
  )
}
