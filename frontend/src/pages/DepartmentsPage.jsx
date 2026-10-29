import { useEffect } from 'react'
import { ArrowRight, Baby, Bone, Building2, HeartPulse } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { DoctorCard } from '../components/content/DoctorCard.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section, SectionHeading } from '../components/ui/section.jsx'
import { departments } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { facilities } from '../data/facilities.js'
import { faqs } from '../data/faqs.js'
import { hospital } from '../data/hospital.js'
import { services } from '../data/services.js'

const departmentIcon = {
  cardiology: HeartPulse,
  orthopedics: Bone,
  pediatrics: Baby,
  "women's health": HeartPulse,
}

function DepartmentsPage() {
  useEffect(() => {
    document.title = `Departments | ${hospital.name}`
  }, [])

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Departments' }]}
        eyebrow="Explore care"
        title="Hospital departments"
        description="Explore the department examples below. The hospital will confirm which specialties and services are available before this information is published."
      />
      <Section>
        <Container>
          <div className="mb-8 grid gap-4 rounded-lg border border-medical-primary-light bg-medical-primary-light/30 p-5 sm:grid-cols-3 sm:p-6">
            <div>
              <p className="text-2xl font-semibold text-primary">4</p>
              <p className="mt-1 text-sm text-medical-secondary-text">Care specialties represented</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-primary">One team</p>
              <p className="mt-1 text-sm text-medical-secondary-text">Coordinated support across departments</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-primary">Your needs</p>
              <p className="mt-1 text-sm text-medical-secondary-text">Care guidance tailored to your concern</p>
            </div>
          </div>
          {departments.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((department) => {
                const Icon = departmentIcon[department.name.toLowerCase()] ?? Building2
                const doctorCount = department.doctorIds.length
                const serviceCount = department.serviceIds.length
                return (
                  <Card key={department.id} className="h-full">
                    <CardContent className="flex h-full flex-col items-start pt-5">
                      {department.image ? (
                        <img
                          src={department.image}
                          alt={`${department.name} care`}
                          className="aspect-[16/9] w-full rounded-md object-cover"
                        />
                      ) : (
                        <span className="flex size-11 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                      )}
                      <Badge variant="outline" className="mt-4">
                        Illustrative department
                      </Badge>
                      <h2 className="mt-3 text-xl font-semibold">{department.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {department.description}
                      </p>
                      {department.highlights?.length ? (
                        <ul className="mt-4 space-y-1.5 text-sm text-medical-secondary-text">
                          {department.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="mt-4 text-xs text-muted-foreground">
                        {doctorCount} sample {doctorCount === 1 ? 'doctor' : 'doctors'} ·{' '}
                        {serviceCount} sample {serviceCount === 1 ? 'service' : 'services'}
                      </p>
                      <Link
                        className="mt-auto inline-flex min-h-10 items-center gap-1 pt-4 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        to={`/departments/${department.slug}`}
                      >
                        Explore department
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <EmptyState
              title="Department information is being prepared"
              description="Confirmed department information will appear here."
            />
          )}
        </Container>
      </Section>
      <Section className="border-y border-border bg-white">
        <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <SectionHeading
              className="mb-0"
              eyebrow="Next step"
              title="Looking for a clinician?"
              description="Browse the illustrative doctor directory or contact the hospital to confirm its current care team."
            />
          </div>
          <ButtonLink to="/doctors" variant="outline">
            Browse doctors
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}

function DepartmentDetailPage() {
  const { id } = useParams()
  const department = departments.find((item) => item.slug === id || item.id === id)
  const relatedDoctors = department
    ? doctors.filter((doctor) => department.doctorIds.includes(doctor.id))
    : []
  const relatedServices = department
    ? services.filter((service) => department.serviceIds.includes(service.id))
    : []
  const relatedFacilities = department
    ? facilities.filter((facility) => department.facilityIds.includes(facility.id))
    : []
  const relatedFaqs = department ? faqs.filter((faq) => faq.departmentId === department.id) : []

  useEffect(() => {
    document.title = `${department?.name ?? 'Department not found'} | ${hospital.name}`
  }, [department])

  if (!department) {
    return (
      <>
        <ContentPageHeader
          breadcrumbs={[{ label: 'Departments', to: '/departments' }, { label: 'Not found' }]}
          eyebrow="Department directory"
          title="Department not found"
          description="That department is not in the current directory."
        />
        <Section>
          <Container>
            <EmptyState
              title="Choose a department from the directory"
              description="The link may be outdated or the department may not have been added yet."
              action={
                <ButtonLink to="/departments" variant="outline">
                  View departments
                </ButtonLink>
              }
            />
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Departments', to: '/departments' }, { label: department.name }]}
        eyebrow="Illustrative department"
        title={department.name}
        description={department.description}
      />
      <Section>
        <Container>
          <Card className="mb-10">
            <CardContent className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="outline">Sample content — confirm with hospital</Badge>
                <p className="mt-3 max-w-3xl leading-relaxed text-medical-secondary-text">
                  Department scope, clinical services, and care availability must be confirmed by
                  the hospital. This preview is not a medical recommendation.
                </p>
              </div>
              <ButtonLink to="/appointment">
                Request an appointment
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </CardContent>
          </Card>

          <SectionHeading
            eyebrow="Related care team"
            title="Doctors"
            description="Illustrative profiles related to this department. Names, qualifications, and availability need hospital confirmation."
          />
          {relatedDoctors.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} headingLevel={3} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No doctor profiles are listed"
              description="Confirmed department doctors will appear here when the hospital provides their details."
            />
          )}
        </Container>
      </Section>
      <Section className="border-y border-border bg-white">
        <Container>
          <SectionHeading
            eyebrow="Related care"
            title="Services"
            description="The sample service list is for layout preview only. Confirm the current service offering with the hospital."
          />
          {relatedServices.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Card key={service.id} className="h-full">
                  <CardContent className="flex h-full flex-col items-start pt-5">
                    <Badge variant="secondary">{service.category}</Badge>
                    <h3 className="mt-3 text-lg font-semibold">{service.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{service.summary}</p>
                    <Badge variant="outline" className="mt-4">
                      Illustrative service
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Service details are being prepared"
              description="Confirmed services associated with this department will be listed here."
            />
          )}
          <ButtonLink to="/services" variant="outline" className="mt-7">
            All services
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Care environment"
            title="Related facilities"
            description="Facilities shown here are sample content linked to the department; confirm them with the hospital."
          />
          {relatedFacilities.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFacilities.map((facility) => (
                <Card key={facility.id}>
                  <CardContent className="py-5">
                    <Badge variant="outline">Illustrative facility</Badge>
                    <h3 className="mt-3 font-semibold">{facility.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{facility.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No facilities are linked to this department"
              description="Department-specific facility information will be added after hospital confirmation."
            />
          )}
        </Container>
      </Section>
      <Section className="border-y border-border bg-white">
        <Container>
          <SectionHeading
            eyebrow="Helpful information"
            title="Frequently asked questions"
            description="Department-specific guidance must be supplied and approved by the hospital."
          />
          {relatedFaqs.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {relatedFaqs.map((faq) => (
                <Card key={faq.id}>
                  <CardContent className="py-5">
                    <Badge variant="outline">Sample answer — confirm</Badge>
                    <h3 className="mt-3 font-semibold">{faq.question}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Department FAQs are being prepared"
              description="No FAQs are linked to this department yet. Confirmed answers will be added when provided by the hospital."
            />
          )}
        </Container>
      </Section>
    </>
  )
}

export { DepartmentsPage, DepartmentDetailPage }
