# PandaHRMS UI Registry

Shared [shadcn/ui](https://ui.shadcn.com/) component registry for PandaHRMS frontend projects.

Built with React 19, Tailwind CSS v4 (OKLCH), and Radix UI primitives.

Showcase: https://pandaworks-software-plt.github.io/pandahrms-ui-registry/

## Using Components in Client Apps

### Quick Install

```bash
pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/<component-name>.json"
```

Replace `<component-name>` with any component from the list below. Dependencies are resolved automatically.

### Prompt for Claude Code

Copy and paste this into your Claude Code session to install components:

```
Install the following component(s) from the Pandahrms UI registry using shadcn CLI:

pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/<component-name>.json"

Replace <component-name> with the component I need. Dependencies will be resolved automatically by shadcn.
```

### Component Catalog

#### Layout
| Component | Description |
|-----------|-------------|
| `app-shell` | Data-driven layout with collapsible sidebar, header bar, and user menu |
| `page-header` | Page title, description, and action buttons slot |
| `detail-page` | Compound layout for resource detail pages with header, 2-column grid, metadata sidebar |

#### Forms
| Component | Description |
|-----------|-------------|
| `button` | Variants: default, secondary, outline, destructive, ghost, link. Sizes: default, sm, lg, icon |
| `input` | Styled text input |
| `label` | Accessible label for form controls |
| `textarea` | Multi-line text input |
| `checkbox` | Checked, unchecked, and indeterminate states |
| `radio-group` | Mutually exclusive radio options |
| `switch` | Toggle switch for boolean on/off |
| `select` | Dropdown select (Radix UI). Best for < 10 static options |
| `select-picker` | Searchable select with single/multiple mode. Best for long lists or multi-select |
| `date-picker` | Single date picker with calendar popover |
| `date-range-picker` | Dual date picker with quick-select presets |
| `slider` | Range slider with single/dual thumb support |
| `form` | react-hook-form integration with field context, validation, accessible labels |
| `split-button` | Primary action + dropdown for secondary actions |
| `attachment-input` | File attachment with dropzone/compact variants, single/multiple modes |
| `selectable-card` | Card-based single (radio) or multi (checkbox) selection |
| `filter-bar` | FilterButton trigger + ActiveFilters chips with operators for option, date, text filters |

#### Data Display
| Component | Description |
|-----------|-------------|
| `badge` | Variants: default, secondary, destructive, outline |
| `avatar` | Image with fallback for user representation |
| `card` | Container with header, content, footer sections |
| `table` | Table with header, body, row, cell sub-components |
| `calendar` | Date calendar with single, multiple, range modes |
| `skeleton` | Animated loading placeholder |
| `progress` | Progress bar |
| `code-label` | Inline monospace label with copy-to-clipboard button |

#### Feedback
| Component | Description |
|-----------|-------------|
| `alert` | Callout with default, destructive, info variants |
| `alert-dialog` | Modal requiring user acknowledgement |
| `sonner` | Toast notifications (powered by sonner) |

#### Overlay
| Component | Description |
|-----------|-------------|
| `dialog` | Modal dialog for forms and interactions |
| `sheet` | Slide-out panel (top, right, bottom, left) |
| `dropdown-menu` | Menu of actions triggered by a button |
| `tooltip` | Popup on hover/focus |
| `popover` | Floating content triggered by a button |

#### Navigation
| Component | Description |
|-----------|-------------|
| `tabs` | Tabbed interface with default (pill) and line (underline) variants |
| `accordion` | Expandable content sections |
| `breadcrumb` | Navigation breadcrumb trail |
| `collapsible` | Expand/collapse content |
| `command` | Command menu (cmdk) for searchable lists and palettes |
| `pagination` | Page navigation with previous, next, links, ellipsis |
| `scroll-area` | Custom scrollable area with styled scrollbars |
| `separator` | Visual divider (horizontal or vertical) |

#### Toggle
| Component | Description |
|-----------|-------------|
| `toggle` | Two-state button |
| `toggle-group` | Group of toggles with single or multiple selection |

### Install Commands

| Component | Install Command |
|-----------|----------------|
| `accordion` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/accordion.json"` |
| `alert` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/alert.json"` |
| `alert-dialog` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/alert-dialog.json"` |
| `app-shell` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/app-shell.json"` |
| `attachment-input` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/attachment-input.json"` |
| `avatar` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/avatar.json"` |
| `badge` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/badge.json"` |
| `breadcrumb` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/breadcrumb.json"` |
| `button` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/button.json"` |
| `calendar` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/calendar.json"` |
| `card` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/card.json"` |
| `checkbox` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/checkbox.json"` |
| `collapsible` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/collapsible.json"` |
| `command` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/command.json"` |
| `date-picker` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/date-picker.json"` |
| `date-range-picker` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/date-range-picker.json"` |
| `dialog` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/dialog.json"` |
| `dropdown-menu` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/dropdown-menu.json"` |
| `filter-bar` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/filter-bar.json"` |
| `form` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/form.json"` |
| `input` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/input.json"` |
| `label` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/label.json"` |
| `page-header` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/page-header.json"` |
| `pagination` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/pagination.json"` |
| `popover` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/popover.json"` |
| `progress` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/progress.json"` |
| `radio-group` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/radio-group.json"` |
| `scroll-area` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/scroll-area.json"` |
| `select` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/select.json"` |
| `select-picker` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/select-picker.json"` |
| `selectable-card` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/selectable-card.json"` |
| `separator` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/separator.json"` |
| `sheet` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/sheet.json"` |
| `skeleton` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/skeleton.json"` |
| `slider` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/slider.json"` |
| `sonner` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/sonner.json"` |
| `split-button` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/split-button.json"` |
| `switch` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/switch.json"` |
| `table` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/table.json"` |
| `tabs` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/tabs.json"` |
| `textarea` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/textarea.json"` |
| `toggle` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/toggle.json"` |
| `toggle-group` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/toggle-group.json"` |
| `tooltip` | `pnpm dlx shadcn@latest add "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/tooltip.json"` |

### Install Multiple Components

```bash
pnpm dlx shadcn@latest add \
  "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/button.json" \
  "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/input.json" \
  "https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/dialog.json"
```

## AI Agent Reference

An AI-readable component reference with props, usage examples, and a decision guide is available at [`public/llms.txt`](public/llms.txt).

AI agents working in PandaHRMS consumer projects can fetch this file to understand how to use the registry:

```
https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/llms.txt
```

This file contains:
- Full component catalog with TypeScript prop interfaces
- Usage code snippets for every component
- Decision guide: which component to use for common scenarios
- Styling conventions (dark mode, OKLCH colors, Lucide icons)

## Development

```bash
pnpm dev              # Start Vite dev server (component showcase)
pnpm build            # Production build
pnpm registry:build   # Build registry JSON output to public/r/
```

### Adding a Component

1. Install via shadcn CLI: `pnpm dlx shadcn@latest add <component>`
2. Copy from `src/components/ui/` to `registry/default/<component>/`
3. Add entry to `registry.json` items array
4. Run `pnpm registry:build`
5. Commit everything including `public/r/` output

### Showcase

The dev server runs a component showcase with live demos, install commands, and usage code samples for every component.

The "Employee Management" example opens in a separate tab showing a full AppShell-based application.

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4 (OKLCH color space, zinc base)
- Radix UI primitives
- class-variance-authority for variants
- Lucide icons
- Open Sans font
