import { cn } from "cn"

function Container({ as: Component = "div", className, ...props }) {
  return (
    <Component
      data-slot="container"
      className={cn("page-container", className)}
      {...props}
    />
  )
}

export { Container }
