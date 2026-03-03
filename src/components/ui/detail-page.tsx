"use client"

import * as React from "react"
import { ArrowLeft, Copy, Check } from "lucide-react"

import { cn } from "@/lib/utils"

/* ---------------------------------- Root ---------------------------------- */

const DetailPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-6", className)}
    {...props}
  />
))
DetailPage.displayName = "DetailPage"

/* --------------------------------- Header --------------------------------- */

interface DetailPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  backHref?: string
  backLabel?: string
  icon?: React.ReactNode
  title: string
  subtitle?: string
  actions?: React.ReactNode
}

const DetailPageHeader = React.forwardRef<HTMLDivElement, DetailPageHeaderProps>(
  ({ className, backHref, backLabel, icon, title, subtitle, actions, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-3", className)} {...props}>
      {backHref && (
        <a
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </a>
      )}
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-muted-foreground dark:bg-muted/20">
            {icon}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2 shrink-0">{actions}</div>
        )}
      </div>
    </div>
  )
)
DetailPageHeader.displayName = "DetailPageHeader"

/* ---------------------------------- Main ---------------------------------- */

const DetailPageMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]",
      className
    )}
    {...props}
  />
))
DetailPageMain.displayName = "DetailPageMain"

/* -------------------------------- Content --------------------------------- */

const DetailPageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 space-y-6", className)}
    {...props}
  />
))
DetailPageContent.displayName = "DetailPageContent"

/* -------------------------------- Sidebar --------------------------------- */

const DetailPageSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "space-y-0 lg:sticky lg:top-6 lg:self-start",
      className
    )}
    {...props}
  />
))
DetailPageSidebar.displayName = "DetailPageSidebar"

/* ------------------------------ Meta Item --------------------------------- */

interface DetailPageMetaItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: React.ReactNode
  copyable?: boolean
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  React.useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable (non-secure context)
    }
  }, [value])

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  )
}

const DetailPageMetaItem = React.forwardRef<
  HTMLDivElement,
  DetailPageMetaItemProps
>(({ className, label, value, copyable, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-b py-3 first:pt-0 last:border-b-0",
      className
    )}
    {...props}
  >
    <p className="text-xs text-muted-foreground">{label}</p>
    <div className="mt-0.5 flex items-center gap-1.5">
      <span className="min-w-0 truncate text-sm font-medium">{value}</span>
      {copyable && typeof value === "string" && <CopyButton value={value} />}
    </div>
  </div>
))
DetailPageMetaItem.displayName = "DetailPageMetaItem"

/* -------------------------------- Exports --------------------------------- */

export {
  DetailPage,
  DetailPageHeader,
  DetailPageMain,
  DetailPageContent,
  DetailPageSidebar,
  DetailPageMetaItem,
}
export type { DetailPageHeaderProps, DetailPageMetaItemProps }
