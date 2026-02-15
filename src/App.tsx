import {
  LayoutDashboard,
  Component,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppShell } from "@/components/ui/app-shell";
import { ThemeToggle } from "@/components/theme-toggle";
import { InstallCommand } from "@/components/install-command";

export default function App() {
  return (
    <AppShell
      branding={{
        name: "Pandahrms Registry",
        href: "/",
      }}
      navigation={[
        {
          label: "Dashboard",
          href: "/",
          icon: LayoutDashboard,
          active: true,
        },
        {
          label: "Components",
          href: "/components",
          icon: Component,
          items: [
            { label: "Button", href: "/components/button" },
            { label: "Card", href: "/components/card" },
            { label: "Table", href: "/components/table" },
          ],
        },
      ]}
      user={{
        name: "Ahmad Razif",
        email: "ahmad@pandaworks.com",
        actions: [
          { label: "Profile", href: "/profile", icon: User },
          {
            label: "Sign Out",
            onClick: () => {},
            icon: LogOut,
            variant: "destructive",
          },
        ],
      }}
      header={
        <div className="flex w-full items-center gap-2">
          <span className="text-sm font-medium">Component Showcase</span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      }
    >
      <div className="space-y-16">
        {/* Button */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
            <p className="text-sm text-muted-foreground">
              A button component with multiple variants and sizes.
            </p>
          </div>
          <InstallCommand name="button" />

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Variants
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <span className="text-xs">A</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              States
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* Card */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Card</h2>
            <p className="text-sm text-muted-foreground">
              A card container component with header, content, and footer
              sections.
            </p>
          </div>
          <InstallCommand name="card" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  Card description with supporting text.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Card content area. This is where the main body of the card
                  goes.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minimal Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">A card without description or footer.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Table</h2>
            <p className="text-sm text-muted-foreground">
              A table component with header, body, row, and cell
              sub-components.
            </p>
          </div>
          <InstallCommand name="table" />

          <Card>
            <Table>
              <TableCaption>Sample employee data.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ahmad Razif</TableCell>
                  <TableCell>Engineering</TableCell>
                  <TableCell>Software Engineer</TableCell>
                  <TableCell className="text-right">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Siti Aminah</TableCell>
                  <TableCell>Human Resources</TableCell>
                  <TableCell>HR Manager</TableCell>
                  <TableCell className="text-right">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lee Wei Ming</TableCell>
                  <TableCell>Finance</TableCell>
                  <TableCell>Financial Analyst</TableCell>
                  <TableCell className="text-right">On Leave</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
