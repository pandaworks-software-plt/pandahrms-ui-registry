import { InstallCommand } from "@/components/install-command";

interface ComponentPageProps {
  title: string;
  description: string;
  installName: string;
  children: React.ReactNode;
}

export function ComponentPage({
  title,
  description,
  installName,
  children,
}: ComponentPageProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <InstallCommand name={installName} />

      <div className="space-y-8">{children}</div>
    </div>
  );
}

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DemoSection({ title, children }: DemoSectionProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="rounded-lg border bg-background p-6">{children}</div>
    </div>
  );
}
