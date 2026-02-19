import { useState } from "react";
import { DemoSection } from "@/showcase/component-page";
import { SelectPicker } from "@/components/ui/select-picker";

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
  { value: "orange", label: "Orange" },
  { value: "strawberry", label: "Strawberry" },
];

const skillOptions = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "nextjs", label: "Next.js" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "docker", label: "Docker" },
  { value: "postgresql", label: "PostgreSQL" },
];

export default function SelectPickerDemo() {
  const [singleValue, setSingleValue] = useState("");
  const [multipleValues, setMultipleValues] = useState<string[]>([]);

  return (
    <>
      <DemoSection title="Single Select">
        <div className="grid w-full max-w-sm gap-1.5">
          <p className="text-sm text-muted-foreground">
            Select a single item from the dropdown. Supports search filtering.
          </p>
          <SelectPicker
            mode="single"
            value={singleValue}
            onChange={setSingleValue}
            placeholder="Select a fruit..."
            options={fruitOptions}
          />
          {singleValue && (
            <p className="text-sm text-muted-foreground">
              Selected: {fruitOptions.find((o) => o.value === singleValue)?.label}
            </p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Multiple Select">
        <div className="grid w-full max-w-sm gap-1.5">
          <p className="text-sm text-muted-foreground">
            Select multiple items. Selected items appear as removable badges.
          </p>
          <SelectPicker
            mode="multiple"
            value={multipleValues}
            onChange={setMultipleValues}
            placeholder="Select skills..."
            options={skillOptions}
          />
          {multipleValues.length > 0 && (
            <p className="text-sm text-muted-foreground">
              Selected ({multipleValues.length}):{" "}
              {multipleValues
                .map((v) => skillOptions.find((o) => o.value === v)?.label)
                .join(", ")}
            </p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="grid w-full max-w-sm gap-1.5">
          <p className="text-sm text-muted-foreground">
            A disabled select picker that cannot be interacted with.
          </p>
          <SelectPicker
            mode="single"
            value="apple"
            onChange={() => {}}
            placeholder="Select a fruit..."
            options={fruitOptions}
            disabled
          />
        </div>
      </DemoSection>
    </>
  );
}
