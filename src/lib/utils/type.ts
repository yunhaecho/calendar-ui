export interface WeekDate {
  day: string
  month: string
  year: string
  dayOfWeek: string
  fullDateString: string
}

export type WeekDates = [
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
]
export interface CalendarProps {
  size?: 'sm' | 'md' | 'lg'
}
