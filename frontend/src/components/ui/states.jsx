import { AlertCircle, LoaderCircle } from "lucide-react"
import { cn } from "cn"

function LoadingState({ message = "Loading", className }) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-col items-center justify-center gap-3 text-center text-muted-foreground",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <LoaderCircle aria-hidden="true" className="size-6 animate-spin text-primary" />
      <span>{message}</span>
    </div>
  )
}

function EmptyState({ title, description, action, className }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-medical-border-dark bg-white px-6 py-10 text-center",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

function ErrorState({ title = "Something went wrong", description, action, className }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-left",
        className
      )}
      role="alert"
    >
      <AlertCircle
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-medical-error"
      />
      <div>
        <h3 className="font-semibold text-medical-error">{title}</h3>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-medical-secondary-text">
            {description}
          </p>
        )}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  )
}

export { EmptyState, ErrorState, LoadingState }
