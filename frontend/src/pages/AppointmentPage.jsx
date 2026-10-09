import { useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { ArrowLeft, CalendarCheck2, CheckCircle2, Clock3 } from 'lucide-react'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Button, ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { Input } from '../components/ui/input.jsx'
import { Section } from '../components/ui/section.jsx'
import { Textarea } from '../components/ui/textarea.jsx'
import { departments } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { hospital } from '../data/hospital.js'

const appointmentSchema = z
  .object({
    patientName: z
      .string()
      .trim()
      .min(2, 'Enter your full name.')
      .max(100, 'Name must be 100 characters or fewer.'),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[0-9\s()-]+$/, 'Enter a valid phone number.')
      .refine(
        (phone) => phone.replace(/\D/g, '').length >= 7,
        'Enter at least 7 digits for the phone number.'
      ),
    email: z
      .string()
      .trim()
      .email('Enter a valid email address.')
      .max(254, 'Email must be 254 characters or fewer.')
      .or(z.literal('')),
    departmentId: z.string().min(1, 'Choose a department.'),
    doctorId: z.string().min(1, 'Choose a doctor.'),
    date: z.string().min(1, 'Choose a preferred date.'),
    time: z.string().min(1, 'Choose a preferred time.'),
    reason: z
      .string()
      .trim()
      .min(3, 'Please briefly describe the reason for your visit.')
      .max(300, 'Reason must be 300 characters or fewer.'),
    message: z.string().trim().max(1000, 'Message must be 1,000 characters or fewer.'),
  })
  .superRefine((appointment, context) => {
    const department = departments.find((item) => item.id === appointment.departmentId)
    const doctor = doctors.find((item) => item.id === appointment.doctorId)

    if (!department) {
      context.addIssue({
        code: 'custom',
        path: ['departmentId'],
        message: 'Choose a listed department.',
      })
    }

    if (
      !doctor ||
      doctor.departmentId !== appointment.departmentId ||
      doctor.contentStatus !== 'sample'
    ) {
      context.addIssue({
        code: 'custom',
        path: ['doctorId'],
        message: 'Choose a doctor from the selected department.',
      })
    }

    const earliestDate = getLocalDateValue(new Date())
    const chosenDate = new Date(`${appointment.date}T00:00:00`)
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(appointment.date) ||
      Number.isNaN(chosenDate.getTime()) ||
      appointment.date < earliestDate
    ) {
      context.addIssue({
        code: 'custom',
        path: ['date'],
        message: 'Choose today or a future date.',
      })
    }

    if (!timeSlots.includes(appointment.time)) {
      context.addIssue({
        code: 'custom',
        path: ['time'],
        message: 'Choose one of the available sample times.',
      })
    } else if (appointment.date === earliestDate) {
      const [hour, minute] = appointment.time.split(':').map(Number)
      const now = new Date()
      if (hour * 60 + minute <= now.getHours() * 60 + now.getMinutes()) {
        context.addIssue({
          code: 'custom',
          path: ['time'],
          message: 'Choose a time later than now.',
        })
      }
    }
  })

const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
]

function getLocalDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const minimumDate = useMemo(() => getLocalDateValue(new Date()), [])

  useEffect(() => {
    document.title = `Request an appointment | ${hospital.name}`
  }, [])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientName: '',
      phone: '',
      email: '',
      departmentId: '',
      doctorId: '',
      date: '',
      time: '',
      reason: '',
      message: '',
    },
  })

  const selectedDepartmentId = useWatch({ control, name: 'departmentId' })
  const selectedDoctorId = useWatch({ control, name: 'doctorId' })
  const selectedDate = useWatch({ control, name: 'date' })
  const selectedTime = useWatch({ control, name: 'time' })
  const availableDoctors = useMemo(
    () =>
      doctors.filter(
        (doctor) =>
          doctor.departmentId === selectedDepartmentId && doctor.contentStatus === 'sample'
      ),
    [selectedDepartmentId]
  )
  const availableTimeSlots = useMemo(() => {
    if (!selectedDate || selectedDate !== minimumDate) return timeSlots
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    return timeSlots.filter(([hour, minute]) => {
      const slotMinutes = Number(hour) * 60 + Number(minute)
      return slotMinutes > currentMinutes
    })
  }, [minimumDate, selectedDate])

  useEffect(() => {
    if (selectedDoctorId && !availableDoctors.some((doctor) => doctor.id === selectedDoctorId)) {
      setValue('doctorId', '', { shouldValidate: true })
    }
  }, [availableDoctors, selectedDoctorId, setValue])

  useEffect(() => {
    if (!availableTimeSlots.includes(selectedTime)) {
      setValue('time', '', { shouldValidate: Boolean(selectedTime) })
    }
  }, [availableTimeSlots, selectedTime, setValue])

  async function submitAppointment() {
    setSubmissionError('')
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 650))
      setConfirmation(true)
      reset()
    } catch (error) {
      console.error('Appointment request preview failed.', error)
      setSubmissionError(
        'We could not prepare the request preview. Please review the form and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (confirmation) {
    return (
      <>
        <ContentPageHeader
          breadcrumbs={[
            { label: 'Appointment', to: '/appointment' },
            { label: 'Request received' },
          ]}
          eyebrow="Request preview"
          title="Your request is ready"
          description="This is a local preview only. No appointment has been booked or sent to the hospital."
        />
        <Section>
          <Container>
            <Card className="mx-auto max-w-2xl">
              <CardContent className="py-8 text-center sm:py-10">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-medical-primary-light text-primary">
                  <CheckCircle2 aria-hidden="true" className="size-7" />
                </span>
                <Badge variant="secondary" className="mt-5">
                  Local preview only
                </Badge>
                <h2 className="mt-4 text-2xl font-semibold">
                  Appointment request preview complete
                </h2>
                <p className="mx-auto mt-3 max-w-lg leading-relaxed text-medical-secondary-text">
                  This frontend does not submit patient data to a server. To request an actual
                  appointment, contact Avdhuth Hospital directly using confirmed contact details.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button type="button" variant="outline" onClick={() => setConfirmation(false)}>
                    <ArrowLeft aria-hidden="true" />
                    Back to form
                  </Button>
                  <ButtonLink to="/">Return home</ButtonLink>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Appointment' }]}
        eyebrow="Plan a visit"
        title="Request an appointment"
        description="Share your preferred visit details. This form is a frontend demonstration and does not send or store personal information."
      />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <Card>
            <CardContent className="p-5 sm:p-7">
              <form
                noValidate
                onSubmit={handleSubmit(submitAppointment)}
                aria-describedby="appointment-privacy-note"
              >
                <fieldset disabled={isSubmitting} className="space-y-8">
                  <legend className="sr-only">Appointment request details</legend>
                  <FormSection title="Your information">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="patient-name"
                        label="Full name"
                        required
                        error={errors.patientName?.message}
                      >
                        <Input
                          id="patient-name"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.patientName)}
                          aria-describedby={errors.patientName ? 'patient-name-error' : undefined}
                          {...register('patientName')}
                        />
                      </FormField>
                      <FormField
                        id="patient-phone"
                        label="Phone number"
                        required
                        error={errors.phone?.message}
                      >
                        <Input
                          id="patient-phone"
                          type="tel"
                          autoComplete="tel"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'patient-phone-error' : undefined}
                          {...register('phone')}
                        />
                      </FormField>
                      <FormField
                        id="patient-email"
                        label="Email"
                        hint="Optional"
                        error={errors.email?.message}
                      >
                        <Input
                          id="patient-email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'patient-email-error' : undefined}
                          {...register('email')}
                        />
                      </FormField>
                    </div>
                  </FormSection>

                  <FormSection title="Visit preferences">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="department"
                        label="Department"
                        required
                        error={errors.departmentId?.message}
                      >
                        <select
                          id="department"
                          className="h-11 w-full rounded-md border border-input bg-white px-3 text-base text-foreground outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:bg-muted"
                          aria-invalid={Boolean(errors.departmentId)}
                          aria-describedby={errors.departmentId ? 'department-error' : undefined}
                          {...register('departmentId')}
                        >
                          <option value="">Choose a department</option>
                          {departments.map((department) => (
                            <option key={department.id} value={department.id}>
                              {department.name}
                            </option>
                          ))}
                        </select>
                      </FormField>
                      <FormField
                        id="doctor"
                        label="Preferred doctor"
                        required
                        error={errors.doctorId?.message}
                      >
                        <select
                          id="doctor"
                          className="h-11 w-full rounded-md border border-input bg-white px-3 text-base text-foreground outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:bg-muted"
                          disabled={!selectedDepartmentId}
                          aria-invalid={Boolean(errors.doctorId)}
                          aria-describedby={errors.doctorId ? 'doctor-error' : undefined}
                          {...register('doctorId')}
                        >
                          <option value="">
                            {selectedDepartmentId
                              ? availableDoctors.length
                                ? 'Choose a doctor'
                                : 'No sample doctors for this department'
                              : 'Choose a department first'}
                          </option>
                          {availableDoctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                              {doctor.name}
                            </option>
                          ))}
                        </select>
                      </FormField>
                      <FormField
                        id="preferred-date"
                        label="Preferred date"
                        required
                        error={errors.date?.message}
                      >
                        <Input
                          id="preferred-date"
                          type="date"
                          min={minimumDate}
                          aria-invalid={Boolean(errors.date)}
                          aria-describedby={errors.date ? 'preferred-date-error' : undefined}
                          {...register('date')}
                        />
                      </FormField>
                      <FormField
                        id="preferred-time"
                        label="Preferred time"
                        required
                        error={errors.time?.message}
                      >
                        <select
                          id="preferred-time"
                          className="h-11 w-full rounded-md border border-input bg-white px-3 text-base text-foreground outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:bg-muted"
                          disabled={!selectedDate || !availableTimeSlots.length}
                          aria-invalid={Boolean(errors.time)}
                          aria-describedby={errors.time ? 'preferred-time-error' : undefined}
                          {...register('time')}
                        >
                          <option value="">
                            {selectedDate
                              ? availableTimeSlots.length
                                ? 'Choose a preferred time'
                                : 'No later sample times today'
                              : 'Choose a date first'}
                          </option>
                          {availableTimeSlots.map((time) => (
                            <option key={time} value={time}>
                              {formatTime(time)}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Department names, sample doctors, and time options are illustrative only. The
                      hospital must confirm its actual services and schedule.
                    </p>
                  </FormSection>

                  <FormSection title="Reason for visit">
                    <FormField
                      id="reason"
                      label="Brief reason for your visit"
                      required
                      error={errors.reason?.message}
                    >
                      <Input
                        id="reason"
                        maxLength={300}
                        aria-invalid={Boolean(errors.reason)}
                        aria-describedby={errors.reason ? 'reason-error' : undefined}
                        {...register('reason')}
                      />
                    </FormField>
                    <FormField
                      id="message"
                      label="Additional message"
                      hint="Optional"
                      error={errors.message?.message}
                    >
                      <Textarea
                        id="message"
                        maxLength={1000}
                        rows={4}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        {...register('message')}
                      />
                    </FormField>
                  </FormSection>

                  {submissionError && (
                    <p
                      className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-medical-error"
                      role="alert"
                    >
                      {submissionError}
                    </p>
                  )}

                  <p
                    className="border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground"
                    id="appointment-privacy-note"
                  >
                    Privacy note: this demo validates your entries in the browser only. It does not
                    transmit, persist, or book an appointment.
                  </p>
                  <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? 'Preparing preview…' : 'Review request'}
                  </Button>
                </fieldset>
              </form>
            </CardContent>
          </Card>

          <aside className="space-y-4">
            <Card>
              <CardContent className="py-5">
                <span className="flex size-10 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                  <CalendarCheck2 aria-hidden="true" className="size-5" />
                </span>
                <h2 className="mt-4 font-semibold">What happens next?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  This preview does not contact the hospital. Once approved contact details are
                  available, patients can confirm appointment requests directly.
                </p>
              </CardContent>
            </Card>
            <Card className="border-medical-primary-light bg-medical-primary-light/50">
              <CardContent className="flex items-start gap-3 py-5">
                <Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-medical-secondary-text">
                  For urgent or emergency care, do not use this form. Contact local emergency
                  services or visit an appropriate emergency facility.
                </p>
              </CardContent>
            </Card>
          </aside>
        </Container>
      </Section>
    </>
  )
}

function FormSection({ title, children }) {
  return (
    <section className="space-y-5">
      <h2 className="border-b border-border pb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  )
}

function FormField({ id, label, required, hint, error, children }) {
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-medical-error">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
        {hint && <span className="ml-2 text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-medical-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}

function formatTime(time) {
  const [hour, minute] = time.split(':').map(Number)
  const date = new Date()
  date.setHours(hour, minute, 0, 0)
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

export { AppointmentPage }
