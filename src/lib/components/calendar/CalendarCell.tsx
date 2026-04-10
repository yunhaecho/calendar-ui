import { CalendarEvent } from '../../utils/eventTypes'
// import { inputSchedule } from "../../utils/inputSchedule";
import HighlightBox from '../event/HighlightBox'

type CalendarCellProps = {
  day: {
    kstDate: Date
    formattedDate: string //yyyy-mm-dd
  }
  isCurrentMonth: boolean
  events: CalendarEvent[]
}

const CalendarCell = ({ day, isCurrentMonth, events }: CalendarCellProps) => {
  return (
    <li
      className={`bg-color-transition flex h-70 w-full flex-col items-center rounded-8 pb-35 hover:bg-gray-200`}
    >
      <time
        aria-label={day.kstDate.toString()}
        aria-current="date"
        dateTime={day.formattedDate}
        className={`body-16-400 w-full ${
          isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
        }`}
      >
        {day.kstDate.getDate()}
      </time>
      {events
        .filter(evt => evt.date === day.formattedDate)
        .map(evt => (
          <div
            key={evt.id}
            className="flex w-full items-center justify-center gap-5 px-2 text-sm"
          >
            <HighlightBox color={evt.color} />
            <span className="truncate">{evt.label}</span>
          </div>
        ))}
    </li>
  )
}

export default CalendarCell
