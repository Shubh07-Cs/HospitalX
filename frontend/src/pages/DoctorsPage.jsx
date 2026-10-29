import { useEffect, useState } from 'react'
import { ArrowRight, Search, Stethoscope } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { DoctorCard } from '../components/content/DoctorCard.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Button, ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { Input } from '../components/ui/input.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section, SectionHeading } from '../components/ui/section.jsx'
import { departments } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { hospital } from '../data/hospital.js'

function DoctorsPage() {
  const [query, setQuery] = useState('')
  const [departmentId, setDepartmentId] = useState('all')

  useEffect(() => {
    document.title = `Doctors | ${hospital.name}`
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDepartment = departmentId === 'all' || doctor.departmentId === departmentId
    const searchableText = [
      doctor.name,
      doctor.specialization,
      ...doctor.qualifications,
      ...doctor.expertise,
    ]
      .join(' ')
      .toLowerCase()
    return matchesDepartment && searchableText.includes(normalizedQuery)
  })

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Doctors' }]}
        eyebrow="Care team"
        title="Find a doctor"
        description="Search the sample profiles by name, specialty, or department. Confirm clinician credentials and appointment availability with the hospital."
      />
      <Section>
        <Container>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              ['1', 'Choose a specialty', 'Search by clinician name, department, or area of expertise.'],
              ['2', 'Review the profile', 'Check the specialty and sample experience information shown.'],
              ['3', 'Plan your visit', 'Contact the hospital to confirm availability and appointment steps.'],
            ].map(([number, title, description]) => (
              <Card key={number}>
                <CardContent className="pt-5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-medical-primary-light text-sm font-bold text-primary">
                    {number}
                  </span>
                  <h2 className="mt-4 font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mb-8 rounded-lg border border-border bg-white p-4 sm:p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_0.75fr]">
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="doctor-search">
                  Search doctors
                </label>
                <div className="relative">
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="doctor-search"
                    type="search"
                    className="pl-9"
                    placeholder="Name, specialty, or qualification"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="doctor-department">
                  Filter by department
                </label>
                <select
                  id="doctor-department"
                  className="h-11 w-full rounded-md border border-input bg-white px-3 text-base text-foreground outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/15"
                  value={departmentId}
                  onChange={(event) => setDepartmentId(event.target.value)}
                >
                  <option value="all">All departments</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
              {filteredDoctors.length} {filteredDoctors.length === 1 ? 'profile' : 'profiles'} shown
            </p>
          </div>

          {filteredDoctors.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No matching doctor profiles"
              description="Try another name or specialty, or choose a different department filter."
              action={
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setQuery('')
                    setDepartmentId('all')
                  }}
                >
                  Clear filters
                </Button>
              }
            />
          )}
        </Container>
      </Section>
    </>
  )
}

function DoctorDetailPage() {
  const { id } = useParams()
  const doctor = doctors.find((item) => item.slug === id || item.id === id)
  const department = doctor ? departments.find((item) => item.id === doctor.departmentId) : null

  useEffect(() => {
    document.title = `${doctor?.name ?? 'Doctor profile'} | ${hospital.name}`
  }, [doctor])

  if (!doctor) {
    return (
      <>
        <ContentPageHeader
          breadcrumbs={[{ label: 'Doctors', to: '/doctors' }, { label: 'Profile not found' }]}
          eyebrow="Doctor directory"
          title="Profile not found"
          description="That clinician profile is not in the current directory."
        />
        <Section>
          <Container>
            <EmptyState
              title="Choose a doctor from the directory"
              description="The link may be outdated or the profile may not have been added yet."
              action={
                <ButtonLink to="/doctors" variant="outline">
                  View doctors
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
        breadcrumbs={[{ label: 'Doctors', to: '/doctors' }, { label: doctor.name }]}
        eyebrow="Illustrative clinician profile"
        title={doctor.name}
        description={doctor.specialization}
      />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Card className="h-fit">
            <CardContent className="flex flex-col items-start pt-5">
              {doctor.image ? (
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="aspect-[4/3] w-full rounded-md object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-medical-soft text-medical-muted-text">
                  <Stethoscope aria-hidden="true" className="size-12" />
                </div>
              )}
              <Badge variant="secondary" className="mt-4">
                Sample profile — not approved
              </Badge>
              <h2 className="mt-3 text-xl font-semibold">{doctor.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{doctor.specialization}</p>
              {department && (
                <Link
                  className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  to={`/departments/${department.slug}`}
                >
                  {department.name}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
            </CardContent>
          </Card>

          <div>
            <SectionHeading
              eyebrow="Profile"
              title="Qualifications and experience"
              description="Verify all clinician details directly with the hospital before making care decisions."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ProfileDetail
                label="Qualifications"
                value={
                  doctor.qualifications.length
                    ? doctor.qualifications.join(', ')
                    : 'To be confirmed by the hospital'
                }
              />
              <ProfileDetail
                label="Experience"
                value={doctor.experience ?? 'To be confirmed by the hospital'}
              />
              <ProfileDetail
                label="Areas of expertise"
                value={
                  doctor.expertise.length
                    ? doctor.expertise.join(', ')
                    : 'To be confirmed by the hospital'
                }
              />
              <ProfileDetail
                label="Availability"
                value={
                  doctor.availability.length
                    ? doctor.availability.join(', ')
                    : 'Contact the hospital to confirm'
                }
              />
            </div>
            <Card className="mt-5">
              <CardContent className="py-5">
                <h3 className="font-semibold">About this profile</h3>
                <p className="mt-2 leading-relaxed text-medical-secondary-text">{doctor.bio}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  This sample profile is for design preview only and is not a verified professional
                  biography.
                </p>
              </CardContent>
            </Card>
            <ButtonLink to="/appointment" className="mt-6">
              Request an appointment
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}

function ProfileDetail({ label, value }) {
  return (
    <Card>
      <CardContent className="py-4">
        <h3 className="text-sm font-semibold">{label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
      </CardContent>
    </Card>
  )
}

export { DoctorsPage, DoctorDetailPage }
