import {
  Mail,
  Loader2,
  ArrowRight,
  Plus,
  Trash2,
  Download,
  Check,
  Star,
  Zap,
  Send,
  Heart,
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
  Pause,
  Crown,
  Flame,
  Target,
  Wand2,
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

/* ═══════════════════════════════════════════════
   Pattern A — Refined
   Elevated shadcn: subtle depth, inner glow,
   smooth press transform, refined focus rings
   ═══════════════════════════════════════════════ */

function RefinedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-lg transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
      "hover:bg-primary/90 hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_1px_2px_0_rgba(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
      "hover:bg-secondary/80 hover:shadow-[0_2px_6px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
    ].join(" "),
    outline: [
      "border border-input bg-background text-foreground",
      "shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]",
      "hover:bg-accent hover:text-accent-foreground hover:shadow-[0_2px_6px_-2px_rgba(0,0,0,0.08)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
      "hover:bg-destructive/90 hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
    ].join(" "),
    ghost: "hover:bg-accent hover:text-accent-foreground text-foreground",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternRefined() {
  return (
    <PatternCard
      name="Refined"
      tag="Recommended"
      description="Elevated shadcn baseline with subtle box shadows for depth, an inner highlight for a 3D lip, smooth active:scale press feedback, and softer focus rings. Drop-in compatible with existing variant names."
    >
      <Row label="Variants">
        <RefinedButton>Primary</RefinedButton>
        <RefinedButton variant="secondary">Secondary</RefinedButton>
        <RefinedButton variant="outline">Outline</RefinedButton>
        <RefinedButton variant="destructive">Destructive</RefinedButton>
        <RefinedButton variant="ghost">Ghost</RefinedButton>
      </Row>
      <Row label="Sizes">
        <RefinedButton size="sm">Small</RefinedButton>
        <RefinedButton size="default">Default</RefinedButton>
        <RefinedButton size="lg">Large</RefinedButton>
        <RefinedButton size="icon">
          <Plus />
        </RefinedButton>
      </Row>
      <Row label="With icon">
        <RefinedButton>
          <Mail /> Send email
        </RefinedButton>
        <RefinedButton variant="outline">
          <Download /> Export
        </RefinedButton>
        <RefinedButton>
          Continue <ArrowRight />
        </RefinedButton>
      </Row>
      <Row label="States">
        <RefinedButton disabled>Disabled</RefinedButton>
        <RefinedButton disabled>
          <Loader2 className="animate-spin" /> Saving...
        </RefinedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern B — Glass
   Frosted glass: backdrop-blur, semi-transparent,
   thin inner border, ambient shadow
   ═══════════════════════════════════════════════ */

function GlassButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-xl transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "backdrop-blur-md",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary/85 text-primary-foreground",
      "border border-white/15",
      "shadow-[0_2px_12px_-3px_rgba(0,0,0,0.15)]",
      "hover:bg-primary/95 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)]",
    ].join(" "),
    secondary: [
      "bg-secondary/70 text-secondary-foreground",
      "border border-white/10 dark:border-white/5",
      "shadow-[0_1px_8px_-3px_rgba(0,0,0,0.08)]",
      "hover:bg-secondary/90 hover:shadow-[0_2px_12px_-3px_rgba(0,0,0,0.12)]",
    ].join(" "),
    outline: [
      "bg-background/50 text-foreground",
      "border border-border/60",
      "shadow-[0_1px_4px_-2px_rgba(0,0,0,0.04)]",
      "hover:bg-accent/60 hover:border-border hover:shadow-[0_2px_8px_-3px_rgba(0,0,0,0.08)]",
    ].join(" "),
    destructive: [
      "bg-destructive/80 text-destructive-foreground",
      "border border-white/10",
      "shadow-[0_2px_12px_-3px_rgba(0,0,0,0.15)]",
      "hover:bg-destructive/95 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)]",
    ].join(" "),
    ghost: [
      "text-foreground bg-transparent border border-transparent",
      "hover:bg-accent/40 hover:border-border/30",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternGlass() {
  return (
    <PatternCard
      name="Glass"
      description="Frosted-glass aesthetic with backdrop-blur, semi-transparent fills, thin luminous inner borders, and ambient shadows that shift on hover. Works best over patterned or colored backgrounds."
    >
      <Row label="Variants">
        <GlassButton>Primary</GlassButton>
        <GlassButton variant="secondary">Secondary</GlassButton>
        <GlassButton variant="outline">Outline</GlassButton>
        <GlassButton variant="destructive">Destructive</GlassButton>
        <GlassButton variant="ghost">Ghost</GlassButton>
      </Row>
      <Row label="Sizes">
        <GlassButton size="sm">Small</GlassButton>
        <GlassButton size="default">Default</GlassButton>
        <GlassButton size="lg">Large</GlassButton>
        <GlassButton size="icon">
          <Star />
        </GlassButton>
      </Row>
      <Row label="With icon">
        <GlassButton>
          <Zap /> Boost
        </GlassButton>
        <GlassButton variant="outline">
          <Download /> Export
        </GlassButton>
        <GlassButton>
          Next <ArrowRight />
        </GlassButton>
      </Row>
      <Row label="States">
        <GlassButton disabled>Disabled</GlassButton>
        <GlassButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </GlassButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern C — Glow
   Gradient fills with a colored glow halo
   on hover, vibrant and attention-grabbing
   ═══════════════════════════════════════════════ */

function GlowButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.96] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-gradient-to-b from-primary to-primary/85 text-primary-foreground",
      "shadow-[0_2px_8px_-2px_var(--primary)]",
      "hover:shadow-[0_4px_20px_-4px_var(--primary)] hover:brightness-110",
    ].join(" "),
    secondary: [
      "bg-gradient-to-b from-secondary to-secondary/80 text-secondary-foreground",
      "shadow-[0_1px_4px_-1px_rgba(0,0,0,0.08)]",
      "hover:shadow-[0_3px_12px_-3px_rgba(0,0,0,0.12)] hover:brightness-95",
    ].join(" "),
    outline: [
      "border border-primary/30 bg-transparent text-primary",
      "shadow-none",
      "hover:bg-primary/5 hover:border-primary/60 hover:shadow-[0_2px_12px_-4px_var(--primary)]",
    ].join(" "),
    destructive: [
      "bg-gradient-to-b from-destructive to-destructive/85 text-destructive-foreground",
      "shadow-[0_2px_8px_-2px_var(--destructive)]",
      "hover:shadow-[0_4px_20px_-4px_var(--destructive)] hover:brightness-110",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternGlow() {
  return (
    <PatternCard
      name="Glow"
      description="Gradient fills with a colored glow halo that blooms on hover. Uses the theme's primary and destructive colors as the glow source. Vibrant, attention-grabbing -- ideal for CTAs and action-heavy UIs."
    >
      <Row label="Variants">
        <GlowButton>Primary</GlowButton>
        <GlowButton variant="secondary">Secondary</GlowButton>
        <GlowButton variant="outline">Outline</GlowButton>
        <GlowButton variant="destructive">Destructive</GlowButton>
      </Row>
      <Row label="Sizes">
        <GlowButton size="sm">Small</GlowButton>
        <GlowButton size="default">Default</GlowButton>
        <GlowButton size="lg">Large</GlowButton>
        <GlowButton size="icon">
          <Zap />
        </GlowButton>
      </Row>
      <Row label="With icon">
        <GlowButton>
          <Send /> Send
        </GlowButton>
        <GlowButton variant="outline">
          <Star /> Favorite
        </GlowButton>
        <GlowButton>
          Upgrade <ArrowRight />
        </GlowButton>
      </Row>
      <Row label="States">
        <GlowButton disabled>Disabled</GlowButton>
        <GlowButton disabled>
          <Loader2 className="animate-spin" /> Processing...
        </GlowButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern D — Brutalist
   Strong borders, offset shadows, raw, bold,
   no rounded corners
   ═══════════════════════════════════════════════ */

function BrutalistButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-wide",
    "rounded-none border-2 border-foreground transition-all duration-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "shadow-[3px_3px_0_0_var(--color-foreground)]",
    "hover:shadow-[1px_1px_0_0_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px]",
    "active:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "bg-background text-foreground",
    destructive:
      "bg-destructive text-destructive-foreground border-destructive shadow-[3px_3px_0_0_var(--color-destructive)] hover:shadow-[1px_1px_0_0_var(--color-destructive)] active:shadow-none",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-xs",
    sm: "h-8 px-3 text-[10px]",
    lg: "h-12 px-7 text-sm",
    icon: "h-10 w-10 text-xs",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternBrutalist() {
  return (
    <PatternCard
      name="Brutalist"
      description="Strong 2px borders, hard offset shadows that collapse on press, no rounded corners, bold uppercase tracking. Raw and graphic with a tactile punch-press feel."
    >
      <Row label="Variants">
        <BrutalistButton>Primary</BrutalistButton>
        <BrutalistButton variant="secondary">Secondary</BrutalistButton>
        <BrutalistButton variant="outline">Outline</BrutalistButton>
        <BrutalistButton variant="destructive">Delete</BrutalistButton>
      </Row>
      <Row label="Sizes">
        <BrutalistButton size="sm">Small</BrutalistButton>
        <BrutalistButton size="default">Default</BrutalistButton>
        <BrutalistButton size="lg">Large</BrutalistButton>
        <BrutalistButton size="icon">
          <Plus />
        </BrutalistButton>
      </Row>
      <Row label="With icon">
        <BrutalistButton>
          <Mail /> Email
        </BrutalistButton>
        <BrutalistButton variant="outline">
          <Download /> Export
        </BrutalistButton>
        <BrutalistButton variant="destructive">
          <Trash2 /> Remove
        </BrutalistButton>
      </Row>
      <Row label="States">
        <BrutalistButton disabled>Disabled</BrutalistButton>
        <BrutalistButton disabled>
          <Loader2 className="animate-spin" /> Wait
        </BrutalistButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern E — Soft Pill
   Fully rounded, tonal fills, gentle, modern
   SaaS/dashboard feel
   ═══════════════════════════════════════════════ */

function SoftButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-full transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.96] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]",
      "hover:bg-primary/90 hover:shadow-[0_3px_10px_-3px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground",
      "hover:bg-primary/15 dark:hover:bg-primary/25",
    ].join(" "),
    outline: [
      "border border-border bg-transparent text-foreground",
      "hover:bg-muted hover:border-border/80",
    ].join(" "),
    destructive: [
      "bg-destructive/10 text-destructive dark:bg-destructive/20",
      "hover:bg-destructive/15 dark:hover:bg-destructive/30",
    ].join(" "),
    ghost: "text-foreground hover:bg-muted",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-6 text-sm",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternSoft() {
  return (
    <PatternCard
      name="Soft Pill"
      description="Fully rounded pill shape with soft tonal fills. Secondary and destructive use light-tinted backgrounds instead of solid fills, giving a gentle, modern SaaS feel. Clean and approachable."
    >
      <Row label="Variants">
        <SoftButton>Primary</SoftButton>
        <SoftButton variant="secondary">Secondary</SoftButton>
        <SoftButton variant="outline">Outline</SoftButton>
        <SoftButton variant="destructive">Destructive</SoftButton>
        <SoftButton variant="ghost">Ghost</SoftButton>
      </Row>
      <Row label="Sizes">
        <SoftButton size="sm">Small</SoftButton>
        <SoftButton size="default">Default</SoftButton>
        <SoftButton size="lg">Large</SoftButton>
        <SoftButton size="icon">
          <Check />
        </SoftButton>
      </Row>
      <Row label="With icon">
        <SoftButton>
          <Send /> Send
        </SoftButton>
        <SoftButton variant="secondary">
          <Star /> Favorite
        </SoftButton>
        <SoftButton variant="destructive">
          <Trash2 /> Remove
        </SoftButton>
      </Row>
      <Row label="States">
        <SoftButton disabled>Disabled</SoftButton>
        <SoftButton disabled>
          <Loader2 className="animate-spin" /> Saving...
        </SoftButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern F — Raised
   Layered depth with a visible bottom edge,
   physical "raised surface" feel, press pushes
   the button flush
   ═══════════════════════════════════════════════ */

function RaisedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "translate-y-0 hover:-translate-y-[1px]",
    "active:translate-y-[2px] active:shadow-none active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:translate-y-0",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_3px_0_0_oklch(0.45_0.15_260),0_4px_8px_-2px_rgba(0,0,0,0.15)]",
      "hover:shadow-[0_4px_0_0_oklch(0.45_0.15_260),0_6px_12px_-3px_rgba(0,0,0,0.2)]",
      "active:shadow-[0_0px_0_0_oklch(0.45_0.15_260)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_3px_0_0_oklch(0.85_0.005_265),0_4px_8px_-2px_rgba(0,0,0,0.08)]",
      "dark:shadow-[0_3px_0_0_oklch(0.18_0_0),0_4px_8px_-2px_rgba(0,0,0,0.2)]",
      "hover:shadow-[0_4px_0_0_oklch(0.85_0.005_265),0_6px_12px_-3px_rgba(0,0,0,0.12)]",
      "dark:hover:shadow-[0_4px_0_0_oklch(0.18_0_0),0_6px_12px_-3px_rgba(0,0,0,0.25)]",
      "active:shadow-[0_0px_0_0_oklch(0.85_0.005_265)]",
      "dark:active:shadow-[0_0px_0_0_oklch(0.18_0_0)]",
    ].join(" "),
    outline: [
      "border-2 border-border bg-background text-foreground",
      "shadow-[0_3px_0_0_var(--color-border),0_4px_8px_-2px_rgba(0,0,0,0.06)]",
      "hover:shadow-[0_4px_0_0_var(--color-border),0_6px_12px_-3px_rgba(0,0,0,0.1)]",
      "active:shadow-[0_0px_0_0_var(--color-border)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_3px_0_0_oklch(0.45_0.17_25),0_4px_8px_-2px_rgba(0,0,0,0.15)]",
      "hover:shadow-[0_4px_0_0_oklch(0.45_0.17_25),0_6px_12px_-3px_rgba(0,0,0,0.2)]",
      "active:shadow-[0_0px_0_0_oklch(0.45_0.17_25)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternRaised() {
  return (
    <PatternCard
      name="Raised"
      description="Physical depth with a visible bottom edge that creates a raised-surface illusion. Hover lifts the button slightly higher, while pressing pushes it flush. Tactile and satisfying."
    >
      <Row label="Variants">
        <RaisedButton>Primary</RaisedButton>
        <RaisedButton variant="secondary">Secondary</RaisedButton>
        <RaisedButton variant="outline">Outline</RaisedButton>
        <RaisedButton variant="destructive">Destructive</RaisedButton>
      </Row>
      <Row label="Sizes">
        <RaisedButton size="sm">Small</RaisedButton>
        <RaisedButton size="default">Default</RaisedButton>
        <RaisedButton size="lg">Large</RaisedButton>
        <RaisedButton size="icon">
          <Plus />
        </RaisedButton>
      </Row>
      <Row label="With icon">
        <RaisedButton>
          <Check /> Confirm
        </RaisedButton>
        <RaisedButton variant="outline">
          <Download /> Download
        </RaisedButton>
        <RaisedButton variant="destructive">
          <Trash2 /> Delete
        </RaisedButton>
      </Row>
      <Row label="States">
        <RaisedButton disabled>Disabled</RaisedButton>
        <RaisedButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </RaisedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern G — Neumorphic
   Soft embossed/debossed look with light and
   dark shadows on a matching background
   ═══════════════════════════════════════════════ */

function NeumorphicButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-2xl transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0",
    "active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] active:transition-none",
    "dark:active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.03)]",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[4px_4px_10px_rgba(0,0,0,0.12),-4px_-4px_10px_rgba(255,255,255,0.7)]",
      "dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.04)]",
      "hover:shadow-[6px_6px_14px_rgba(0,0,0,0.15),-6px_-6px_14px_rgba(255,255,255,0.8)]",
      "dark:hover:shadow-[6px_6px_14px_rgba(0,0,0,0.35),-6px_-6px_14px_rgba(255,255,255,0.05)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[4px_4px_10px_rgba(0,0,0,0.06),-4px_-4px_10px_rgba(255,255,255,0.8)]",
      "dark:shadow-[4px_4px_10px_rgba(0,0,0,0.25),-4px_-4px_10px_rgba(255,255,255,0.03)]",
      "hover:shadow-[6px_6px_14px_rgba(0,0,0,0.08),-6px_-6px_14px_rgba(255,255,255,0.9)]",
      "dark:hover:shadow-[6px_6px_14px_rgba(0,0,0,0.3),-6px_-6px_14px_rgba(255,255,255,0.04)]",
    ].join(" "),
    outline: [
      "bg-background text-foreground",
      "shadow-[4px_4px_10px_rgba(0,0,0,0.05),-4px_-4px_10px_rgba(255,255,255,0.9)]",
      "dark:shadow-[4px_4px_10px_rgba(0,0,0,0.25),-4px_-4px_10px_rgba(255,255,255,0.03)]",
      "hover:shadow-[6px_6px_14px_rgba(0,0,0,0.07),-6px_-6px_14px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_14px_rgba(0,0,0,0.3),-6px_-6px_14px_rgba(255,255,255,0.04)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[4px_4px_10px_rgba(0,0,0,0.12),-4px_-4px_10px_rgba(255,255,255,0.7)]",
      "dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.04)]",
      "hover:shadow-[6px_6px_14px_rgba(0,0,0,0.15),-6px_-6px_14px_rgba(255,255,255,0.8)]",
      "dark:hover:shadow-[6px_6px_14px_rgba(0,0,0,0.35),-6px_-6px_14px_rgba(255,255,255,0.05)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-11 px-6 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-13 px-8 text-base",
    icon: "h-11 w-11 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternNeumorphic() {
  return (
    <PatternCard
      name="Neumorphic"
      description="Soft embossed appearance with dual light/dark shadows that create a raised clay-like surface. Press inverts the shadows to a debossed inset. Rounded-2xl for the characteristic smooth feel."
    >
      <Row label="Variants">
        <NeumorphicButton>Primary</NeumorphicButton>
        <NeumorphicButton variant="secondary">Secondary</NeumorphicButton>
        <NeumorphicButton variant="outline">Surface</NeumorphicButton>
        <NeumorphicButton variant="destructive">Destructive</NeumorphicButton>
      </Row>
      <Row label="Sizes">
        <NeumorphicButton size="sm">Small</NeumorphicButton>
        <NeumorphicButton size="default">Default</NeumorphicButton>
        <NeumorphicButton size="lg">Large</NeumorphicButton>
        <NeumorphicButton size="icon">
          <Heart />
        </NeumorphicButton>
      </Row>
      <Row label="With icon">
        <NeumorphicButton>
          <Bell /> Notify
        </NeumorphicButton>
        <NeumorphicButton variant="outline">
          <Copy /> Duplicate
        </NeumorphicButton>
        <NeumorphicButton variant="destructive">
          <Trash2 /> Remove
        </NeumorphicButton>
      </Row>
      <Row label="States">
        <NeumorphicButton disabled>Disabled</NeumorphicButton>
        <NeumorphicButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </NeumorphicButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern H — Outlined Bold
   Thick colored borders, hollow fill, fills
   solid on hover with a smooth transition
   ═══════════════════════════════════════════════ */

function OutlinedBoldButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-md border-2 transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "border-primary text-primary bg-transparent",
      "hover:bg-primary hover:text-primary-foreground",
    ].join(" "),
    secondary: [
      "border-foreground/20 text-foreground bg-transparent",
      "hover:bg-foreground hover:text-background",
    ].join(" "),
    outline: [
      "border-border text-muted-foreground bg-transparent",
      "hover:bg-muted hover:text-foreground hover:border-foreground/20",
    ].join(" "),
    destructive: [
      "border-destructive text-destructive bg-transparent",
      "hover:bg-destructive hover:text-destructive-foreground",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternOutlinedBold() {
  return (
    <PatternCard
      name="Outlined Bold"
      description="Thick 2px colored borders with hollow transparent fills. On hover, the button fills solid with a smooth color transition. Strong visual hierarchy when at rest, decisive on interaction."
    >
      <Row label="Variants">
        <OutlinedBoldButton>Primary</OutlinedBoldButton>
        <OutlinedBoldButton variant="secondary">Secondary</OutlinedBoldButton>
        <OutlinedBoldButton variant="outline">Neutral</OutlinedBoldButton>
        <OutlinedBoldButton variant="destructive">Destructive</OutlinedBoldButton>
      </Row>
      <Row label="Sizes">
        <OutlinedBoldButton size="sm">Small</OutlinedBoldButton>
        <OutlinedBoldButton size="default">Default</OutlinedBoldButton>
        <OutlinedBoldButton size="lg">Large</OutlinedBoldButton>
        <OutlinedBoldButton size="icon">
          <Plus />
        </OutlinedBoldButton>
      </Row>
      <Row label="With icon">
        <OutlinedBoldButton>
          <Shield /> Secure
        </OutlinedBoldButton>
        <OutlinedBoldButton variant="secondary">
          <Download /> Export
        </OutlinedBoldButton>
        <OutlinedBoldButton variant="destructive">
          <Trash2 /> Delete
        </OutlinedBoldButton>
      </Row>
      <Row label="States">
        <OutlinedBoldButton disabled>Disabled</OutlinedBoldButton>
        <OutlinedBoldButton disabled>
          <Loader2 className="animate-spin" /> Working...
        </OutlinedBoldButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern I — Flat Minimal
   Zero shadows, zero borders on filled variants,
   ultra-clean color blocks, very subtle hover shift
   ═══════════════════════════════════════════════ */

function FlatButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "rounded-md transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "active:opacity-80 active:transition-none",
    "disabled:pointer-events-none disabled:opacity-35",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-foreground text-background hover:bg-foreground/85",
    secondary: "bg-muted text-foreground hover:bg-muted/70",
    outline:
      "border border-border/50 text-foreground hover:bg-muted hover:border-border",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/85",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-muted/50",
  };

  const sizes: Record<string, string> = {
    default: "h-9 px-4 text-sm",
    sm: "h-7 px-3 text-xs",
    lg: "h-11 px-6 text-base",
    icon: "h-9 w-9 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternFlat() {
  return (
    <PatternCard
      name="Flat Minimal"
      description="Zero shadows, borderless filled variants, compact sizing, and a quiet color-only hover. Primary uses foreground color (black/white) for maximum contrast. The anti-decoration approach -- only color and typography do the work."
    >
      <Row label="Variants">
        <FlatButton>Primary</FlatButton>
        <FlatButton variant="secondary">Secondary</FlatButton>
        <FlatButton variant="outline">Outline</FlatButton>
        <FlatButton variant="destructive">Destructive</FlatButton>
        <FlatButton variant="ghost">Ghost</FlatButton>
      </Row>
      <Row label="Sizes">
        <FlatButton size="sm">Small</FlatButton>
        <FlatButton size="default">Default</FlatButton>
        <FlatButton size="lg">Large</FlatButton>
        <FlatButton size="icon">
          <Plus />
        </FlatButton>
      </Row>
      <Row label="With icon">
        <FlatButton>
          <Send /> Send
        </FlatButton>
        <FlatButton variant="secondary">
          <Copy /> Copy
        </FlatButton>
        <FlatButton variant="destructive">
          <Trash2 /> Delete
        </FlatButton>
      </Row>
      <Row label="States">
        <FlatButton disabled>Disabled</FlatButton>
        <FlatButton disabled>
          <Loader2 className="animate-spin" /> Saving...
        </FlatButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern J — Elastic
   Exaggerated scale transforms on hover and
   press with a bouncy spring-like feel
   ═══════════════════════════════════════════════ */

function ElasticButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-xl transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:scale-105",
    "active:scale-[0.92] active:duration-100",
    "disabled:pointer-events-none disabled:opacity-40 disabled:hover:scale-100",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]",
      "hover:shadow-[0_6px_20px_-4px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_1px_4px_-1px_rgba(0,0,0,0.06)]",
      "hover:shadow-[0_4px_14px_-3px_rgba(0,0,0,0.1)]",
    ].join(" "),
    outline: [
      "border border-border bg-background text-foreground",
      "hover:border-primary/40 hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.08)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]",
      "hover:shadow-[0_6px_20px_-4px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternElastic() {
  return (
    <PatternCard
      name="Elastic"
      description="Exaggerated spring-based scale transforms. Hover pops the button up to 105%, press squishes it down to 92% with a snappy cubic-bezier overshoot easing. Playful and interactive -- buttons feel alive."
    >
      <Row label="Variants">
        <ElasticButton>Primary</ElasticButton>
        <ElasticButton variant="secondary">Secondary</ElasticButton>
        <ElasticButton variant="outline">Outline</ElasticButton>
        <ElasticButton variant="destructive">Destructive</ElasticButton>
      </Row>
      <Row label="Sizes">
        <ElasticButton size="sm">Small</ElasticButton>
        <ElasticButton size="default">Default</ElasticButton>
        <ElasticButton size="lg">Large</ElasticButton>
        <ElasticButton size="icon">
          <Sparkles />
        </ElasticButton>
      </Row>
      <Row label="With icon">
        <ElasticButton>
          <Rocket /> Launch
        </ElasticButton>
        <ElasticButton variant="outline">
          <Star /> Favorite
        </ElasticButton>
        <ElasticButton variant="destructive">
          <Trash2 /> Remove
        </ElasticButton>
      </Row>
      <Row label="States">
        <ElasticButton disabled>Disabled</ElasticButton>
        <ElasticButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </ElasticButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern K — Shimmer
   Animated highlight sweep on hover, a bright
   diagonal band slides across the surface
   ═══════════════════════════════════════════════ */

function ShimmerButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg overflow-hidden transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_1px_3px_rgba(0,0,0,0.08)]",
      "hover:shadow-[0_2px_8px_-2px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
      "hover:shadow-[0_2px_6px_-2px_rgba(0,0,0,0.08)]",
    ].join(" "),
    outline: [
      "border border-input bg-background text-foreground",
      "hover:bg-accent/50",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_1px_3px_rgba(0,0,0,0.08)]",
      "hover:shadow-[0_2px_8px_-2px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}

function PatternShimmer() {
  return (
    <PatternCard
      name="Shimmer"
      description="A diagonal highlight band sweeps across the button surface on hover, creating a subtle shimmer effect. The sweep uses a skewed translucent white gradient that slides from left to right. Premium and polished."
    >
      <Row label="Variants">
        <ShimmerButton>Primary</ShimmerButton>
        <ShimmerButton variant="secondary">Secondary</ShimmerButton>
        <ShimmerButton variant="outline">Outline</ShimmerButton>
        <ShimmerButton variant="destructive">Destructive</ShimmerButton>
      </Row>
      <Row label="Sizes">
        <ShimmerButton size="sm">Small</ShimmerButton>
        <ShimmerButton size="default">Default</ShimmerButton>
        <ShimmerButton size="lg">Large</ShimmerButton>
        <ShimmerButton size="icon">
          <Sparkles />
        </ShimmerButton>
      </Row>
      <Row label="With icon">
        <ShimmerButton>
          <Zap /> Boost
        </ShimmerButton>
        <ShimmerButton variant="secondary">
          <Download /> Export
        </ShimmerButton>
        <ShimmerButton variant="destructive">
          <Trash2 /> Remove
        </ShimmerButton>
      </Row>
      <Row label="States">
        <ShimmerButton disabled>Disabled</ShimmerButton>
        <ShimmerButton disabled>
          <Loader2 className="animate-spin" /> Processing...
        </ShimmerButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern L — Gradient Border
   Transparent fill with an animated gradient
   border using background-clip trick
   ═══════════════════════════════════════════════ */

function GradientBorderButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const gradients: Record<string, { border: string; hover: string }> = {
    default: {
      border:
        "bg-[linear-gradient(var(--color-background),var(--color-background)),linear-gradient(135deg,var(--color-primary),oklch(0.65_0.2_300))] dark:bg-[linear-gradient(var(--color-background),var(--color-background)),linear-gradient(135deg,var(--color-primary),oklch(0.55_0.2_300))]",
      hover: "group-hover:bg-[linear-gradient(var(--color-primary),var(--color-primary)),linear-gradient(135deg,var(--color-primary),oklch(0.65_0.2_300))]",
    },
    secondary: {
      border:
        "bg-[linear-gradient(var(--color-background),var(--color-background)),linear-gradient(135deg,var(--color-muted-foreground),var(--color-foreground))]",
      hover: "group-hover:bg-[linear-gradient(var(--color-muted),var(--color-muted)),linear-gradient(135deg,var(--color-muted-foreground),var(--color-foreground))]",
    },
    outline: {
      border:
        "bg-[linear-gradient(var(--color-background),var(--color-background)),linear-gradient(135deg,var(--color-border),var(--color-muted-foreground))]",
      hover: "group-hover:bg-[linear-gradient(var(--color-muted),var(--color-muted)),linear-gradient(135deg,var(--color-border),var(--color-muted-foreground))]",
    },
    destructive: {
      border:
        "bg-[linear-gradient(var(--color-background),var(--color-background)),linear-gradient(135deg,var(--color-destructive),oklch(0.65_0.2_50))]",
      hover: "group-hover:bg-[linear-gradient(var(--color-destructive),var(--color-destructive)),linear-gradient(135deg,var(--color-destructive),oklch(0.65_0.2_50))]",
    },
  };

  const textColors: Record<string, string> = {
    default: "text-primary group-hover:text-primary-foreground",
    secondary: "text-foreground",
    outline: "text-muted-foreground group-hover:text-foreground",
    destructive: "text-destructive group-hover:text-destructive-foreground",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  const grad = gradients[variant];

  return (
    <button
      className={cn(
        base,
        "border-2 border-transparent bg-clip-padding",
        "bg-origin-border",
        grad.border,
        grad.hover,
        textColors[variant],
        sizes[size],
        className
      )}
      style={{ backgroundClip: "padding-box, border-box" }}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternGradientBorder() {
  return (
    <PatternCard
      name="Gradient Border"
      description="Transparent fill with a gradient border achieved via the double-background + background-clip trick. The diagonal gradient shifts from primary to purple. On hover, the interior fills to match. Sophisticated and modern."
    >
      <Row label="Variants">
        <GradientBorderButton>Primary</GradientBorderButton>
        <GradientBorderButton variant="secondary">Secondary</GradientBorderButton>
        <GradientBorderButton variant="outline">Neutral</GradientBorderButton>
        <GradientBorderButton variant="destructive">Destructive</GradientBorderButton>
      </Row>
      <Row label="Sizes">
        <GradientBorderButton size="sm">Small</GradientBorderButton>
        <GradientBorderButton size="default">Default</GradientBorderButton>
        <GradientBorderButton size="lg">Large</GradientBorderButton>
        <GradientBorderButton size="icon">
          <Sparkles />
        </GradientBorderButton>
      </Row>
      <Row label="With icon">
        <GradientBorderButton>
          <Rocket /> Launch
        </GradientBorderButton>
        <GradientBorderButton variant="secondary">
          <Shield /> Protect
        </GradientBorderButton>
        <GradientBorderButton variant="destructive">
          <Trash2 /> Delete
        </GradientBorderButton>
      </Row>
      <Row label="States">
        <GradientBorderButton disabled>Disabled</GradientBorderButton>
        <GradientBorderButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </GradientBorderButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern M — Neon
   Dark button fills with bright glowing borders,
   text shadow, and border-glow on hover
   ═══════════════════════════════════════════════ */

function NeonButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold",
    "rounded-md border transition-all duration-300",
    "focus-visible:outline-none",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "bg-foreground/5 dark:bg-background",
  ];

  const variants: Record<string, string> = {
    default: [
      "border-primary text-primary",
      "shadow-[0_0_8px_var(--primary),inset_0_0_8px_var(--primary)]",
      "hover:shadow-[0_0_16px_var(--primary),0_0_40px_var(--primary),inset_0_0_12px_var(--primary)]",
      "hover:text-primary",
    ].join(" "),
    secondary: [
      "border-muted-foreground/50 text-muted-foreground",
      "shadow-[0_0_6px_rgba(128,128,128,0.3),inset_0_0_6px_rgba(128,128,128,0.1)]",
      "hover:shadow-[0_0_12px_rgba(128,128,128,0.5),0_0_30px_rgba(128,128,128,0.2),inset_0_0_10px_rgba(128,128,128,0.2)]",
      "hover:border-muted-foreground hover:text-foreground",
    ].join(" "),
    outline: [
      "border-primary/50 text-primary/70",
      "shadow-none",
      "hover:border-primary hover:text-primary hover:shadow-[0_0_12px_var(--primary),inset_0_0_8px_var(--primary)]",
    ].join(" "),
    destructive: [
      "border-destructive text-destructive",
      "shadow-[0_0_8px_var(--destructive),inset_0_0_8px_var(--destructive)]",
      "hover:shadow-[0_0_16px_var(--destructive),0_0_40px_var(--destructive),inset_0_0_12px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternNeon() {
  return (
    <PatternCard
      name="Neon"
      description="Dark background with bright colored borders that emit a glow via box-shadow. Hover intensifies the glow with a wider bloom radius. Inner glow adds depth. Best on dark themes but works in light mode too."
    >
      <Row label="Variants">
        <NeonButton>Primary</NeonButton>
        <NeonButton variant="secondary">Secondary</NeonButton>
        <NeonButton variant="outline">Outline</NeonButton>
        <NeonButton variant="destructive">Destructive</NeonButton>
      </Row>
      <Row label="Sizes">
        <NeonButton size="sm">Small</NeonButton>
        <NeonButton size="default">Default</NeonButton>
        <NeonButton size="lg">Large</NeonButton>
        <NeonButton size="icon">
          <Zap />
        </NeonButton>
      </Row>
      <Row label="With icon">
        <NeonButton>
          <Flame /> Ignite
        </NeonButton>
        <NeonButton variant="outline">
          <Eye /> Preview
        </NeonButton>
        <NeonButton variant="destructive">
          <Trash2 /> Delete
        </NeonButton>
      </Row>
      <Row label="States">
        <NeonButton disabled>Disabled</NeonButton>
        <NeonButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </NeonButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern N — Underline
   Minimal text-style button with an animated
   bottom border that slides in on hover
   ═══════════════════════════════════════════════ */

function UnderlineButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-none bg-transparent transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "text-primary hover:text-primary/80",
    secondary: "text-foreground hover:text-foreground/70",
    outline: "text-muted-foreground hover:text-foreground",
    destructive: "text-destructive hover:text-destructive/80",
  };

  const underlineColors: Record<string, string> = {
    default: "bg-primary",
    secondary: "bg-foreground",
    outline: "bg-foreground",
    destructive: "bg-destructive",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-1 text-sm",
    sm: "h-8 px-1 text-xs",
    lg: "h-12 px-1 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-2 left-1 right-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
          underlineColors[variant]
        )}
        aria-hidden="true"
      />
    </button>
  );
}

function PatternUnderline() {
  return (
    <PatternCard
      name="Underline"
      description="Text-only buttons with zero background. On hover, a 2px underline slides in from the left via scale-x transform. Extremely minimal -- relies entirely on typography and color. Great for navigation and inline actions."
    >
      <Row label="Variants">
        <UnderlineButton>Primary</UnderlineButton>
        <UnderlineButton variant="secondary">Secondary</UnderlineButton>
        <UnderlineButton variant="outline">Neutral</UnderlineButton>
        <UnderlineButton variant="destructive">Destructive</UnderlineButton>
      </Row>
      <Row label="Sizes">
        <UnderlineButton size="sm">Small</UnderlineButton>
        <UnderlineButton size="default">Default</UnderlineButton>
        <UnderlineButton size="lg">Large</UnderlineButton>
      </Row>
      <Row label="With icon">
        <UnderlineButton>
          <ArrowRight /> Continue
        </UnderlineButton>
        <UnderlineButton variant="secondary">
          <Share2 /> Share
        </UnderlineButton>
        <UnderlineButton variant="destructive">
          <Trash2 /> Remove
        </UnderlineButton>
      </Row>
      <Row label="States">
        <UnderlineButton disabled>Disabled</UnderlineButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern O — Stacked
   Multiple layered offset shadows creating a
   "deck of cards" depth effect
   ═══════════════════════════════════════════════ */

function StackedButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:translate-y-[-1px]",
    "active:translate-y-[2px] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:translate-y-0",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground border border-primary",
      "shadow-[2px_2px_0_0_oklch(0.55_0.17_260),4px_4px_0_0_oklch(0.48_0.15_260)]",
      "hover:shadow-[3px_3px_0_0_oklch(0.55_0.17_260),6px_6px_0_0_oklch(0.48_0.15_260)]",
      "active:shadow-[0px_0px_0_0_oklch(0.55_0.17_260),1px_1px_0_0_oklch(0.48_0.15_260)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground border border-border",
      "shadow-[2px_2px_0_0_var(--color-border),4px_4px_0_0_var(--color-muted)]",
      "hover:shadow-[3px_3px_0_0_var(--color-border),6px_6px_0_0_var(--color-muted)]",
      "active:shadow-[0px_0px_0_0_var(--color-border),1px_1px_0_0_var(--color-muted)]",
    ].join(" "),
    outline: [
      "bg-background text-foreground border border-foreground/20",
      "shadow-[2px_2px_0_0_var(--color-border),4px_4px_0_0_var(--color-muted)]",
      "hover:shadow-[3px_3px_0_0_var(--color-border),6px_6px_0_0_var(--color-muted)]",
      "active:shadow-[0px_0px_0_0_var(--color-border),1px_1px_0_0_var(--color-muted)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground border border-destructive",
      "shadow-[2px_2px_0_0_oklch(0.5_0.18_25),4px_4px_0_0_oklch(0.42_0.15_25)]",
      "hover:shadow-[3px_3px_0_0_oklch(0.5_0.18_25),6px_6px_0_0_oklch(0.42_0.15_25)]",
      "active:shadow-[0px_0px_0_0_oklch(0.5_0.18_25),1px_1px_0_0_oklch(0.42_0.15_25)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternStacked() {
  return (
    <PatternCard
      name="Stacked"
      description="Double-layered offset shadows create the illusion of stacked cards behind the button. Hover spreads the stack wider, press collapses it flat. A playful twist on the brutalist offset shadow."
    >
      <Row label="Variants">
        <StackedButton>Primary</StackedButton>
        <StackedButton variant="secondary">Secondary</StackedButton>
        <StackedButton variant="outline">Outline</StackedButton>
        <StackedButton variant="destructive">Destructive</StackedButton>
      </Row>
      <Row label="Sizes">
        <StackedButton size="sm">Small</StackedButton>
        <StackedButton size="default">Default</StackedButton>
        <StackedButton size="lg">Large</StackedButton>
        <StackedButton size="icon">
          <Plus />
        </StackedButton>
      </Row>
      <Row label="With icon">
        <StackedButton>
          <Crown /> Premium
        </StackedButton>
        <StackedButton variant="outline">
          <Bookmark /> Save
        </StackedButton>
        <StackedButton variant="destructive">
          <Trash2 /> Delete
        </StackedButton>
      </Row>
      <Row label="States">
        <StackedButton disabled>Disabled</StackedButton>
        <StackedButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </StackedButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern P — Inset
   Sunken/pressed by default with inset shadows,
   lifts to flat on hover
   ═══════════════════════════════════════════════ */

function InsetButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[inset_0_2px_5px_rgba(0,0,0,0.15),inset_0_-1px_2px_rgba(255,255,255,0.1)]",
      "hover:shadow-[0_1px_3px_rgba(0,0,0,0.1),inset_0_-1px_0_rgba(255,255,255,0.1)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[inset_0_2px_5px_rgba(0,0,0,0.08),inset_0_-1px_2px_rgba(255,255,255,0.3)]",
      "dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.25),inset_0_-1px_2px_rgba(255,255,255,0.03)]",
      "hover:shadow-[0_1px_3px_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(255,255,255,0.3)]",
      "dark:hover:shadow-[0_1px_3px_rgba(0,0,0,0.15),inset_0_-1px_0_rgba(255,255,255,0.03)]",
    ].join(" "),
    outline: [
      "border border-border bg-background text-foreground",
      "shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-muted",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[inset_0_2px_5px_rgba(0,0,0,0.15),inset_0_-1px_2px_rgba(255,255,255,0.1)]",
      "hover:shadow-[0_1px_3px_rgba(0,0,0,0.1),inset_0_-1px_0_rgba(255,255,255,0.1)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternInset() {
  return (
    <PatternCard
      name="Inset"
      description="Buttons appear sunken by default with inset box-shadows at the top, as if embedded in the surface. On hover, shadows flip outward and the button visually lifts to flat. Inverts the typical depth model."
    >
      <Row label="Variants">
        <InsetButton>Primary</InsetButton>
        <InsetButton variant="secondary">Secondary</InsetButton>
        <InsetButton variant="outline">Outline</InsetButton>
        <InsetButton variant="destructive">Destructive</InsetButton>
      </Row>
      <Row label="Sizes">
        <InsetButton size="sm">Small</InsetButton>
        <InsetButton size="default">Default</InsetButton>
        <InsetButton size="lg">Large</InsetButton>
        <InsetButton size="icon">
          <Settings />
        </InsetButton>
      </Row>
      <Row label="With icon">
        <InsetButton>
          <Lock /> Authenticate
        </InsetButton>
        <InsetButton variant="outline">
          <Upload /> Upload
        </InsetButton>
        <InsetButton variant="destructive">
          <Trash2 /> Delete
        </InsetButton>
      </Row>
      <Row label="States">
        <InsetButton disabled>Disabled</InsetButton>
        <InsetButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </InsetButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern Q — Capsule Accent
   Pill shape with a thick colored bottom border
   accent stripe
   ═══════════════════════════════════════════════ */

function CapsuleButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-full transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-background text-primary border border-border border-b-[3px] border-b-primary",
      "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
      "hover:bg-primary/5 hover:border-primary/30 hover:border-b-primary hover:shadow-[0_2px_8px_-2px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-background text-foreground border border-border border-b-[3px] border-b-foreground/30",
      "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
      "hover:bg-muted hover:border-b-foreground/50",
    ].join(" "),
    outline: [
      "bg-background text-muted-foreground border border-border border-b-[3px] border-b-border",
      "hover:text-foreground hover:bg-muted hover:border-b-muted-foreground/30",
    ].join(" "),
    destructive: [
      "bg-background text-destructive border border-border border-b-[3px] border-b-destructive",
      "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
      "hover:bg-destructive/5 hover:border-destructive/30 hover:border-b-destructive hover:shadow-[0_2px_8px_-2px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-6 text-sm",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternCapsule() {
  return (
    <PatternCard
      name="Capsule Accent"
      description="Pill-shaped buttons with a light background and a thick 3px bottom border in the variant's accent color. The colored stripe acts as a visual anchor. Clean and structured with a tab-like quality."
    >
      <Row label="Variants">
        <CapsuleButton>Primary</CapsuleButton>
        <CapsuleButton variant="secondary">Secondary</CapsuleButton>
        <CapsuleButton variant="outline">Outline</CapsuleButton>
        <CapsuleButton variant="destructive">Destructive</CapsuleButton>
      </Row>
      <Row label="Sizes">
        <CapsuleButton size="sm">Small</CapsuleButton>
        <CapsuleButton size="default">Default</CapsuleButton>
        <CapsuleButton size="lg">Large</CapsuleButton>
        <CapsuleButton size="icon">
          <Target />
        </CapsuleButton>
      </Row>
      <Row label="With icon">
        <CapsuleButton>
          <Play /> Start
        </CapsuleButton>
        <CapsuleButton variant="secondary">
          <Pause /> Pause
        </CapsuleButton>
        <CapsuleButton variant="destructive">
          <Trash2 /> Remove
        </CapsuleButton>
      </Row>
      <Row label="States">
        <CapsuleButton disabled>Disabled</CapsuleButton>
        <CapsuleButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </CapsuleButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern R — Liquid
   Border-radius morphs to organic blob shape
   on hover via multiple border-radius values
   ═══════════════════════════════════════════════ */

function LiquidButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-[1.2rem] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:rounded-[1rem_2rem_0.6rem_2.2rem]",
    "active:scale-[0.95] active:rounded-[1.2rem] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_2px_10px_-3px_var(--primary)]",
      "hover:shadow-[0_4px_18px_-4px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
      "hover:shadow-[0_3px_10px_-3px_rgba(0,0,0,0.1)]",
    ].join(" "),
    outline: [
      "border border-border bg-background text-foreground",
      "hover:border-primary/40 hover:bg-accent/30",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_2px_10px_-3px_var(--destructive)]",
      "hover:shadow-[0_4px_18px_-4px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-11 px-6 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-13 px-8 text-base",
    icon: "h-11 w-11 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternLiquid() {
  return (
    <PatternCard
      name="Liquid"
      description="Starts with a uniform rounded shape. On hover, the border-radius morphs to an asymmetric organic blob via four independent corner values. Smooth 500ms ease creates a flowing liquid feel. Unique and playful."
    >
      <Row label="Variants">
        <LiquidButton>Primary</LiquidButton>
        <LiquidButton variant="secondary">Secondary</LiquidButton>
        <LiquidButton variant="outline">Outline</LiquidButton>
        <LiquidButton variant="destructive">Destructive</LiquidButton>
      </Row>
      <Row label="Sizes">
        <LiquidButton size="sm">Small</LiquidButton>
        <LiquidButton size="default">Default</LiquidButton>
        <LiquidButton size="lg">Large</LiquidButton>
        <LiquidButton size="icon">
          <Wand2 />
        </LiquidButton>
      </Row>
      <Row label="With icon">
        <LiquidButton>
          <Sparkles /> Magic
        </LiquidButton>
        <LiquidButton variant="outline">
          <Heart /> Like
        </LiquidButton>
        <LiquidButton variant="destructive">
          <Trash2 /> Remove
        </LiquidButton>
      </Row>
      <Row label="States">
        <LiquidButton disabled>Disabled</LiquidButton>
        <LiquidButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </LiquidButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern S — Tactile
   Realistic physical button: outer shadow +
   inner top highlight + pressed inset on active
   ═══════════════════════════════════════════════ */

function TactileButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-xl transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:translate-y-[1px] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40 disabled:translate-y-0",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.18),0_3px_5px_-2px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)]",
      "active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.12)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.05)]",
      "dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.15)]",
      "hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.1),0_3px_5px_-2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.05)]",
      "dark:hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.25),0_3px_5px_-2px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.15)]",
      "active:shadow-[0_1px_2px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(0,0,0,0.06)]",
      "dark:active:shadow-[0_1px_2px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.2)]",
    ].join(" "),
    outline: [
      "border border-border bg-background text-foreground",
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)]",
      "dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.03)]",
      "hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.7)]",
      "dark:hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)]",
      "active:shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_2px_3px_rgba(0,0,0,0.04)]",
      "dark:active:shadow-[0_1px_2px_rgba(0,0,0,0.15),inset_0_2px_3px_rgba(0,0,0,0.15)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.18),0_3px_5px_-2px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.1)]",
      "active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.12)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternTactile() {
  return (
    <PatternCard
      name="Tactile"
      description="Realistic physical button combining outer drop shadow, inner top highlight, and inner bottom darkening for a 3D convex surface. Press flips to inset shadow with a 1px Y translate. The most physically accurate button model."
    >
      <Row label="Variants">
        <TactileButton>Primary</TactileButton>
        <TactileButton variant="secondary">Secondary</TactileButton>
        <TactileButton variant="outline">Outline</TactileButton>
        <TactileButton variant="destructive">Destructive</TactileButton>
      </Row>
      <Row label="Sizes">
        <TactileButton size="sm">Small</TactileButton>
        <TactileButton size="default">Default</TactileButton>
        <TactileButton size="lg">Large</TactileButton>
        <TactileButton size="icon">
          <Shield />
        </TactileButton>
      </Row>
      <Row label="With icon">
        <TactileButton>
          <Check /> Confirm
        </TactileButton>
        <TactileButton variant="outline">
          <Download /> Download
        </TactileButton>
        <TactileButton variant="destructive">
          <Trash2 /> Delete
        </TactileButton>
      </Row>
      <Row label="States">
        <TactileButton disabled>Disabled</TactileButton>
        <TactileButton disabled>
          <Loader2 className="animate-spin" /> Saving...
        </TactileButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern T — Mono
   Monochrome only -- black/white/gray, relies on
   weight and border contrast
   ═══════════════════════════════════════════════ */

function MonoButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-30",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default:
      "bg-foreground text-background font-bold tracking-tight hover:bg-foreground/85",
    secondary:
      "bg-foreground/10 text-foreground font-semibold hover:bg-foreground/15 dark:bg-foreground/10 dark:hover:bg-foreground/20",
    outline:
      "border border-foreground/25 text-foreground font-semibold hover:border-foreground/50 hover:bg-foreground/5",
    destructive:
      "bg-foreground text-background font-bold line-through decoration-background/60 decoration-2 hover:bg-foreground/85",
    ghost:
      "text-foreground/60 font-medium hover:text-foreground hover:bg-foreground/5",
  };

  const sizes: Record<string, string> = {
    default: "h-9 px-4 text-sm",
    sm: "h-7 px-3 text-xs",
    lg: "h-11 px-6 text-base",
    icon: "h-9 w-9 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternMono() {
  return (
    <PatternCard
      name="Mono"
      description="Strictly monochrome -- only foreground/background colors, no brand hues at all. Hierarchy comes from fill weight: bold solid, medium tonal, thin outline. Destructive uses a strikethrough text decoration instead of red. Typographic and editorial."
    >
      <Row label="Variants">
        <MonoButton>Primary</MonoButton>
        <MonoButton variant="secondary">Secondary</MonoButton>
        <MonoButton variant="outline">Outline</MonoButton>
        <MonoButton variant="destructive">Delete</MonoButton>
        <MonoButton variant="ghost">Ghost</MonoButton>
      </Row>
      <Row label="Sizes">
        <MonoButton size="sm">Small</MonoButton>
        <MonoButton size="default">Default</MonoButton>
        <MonoButton size="lg">Large</MonoButton>
        <MonoButton size="icon">
          <Plus />
        </MonoButton>
      </Row>
      <Row label="With icon">
        <MonoButton>
          <Send /> Send
        </MonoButton>
        <MonoButton variant="secondary">
          <Copy /> Copy
        </MonoButton>
        <MonoButton variant="outline">
          <Share2 /> Share
        </MonoButton>
      </Row>
      <Row label="States">
        <MonoButton disabled>Disabled</MonoButton>
        <MonoButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </MonoButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern U — Pulse Ring
   Animated pulsing ring around the button on
   hover, like a sonar ping
   ═══════════════════════════════════════════════ */

function PulseRingButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200",
    "focus-visible:outline-none",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const ringColors: Record<string, string> = {
    default: "border-primary/40",
    secondary: "border-muted-foreground/20",
    outline: "border-border",
    destructive: "border-destructive/40",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-lg border-2 opacity-0 group-hover:animate-[pulseRing_1.2s_ease-out_infinite] group-focus-visible:animate-[pulseRing_1.2s_ease-out_infinite]",
          ringColors[variant]
        )}
        aria-hidden="true"
        style={{
          animationName: "pulseRing",
        }}
      />
      {children}
    </button>
  );
}

function PatternPulseRing() {
  return (
    <PatternCard
      name="Pulse Ring"
      description="On hover, an expanding ring pulses outward from the button boundary like a sonar ping, using a CSS @keyframes animation. The ring fades as it expands. Draws attention without changing the button itself."
    >
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
      <Row label="Variants">
        <PulseRingButton>Primary</PulseRingButton>
        <PulseRingButton variant="secondary">Secondary</PulseRingButton>
        <PulseRingButton variant="outline">Outline</PulseRingButton>
        <PulseRingButton variant="destructive">Destructive</PulseRingButton>
      </Row>
      <Row label="Sizes">
        <PulseRingButton size="sm">Small</PulseRingButton>
        <PulseRingButton size="default">Default</PulseRingButton>
        <PulseRingButton size="lg">Large</PulseRingButton>
        <PulseRingButton size="icon">
          <Bell />
        </PulseRingButton>
      </Row>
      <Row label="With icon">
        <PulseRingButton>
          <Rocket /> Launch
        </PulseRingButton>
        <PulseRingButton variant="outline">
          <Star /> Favorite
        </PulseRingButton>
        <PulseRingButton variant="destructive">
          <Trash2 /> Delete
        </PulseRingButton>
      </Row>
      <Row label="States">
        <PulseRingButton disabled>Disabled</PulseRingButton>
        <PulseRingButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </PulseRingButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern V — Duotone
   Split diagonal background with two shades
   of the same color
   ═══════════════════════════════════════════════ */

function DuotoneButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "rounded-lg transition-all duration-200 ease-out overflow-hidden",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "text-primary-foreground",
      "bg-[linear-gradient(135deg,var(--color-primary)_50%,oklch(0.52_0.17_260)_50%)]",
      "hover:bg-[linear-gradient(135deg,var(--color-primary)_40%,oklch(0.52_0.17_260)_40%)]",
      "shadow-[0_2px_6px_-1px_rgba(0,0,0,0.12)]",
      "hover:shadow-[0_4px_12px_-2px_var(--primary)]",
    ].join(" "),
    secondary: [
      "text-secondary-foreground",
      "bg-[linear-gradient(135deg,var(--color-secondary)_50%,var(--color-muted)_50%)]",
      "hover:bg-[linear-gradient(135deg,var(--color-secondary)_40%,var(--color-muted)_40%)]",
    ].join(" "),
    outline: [
      "border border-border text-foreground",
      "bg-[linear-gradient(135deg,var(--color-background)_50%,var(--color-muted)_50%)]",
      "hover:bg-[linear-gradient(135deg,var(--color-background)_40%,var(--color-muted)_40%)]",
    ].join(" "),
    destructive: [
      "text-destructive-foreground",
      "bg-[linear-gradient(135deg,var(--color-destructive)_50%,oklch(0.52_0.18_25)_50%)]",
      "hover:bg-[linear-gradient(135deg,var(--color-destructive)_40%,oklch(0.52_0.18_25)_40%)]",
      "shadow-[0_2px_6px_-1px_rgba(0,0,0,0.12)]",
      "hover:shadow-[0_4px_12px_-2px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternDuotone() {
  return (
    <PatternCard
      name="Duotone"
      description="A hard diagonal split at 135 degrees divides the button into two shades of the same color. On hover, the split line shifts creating a subtle movement. Adds visual texture without extra elements."
    >
      <Row label="Variants">
        <DuotoneButton>Primary</DuotoneButton>
        <DuotoneButton variant="secondary">Secondary</DuotoneButton>
        <DuotoneButton variant="outline">Outline</DuotoneButton>
        <DuotoneButton variant="destructive">Destructive</DuotoneButton>
      </Row>
      <Row label="Sizes">
        <DuotoneButton size="sm">Small</DuotoneButton>
        <DuotoneButton size="default">Default</DuotoneButton>
        <DuotoneButton size="lg">Large</DuotoneButton>
        <DuotoneButton size="icon">
          <Crown />
        </DuotoneButton>
      </Row>
      <Row label="With icon">
        <DuotoneButton>
          <Flame /> Boost
        </DuotoneButton>
        <DuotoneButton variant="outline">
          <Bookmark /> Save
        </DuotoneButton>
        <DuotoneButton variant="destructive">
          <Trash2 /> Remove
        </DuotoneButton>
      </Row>
      <Row label="States">
        <DuotoneButton disabled>Disabled</DuotoneButton>
        <DuotoneButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </DuotoneButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern W — Retro Pixel
   Stepped pixel-art style borders using layered
   box shadows
   ═══════════════════════════════════════════════ */

function RetroButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-widest",
    "rounded-none transition-all duration-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:translate-x-[2px] active:translate-y-[2px] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "border-2 border-b-[3px] border-r-[3px] border-primary-foreground/20",
      "border-t-white/20 border-l-white/20",
      "shadow-[4px_4px_0_0_var(--color-foreground)]",
      "active:shadow-[1px_1px_0_0_var(--color-foreground)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "border-2 border-b-[3px] border-r-[3px] border-foreground/10",
      "border-t-white/30 border-l-white/30",
      "dark:border-t-white/5 dark:border-l-white/5 dark:border-b-black/30 dark:border-r-black/30",
      "shadow-[4px_4px_0_0_var(--color-foreground)]",
      "active:shadow-[1px_1px_0_0_var(--color-foreground)]",
    ].join(" "),
    outline: [
      "bg-background text-foreground",
      "border-2 border-b-[3px] border-r-[3px] border-foreground/30",
      "border-t-white/50 border-l-white/50",
      "dark:border-t-white/5 dark:border-l-white/5",
      "shadow-[4px_4px_0_0_var(--color-foreground)]",
      "active:shadow-[1px_1px_0_0_var(--color-foreground)]",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "border-2 border-b-[3px] border-r-[3px] border-destructive-foreground/20",
      "border-t-white/20 border-l-white/20",
      "shadow-[4px_4px_0_0_var(--color-foreground)]",
      "active:shadow-[1px_1px_0_0_var(--color-foreground)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-[11px]",
    sm: "h-8 px-3 text-[9px]",
    lg: "h-12 px-7 text-xs",
    icon: "h-10 w-10 text-[11px]",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function PatternRetro() {
  return (
    <PatternCard
      name="Retro Pixel"
      description="8-bit inspired buttons with beveled edges: light top-left borders and dark bottom-right borders mimic classic OS/game UI chrome. Hard offset shadow and active translate for a physical press. Bold uppercase tracking."
    >
      <Row label="Variants">
        <RetroButton>Primary</RetroButton>
        <RetroButton variant="secondary">Secondary</RetroButton>
        <RetroButton variant="outline">Outline</RetroButton>
        <RetroButton variant="destructive">Delete</RetroButton>
      </Row>
      <Row label="Sizes">
        <RetroButton size="sm">Small</RetroButton>
        <RetroButton size="default">Default</RetroButton>
        <RetroButton size="lg">Large</RetroButton>
        <RetroButton size="icon">
          <Play />
        </RetroButton>
      </Row>
      <Row label="With icon">
        <RetroButton>
          <Star /> Score
        </RetroButton>
        <RetroButton variant="outline">
          <Download /> Save
        </RetroButton>
        <RetroButton variant="destructive">
          <Trash2 /> Erase
        </RetroButton>
      </Row>
      <Row label="States">
        <RetroButton disabled>Disabled</RetroButton>
        <RetroButton disabled>
          <Loader2 className="animate-spin" /> Wait
        </RetroButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Pattern X — Spotlight
   Radial gradient follows a fixed center that
   creates a spotlight highlight effect
   ═══════════════════════════════════════════════ */

function SpotlightButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const base = [
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold overflow-hidden",
    "rounded-lg transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.97] active:transition-none",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ];

  const variants: Record<string, string> = {
    default: [
      "bg-primary text-primary-foreground",
      "shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_3px_10px_-3px_var(--primary)]",
    ].join(" "),
    secondary: [
      "bg-secondary text-secondary-foreground",
      "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
    ].join(" "),
    outline: [
      "border border-input bg-background text-foreground",
      "hover:bg-accent/30",
    ].join(" "),
    destructive: [
      "bg-destructive text-destructive-foreground",
      "shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_3px_10px_-3px_var(--destructive)]",
    ].join(" "),
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3.5 text-xs",
    lg: "h-12 px-7 text-base",
    icon: "h-10 w-10 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}

function PatternSpotlight() {
  return (
    <PatternCard
      name="Spotlight"
      description="A radial gradient spotlight appears at the top-left corner on hover, simulating a light source hitting a glossy surface. Uses a white-to-transparent radial gradient overlay. Adds subtle gloss without changing the button's base color."
    >
      <Row label="Variants">
        <SpotlightButton>Primary</SpotlightButton>
        <SpotlightButton variant="secondary">Secondary</SpotlightButton>
        <SpotlightButton variant="outline">Outline</SpotlightButton>
        <SpotlightButton variant="destructive">Destructive</SpotlightButton>
      </Row>
      <Row label="Sizes">
        <SpotlightButton size="sm">Small</SpotlightButton>
        <SpotlightButton size="default">Default</SpotlightButton>
        <SpotlightButton size="lg">Large</SpotlightButton>
        <SpotlightButton size="icon">
          <Eye />
        </SpotlightButton>
      </Row>
      <Row label="With icon">
        <SpotlightButton>
          <Crown /> Upgrade
        </SpotlightButton>
        <SpotlightButton variant="outline">
          <Download /> Export
        </SpotlightButton>
        <SpotlightButton variant="destructive">
          <Trash2 /> Remove
        </SpotlightButton>
      </Row>
      <Row label="States">
        <SpotlightButton disabled>Disabled</SpotlightButton>
        <SpotlightButton disabled>
          <Loader2 className="animate-spin" /> Loading...
        </SpotlightButton>
      </Row>
    </PatternCard>
  );
}

/* ═══════════════════════════════════════════════
   Main Demo — All patterns in a gallery
   ═══════════════════════════════════════════════ */

export default function ButtonPatternsDemo() {
  return (
    <div className="space-y-12">
      <DemoSection title="Current (stock shadcn)">
        <div className="space-y-6">
          <Row label="Reference">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Primary
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Secondary
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Outline
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
              Destructive
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Ghost
            </button>
          </Row>
        </div>
      </DemoSection>

      <div className="border-t pt-8">
        <p className="text-sm text-muted-foreground mb-8">
          Click and interact with each pattern below. Pay attention to hover
          shadows, press feedback, and overall feel.
        </p>
      </div>

      <PatternRefined />
      <PatternGlass />
      <PatternGlow />
      <PatternSoft />
      <PatternRaised />
      <PatternBrutalist />
      <PatternNeumorphic />
      <PatternOutlinedBold />
      <PatternFlat />
      <PatternElastic />
      <PatternShimmer />
      <PatternGradientBorder />
      <PatternNeon />
      <PatternUnderline />
      <PatternStacked />
      <PatternInset />
      <PatternCapsule />
      <PatternLiquid />
      <PatternTactile />
      <PatternMono />
      <PatternPulseRing />
      <PatternDuotone />
      <PatternRetro />
      <PatternSpotlight />
    </div>
  );
}
