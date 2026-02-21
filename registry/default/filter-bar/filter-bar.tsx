"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  CalendarIcon,
  Check,
  ListFilter,
  Plus,
  Search,
  Type,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FilterOption {
  label: string
  value: string
}

export interface OptionFilterField {
  type: "option"
  key: string
  label: string
  icon?: LucideIcon
  options: FilterOption[]
  multiple?: boolean
}

export interface DateFilterField {
  type: "date" | "date-range"
  key: string
  label: string
  icon?: LucideIcon
  minDate?: Date
  maxDate?: Date
}

export interface TextFilterField {
  type: "text"
  key: string
  label: string
  icon?: LucideIcon
  placeholder?: string
}

export type FilterField = OptionFilterField | DateFilterField | TextFilterField

export type ActiveFilter =
  | { key: string; type: "option"; values: string[] }
  | { key: string; type: "date"; value: Date }
  | { key: string; type: "date-range"; start: Date; end: Date }
  | { key: string; type: "text"; value: string }

export interface FilterBarProps {
  fields: FilterField[]
  filters: ActiveFilter[]
  onChange: (filters: ActiveFilter[]) => void
  className?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fieldIcon(field: FilterField): LucideIcon {
  if (field.icon) return field.icon
  switch (field.type) {
    case "option":
      return ListFilter
    case "date":
    case "date-range":
      return CalendarIcon
    case "text":
      return Type
  }
}

function formatFilterValue(filter: ActiveFilter, field: FilterField): string {
  switch (filter.type) {
    case "option": {
      const optField = field as OptionFilterField
      const labels = filter.values
        .map((v) => optField.options.find((o) => o.value === v)?.label ?? v)
      if (labels.length <= 2) return labels.join(", ")
      return `${labels[0]} +${labels.length - 1} more`
    }
    case "date":
      return format(filter.value, "MMM d, yyyy")
    case "date-range":
      return `${format(filter.start, "MMM d")} - ${format(filter.end, "MMM d, yyyy")}`
    case "text":
      return filter.value
  }
}

// ---------------------------------------------------------------------------
// FieldPicker – step 1 of "Add filter"
// ---------------------------------------------------------------------------

function FieldPicker({
  fields,
  activeKeys,
  onSelect,
}: {
  fields: FilterField[]
  activeKeys: Set<string>
  onSelect: (field: FilterField) => void
}) {
  const available = fields.filter((f) => !activeKeys.has(f.key))

  return (
    <Command>
      <CommandInput placeholder="Search filters..." />
      <CommandList>
        <CommandEmpty>No filters available.</CommandEmpty>
        <CommandGroup>
          {available.map((field) => {
            const Icon = fieldIcon(field)
            return (
              <CommandItem
                key={field.key}
                value={field.label}
                onSelect={() => onSelect(field)}
              >
                <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                {field.label}
              </CommandItem>
            )
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

// ---------------------------------------------------------------------------
// OptionValueEditor – step 2 for "option" fields
// ---------------------------------------------------------------------------

function OptionValueEditor({
  field,
  initial,
  onApply,
}: {
  field: OptionFilterField
  initial: string[]
  onApply: (values: string[]) => void
}) {
  const [selected, setSelected] = React.useState<string[]>(initial)
  const isMulti = field.multiple !== false

  const toggle = (value: string) => {
    if (isMulti) {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      )
    } else {
      onApply([value])
    }
  }

  return (
    <div className="flex flex-col">
      <Command>
        <CommandInput placeholder={`Search ${field.label.toLowerCase()}...`} />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup>
            {field.options.map((opt) => {
              const active = selected.includes(opt.value)
              return (
                <CommandItem
                  key={opt.value}
                  value={opt.label}
                  onSelect={() => toggle(opt.value)}
                >
                  {isMulti ? (
                    <Checkbox
                      checked={active}
                      className="mr-2 pointer-events-none"
                      tabIndex={-1}
                    />
                  ) : (
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        active ? "opacity-100" : "opacity-0"
                      )}
                    />
                  )}
                  {opt.label}
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </Command>
      {isMulti && (
        <div className="border-t p-2">
          <Button
            size="sm"
            className="w-full"
            disabled={selected.length === 0}
            onClick={() => onApply(selected)}
          >
            Apply
          </Button>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DateValueEditor – step 2 for "date" fields
// ---------------------------------------------------------------------------

function DateValueEditor({
  field,
  initial,
  onApply,
}: {
  field: DateFilterField
  initial: Date | undefined
  onApply: (date: Date) => void
}) {
  const disabled = (date: Date) => {
    if (field.minDate && date < field.minDate) return true
    if (field.maxDate && date > field.maxDate) return true
    return false
  }

  return (
    <Calendar
      mode="single"
      selected={initial}
      onSelect={(date) => date && onApply(date)}
      disabled={disabled}
      initialFocus
    />
  )
}

// ---------------------------------------------------------------------------
// DateRangeValueEditor – step 2 for "date-range" fields
// ---------------------------------------------------------------------------

function DateRangeValueEditor({
  field,
  initialStart,
  initialEnd,
  onApply,
}: {
  field: DateFilterField
  initialStart: Date | undefined
  initialEnd: Date | undefined
  onApply: (start: Date, end: Date) => void
}) {
  const [start, setStart] = React.useState<Date | undefined>(initialStart)
  const [end, setEnd] = React.useState<Date | undefined>(initialEnd)
  const [selectingEnd, setSelectingEnd] = React.useState(false)

  const disabled = (date: Date) => {
    if (field.minDate && date < field.minDate) return true
    if (field.maxDate && date > field.maxDate) return true
    if (selectingEnd && start && date < start) return true
    return false
  }

  const handleSelect = (date: Date | undefined) => {
    if (!date) return
    if (!selectingEnd) {
      setStart(date)
      setEnd(undefined)
      setSelectingEnd(true)
    } else {
      setEnd(date)
      setSelectingEnd(false)
      if (start) onApply(start, date)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="px-3 py-2 text-xs text-muted-foreground font-medium">
        {!selectingEnd ? "Select start date" : "Select end date"}
      </div>
      <Calendar
        mode="single"
        selected={selectingEnd ? end : start}
        onSelect={handleSelect}
        disabled={disabled}
        initialFocus
      />
      {start && end && (
        <div className="border-t px-3 py-2 text-xs text-muted-foreground">
          {format(start, "MMM d, yyyy")} - {format(end, "MMM d, yyyy")}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// TextValueEditor – step 2 for "text" fields
// ---------------------------------------------------------------------------

function TextValueEditor({
  field,
  initial,
  onApply,
}: {
  field: TextFilterField
  initial: string
  onApply: (value: string) => void
}) {
  const [value, setValue] = React.useState(initial)

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (trimmed) onApply(trimmed)
  }

  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <Input
          placeholder={field.placeholder ?? `Filter by ${field.label.toLowerCase()}...`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit()
          }}
          autoFocus
        />
      </div>
      <Button size="sm" disabled={!value.trim()} onClick={handleSubmit}>
        Apply
      </Button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// FilterChip – an active filter rendered as a clickable, removable chip
// ---------------------------------------------------------------------------

function FilterChip({
  field,
  filter,
  onUpdate,
  onRemove,
}: {
  field: FilterField
  filter: ActiveFilter
  onUpdate: (filter: ActiveFilter) => void
  onRemove: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const Icon = fieldIcon(field)

  const handleApply = (newFilter: ActiveFilter) => {
    onUpdate(newFilter)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            open && "bg-accent text-accent-foreground"
          )}
        >
          <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="font-medium">{field.label}:</span>
          <span className="text-muted-foreground max-w-[150px] truncate">
            {formatFilterValue(filter, field)}
          </span>
          <span
            role="button"
            tabIndex={0}
            className="ml-0.5 rounded-full p-0.5 hover:bg-muted-foreground/20"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation()
                onRemove()
              }
            }}
          >
            <X className="h-3 w-3" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <ValueEditor
          field={field}
          filter={filter}
          onApply={handleApply}
        />
      </PopoverContent>
    </Popover>
  )
}

// ---------------------------------------------------------------------------
// ValueEditor – routes to the correct editor based on field type
// ---------------------------------------------------------------------------

function ValueEditor({
  field,
  filter,
  onApply,
}: {
  field: FilterField
  filter: ActiveFilter | null
  onApply: (filter: ActiveFilter) => void
}) {
  switch (field.type) {
    case "option":
      return (
        <OptionValueEditor
          field={field}
          initial={filter?.type === "option" ? filter.values : []}
          onApply={(values) =>
            onApply({ key: field.key, type: "option", values })
          }
        />
      )
    case "date":
      return (
        <DateValueEditor
          field={field as DateFilterField}
          initial={filter?.type === "date" ? filter.value : undefined}
          onApply={(date) =>
            onApply({ key: field.key, type: "date", value: date })
          }
        />
      )
    case "date-range":
      return (
        <DateRangeValueEditor
          field={field as DateFilterField}
          initialStart={
            filter?.type === "date-range" ? filter.start : undefined
          }
          initialEnd={
            filter?.type === "date-range" ? filter.end : undefined
          }
          onApply={(start, end) =>
            onApply({ key: field.key, type: "date-range", start, end })
          }
        />
      )
    case "text":
      return (
        <TextValueEditor
          field={field as TextFilterField}
          initial={filter?.type === "text" ? filter.value : ""}
          onApply={(value) =>
            onApply({ key: field.key, type: "text", value })
          }
        />
      )
  }
}

// ---------------------------------------------------------------------------
// AddFilterButton – the "+ Add filter" popover with two-step flow
// ---------------------------------------------------------------------------

function AddFilterButton({
  fields,
  activeKeys,
  onAdd,
}: {
  fields: FilterField[]
  activeKeys: Set<string>
  onAdd: (filter: ActiveFilter) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedField, setSelectedField] = React.useState<FilterField | null>(
    null
  )

  const allUsed = fields.every((f) => activeKeys.has(f.key))

  const handleFieldSelect = (field: FilterField) => {
    setSelectedField(field)
  }

  const handleApply = (filter: ActiveFilter) => {
    onAdd(filter)
    setSelectedField(null)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) setSelectedField(null)
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-dashed"
          disabled={allUsed}
        >
          <Plus className="mr-1 h-3.5 w-3.5" />
          Add filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {selectedField ? (
          <ValueEditor
            field={selectedField}
            filter={null}
            onApply={handleApply}
          />
        ) : (
          <FieldPicker
            fields={fields}
            activeKeys={activeKeys}
            onSelect={handleFieldSelect}
          />
        )}
      </PopoverContent>
    </Popover>
  )
}

// ---------------------------------------------------------------------------
// FilterBar – main exported component
// ---------------------------------------------------------------------------

function FilterBar({ fields, filters, onChange, className }: FilterBarProps) {
  const activeKeys = new Set(filters.map((f) => f.key))

  const handleUpdate = (index: number, updated: ActiveFilter) => {
    const next = [...filters]
    next[index] = updated
    onChange(next)
  }

  const handleRemove = (index: number) => {
    onChange(filters.filter((_, i) => i !== index))
  }

  const handleAdd = (filter: ActiveFilter) => {
    onChange([...filters, filter])
  }

  const handleClearAll = () => {
    onChange([])
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {filters.map((filter, index) => {
        const field = fields.find((f) => f.key === filter.key)
        if (!field) return null
        return (
          <FilterChip
            key={filter.key}
            field={field}
            filter={filter}
            onUpdate={(updated) => handleUpdate(index, updated)}
            onRemove={() => handleRemove(index)}
          />
        )
      })}
      <AddFilterButton
        fields={fields}
        activeKeys={activeKeys}
        onAdd={handleAdd}
      />
      {filters.length >= 2 && (
        <button
          type="button"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleClearAll}
        >
          Clear all
        </button>
      )}
    </div>
  )
}

export { FilterBar }
