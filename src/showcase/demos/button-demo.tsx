import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoSection } from "@/showcase/component-page";

export default function ButtonDemo() {
  return (
    <div className="space-y-8">
      <DemoSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="With Icon">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Default</Button>
          <Button variant="destructive" disabled>
            Destructive
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="link" disabled>
            Link
          </Button>
        </div>
      </DemoSection>
    </div>
  );
}
