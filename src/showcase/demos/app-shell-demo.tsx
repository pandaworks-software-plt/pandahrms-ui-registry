import { DemoSection } from "@/showcase/component-page";

export default function AppShellDemo() {
  return (
    <DemoSection title="App Shell Layout">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          The App Shell provides a complete application layout with a
          collapsible sidebar, header bar, and user menu. It accepts data-driven
          configuration for navigation, branding, and user actions.
        </p>
        <div className="rounded-lg border bg-muted/50 p-8 dark:bg-muted/20">
          <pre className="text-xs text-muted-foreground">
{`┌──────────┬────────────────────────────┐
│          │  Header Bar          [User]│
│ Sidebar  ├────────────────────────────┤
│          │                            │
│ Nav 1    │     Main Content Area      │
│ Nav 2    │                            │
│ Nav 3    │                            │
│          │                            │
│          │                            │
└──────────┴────────────────────────────┘`}
          </pre>
        </div>
        <p className="text-sm text-muted-foreground">
          See the <strong>Full Demo</strong> page in the sidebar for a live
          example of the App Shell with a complete employee management
          interface.
        </p>
      </div>
    </DemoSection>
  );
}
