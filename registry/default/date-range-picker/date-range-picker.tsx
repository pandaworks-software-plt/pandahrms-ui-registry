"use client"

import { useState, useEffect } from "react"
import {
  format,
  startOfMonth,
  startOfYear,
  endOfMonth,
  endOfYear,
  addMonths,
} from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangePickerProps {
  startDate: Date | undefined
  endDate: Date | undefined
  onChange: (dates: [Date | null, Date | null]) => void
  className?: string
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  placeholder?: {
    start?: string
    end?: string
  }
}

function DateRangePicker({
  startDate,
  endDate,
  onChange,
  className = "",
  disabled = false,
  minDate,
  maxDate,
  placeholder,
}: DateRangePickerProps) {
  const [localStartDate, setLocalStartDate] = useState<Date | undefined>(startDate)
  const [localEndDate, setLocalEndDate] = useState<Date | undefined>(endDate)
  const [startMonth, setStartMonth] = useState<Date | undefined>(startDate)
  const [endMonth, setEndMonth] = useState<Date | undefined>(endDate)

  useEffect(() => {
    setLocalStartDate(startDate)
    setLocalEndDate(endDate)
    setStartMonth(startDate)
    setEndMonth(endDate)
  }, [startDate, endDate])

  const handleStartDateSelect = (date: Date | undefined) => {
    setLocalStartDate(date)
    if (date) setStartMonth(date)
    if (date && localEndDate && date > localEndDate) {
      setLocalEndDate(date)
      onChange([date, date])
    } else {
      onChange([date || null, localEndDate || null])
    }
  }

  const handleStartQuickSelect = (type: "today" | "startOfMonth" | "startOfYear") => {
    const today = new Date()
    let date: Date

    switch (type) {
      case "today":
        date = today
        break
      case "startOfMonth":
        date = startOfMonth(today)
        break
      case "startOfYear":
        date = startOfYear(today)
        break
    }

    handleStartDateSelect(date)
  }

  const handleEndDateSelect = (date: Date | undefined) => {
    setLocalEndDate(date)
    if (date) setEndMonth(date)
    if (date && localStartDate && date < localStartDate) {
      setLocalStartDate(date)
      onChange([date, date])
    } else {
      onChange([localStartDate || null, date || null])
    }
  }

  const handleEndQuickSelect = (
    type: "today" | "endOfMonth" | "endOfYear" | "endOfNextMonth" | "endOfNextYear"
  ) => {
    const today = new Date()
    let date: Date

    switch (type) {
      case "today":
        date = today
        break
      case "endOfMonth":
        date = endOfMonth(today)
        break
      case "endOfYear":
        date = endOfYear(today)
        break
      case "endOfNextMonth":
        date = endOfMonth(addMonths(today, 1))
        break
      case "endOfNextYear":
        date = endOfYear(addMonths(today, 12))
        break
    }

    handleEndDateSelect(date)
  }

  const dateDisabledMatcher =
    minDate || maxDate
      ? (date: Date) => {
          if (minDate && date < minDate) return true
          if (maxDate && date > maxDate) return true
          return false
        }
      : undefined

  return (
    <div className={cn("flex flex-col sm:flex-row gap-2", className)}>
      {/* Start Date Picker */}
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !localStartDate && "text-muted-foreground",
                disabled && "cursor-not-allowed opacity-50"
              )}
              disabled={disabled}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {localStartDate
                ? format(localStartDate, "dd/MM/yyyy")
                : placeholder?.start || "Start date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="flex">
              {/* Quick Select Panel */}
              <div className="hidden sm:flex flex-col gap-1 border-r border-border p-3 bg-muted/50 dark:bg-muted/20">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Quick Select
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleStartQuickSelect("today")}
                >
                  Today
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleStartQuickSelect("startOfMonth")}
                >
                  Start of Month
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleStartQuickSelect("startOfYear")}
                >
                  Start of Year
                </Button>
              </div>

              {/* Calendar */}
              <Calendar
                mode="single"
                selected={localStartDate}
                onSelect={handleStartDateSelect}
                month={startMonth}
                onMonthChange={setStartMonth}
                disabled={dateDisabledMatcher}
                initialFocus
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center">
        <span className="text-muted-foreground text-sm">to</span>
      </div>

      {/* End Date Picker */}
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !localEndDate && "text-muted-foreground",
                disabled && "cursor-not-allowed opacity-50"
              )}
              disabled={disabled}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {localEndDate
                ? format(localEndDate, "dd/MM/yyyy")
                : placeholder?.end || "End date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="flex">
              {/* Quick Select Panel */}
              <div className="hidden sm:flex flex-col gap-1 border-r border-border p-3 bg-muted/50 dark:bg-muted/20">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Quick Select
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleEndQuickSelect("today")}
                >
                  Today
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleEndQuickSelect("endOfMonth")}
                >
                  End of Month
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleEndQuickSelect("endOfYear")}
                >
                  End of Year
                </Button>
                <div className="h-px bg-border my-1" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleEndQuickSelect("endOfNextMonth")}
                >
                  End of Next Month
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => handleEndQuickSelect("endOfNextYear")}
                >
                  End of Next Year
                </Button>
              </div>

              {/* Calendar */}
              <Calendar
                mode="single"
                selected={localEndDate}
                onSelect={handleEndDateSelect}
                month={endMonth}
                onMonthChange={setEndMonth}
                disabled={dateDisabledMatcher}
                initialFocus
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export { DateRangePicker, type DateRangePickerProps }
