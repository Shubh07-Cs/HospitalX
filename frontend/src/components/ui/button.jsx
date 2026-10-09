import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";
import { cn } from "cn"
import { LoaderCircle } from "lucide-react"
import { Link } from "react-router-dom"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-4 focus-visible:ring-ring/20 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/15 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-medical-primary-dark",
        outline:
          "border-primary bg-white text-primary hover:bg-medical-primary-light aria-expanded:bg-medical-primary-light",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-medical-border aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-medical-emergency text-white hover:bg-red-700 focus-visible:ring-medical-emergency/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 rounded-md px-3 text-sm",
        lg: "h-12 gap-2 rounded-md px-6 text-base",
        icon: "size-10",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  loading = false,
  disabled = false,
  children,
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading && <LoaderCircle aria-hidden="true" className="animate-spin" />}
      {children}
    </ButtonPrimitive>
  )
}

function ButtonLink({
  href,
  to,
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  if (to) {
    return (
      <Link
        to={to}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </a>
  )
}

export { Button, ButtonLink, buttonVariants }
