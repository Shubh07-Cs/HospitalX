import { ArrowRight, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge.jsx'
import { Card, CardContent } from '../ui/card.jsx'

function DoctorCard({ doctor, headingLevel = 2 }) {
  const Heading = headingLevel === 3 ? 'h3' : 'h2'

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col items-start pt-5">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={`Portrait of ${doctor.name}`}
            className="aspect-[4/3] w-full rounded-md object-cover object-top"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-medical-soft text-medical-muted-text">
            <Stethoscope aria-hidden="true" className="size-9" />
          </div>
        )}
        <Badge variant="secondary" className="mt-4">
          Illustrative profile
        </Badge>
        <Heading className="mt-3 text-lg font-semibold">{doctor.name}</Heading>
        <p className="mt-1 text-sm text-muted-foreground">{doctor.specialization}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Clinician details and availability will be added after confirmation.
        </p>
        <Link
          className="mt-auto inline-flex min-h-10 items-center gap-1 pt-3 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          to={`/doctors/${doctor.slug}`}
        >
          View profile
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export { DoctorCard }
