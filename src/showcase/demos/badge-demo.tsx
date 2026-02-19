import { DemoSection } from "@/showcase/component-page";
import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <>
      <DemoSection title="Default">
        <div className="flex flex-wrap gap-2">
          <Badge>Active</Badge>
          <Badge>Full-time</Badge>
          <Badge>Approved</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Secondary">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="secondary">Draft</Badge>
          <Badge variant="secondary">In Review</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Destructive">
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive">Rejected</Badge>
          <Badge variant="destructive">Overdue</Badge>
          <Badge variant="destructive">Terminated</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Outline">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Remote</Badge>
          <Badge variant="outline">Part-time</Badge>
          <Badge variant="outline">Contract</Badge>
        </div>
      </DemoSection>

      <DemoSection title="All Variants">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </DemoSection>
    </>
  );
}
