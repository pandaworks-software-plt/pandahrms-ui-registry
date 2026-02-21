import { useState, useEffect, useCallback } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ShowcaseSidebar, type SidebarCategory } from "./showcase-sidebar";
import { ComponentPage, DemoSection } from "./component-page";

import App from "@/App";

import ButtonDemo from "./demos/button-demo";
import InputDemo from "./demos/input-demo";
import LabelDemo from "./demos/label-demo";
import CheckboxDemo from "./demos/checkbox-demo";
import TextareaDemo from "./demos/textarea-demo";
import FormDemo from "./demos/form-demo";
import RadioGroupDemo from "./demos/radio-group-demo";
import SwitchDemo from "./demos/switch-demo";
import SelectDemo from "./demos/select-demo";
import SelectPickerDemo from "./demos/select-picker-demo";
import DatePickerDemo from "./demos/date-picker-demo";
import DateRangePickerDemo from "./demos/date-range-picker-demo";
import SliderDemo from "./demos/slider-demo";
import TableDemo from "./demos/table-demo";
import CardDemo from "./demos/card-demo";
import BadgeDemo from "./demos/badge-demo";
import AvatarDemo from "./demos/avatar-demo";
import CalendarDemo from "./demos/calendar-demo";
import SkeletonDemo from "./demos/skeleton-demo";
import ProgressDemo from "./demos/progress-demo";
import AlertDemo from "./demos/alert-demo";
import DialogDemo from "./demos/dialog-demo";
import AlertDialogDemo from "./demos/alert-dialog-demo";
import SheetDemo from "./demos/sheet-demo";
import TooltipDemo from "./demos/tooltip-demo";
import PopoverDemo from "./demos/popover-demo";
import DropdownMenuDemo from "./demos/dropdown-menu-demo";
import CommandDemo from "./demos/command-demo";
import CollapsibleDemo from "./demos/collapsible-demo";
import AccordionDemo from "./demos/accordion-demo";
import SeparatorDemo from "./demos/separator-demo";
import TabsDemo from "./demos/tabs-demo";
import BreadcrumbDemo from "./demos/breadcrumb-demo";
import ScrollAreaDemo from "./demos/scroll-area-demo";
import ToggleDemo from "./demos/toggle-demo";
import ToggleGroupDemo from "./demos/toggle-group-demo";
import SonnerDemo from "./demos/sonner-demo";
import PaginationDemo from "./demos/pagination-demo";
import AppShellDemo from "./demos/app-shell-demo";
import PageHeaderDemo from "./demos/page-header-demo";
import FilterBarDemo from "./demos/filter-bar-demo";
import SplitButtonDemo from "./demos/split-button-demo";
import PatternBackgroundDemo from "./demos/pattern-background-demo";
import AttachmentInputDemo from "./demos/attachment-input-demo";
import ButtonPatternsDemo from "./demos/button-patterns-demo";
import ButtonPatternsV2Demo from "./demos/button-patterns-v2-demo";

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
    name: "page-header",
    title: "Page Header",
    description:
      "A page header with title, description, and action buttons slot for consistent page layouts.",
    demo: PageHeaderDemo,
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
    name: "checkbox",
    title: "Checkbox",
    description: "A checkbox input with checked, unchecked, and indeterminate states.",
    demo: CheckboxDemo,
  },
  {
    name: "textarea",
    title: "Textarea",
    description: "A multi-line text input field for forms.",
    demo: TextareaDemo,
  },
  {
    name: "form",
    title: "Form",
    description: "Form components with field context, validation, and accessible labels built on react-hook-form.",
    demo: FormDemo,
  },
  {
    name: "radio-group",
    title: "Radio Group",
    description: "A set of mutually exclusive radio options.",
    demo: RadioGroupDemo,
  },
  {
    name: "switch",
    title: "Switch",
    description: "A toggle switch for boolean on/off states.",
    demo: SwitchDemo,
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
    name: "slider",
    title: "Slider",
    description: "A range slider input with single and dual thumb support.",
    demo: SliderDemo,
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
    name: "skeleton",
    title: "Skeleton",
    description: "An animated placeholder for loading content.",
    demo: SkeletonDemo,
  },
  {
    name: "progress",
    title: "Progress",
    description: "A progress bar indicating completion status.",
    demo: ProgressDemo,
  },
  {
    name: "alert",
    title: "Alert",
    description: "A callout for displaying important messages with default, destructive, and info variants.",
    demo: AlertDemo,
  },
  {
    name: "dialog",
    title: "Dialog",
    description:
      "A modal dialog overlay for confirmations, forms, and focused interactions.",
    demo: DialogDemo,
  },
  {
    name: "alert-dialog",
    title: "Alert Dialog",
    description: "A modal dialog for confirmations requiring user acknowledgement.",
    demo: AlertDialogDemo,
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
    name: "accordion",
    title: "Accordion",
    description: "A vertically stacked set of expandable content sections.",
    demo: AccordionDemo,
  },
  {
    name: "separator",
    title: "Separator",
    description: "A visual divider between content sections.",
    demo: SeparatorDemo,
  },
  {
    name: "tabs",
    title: "Tabs",
    description:
      "A tabbed interface component with default and line variants, supporting horizontal and vertical orientations.",
    demo: TabsDemo,
  },
  {
    name: "breadcrumb",
    title: "Breadcrumb",
    description: "A navigation breadcrumb trail with links, separator, and ellipsis support.",
    demo: BreadcrumbDemo,
  },
  {
    name: "scroll-area",
    title: "Scroll Area",
    description: "A custom scrollable area with styled scrollbars.",
    demo: ScrollAreaDemo,
  },
  {
    name: "toggle",
    title: "Toggle",
    description: "A two-state button that can be toggled on or off.",
    demo: ToggleDemo,
  },
  {
    name: "toggle-group",
    title: "Toggle Group",
    description: "A group of toggle buttons supporting single or multiple selection.",
    demo: ToggleGroupDemo,
  },
  {
    name: "sonner",
    title: "Sonner",
    description: "A toast notification component powered by sonner with theme-aware styling.",
    demo: SonnerDemo,
  },
  {
    name: "pagination",
    title: "Pagination",
    description: "A page navigation component with previous, next, page links, and ellipsis.",
    demo: PaginationDemo,
  },
  {
    name: "attachment-input",
    title: "Attachment Input",
    description:
      "A file attachment input with dropzone and compact variants, supporting single and multiple file modes with validation.",
    demo: AttachmentInputDemo,
  },
  {
    name: "filter-bar",
    title: "Filter Bar",
    description:
      "A filter chips component with command-based field picker, supporting option lists, date ranges, and text search filters.",
    demo: FilterBarDemo,
  },
  {
    name: "split-button",
    title: "Split Button",
    description:
      "A compound split button with a primary action and a dropdown chevron for secondary actions.",
    demo: SplitButtonDemo,
  },
  {
    name: "button-patterns",
    title: "Button Patterns",
    description:
      "A comparison gallery of 24 distinct button design directions to evaluate and choose from.",
    demo: ButtonPatternsDemo,
  },
  {
    name: "button-patterns-v2",
    title: "Button Patterns v2",
    description:
      "24 modern, elastic button patterns with non-generic aesthetics -- spring physics, material metaphors, and typographic personality.",
    demo: ButtonPatternsV2Demo,
  },
  {
    name: "pattern-background",
    title: "Pattern Background",
    description:
      "CSS utility classes that add subtle visual patterns like dots, grids, noise, and aurora blobs to any container.",
    demo: PatternBackgroundDemo,
  },
];

const CATEGORIES: SidebarCategory[] = [
  {
    label: "Layout",
    items: COMPONENTS.filter((c) => ["app-shell", "page-header"].includes(c.name))
      .sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Forms",
    items: COMPONENTS.filter((c) =>
      [
        "attachment-input",
        "button",
        "checkbox",
        "date-picker",
        "date-range-picker",
        "filter-bar",
        "form",
        "input",
        "label",
        "radio-group",
        "select",
        "select-picker",
        "slider",
        "split-button",
        "switch",
        "textarea",
      ].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Data Display",
    items: COMPONENTS.filter((c) =>
      ["avatar", "badge", "calendar", "card", "progress", "skeleton", "table"].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Feedback",
    items: COMPONENTS.filter((c) =>
      ["alert", "alert-dialog", "sonner"].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Overlay",
    items: COMPONENTS.filter((c) =>
      ["dialog", "dropdown-menu", "popover", "sheet", "tooltip"].includes(
        c.name
      )
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Navigation",
    items: COMPONENTS.filter((c) =>
      ["accordion", "breadcrumb", "collapsible", "command", "pagination", "scroll-area", "separator", "tabs"].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Toggle",
    items: COMPONENTS.filter((c) =>
      ["toggle", "toggle-group"].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Utilities",
    items: COMPONENTS.filter((c) =>
      ["button-patterns", "button-patterns-v2", "pattern-background"].includes(c.name)
    ).sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    label: "Examples",
    items: [{ name: "full-demo", title: "Employee Management" }],
  },
];

function getHashComponent() {
  const hash = window.location.hash.replace("#/", "");
  const allNames = COMPONENTS.map((c) => c.name).concat("full-demo");
  return allNames.includes(hash) ? hash : "button";
}

export default function ShowcaseApp() {
  const [active, setActive] = useState(getHashComponent);

  useEffect(() => {
    const onHashChange = () => setActive(getHashComponent());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleSelect = useCallback((name: string) => {
    window.location.hash = `#/${name}`;
  }, []);

  const component = COMPONENTS.find((c) => c.name === active);

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background text-foreground">
        <ShowcaseSidebar
          categories={CATEGORIES}
          active={active}
          onSelect={handleSelect}
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
