# pandahrms-ui-registry

Shared shadcn/ui component registry for Pandahrms frontend projects.

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

### Available Components

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
