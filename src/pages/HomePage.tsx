import { Link } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction.tsx'
import { ClickToCall } from '../components/common/ClickToCall.tsx'
import { CategorySection } from '../components/product/CategorySection.tsx'
import { ProductGrid } from '../components/product/ProductGrid.tsx'
import { getCategories } from '../content/categories.ts'
import { homeContent } from '../content/home.ts'
import { getFeaturedProducts } from '../content/products.ts'

export function HomePage() {
  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-clay uppercase">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-muted">
              {homeContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ClickToCall label="Call Now" />
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-none border border-ink/25 px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink uppercase transition hover:border-clay hover:text-clay"
              >
                Browse Products
              </Link>
            </div>
          </div>
          <img
            src={homeContent.hero.image.src}
            alt={homeContent.hero.image.alt}
            className="h-72 w-full rounded-none object-cover sm:h-96 lg:h-[28rem]"
            width={900}
            height={720}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img
          src={homeContent.introduction.image.src}
          alt={homeContent.introduction.image.alt}
          className="h-72 w-full rounded-none object-cover sm:h-96"
          width={800}
          height={640}
        />
        <div>
          <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            {homeContent.introduction.title}
          </h2>
          {homeContent.introduction.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              The drop
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Four collections. New categories can be added later without
              changing the site structure.
            </p>
          </div>
          <div className="mt-10">
            <CategorySection categories={getCategories()} />
          </div>
          <div className="mt-8">
            <Link
              to="/collections"
              className="text-sm font-semibold text-clay underline-offset-4 hover:underline"
            >
              View collections
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          {homeContent.featuredBand.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted">
          {homeContent.featuredBand.description}
        </p>
        <div className="mt-10">
          <ProductGrid products={getFeaturedProducts()} />
        </div>
        <Link
          to="/products"
          className="mt-8 inline-flex text-sm font-semibold text-clay underline-offset-4 hover:underline"
        >
          Open the catalog
        </Link>
      </section>

      <CallToAction
        title={homeContent.cta.title}
        description={homeContent.cta.description}
      />
    </>
  )
}
