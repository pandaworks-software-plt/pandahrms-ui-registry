import { useState } from "react";
import { Briefcase, MapPin, Users } from "lucide-react";
import { DemoSection } from "@/showcase/component-page";
import { FilterBar, type ActiveFilter, type FilterField } from "@/components/ui/filter-bar";

const fields: FilterField[] = [
  {
    type: "option",
    key: "status",
    label: "Status",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
      { value: "on-leave", label: "On Leave" },
      { value: "probation", label: "Probation" },
    ],
  },
  {
    type: "option",
    key: "department",
    label: "Department",
    icon: Users,
    options: [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "marketing", label: "Marketing" },
      { value: "hr", label: "Human Resources" },
      { value: "finance", label: "Finance" },
      { value: "operations", label: "Operations" },
    ],
  },
  {
    type: "option",
    key: "role",
    label: "Role",
    icon: Briefcase,
    multiple: false,
    options: [
      { value: "manager", label: "Manager" },
      { value: "senior", label: "Senior" },
      { value: "mid", label: "Mid-Level" },
      { value: "junior", label: "Junior" },
      { value: "intern", label: "Intern" },
    ],
  },
  {
    type: "option",
    key: "location",
    label: "Location",
    icon: MapPin,
    options: [
      { value: "kl", label: "Kuala Lumpur" },
      { value: "penang", label: "Penang" },
      { value: "jb", label: "Johor Bahru" },
      { value: "remote", label: "Remote" },
    ],
  },
  {
    type: "date-range",
    key: "joined",
    label: "Joined",
  },
  {
    type: "date",
    key: "review-date",
    label: "Review Date",
  },
  {
    type: "text",
    key: "name",
    label: "Name",
    placeholder: "Search by employee name...",
  },
];

export default function FilterBarDemo() {
  const [filters, setFilters] = useState<ActiveFilter[]>([]);
  const [presetFilters, setPresetFilters] = useState<ActiveFilter[]>([
    { key: "status", type: "option", values: ["active"] },
    { key: "department", type: "option", values: ["engineering", "design"] },
    { key: "name", type: "text", value: "John" },
  ]);

  return (
    <>
      <DemoSection title="Default">
        <div className="w-full space-y-3">
          <p className="text-sm text-muted-foreground">
            Click &quot;Add filter&quot; to add filters. Each filter appears as
            a removable chip. Click a chip to edit its value.
          </p>
          <FilterBar
            fields={fields}
            filters={filters}
            onChange={setFilters}
          />
          {filters.length > 0 && (
            <pre className="mt-3 rounded-md bg-muted p-3 text-xs">
              {JSON.stringify(filters, null, 2)}
            </pre>
          )}
        </div>
      </DemoSection>

      <DemoSection title="With Pre-set Filters">
        <div className="w-full space-y-3">
          <p className="text-sm text-muted-foreground">
            Filters can be initialized with values. Supports option, date range,
            and text filter types.
          </p>
          <FilterBar
            fields={fields}
            filters={presetFilters}
            onChange={setPresetFilters}
          />
          <pre className="mt-3 rounded-md bg-muted p-3 text-xs">
            {JSON.stringify(presetFilters, null, 2)}
          </pre>
        </div>
      </DemoSection>
    </>
  );
}
