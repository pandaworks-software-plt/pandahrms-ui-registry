"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Copy, Check } from "lucide-react"

import { cn } from "@/lib/utils"

const codeLabelVariants = cva(
  "inline-flex items-center gap-2 rounded-md border font-mono bg-muted/50 text-foreground dark:bg-muted/20",
  {
    variants: {
      size: {
        default: "px-3 py-1.5 text-sm",
        sm: "px-2 py-1 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface CodeLabelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof codeLabelVariants> {
  value: string
}

const CodeLabel = React.forwardRef<HTMLDivElement, CodeLabelProps>(
  ({ className, size, value, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)
    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined
    )

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
      <div
        ref={ref}
        className={cn(codeLabelVariants({ size }), className)}
        {...props}
      >
        <span className="min-w-0 truncate">{value}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>
    )
  }
)
CodeLabel.displayName = "CodeLabel"

export { CodeLabel, codeLabelVariants }
