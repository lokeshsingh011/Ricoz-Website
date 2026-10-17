import { type ReactNode } from "react"
import { Link } from "react-router"

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive"
type ButtonSize = "sm" | "md" | "lg"

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

interface ButtonProps extends BaseProps {
  as?: "button"
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

interface LinkProps extends BaseProps {
  as: "link"
  to: string
}

type Props = ButtonProps | LinkProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#A50F28] active:bg-[#8E0D23] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  secondary:
    "border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background active:bg-[#1a1a18] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
  ghost:
    "text-primary bg-transparent hover:text-[#A50F28] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  destructive:
    "bg-primary text-primary-foreground hover:bg-[#A50F28] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2.5 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-sm px-8 py-4 gap-2.5",
}

function buildClassName(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    disabled,
    fullWidth,
  } = props

  return [
    "inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-150 cursor-pointer select-none",
    "rounded-[var(--radius)]",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")
}

export default function Button(props: Props) {
  const { children, icon, iconPosition = "right" } = props

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  )

  if (props.as === "link") {
    return (
      <Link to={props.to} className={buildClassName(props)}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={buildClassName(props)}
    >
      {content}
    </button>
  )
}
