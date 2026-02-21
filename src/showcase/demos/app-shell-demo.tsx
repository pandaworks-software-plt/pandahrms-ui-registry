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
{`┌──────────┬──────────────────────────────────────┐
│          │  [=] | Breadcrumbs      [Search] [Bell]│  <- header + navbarActions
│ Sidebar  ├──────────────────────────────────────┤
│          │  Page Title           [Action] [Action]│  <- PageHeader component
│ Nav 1    │  Description text                     │
│ Nav 2    ├──────────────────────────────────────┤
│ Nav 3    │                                       │
│          │     Main Content Area                 │
│  [User]  │                                       │
└──────────┴──────────────────────────────────────┘`}
          </pre>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            The navbar supports two content slots:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code className="text-xs">header</code> -- breadcrumbs or custom content next to the sidebar trigger</li>
            <li><code className="text-xs">navbarActions</code> -- global actions (search, notifications) right-aligned</li>
          </ul>
          <p>
            For page-specific titles and actions, use the <strong>PageHeader</strong> component inside the content area.
          </p>
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
