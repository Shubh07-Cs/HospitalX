import {
  Activity,
  ArrowRight,
  Baby,
  BedDouble,
  Building2,
  CalendarDays,
  Heart,
  HeartPulse,
  MapPin,
  MessageCircle,
  ScanSearch,
  ShieldAlert,
  Stethoscope,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DoctorCard } from '../components/content/DoctorCard.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { ButtonLink } from '../components/ui/button.jsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section, SectionHeading } from '../components/ui/section.jsx'
import { blogs } from '../data/blogs.js'
import { departments } from '../data/departments.js'
import { facilities } from '../data/facilities.js'
import { homepage } from '../data/homepage.js'
import { hospital } from '../data/hospital.js'
import { packages } from '../data/packages.js'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import { doctors } from '../data/doctors.js'

const iconByName = {
  activity: Activity,
  baby: Baby,
  bed: BedDouble,
  building: Building2,
  care: HeartPulse,
  department: Stethoscope,
  doctor: Stethoscope,
  heart: Heart,
  message: MessageCircle,
  people: Users,
  scan: ScanSearch,
  stethoscope: Stethoscope,
}

function HomePage() {
  useEffect(() => {
    document.title = `${hospital.name} | Care begins here`
  }, [])

  const approvedTestimonials = testimonials.filter(
    (testimonial) => testimonial.consentApproved && testimonial.contentStatus === 'approved'
  )

  return (
    <>
      <div className="border-b border-amber-200 bg-amber-50">
        <Container className="flex min-h-11 items-center gap-2 py-2 text-xs leading-relaxed text-amber-950 sm:text-sm">
          <span className="shrink-0 rounded bg-amber-100 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide">
            Design preview
          </span>
          <p>
            Names, services, and sample copy on this page are illustrative and not
            hospital-approved.
          </p>
        </Container>
      </div>

      <section className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-medical-primary-light/60 lg:block"
        />
        <Container className="grid min-h-[36rem] items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6">
              {homepage.heroLabel}
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {homepage.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-medical-secondary-text sm:text-lg">
              {homepage.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/appointment">
                <CalendarDays aria-hidden="true" />
                Book an appointment
              </ButtonLink>
              <ButtonLink to="/doctors" variant="outline">
                Find a doctor
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </div>
            <div className="mt-8 flex items-start gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <ShieldAlert
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-medical-emergency"
              />
              <p>
                <span className="font-semibold text-foreground">Need urgent help?</span> Emergency
                details are available on our{' '}
                <Link
                  className="font-semibold text-primary underline underline-offset-4"
                  to="/emergency"
                >
                  emergency information page
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-medical-primary-light bg-gradient-to-br from-medical-primary-light via-medical-accent-light to-medical-soft p-5 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -top-14 -right-10 size-56 rounded-full border-[36px] border-white/40"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-12 size-64 rounded-full bg-white/40"
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-xs font-semibold text-medical-primary-dark shadow-sm">
                    <HeartPulse aria-hidden="true" className="size-4" />
                    Your care journey
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm">
                    <Heart aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-lg border border-white/70 bg-white/85 px-6 py-7 text-center shadow-sm backdrop-blur-sm">
                  <span className="flex size-16 items-center justify-center rounded-full bg-medical-primary-light text-primary">
                    <Stethoscope aria-hidden="true" className="size-8" />
                  </span>
                  <p className="mt-4 text-lg font-semibold">{homepage.heroNote}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Find information, explore care, and plan your next step.
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-medical-primary-dark">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-medical-accent" />
                    Here to help
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <HeartPulse aria-hidden="true" className="size-4" />
                    Care information
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-right text-xs text-muted-foreground">
              Illustrative design artwork
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Quick actions" className="relative z-10 -mt-1 bg-white">
        <Container>
          <div className="grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {homepage.quickLinks.map(({ id, icon, title, description, href }) => {
              const Icon = iconByName[icon] ?? HeartPulse
              return (
                <Link
                  key={id}
                  className="group flex min-h-24 items-center gap-4 px-2 py-5 transition-colors hover:bg-medical-page focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5"
                  to={href}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-foreground">{title}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                      {description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <EditorialVisual
            icon={HeartPulse}
            label="A hospital story"
            className="order-2 lg:order-1"
          />
          <div className="order-1 max-w-xl lg:order-2">
            <SectionHeading
              eyebrow={homepage.about.eyebrow}
              title={homepage.about.title}
              description={homepage.about.description}
            />
            <ButtonLink to={homepage.about.href} variant="outline">
              {homepage.about.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-white">
        <Container>
          <SectionHeading
            eyebrow={homepage.departments.eyebrow}
            title={homepage.departments.title}
            description={homepage.departments.description}
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {departments.slice(0, 4).map((department) => (
              <Link
                key={department.id}
                className="group rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                to={`/departments/${department.slug}`}
              >
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <CardContent className="flex h-full flex-col items-start pt-5">
                    <IconTile icon={department.icon} />
                    <span className="mt-4 inline-flex rounded bg-medical-soft px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-medical-muted-text">
                      Example department
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{department.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {department.summary}
                    </p>
                    <span className="mt-auto inline-flex min-h-10 items-center gap-1 pt-3 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink to={homepage.departments.href} variant="outline">
              {homepage.departments.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow={homepage.doctors.eyebrow}
              title={homepage.doctors.title}
              description={homepage.doctors.description}
            />
            <ButtonLink className="shrink-0" to={homepage.doctors.href} variant="outline">
              {homepage.doctors.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} headingLevel={3} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-white">
        <Container>
          <SectionHeading
            eyebrow={homepage.services.eyebrow}
            title={homepage.services.title}
            description={homepage.services.description}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} className="h-full">
                <CardContent className="flex items-start gap-4 pt-5">
                  <IconTile icon={service.icon} />
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {service.category}
                    </span>
                    <h3 className="mt-1 font-semibold">{service.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ButtonLink className="mt-7" to={homepage.services.href} variant="outline">
            {homepage.services.actionLabel}
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="overflow-hidden rounded-xl bg-medical-primary px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-white/75">
                  {homepage.whyChooseUs.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {homepage.whyChooseUs.title}
                </h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  {homepage.whyChooseUs.description}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {homepage.whyChooseUs.items.map(({ id, icon, title, description }) => {
                  const Icon = iconByName[icon] ?? HeartPulse
                  return (
                    <div key={id} className="rounded-lg border border-white/15 bg-white/10 p-4">
                      <Icon aria-hidden="true" className="size-5 text-white" />
                      <h3 className="mt-4 font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={homepage.facilities.eyebrow}
              title={homepage.facilities.title}
              description={homepage.facilities.description}
            />
            <ButtonLink to={homepage.facilities.href} variant="outline">
              {homepage.facilities.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {facilities.slice(0, 4).map((facility, index) => (
              <div
                key={facility.id}
                className={`relative flex min-h-36 flex-col justify-between overflow-hidden rounded-lg border border-border p-4 sm:min-h-44 sm:p-5 ${
                  index === 0 || index === 3 ? 'bg-medical-primary-light' : 'bg-medical-page'
                }`}
              >
                <IconTile icon={facility.icon} />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    Example facility
                  </p>
                  <h3 className="mt-1 font-semibold">{facility.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow={homepage.packages.eyebrow}
              title={homepage.packages.title}
              description={homepage.packages.description}
            />
            <ButtonLink className="shrink-0" to={homepage.packages.href} variant="outline">
              {homepage.packages.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((healthPackage) => (
              <Card key={healthPackage.id} className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Example package
                  </Badge>
                  <CardTitle className="pt-2 text-lg">{healthPackage.name}</CardTitle>
                  <CardDescription>{healthPackage.summary}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {healthPackage.priceApproved && healthPackage.price != null
                        ? healthPackage.price
                        : 'To be confirmed'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-medical-page">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={homepage.testimonials.eyebrow}
              title={homepage.testimonials.title}
              description={homepage.testimonials.description}
            />
          </div>
          {approvedTestimonials.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {approvedTestimonials.slice(0, 2).map((testimonial) => (
                <Card key={testimonial.id} className="bg-white">
                  <CardContent className="pt-5">
                    <p className="leading-relaxed">{testimonial.quote}</p>
                    <p className="mt-4 text-sm font-semibold">{testimonial.displayName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              className="bg-white"
              title="Patient stories will appear here"
              description="We will only share testimonials after the hospital has confirmed patient consent and approved the content."
            />
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow={homepage.articles.eyebrow}
              title={homepage.articles.title}
              description={homepage.articles.description}
            />
            <ButtonLink className="shrink-0" to={homepage.articles.href} variant="outline">
              {homepage.articles.actionLabel}
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                className="group rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                to={`/blog/${article.slug}`}
              >
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <div className="flex aspect-[16/9] items-center justify-center bg-medical-primary-light text-primary">
                    <MessageCircle aria-hidden="true" className="size-9" />
                  </div>
                  <CardContent className="flex h-full flex-col pt-4">
                    <Badge variant="secondary" className="w-fit">
                      {article.category}
                    </Badge>
                    <h3 className="mt-3 text-lg font-semibold leading-snug">{article.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex min-h-10 items-center gap-1 pt-3 text-sm font-semibold text-primary">
                      Preview article
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-white">
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={homepage.contact.eyebrow}
              title={homepage.contact.title}
              description={homepage.contact.description}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={homepage.contact.href}>
                {homepage.contact.actionLabel}
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/patient-resources" variant="outline">
                Patient resources
              </ButtonLink>
            </div>
          </div>
          <div
            aria-label="Hospital map location not yet provided"
            className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-medical-border-dark bg-medical-page p-6 text-center"
            role="img"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <h3 className="mt-4 font-semibold">Directions coming soon</h3>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An approved address is needed before adding a map or directions.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-medical-primary py-10 text-white sm:py-12">
        <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your next step starts here.
            </h2>
            <p className="mt-2 text-white/80">
              Find information or plan an appointment with the hospital.
            </p>
          </div>
          <ButtonLink
            to="/appointment"
            className="border-white bg-white text-medical-primary hover:bg-medical-primary-light"
          >
            Book an appointment
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}

function EditorialVisual({ icon: Icon, label, className = '' }) {
  return (
    <div
      className={`relative flex min-h-72 items-center justify-center overflow-hidden rounded-xl bg-medical-primary-light p-8 sm:min-h-96 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-12 size-56 rounded-full border-[30px] border-white/40"
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 -bottom-24 size-64 rounded-full bg-white/35"
      />
      <div className="relative max-w-xs rounded-lg border border-white/70 bg-white/90 p-7 text-center shadow-sm">
        <span className="mx-auto flex size-14 items-center justify-center rounded-md bg-medical-primary-light text-primary">
          <Icon aria-hidden="true" className="size-7" />
        </span>
        <p className="mt-4 text-lg font-semibold">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Hospital photography will be added after the client provides approved images.
        </p>
      </div>
    </div>
  )
}

function IconTile({ icon }) {
  const Icon = iconByName[icon] ?? Building2
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-primary-light text-primary">
      <Icon aria-hidden="true" className="size-5" />
    </span>
  )
}

export { HomePage }
