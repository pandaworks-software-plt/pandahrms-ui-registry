import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ShowcaseSidebar, type SidebarCategory } from "./showcase-sidebar";
import { ComponentPage, DemoSection } from "./component-page";

import App from "@/App";

import ButtonDemo from "./demos/button-demo";
import InputDemo from "./demos/input-demo";
import LabelDemo from "./demos/label-demo";
import SelectDemo from "./demos/select-demo";
import SelectPickerDemo from "./demos/select-picker-demo";
import DatePickerDemo from "./demos/date-picker-demo";
import DateRangePickerDemo from "./demos/date-range-picker-demo";
import TableDemo from "./demos/table-demo";
import CardDemo from "./demos/card-demo";
import BadgeDemo from "./demos/badge-demo";
import AvatarDemo from "./demos/avatar-demo";
import CalendarDemo from "./demos/calendar-demo";
import DialogDemo from "./demos/dialog-demo";
import SheetDemo from "./demos/sheet-demo";
import TooltipDemo from "./demos/tooltip-demo";
import PopoverDemo from "./demos/popover-demo";
import DropdownMenuDemo from "./demos/dropdown-menu-demo";
import CommandDemo from "./demos/command-demo";
import CollapsibleDemo from "./demos/collapsible-demo";
import SeparatorDemo from "./demos/separator-demo";
import AppShellDemo from "./demos/app-shell-demo";

interface ComponentMeta {
  name: string;
  title: string;
  description: string;
  demo: React.ComponentType;
}

const COMPONENTS: ComponentMeta[] = [
  {
    name: "app-shell",
    title: "App Shell",
    description:
      "A data-driven layout component with collapsible sidebar, header bar, and user menu.",
    demo: AppShellDemo,
  },
  {
    name: "button",
    title: "Button",
    description:
      "A button component with multiple variants and sizes.",
    demo: ButtonDemo,
  },
  {
    name: "input",
    title: "Input",
    description: "A styled text input field for forms.",
    demo: InputDemo,
  },
  {
    name: "label",
    title: "Label",
    description: "An accessible label for form controls.",
    demo: LabelDemo,
  },
  {
    name: "select",
    title: "Select",
    description: "A dropdown select input built on Radix UI.",
    demo: SelectDemo,
  },
  {
    name: "select-picker",
    title: "Select Picker",
    description:
      "A searchable select picker supporting single and multiple selection with type-safe discriminated union props.",
    demo: SelectPickerDemo,
  },
  {
    name: "date-picker",
    title: "Date Picker",
    description: "A single date picker with calendar popover.",
    demo: DatePickerDemo,
  },
  {
    name: "date-range-picker",
    title: "Date Range Picker",
    description:
      "A dual date picker with quick-select panels for selecting date ranges.",
    demo: DateRangePickerDemo,
  },
  {
    name: "table",
    title: "Table",
    description:
      "A table component with header, body, row, and cell sub-components.",
    demo: TableDemo,
  },
  {
    name: "card",
    title: "Card",
    description:
      "A card container component with header, content, and footer sections.",
    demo: CardDemo,
  },
  {
    name: "badge",
    title: "Badge",
    description: "A small status indicator with multiple variants.",
    demo: BadgeDemo,
  },
  {
    name: "avatar",
    title: "Avatar",
    description:
      "An image element with a fallback for representing a user.",
    demo: AvatarDemo,
  },
  {
    name: "calendar",
    title: "Calendar",
    description:
      "A date calendar component with single, multiple, and range selection modes.",
    demo: CalendarDemo,
  },
  {
    name: "dialog",
    title: "Dialog",
    description:
      "A modal dialog overlay for confirmations, forms, and focused interactions.",
    demo: DialogDemo,
  },
  {
    name: "sheet",
    title: "Sheet",
    description: "A slide-out panel overlay component.",
    demo: SheetDemo,
  },
  {
    name: "tooltip",
    title: "Tooltip",
    description:
      "A popup that displays information related to an element on hover or focus.",
    demo: TooltipDemo,
  },
  {
    name: "popover",
    title: "Popover",
    description:
      "A floating content popover triggered by a button or element.",
    demo: PopoverDemo,
  },
  {
    name: "dropdown-menu",
    title: "Dropdown Menu",
    description: "A menu of actions or options triggered by a button.",
    demo: DropdownMenuDemo,
  },
  {
    name: "command",
    title: "Command",
    description:
      "A command menu component built on cmdk for searchable lists and command palettes.",
    demo: CommandDemo,
  },
  {
    name: "collapsible",
    title: "Collapsible",
    description: "A component that expands and collapses content.",
    demo: CollapsibleDemo,
  },
  {
    name: "separator",
    title: "Separator",
    description: "A visual divider between content sections.",
    demo: SeparatorDemo,
  },
];

const CATEGORIES: SidebarCategory[] = [
  {
    label: "Layout",
    items: COMPONENTS.filter((c) => c.name === "app-shell"),
  },
  {
    label: "Forms",
    items: COMPONENTS.filter((c) =>
      [
        "button",
        "input",
        "label",
        "select",
        "select-picker",
        "date-picker",
        "date-range-picker",
      ].includes(c.name)
    ),
  },
  {
    label: "Data Display",
    items: COMPONENTS.filter((c) =>
      ["table", "card", "badge", "avatar", "calendar"].includes(c.name)
    ),
  },
  {
    label: "Overlay",
    items: COMPONENTS.filter((c) =>
      ["dialog", "sheet", "tooltip", "popover", "dropdown-menu"].includes(
        c.name
      )
    ),
  },
  {
    label: "Navigation",
    items: COMPONENTS.filter((c) =>
      ["command", "collapsible", "separator"].includes(c.name)
    ),
  },
  {
    label: "Examples",
    items: [{ name: "full-demo", title: "Employee Management" }],
  },
];

export default function ShowcaseApp() {
  const [active, setActive] = useState("button");

  const component = COMPONENTS.find((c) => c.name === active);

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background text-foreground">
        <ShowcaseSidebar
          categories={CATEGORIES}
          active={active}
          onSelect={setActive}
        />
        <main className="flex-1 overflow-y-auto">
          {active === "full-demo" ? (
            <App />
          ) : component ? (
            <div className="mx-auto max-w-4xl px-8 py-8">
              <ComponentPage
                title={component.title}
                description={component.description}
                installName={component.name}
              >
                <component.demo />
              </ComponentPage>
            </div>
          ) : null}
        </main>
      </div>
    </TooltipProvider>
  );
}
