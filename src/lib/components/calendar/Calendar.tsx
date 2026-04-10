import { useMemo } from 'react'
import { CalendarCell, WeekdayHeader, CalendarHeader } from '..'
import useMonthlyCalendar from '../../hooks/useMonthlyCalendar'
import { generateCalendar } from '../../utils/dateUtils'
import { CalendarEvent } from '../../utils/eventTypes'
import EventExplainBox from '../event/EventExplainBox'

type CalendarProps = {
  style?: string
}

const mockData: CalendarEvent[] = [
  {
    id: '1',
    date: '2026-04-09',
    label: 'meeting',
    color: 'primary',
  },
  {
    id: '2',
    date: '2026-04-10',
    label: 'holiday',
    color: 'green',
  },
  {
    id: '4',
    date: '2026-04-25',
    label: 'pilates',
    color: 'blue',
  },
]

const Calendar = ({ style }: CalendarProps) => {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar()

  const goToPrevMonth = () => goToPrevOrNextMonth(-1)
  const goToNextMonth = () => goToPrevOrNextMonth(1)
  const daysInCalendar = useMemo(() => {
    return generateCalendar(new Date(currentYear, currentMonth))
  }, [currentMonth, currentYear])

  return (
    <div className={`${style ?? 'w-550 p-5'}`}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />
      <div className="flex h-full w-full flex-col text-center">
        <section>
          <WeekdayHeader />
        </section>

        <section>
          <ul className="grid h-full grid-cols-7 gap-10">
            {daysInCalendar.map(day => {
              const isCurrentMonth = day.isCurrentMonth
              return (
                <CalendarCell
                  key={day.kstDate.getTime()}
                  day={day}
                  isCurrentMonth={isCurrentMonth}
                  events={mockData}
                />
              )
            })}
          </ul>
        </section>

        <section>
          <EventExplainBox />
        </section>
      </div>
    </div>
  )
}

export default Calendar
