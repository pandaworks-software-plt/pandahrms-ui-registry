import {
  Loader2,
  ArrowRight,
  Plus,
  Trash2,
  Download,
  Check,
  Send,
  Sparkles,
  Rocket,
  Shield,
  Bell,
  Copy,
  Eye,
  Lock,
  Bookmark,
  Upload,
  Settings,
  Share2,
  Play,
  Crown,
  Flame,
  Target,
  Wand2,
  ArrowUpRight,
  Pencil,
  Terminal,
  Grip,
  Layers,
  Crosshair,
  RotateCcw,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoSection } from "@/showcase/component-page";

/* ─────────────────────────────────────────────
   Shared helpers
   ───────────────────────────────────────────── */

function PatternCard({
  name,
  description,
  tag,
  children,
}: {
  name: string;
  description: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold tracking-tight">{name}</h3>
        {tag && (
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary/20">
            {tag}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="rounded-xl border bg-background p-8 space-y-6">
        {children}
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

/* ── Shared spring easing tokens ── */
const SPRING = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
const SPRING_BOUNCY = "cubic-bezier(0.34, 1.56, 0.64, 1)";

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

/* ═══════════════════════════════════════════════
   1 — Slide Fill
   Background bar slides in from left edge on
   hover via pseudo-element transform
   ═══════════════════════════════════════════════ */

function SlideFillButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold overflow-hidden",
    "rounded-md border transition-colors duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-[transform] active:duration-75",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, { border: string; fill: string; text: string }> = {
    default: {
      border: "border-primary text-primary group-hover:text-primary-foreground",
      fill: "bg-primary",
      text: "",
    },
    secondary: {
      border: "border-foreground/20 text-foreground group-hover:text-background",
      fill: "bg-foreground",
      text: "",
    },
    outline: {
      border: "border-border text-muted-foreground group-hover:text-foreground",
      fill: "bg-muted",
      text: "",
    },
    destructive: {
      border: "border-destructive text-destructive group-hover:text-destructive-foreground",
      fill: "bg-destructive",
      text: "",
    },
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  const v = variants[variant ?? "default"] ?? variants.default;

  return (
    <button className={cn(base, v.border, sizes[size ?? "default"], className)} {...props}>
      <span
        className={cn(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
          v.fill
        )}
        aria-hidden="true"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

function PatternSlideFill() {
  return (
    <PatternCard
      name="Slide Fill"
      description="Hollow bordered button. On hover a solid color bar scales in from the left edge via scaleX, filling the entire surface. Text color inverts. Inspired by editorial navigation links."
    >
      <Row label="Variants">
        <SlideFillButton>Primary</SlideFillButton>
        <SlideFillButton variant="secondary">Secondary</SlideFillButton>
        <SlideFillButton variant="outline">Neutral</SlideFillButton>
        <SlideFillButton variant="destructive">Destructive</SlideFillButton>
      </Row>
      <Row label="With icon">
        <SlideFillButton><Send /> Send</SlideFillButton>
        <SlideFillButton variant="secondary"><ArrowUpRight /> Open</SlideFillButton>
      </Row>
      <Row label="States">
        <SlideFillButton disabled>Disabled</SlideFillButton>
        <SlideFillButton disabled><Loader2 className="animate-spin" /> Loading...</SlideFillButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   2 — Border Draw
   Two pseudo-elements expand to draw the border
   on hover (top-right then bottom-left)
   ═══════════════════════════════════════════════ */

function BorderDrawButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const colors: Record<string, string> = {
    default: "text-primary",
    secondary: "text-foreground",
    destructive: "text-destructive",
  };

  const borderColors: Record<string, string> = {
    default: "border-primary",
    secondary: "border-foreground",
    destructive: "border-destructive",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  const v = variant ?? "default";

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
        "bg-transparent transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "active:opacity-80 active:transition-none",
        "disabled:pointer-events-none disabled:opacity-40",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        colors[v],
        sizes[size ?? "default"],
        className
      )}
      {...props}
    >
      {/* top + right edge */}
      <span
        className={cn(
          "pointer-events-none absolute top-0 right-0 h-0 w-0 border-t-2 border-r-2 transition-all duration-300 ease-out group-hover:h-full group-hover:w-full",
          borderColors[v]
        )}
        aria-hidden="true"
      />
      {/* bottom + left edge */}
      <span
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 h-0 w-0 border-b-2 border-l-2 transition-all duration-300 ease-out delay-75 group-hover:h-full group-hover:w-full",
          borderColors[v]
        )}
        aria-hidden="true"
      />
      {children}
    </button>
  );
}

function PatternBorderDraw() {
  return (
    <PatternCard
      name="Border Draw"
      description="No visible border at rest. On hover, two pseudo-elements expand from opposite corners to draw a complete border frame around the button. 75ms stagger between the two halves."
    >
      <Row label="Variants">
        <BorderDrawButton>Primary</BorderDrawButton>
        <BorderDrawButton variant="secondary">Secondary</BorderDrawButton>
        <BorderDrawButton variant="destructive">Destructive</BorderDrawButton>
      </Row>
      <Row label="With icon">
        <BorderDrawButton><Pencil /> Edit</BorderDrawButton>
        <BorderDrawButton variant="secondary"><ArrowUpRight /> Open</BorderDrawButton>
      </Row>
      <Row label="States">
        <BorderDrawButton disabled>Disabled</BorderDrawButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   3 — Squeeze
   Horizontal pinch on press, vertical stretch
   — like squeezing a rubber ball
   ═══════════════════════════════════════════════ */

function SqueezeButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-transform duration-200",
    `[transition-timing-function:${SPRING_BOUNCY}]`,
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:scale-x-[1.04] hover:scale-y-[0.97]",
    "active:scale-x-[0.92] active:scale-y-[1.06] active:duration-75",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:scale-100",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-background text-foreground",
    destructive: "bg-destructive text-destructive-foreground",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternSqueeze() {
  return (
    <PatternCard
      name="Squeeze"
      description="Hover stretches the button horizontally (scaleX 1.04) while compressing vertically (scaleY 0.97). Press does the inverse -- a satisfying horizontal squeeze like a stress ball. Uses spring overshoot easing."
    >
      <Row label="Variants">
        <SqueezeButton>Primary</SqueezeButton>
        <SqueezeButton variant="secondary">Secondary</SqueezeButton>
        <SqueezeButton variant="outline">Outline</SqueezeButton>
        <SqueezeButton variant="destructive">Destructive</SqueezeButton>
      </Row>
      <Row label="With icon">
        <SqueezeButton><Rocket /> Launch</SqueezeButton>
        <SqueezeButton variant="outline"><Download /> Export</SqueezeButton>
      </Row>
      <Row label="States">
        <SqueezeButton disabled>Disabled</SqueezeButton>
        <SqueezeButton disabled><Loader2 className="animate-spin" /> Saving...</SqueezeButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   4 — Tilt 3D
   Subtle perspective tilt on hover, like holding
   a card at an angle
   ═══════════════════════════════════════════════ */

function TiltButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-300",
    "[perspective:600px] [transform-style:preserve-3d]",
    "hover:[transform:rotateY(-4deg)_rotateX(2deg)]",
    "active:[transform:rotateY(0deg)_scale(0.97)] active:duration-75",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:[transform:none]",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)] hover:shadow-[4px_4px_16px_-4px_rgba(0,0,0,0.18)]",
    secondary: "bg-secondary text-secondary-foreground shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_12px_-4px_rgba(0,0,0,0.08)]",
    outline: "border border-border bg-background text-foreground hover:shadow-[4px_4px_12px_-4px_rgba(0,0,0,0.06)]",
    destructive: "bg-destructive text-destructive-foreground shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)] hover:shadow-[4px_4px_16px_-4px_rgba(0,0,0,0.18)]",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternTilt() {
  return (
    <PatternCard
      name="Tilt 3D"
      description="Hover applies a subtle rotateY(-4deg) + rotateX(2deg) perspective tilt with a shadow that shifts to match. Like holding a physical card at an angle. Press snaps flat."
    >
      <Row label="Variants">
        <TiltButton>Primary</TiltButton>
        <TiltButton variant="secondary">Secondary</TiltButton>
        <TiltButton variant="outline">Outline</TiltButton>
        <TiltButton variant="destructive">Destructive</TiltButton>
      </Row>
      <Row label="With icon">
        <TiltButton><Crown /> Upgrade</TiltButton>
        <TiltButton variant="outline"><Eye /> Preview</TiltButton>
      </Row>
      <Row label="States">
        <TiltButton disabled>Disabled</TiltButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   5 — Notched
   Clip-path diagonal cut on the top-right corner.
   Military/tech briefing aesthetic.
   ═══════════════════════════════════════════════ */

function NotchedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-wide",
    "transition-all duration-200",
    "[clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:brightness-110",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "bg-muted text-foreground hover:bg-muted/70",
    destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 pr-6 text-xs",
    sm: "h-8 px-3.5 pr-4.5 text-[10px]",
    lg: "h-12 px-7 pr-8 text-sm",
    icon: "h-10 w-10 text-xs",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternNotched() {
  return (
    <PatternCard
      name="Notched"
      description="Clip-path cuts a diagonal notch in the top-right corner. Uppercase tracking with a slightly wider right padding to account for the cut. Tech briefing / HUD aesthetic."
    >
      <Row label="Variants">
        <NotchedButton>Primary</NotchedButton>
        <NotchedButton variant="secondary">Secondary</NotchedButton>
        <NotchedButton variant="outline">Neutral</NotchedButton>
        <NotchedButton variant="destructive">Delete</NotchedButton>
      </Row>
      <Row label="With icon">
        <NotchedButton><Target /> Target</NotchedButton>
        <NotchedButton variant="secondary"><Shield /> Secure</NotchedButton>
      </Row>
      <Row label="States">
        <NotchedButton disabled>Disabled</NotchedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   6 — Ledge
   Thick darker bottom border creates a visible
   shelf. Press pushes down and collapses it.
   ═══════════════════════════════════════════════ */

function LedgeButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-150 ease-out",
    "border-b-[3px]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:border-b-0 active:mt-[3px] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground border-b-primary/60 hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground border-b-foreground/10 hover:bg-secondary/80 dark:border-b-black/20",
    outline: "border border-border bg-background text-foreground border-b-[3px] border-b-border hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground border-b-destructive/60 hover:bg-destructive/90",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternLedge() {
  return (
    <PatternCard
      name="Ledge"
      description="A visible 3px bottom border in a darker shade creates a physical shelf/ledge. On active, the border collapses to 0 and the button shifts down 3px via margin-top, mimicking a mechanical key press."
    >
      <Row label="Variants">
        <LedgeButton>Primary</LedgeButton>
        <LedgeButton variant="secondary">Secondary</LedgeButton>
        <LedgeButton variant="outline">Outline</LedgeButton>
        <LedgeButton variant="destructive">Destructive</LedgeButton>
      </Row>
      <Row label="With icon">
        <LedgeButton><Check /> Confirm</LedgeButton>
        <LedgeButton variant="outline"><Download /> Export</LedgeButton>
      </Row>
      <Row label="States">
        <LedgeButton disabled>Disabled</LedgeButton>
        <LedgeButton disabled><Loader2 className="animate-spin" /> Saving...</LedgeButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   7 — Stripe
   Subtle diagonal stripe pattern in bg via
   repeating-linear-gradient
   ═══════════════════════════════════════════════ */

function StripeButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "[background-size:8px_8px]",
    "hover:[background-size:10px_10px]",
  ];

  const variants: Record<string, string> = {
    default: [
      "text-primary-foreground",
      "bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_2px,transparent_2px,transparent_6px),linear-gradient(var(--color-primary),var(--color-primary))]",
    ].join(" "),
    secondary: [
      "text-secondary-foreground",
      "bg-[repeating-linear-gradient(-45deg,var(--color-muted-foreground),var(--color-muted-foreground)_1px,transparent_1px,transparent_6px),linear-gradient(var(--color-secondary),var(--color-secondary))]",
    ].join(" "),
    outline: [
      "text-foreground border border-border",
      "bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px),linear-gradient(var(--color-background),var(--color-background))]",
    ].join(" "),
    destructive: [
      "text-destructive-foreground",
      "bg-[repeating-linear-gradient(-45deg,var(--color-destructive-foreground),var(--color-destructive-foreground)_1px,transparent_1px,transparent_6px),linear-gradient(var(--color-destructive),var(--color-destructive))]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternStripe() {
  return (
    <PatternCard
      name="Stripe"
      description="Subtle 45-degree diagonal stripes layered over the base color via repeating-linear-gradient. Hover gently widens the stripe spacing. Adds texture without extra elements. Construction/caution tape energy."
    >
      <Row label="Variants">
        <StripeButton>Primary</StripeButton>
        <StripeButton variant="secondary">Secondary</StripeButton>
        <StripeButton variant="outline">Outline</StripeButton>
        <StripeButton variant="destructive">Destructive</StripeButton>
      </Row>
      <Row label="With icon">
        <StripeButton><Shield /> Protected</StripeButton>
        <StripeButton variant="destructive"><Trash2 /> Danger</StripeButton>
      </Row>
      <Row label="States">
        <StripeButton disabled>Disabled</StripeButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   8 — Typewriter
   Monospace, wide letter-spacing, mechanical feel
   ═══════════════════════════════════════════════ */

function TypewriterButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono font-semibold tracking-[0.15em] uppercase",
    "rounded-sm border transition-all duration-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:translate-y-px active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "border-foreground bg-foreground text-background hover:bg-foreground/85",
    secondary: "border-foreground/30 bg-transparent text-foreground hover:bg-foreground/5",
    outline: "border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground/40",
    destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/85",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-xs",
    sm: "h-8 px-3.5 text-[10px]",
    lg: "h-12 px-7 text-sm",
    icon: "h-10 w-10 text-xs",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternTypewriter() {
  return (
    <PatternCard
      name="Typewriter"
      description="Monospace font, wide letter-spacing (0.15em), uppercase, rounded-sm. Minimal 1px border. Active shifts down 1px like a typewriter key. Terminal/mechanical aesthetic."
    >
      <Row label="Variants">
        <TypewriterButton>Primary</TypewriterButton>
        <TypewriterButton variant="secondary">Secondary</TypewriterButton>
        <TypewriterButton variant="outline">Outline</TypewriterButton>
        <TypewriterButton variant="destructive">Delete</TypewriterButton>
      </Row>
      <Row label="With icon">
        <TypewriterButton><Terminal /> Execute</TypewriterButton>
        <TypewriterButton variant="secondary"><Copy /> Copy</TypewriterButton>
      </Row>
      <Row label="States">
        <TypewriterButton disabled>Disabled</TypewriterButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   9 — Accent Bar
   Fat left border accent stripe (4px)
   ═══════════════════════════════════════════════ */

function AccentBarButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-r-md rounded-l-none border-l-4 transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "border-l-primary bg-primary/8 text-primary hover:bg-primary/14 dark:bg-primary/10 dark:hover:bg-primary/20",
    secondary: "border-l-foreground/25 bg-muted text-foreground hover:bg-muted/70",
    outline: "border-l-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
    destructive: "border-l-destructive bg-destructive/8 text-destructive hover:bg-destructive/14 dark:bg-destructive/10 dark:hover:bg-destructive/20",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternAccentBar() {
  return (
    <PatternCard
      name="Accent Bar"
      description="A fat 4px left border in the accent color with a tonal fill. Rounded only on the right side. Like a sidebar active indicator turned into a button. Strong directional energy."
    >
      <Row label="Variants">
        <AccentBarButton>Primary</AccentBarButton>
        <AccentBarButton variant="secondary">Secondary</AccentBarButton>
        <AccentBarButton variant="outline">Neutral</AccentBarButton>
        <AccentBarButton variant="destructive">Destructive</AccentBarButton>
      </Row>
      <Row label="With icon">
        <AccentBarButton><Bookmark /> Saved</AccentBarButton>
        <AccentBarButton variant="destructive"><Trash2 /> Remove</AccentBarButton>
      </Row>
      <Row label="States">
        <AccentBarButton disabled>Disabled</AccentBarButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   10 — Dotted
   Dotted border that becomes solid on hover
   ═══════════════════════════════════════════════ */

function DottedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-lg border-2 border-dashed transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:border-solid",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "border-primary/50 text-primary bg-transparent hover:bg-primary/5 hover:border-primary",
    secondary: "border-foreground/20 text-foreground bg-transparent hover:bg-muted hover:border-foreground/30",
    outline: "border-border text-muted-foreground bg-transparent hover:bg-muted hover:text-foreground",
    destructive: "border-destructive/50 text-destructive bg-transparent hover:bg-destructive/5 hover:border-destructive",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternDotted() {
  return (
    <PatternCard
      name="Dotted"
      description="Dashed 2px border at rest suggesting an editable/configurable action. On hover, border becomes solid and a faint tonal fill appears. Implies 'drop here' or 'configure me'."
    >
      <Row label="Variants">
        <DottedButton>Primary</DottedButton>
        <DottedButton variant="secondary">Secondary</DottedButton>
        <DottedButton variant="outline">Neutral</DottedButton>
        <DottedButton variant="destructive">Destructive</DottedButton>
      </Row>
      <Row label="With icon">
        <DottedButton><Plus /> Add item</DottedButton>
        <DottedButton variant="secondary"><Upload /> Upload</DottedButton>
      </Row>
      <Row label="States">
        <DottedButton disabled>Disabled</DottedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   11 — Wire
   Ultra-thin 1px outline, wide letter-spacing,
   lots of breathing room. Barely there.
   ═══════════════════════════════════════════════ */

function WireButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-normal tracking-widest uppercase",
    "rounded-none border transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20",
    "active:opacity-70 active:transition-none",
    "disabled:pointer-events-none disabled:opacity-30",
    "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "border-primary/40 text-primary hover:border-primary hover:bg-primary/5",
    secondary: "border-foreground/15 text-foreground/60 hover:border-foreground/40 hover:text-foreground",
    outline: "border-border/50 text-muted-foreground hover:border-border hover:text-foreground",
    destructive: "border-destructive/40 text-destructive/70 hover:border-destructive hover:text-destructive",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-7 text-[10px]",
    sm: "h-8 px-5 text-[9px]",
    lg: "h-12 px-9 text-xs",
    icon: "h-10 w-10 text-[10px]",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternWire() {
  return (
    <PatternCard
      name="Wire"
      description="Deliberately understated: 1px border, no rounding, normal font-weight, widest letter-spacing, tiny text. Hover strengthens the border opacity. Haute couture minimalism."
    >
      <Row label="Variants">
        <WireButton>Primary</WireButton>
        <WireButton variant="secondary">Secondary</WireButton>
        <WireButton variant="outline">Neutral</WireButton>
        <WireButton variant="destructive">Delete</WireButton>
      </Row>
      <Row label="With icon">
        <WireButton><Eye /> View</WireButton>
        <WireButton variant="secondary"><Share2 /> Share</WireButton>
      </Row>
      <Row label="States">
        <WireButton disabled>Disabled</WireButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   12 — Double Ring
   Inner + outer border with visible gap via
   outline-offset
   ═══════════════════════════════════════════════ */

function DoubleRingButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-md border-2 outline outline-2 outline-offset-2 transition-all duration-200",
    "focus-visible:ring-0",
    "active:scale-[0.97] active:outline-offset-0 active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "border-primary outline-primary/30 bg-primary text-primary-foreground hover:outline-primary/60",
    secondary: "border-foreground/15 outline-foreground/10 bg-secondary text-secondary-foreground hover:outline-foreground/20",
    outline: "border-border outline-border/30 bg-background text-foreground hover:outline-border/60",
    destructive: "border-destructive outline-destructive/30 bg-destructive text-destructive-foreground hover:outline-destructive/60",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternDoubleRing() {
  return (
    <PatternCard
      name="Double Ring"
      description="Two concentric borders: a 2px border tight to the surface and a 2px outline offset 2px away. Hover strengthens the outer ring. Active collapses the offset to 0. Like a seal or stamp."
    >
      <Row label="Variants">
        <DoubleRingButton>Primary</DoubleRingButton>
        <DoubleRingButton variant="secondary">Secondary</DoubleRingButton>
        <DoubleRingButton variant="outline">Outline</DoubleRingButton>
        <DoubleRingButton variant="destructive">Destructive</DoubleRingButton>
      </Row>
      <Row label="With icon">
        <DoubleRingButton><Lock /> Secure</DoubleRingButton>
        <DoubleRingButton variant="outline"><Layers /> Stack</DoubleRingButton>
      </Row>
      <Row label="States">
        <DoubleRingButton disabled>Disabled</DoubleRingButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   13 — Corner Marks
   Small L-shaped bracket marks in corners only,
   no full border. Like crop/registration marks.
   ═══════════════════════════════════════════════ */

function CornerMarksButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const markColor: Record<string, string> = {
    default: "border-primary",
    secondary: "border-foreground/30",
    destructive: "border-destructive",
  };

  const textColor: Record<string, string> = {
    default: "text-primary",
    secondary: "text-foreground",
    destructive: "text-destructive",
  };

  const sizes: Record<string, string> = {
    default: "h-12 px-6 text-sm",
    sm: "h-10 px-4 text-xs",
    lg: "h-14 px-8 text-base",
    icon: "h-12 w-12 text-sm",
  };

  const v = variant ?? "default";
  const markCn = cn("pointer-events-none absolute w-3 h-3", markColor[v]);

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
        "bg-transparent transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "hover:bg-muted/40",
        "active:scale-[0.97] active:transition-none",
        "disabled:pointer-events-none disabled:opacity-40",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        textColor[v],
        sizes[size ?? "default"],
        className
      )}
      {...props}
    >
      <span className={cn(markCn, "top-0 left-0 border-t-2 border-l-2")} aria-hidden="true" />
      <span className={cn(markCn, "top-0 right-0 border-t-2 border-r-2")} aria-hidden="true" />
      <span className={cn(markCn, "bottom-0 left-0 border-b-2 border-l-2")} aria-hidden="true" />
      <span className={cn(markCn, "bottom-0 right-0 border-b-2 border-r-2")} aria-hidden="true" />
      {children}
    </button>
  );
}

function PatternCornerMarks() {
  return (
    <PatternCard
      name="Corner Marks"
      description="No continuous border -- only small L-shaped bracket marks at each corner, like print registration/crop marks. Taller padding gives them room. Hover adds a faint muted fill."
    >
      <Row label="Variants">
        <CornerMarksButton>Primary</CornerMarksButton>
        <CornerMarksButton variant="secondary">Secondary</CornerMarksButton>
        <CornerMarksButton variant="destructive">Delete</CornerMarksButton>
      </Row>
      <Row label="With icon">
        <CornerMarksButton><Crosshair /> Focus</CornerMarksButton>
        <CornerMarksButton variant="secondary"><Grip /> Arrange</CornerMarksButton>
      </Row>
      <Row label="States">
        <CornerMarksButton disabled>Disabled</CornerMarksButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   14 — Heavy
   Font-black, oversized text weight, zero
   decoration. Raw typographic hierarchy.
   ═══════════════════════════════════════════════ */

function HeavyButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-black tracking-tight",
    "rounded-md transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.96] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-35",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-muted text-foreground hover:bg-muted/70",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizes: Record<string, string> = {
    default: "h-11 px-5 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-13 px-7 text-lg",
    icon: "h-11 w-11 text-base",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternHeavy() {
  return (
    <PatternCard
      name="Heavy"
      description="Font-black weight with -0.025em tracking and text sized up from standard. Zero shadows, minimal border. The weight itself is the visual statement. All hierarchy comes from typography mass."
    >
      <Row label="Variants">
        <HeavyButton>Primary</HeavyButton>
        <HeavyButton variant="secondary">Secondary</HeavyButton>
        <HeavyButton variant="outline">Outline</HeavyButton>
        <HeavyButton variant="destructive">Delete</HeavyButton>
      </Row>
      <Row label="With icon">
        <HeavyButton><Flame /> Ignite</HeavyButton>
        <HeavyButton variant="outline"><ArrowRight /> Next</HeavyButton>
      </Row>
      <Row label="States">
        <HeavyButton disabled>Disabled</HeavyButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   15 — Snap
   Zero-duration instant transitions. Binary
   on/off state changes. No easing.
   ═══════════════════════════════════════════════ */

function SnapButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-md transition-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background active:invert",
    secondary: "bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background active:invert",
    outline: "border border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground active:invert",
    destructive: "bg-destructive text-destructive-foreground hover:bg-foreground hover:text-background active:invert",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternSnap() {
  return (
    <PatternCard
      name="Snap"
      description="transition-none: all state changes are instant with zero interpolation. Hover flips to foreground/background. Active inverts. Binary, decisive, zero ambiguity. For UIs that value speed over smoothness."
    >
      <Row label="Variants">
        <SnapButton>Primary</SnapButton>
        <SnapButton variant="secondary">Secondary</SnapButton>
        <SnapButton variant="outline">Outline</SnapButton>
        <SnapButton variant="destructive">Destructive</SnapButton>
      </Row>
      <Row label="With icon">
        <SnapButton><Zap /> Execute</SnapButton>
        <SnapButton variant="outline"><RotateCcw /> Reset</SnapButton>
      </Row>
      <Row label="States">
        <SnapButton disabled>Disabled</SnapButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   16 — Embossed
   Inner text-shadow creates a pressed/embossed
   letterpress effect
   ═══════════════════════════════════════════════ */

function EmbossedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-wide",
    "rounded-lg transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground [text-shadow:0_1px_0_rgba(255,255,255,0.15),0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-110",
    secondary: "bg-secondary text-secondary-foreground [text-shadow:0_1px_0_rgba(255,255,255,0.3),0_-1px_0_rgba(0,0,0,0.08)] hover:bg-secondary/80",
    outline: "border border-border bg-background text-foreground [text-shadow:0_1px_0_rgba(255,255,255,0.4)] hover:bg-muted dark:[text-shadow:0_1px_0_rgba(255,255,255,0.05)]",
    destructive: "bg-destructive text-destructive-foreground [text-shadow:0_1px_0_rgba(255,255,255,0.12),0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-110",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-xs",
    sm: "h-8 px-3.5 text-[10px]",
    lg: "h-12 px-7 text-sm",
    icon: "h-10 w-10 text-xs",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternEmbossed() {
  return (
    <PatternCard
      name="Embossed"
      description="Dual text-shadow: a light highlight 1px above and a dark shadow 1px below creates a letterpress/embossed text effect. The text appears stamped into the surface. Physical and tactile without box-shadow complexity."
    >
      <Row label="Variants">
        <EmbossedButton>Primary</EmbossedButton>
        <EmbossedButton variant="secondary">Secondary</EmbossedButton>
        <EmbossedButton variant="outline">Outline</EmbossedButton>
        <EmbossedButton variant="destructive">Delete</EmbossedButton>
      </Row>
      <Row label="With icon">
        <EmbossedButton><Crown /> Premium</EmbossedButton>
        <EmbossedButton variant="secondary"><Shield /> Guard</EmbossedButton>
      </Row>
      <Row label="States">
        <EmbossedButton disabled>Disabled</EmbossedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   17 — Sweep
   Background-position sweep: color slides in
   from left via background-size trick
   ═══════════════════════════════════════════════ */

function SweepButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-400 ease-out",
    "[background-size:200%_100%] [background-position:100%_0]",
    "hover:[background-position:0_0]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-[transform] active:duration-75",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-[linear-gradient(to_left,var(--color-primary)_50%,var(--color-foreground)_50%)] text-primary-foreground",
    secondary: "bg-[linear-gradient(to_left,var(--color-secondary)_50%,var(--color-primary)_50%)] text-secondary-foreground hover:text-primary-foreground",
    outline: "border border-border bg-[linear-gradient(to_left,var(--color-background)_50%,var(--color-muted)_50%)] text-foreground",
    destructive: "bg-[linear-gradient(to_left,var(--color-destructive)_50%,var(--color-foreground)_50%)] text-destructive-foreground",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternSweep() {
  return (
    <PatternCard
      name="Sweep"
      description="Uses a 200%-width linear-gradient background with background-position shift on hover. The color sweeps in from left to right as the position changes from 100% to 0%. Pure CSS, no pseudo-elements."
    >
      <Row label="Variants">
        <SweepButton>Primary</SweepButton>
        <SweepButton variant="secondary">Secondary</SweepButton>
        <SweepButton variant="outline">Outline</SweepButton>
        <SweepButton variant="destructive">Destructive</SweepButton>
      </Row>
      <Row label="With icon">
        <SweepButton><ArrowRight /> Continue</SweepButton>
        <SweepButton variant="secondary"><Sparkles /> Upgrade</SweepButton>
      </Row>
      <Row label="States">
        <SweepButton disabled>Disabled</SweepButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   18 — Compact
   Very small, tight, dense utility buttons.
   For toolbars and dense UIs.
   ═══════════════════════════════════════════════ */

function CompactButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium",
    "rounded transition-colors duration-100",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
    "active:opacity-75 active:transition-none",
    "disabled:pointer-events-none disabled:opacity-35",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/85",
    secondary: "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70",
    outline: "border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted",
    destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30",
  };

  const sizes: Record<string, string> = {
    default: "h-7 px-2.5 text-xs",
    sm: "h-6 px-2 text-[10px]",
    lg: "h-8 px-3.5 text-xs",
    icon: "h-7 w-7 text-xs",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternCompact() {
  return (
    <PatternCard
      name="Compact"
      description="Deliberately tiny: h-7 default, h-6 small, 1px gap, 3px icon size, tiny rounded corners. Designed for toolbar density. Destructive uses a tonal fill instead of solid. Fast 100ms transitions."
    >
      <Row label="Variants">
        <CompactButton>Primary</CompactButton>
        <CompactButton variant="secondary">Secondary</CompactButton>
        <CompactButton variant="outline">Outline</CompactButton>
        <CompactButton variant="destructive">Delete</CompactButton>
      </Row>
      <Row label="Sizes">
        <CompactButton size="sm">Tiny</CompactButton>
        <CompactButton size="default">Default</CompactButton>
        <CompactButton size="lg">Large</CompactButton>
        <CompactButton size="icon"><Settings /></CompactButton>
      </Row>
      <Row label="With icon">
        <CompactButton><Copy /> Copy</CompactButton>
        <CompactButton variant="secondary"><Eye /> View</CompactButton>
        <CompactButton variant="outline"><Pencil /> Edit</CompactButton>
        <CompactButton variant="destructive"><Trash2 /> Delete</CompactButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   19 — Paper
   Warm-tinted background, very subtle shadow,
   gentle rotate on hover
   ═══════════════════════════════════════════════ */

function PaperButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-sm transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:rotate-[-0.5deg] hover:shadow-[2px_3px_8px_rgba(0,0,0,0.08)]",
    "active:rotate-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.06)] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:rotate-0",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground shadow-[1px_2px_4px_rgba(0,0,0,0.06)]",
    secondary: "bg-amber-50 text-amber-900 shadow-[1px_2px_4px_rgba(0,0,0,0.04)] dark:bg-amber-950/30 dark:text-amber-200",
    outline: "border border-amber-200/60 bg-amber-50/50 text-foreground shadow-[1px_2px_4px_rgba(0,0,0,0.03)] dark:border-amber-800/30 dark:bg-amber-950/20",
    destructive: "bg-red-50 text-red-700 shadow-[1px_2px_4px_rgba(0,0,0,0.04)] dark:bg-red-950/30 dark:text-red-300",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternPaper() {
  return (
    <PatternCard
      name="Paper"
      description="Warm amber-tinted fills like aged paper. Gentle offset shadow. On hover, rotates -0.5deg and the shadow deepens -- like lifting a sticky note off a surface. Rounded-sm for a slightly rough edge feel."
    >
      <Row label="Variants">
        <PaperButton>Primary</PaperButton>
        <PaperButton variant="secondary">Note</PaperButton>
        <PaperButton variant="outline">Outline</PaperButton>
        <PaperButton variant="destructive">Discard</PaperButton>
      </Row>
      <Row label="With icon">
        <PaperButton variant="secondary"><Pencil /> Draft</PaperButton>
        <PaperButton variant="outline"><Bookmark /> Bookmark</PaperButton>
      </Row>
      <Row label="States">
        <PaperButton disabled>Disabled</PaperButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   20 — Tag
   Clip-path label shape with left arrow notch
   ═══════════════════════════════════════════════ */

function TagButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "transition-all duration-200",
    "[clip-path:polygon(10px_0,100%_0,100%_100%,10px_100%,0_50%)]",
    "focus-visible:outline-none",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:brightness-110",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "bg-muted text-foreground hover:bg-muted/70",
    destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
  };

  const sizes: Record<string, string> = {
    default: "h-10 pl-6 pr-5 text-sm",
    sm: "h-8 pl-5 pr-3.5 text-xs",
    lg: "h-12 pl-8 pr-7 text-base",
    icon: "h-10 w-12 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternTag() {
  return (
    <PatternCard
      name="Tag"
      description="Clip-path creates a left-pointing arrow notch, turning the button into a label/tag shape. Wider left padding compensates for the cut. Think price tags, category labels, or breadcrumb-style actions."
    >
      <Row label="Variants">
        <TagButton>Primary</TagButton>
        <TagButton variant="secondary">Secondary</TagButton>
        <TagButton variant="outline">Neutral</TagButton>
        <TagButton variant="destructive">Remove</TagButton>
      </Row>
      <Row label="With icon">
        <TagButton><Target /> Label</TagButton>
        <TagButton variant="secondary"><Bookmark /> Save</TagButton>
      </Row>
      <Row label="States">
        <TagButton disabled>Disabled</TagButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   21 — Layered
   Visible pseudo-element copy behind the button,
   slightly offset and rotated
   ═══════════════════════════════════════════════ */

function LayeredButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-background text-foreground",
    destructive: "bg-destructive text-destructive-foreground",
  };

  const layerColors: Record<string, string> = {
    default: "bg-primary/25",
    secondary: "bg-secondary/50",
    outline: "border border-border bg-background/50",
    destructive: "bg-destructive/25",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  const v = variant ?? "default";

  return (
    <span className="relative inline-flex">
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-lg transition-transform duration-300 ease-out",
          "translate-x-1 translate-y-1 rotate-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:rotate-2",
          layerColors[v]
        )}
        aria-hidden="true"
      />
      <button className={cn(base, "relative z-10", variants[v], sizes[size ?? "default"], className)} {...props}>
        {children}
      </button>
    </span>
  );
}

function PatternLayered() {
  return (
    <PatternCard
      name="Layered"
      description="A faded copy of the button sits 1px offset and 1deg rotated behind it, creating a layered/stacked paper effect. Hover shifts the layer further. The front button stays sharp while the back adds playful depth."
    >
      <Row label="Variants">
        <LayeredButton>Primary</LayeredButton>
        <LayeredButton variant="secondary">Secondary</LayeredButton>
        <LayeredButton variant="outline">Outline</LayeredButton>
        <LayeredButton variant="destructive">Destructive</LayeredButton>
      </Row>
      <Row label="With icon">
        <LayeredButton><Layers /> Stack</LayeredButton>
        <LayeredButton variant="outline"><Copy /> Duplicate</LayeredButton>
      </Row>
      <Row label="States">
        <LayeredButton disabled>Disabled</LayeredButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   22 — Focus Ring
   Wide visible offset ring on hover (not just
   focus-visible). Like a target highlight.
   ═══════════════════════════════════════════════ */

function FocusRingButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg ring-0 ring-offset-2 ring-offset-background transition-all duration-200 ease-out",
    "hover:ring-2",
    "focus-visible:outline-none focus-visible:ring-2",
    "active:scale-[0.97] active:ring-0 active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:ring-0",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground ring-primary/50 hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground ring-foreground/15 hover:bg-secondary/80",
    outline: "border border-border bg-background text-foreground ring-border hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground ring-destructive/50 hover:bg-destructive/90",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternFocusRing() {
  return (
    <PatternCard
      name="Focus Ring"
      description="A 2px ring with 2px offset appears on hover (not just focus-visible), creating a clear selection indicator. Active collapses the ring. Simple but effective -- every hover state clearly communicates 'this is selected'."
    >
      <Row label="Variants">
        <FocusRingButton>Primary</FocusRingButton>
        <FocusRingButton variant="secondary">Secondary</FocusRingButton>
        <FocusRingButton variant="outline">Outline</FocusRingButton>
        <FocusRingButton variant="destructive">Destructive</FocusRingButton>
      </Row>
      <Row label="With icon">
        <FocusRingButton><Check /> Select</FocusRingButton>
        <FocusRingButton variant="outline"><Eye /> Preview</FocusRingButton>
      </Row>
      <Row label="States">
        <FocusRingButton disabled>Disabled</FocusRingButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   23 — Bounce
   Multi-step keyframe bounce on hover
   ═══════════════════════════════════════════════ */

function BounceButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:animate-[jelly_0.5s_ease]",
    "active:scale-95 active:transition-[transform] active:duration-75",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:animate-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-background text-foreground hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternBounce() {
  return (
    <PatternCard
      name="Bounce"
      description="Hover triggers a multi-step jelly keyframe: scale up, squish, stretch, settle. A playful 500ms bounce that makes buttons feel alive. Uses a custom @keyframes animation."
    >
      <style>{`
        @keyframes jelly {
          0% { transform: scale(1, 1); }
          25% { transform: scale(0.95, 1.05); }
          50% { transform: scale(1.05, 0.95); }
          75% { transform: scale(0.98, 1.02); }
          100% { transform: scale(1, 1); }
        }
      `}</style>
      <Row label="Variants">
        <BounceButton>Primary</BounceButton>
        <BounceButton variant="secondary">Secondary</BounceButton>
        <BounceButton variant="outline">Outline</BounceButton>
        <BounceButton variant="destructive">Destructive</BounceButton>
      </Row>
      <Row label="With icon">
        <BounceButton><Sparkles /> Delight</BounceButton>
        <BounceButton variant="outline"><Bell /> Notify</BounceButton>
      </Row>
      <Row label="States">
        <BounceButton disabled>Disabled</BounceButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   24 — Minimal Depth
   Barely-there bottom shadow line + very subtle
   top inner light. The most restrained depth model.
   ═══════════════════════════════════════════════ */

function MinimalDepthButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: BtnProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-md transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:shadow-none active:translate-y-px active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_0_rgba(0,0,0,0.15)]",
      "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.18)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_0_rgba(0,0,0,0.06)]",
      "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_1px_0_rgba(0,0,0,0.2)]",
      "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.08)]",
      "dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.25)]",
    ].join(" "),
    outline: [
      "border border-border bg-background text-foreground",
      "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-muted",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_0_rgba(0,0,0,0.15)]",
      "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.18)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-9 px-4 text-sm",
    sm: "h-7 px-3 text-xs",
    lg: "h-11 px-6 text-base",
    icon: "h-9 w-9 text-sm",
  };

  return (
    <button className={cn(base, variants[variant ?? "default"], sizes[size ?? "default"], className)} {...props}>
      {children}
    </button>
  );
}

function PatternMinimalDepth() {
  return (
    <PatternCard
      name="Minimal Depth"
      tag="Linear-style"
      description="The most restrained depth model: a 1px bottom shadow line and a 1px inner top highlight. That's it. Inspired by Linear, Vercel, and macOS native buttons. Active pushes down 1px and removes the shadow. Compact h-9 sizing."
    >
      <Row label="Variants">
        <MinimalDepthButton>Primary</MinimalDepthButton>
        <MinimalDepthButton variant="secondary">Secondary</MinimalDepthButton>
        <MinimalDepthButton variant="outline">Outline</MinimalDepthButton>
        <MinimalDepthButton variant="destructive">Destructive</MinimalDepthButton>
      </Row>
      <Row label="Sizes">
        <MinimalDepthButton size="sm">Small</MinimalDepthButton>
        <MinimalDepthButton size="default">Default</MinimalDepthButton>
        <MinimalDepthButton size="lg">Large</MinimalDepthButton>
        <MinimalDepthButton size="icon"><Settings /></MinimalDepthButton>
      </Row>
      <Row label="With icon">
        <MinimalDepthButton><Send /> Send</MinimalDepthButton>
        <MinimalDepthButton variant="secondary"><Copy /> Copy</MinimalDepthButton>
        <MinimalDepthButton variant="outline"><Download /> Export</MinimalDepthButton>
        <MinimalDepthButton variant="destructive"><Trash2 /> Delete</MinimalDepthButton>
      </Row>
      <Row label="States">
        <MinimalDepthButton disabled>Disabled</MinimalDepthButton>
        <MinimalDepthButton disabled><Loader2 className="animate-spin" /> Saving...</MinimalDepthButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Main Export
   ═══════════════════════════════════════════════ */

export default function ButtonPatternsV2Demo() {
  return (
    <div className="space-y-12">
      <DemoSection title="About">
        <p className="text-sm text-muted-foreground leading-relaxed">
          24 patterns focused on modern, elastic interactions and non-generic aesthetics.
          Each draws from real product design: material metaphors, physical motion, typographic
          personality. Click around -- pay attention to spring easing, squeeze deformation,
          and interaction models.
        </p>
      </DemoSection>

      <PatternMinimalDepth />
      <PatternSlideFill />
      <PatternBorderDraw />
      <PatternSqueeze />
      <PatternTilt />
      <PatternBounce />
      <PatternLedge />
      <PatternNotched />
      <PatternTag />
      <PatternLayered />
      <PatternCornerMarks />
      <PatternStripe />
      <PatternDotted />
      <PatternAccentBar />
      <PatternDoubleRing />
      <PatternFocusRing />
      <PatternSweep />
      <PatternPaper />
      <PatternTypewriter />
      <PatternWire />
      <PatternHeavy />
      <PatternEmbossed />
      <PatternSnap />
      <PatternCompact />
    </div>
  );
}
