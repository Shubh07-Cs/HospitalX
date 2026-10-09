import { m, useReducedMotion } from 'framer-motion'
import { cn } from 'cn'

function Section({ as: Component = 'section', className, ...props }) {
  const shouldReduceMotion = useReducedMotion()
  const sectionProps = {
    'data-slot': 'section',
    className: cn('content-section', className),
    ...props,
  }

  if (shouldReduceMotion || Component !== 'section') return <Component {...sectionProps} />

  return (
    <m.section
      {...sectionProps}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}

function SectionHeading({ eyebrow, title, description, align = 'left', className, id }) {
  return (
    <div className={cn('mb-8 max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-wide text-primary">{eyebrow}</p>
      )}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export { Section, SectionHeading }
