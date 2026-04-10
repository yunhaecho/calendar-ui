import LeftArrow from '../../assets/LeftArrow'
import RightArrow from '../../assets/RightArrow'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const CalendarHeader = ({
  currentMonth,
  currentYear,
  goToPrevMonth,
  goToNextMonth,
}: {
  currentMonth: number
  currentYear: number
  goToPrevMonth: () => void
  goToNextMonth: () => void
}) => {
  return (
    <nav
      className="mx-15 mb-20 grid h-full grid-cols-[1fr_1fr]"
      aria-label="Calendar navigation buttons"
    >
      <p
        className="head-24-600 flex h-full items-center justify-start"
        aria-label={`${monthNames[currentMonth]} ${currentYear}`}
      >
        {`${monthNames[currentMonth]} ${currentYear}`}
      </p>
      <div className="flex h-full w-full flex-row justify-end">
        <div
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="bg-color-transition mr-10 flex items-center justify-center rounded-8 border border-gray-300 px-12 py-10 text-15 font-thin hover:bg-gray-200"
        >
          <LeftArrow />
        </div>
        <div
          onClick={goToNextMonth}
          aria-label="Next month"
          className="bg-color-transition flex items-center justify-center rounded-8 border border-gray-300 px-12 py-10 text-15 font-thin hover:bg-gray-200"
        >
          <RightArrow />
        </div>
      </div>
    </nav>
  )
}

export default CalendarHeader
