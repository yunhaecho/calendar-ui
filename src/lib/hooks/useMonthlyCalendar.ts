import { useState } from 'react'

function useMonthlyCalendar() {
  const currentDate = new Date()
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth()) //0-indexed

  const goToPrevOrNextMonth = (deltaMonth: number) => {
    setCurrentMonth(prevMonth => {
      const newMonth = (prevMonth + deltaMonth + 12) % 12
      return newMonth
    })

    setCurrentYear(
      prevYear =>
        prevYear +
        (deltaMonth < 0 && currentMonth === 0
          ? -1
          : deltaMonth > 0 && currentMonth === 11
            ? 1
            : 0)
    )
  }
  return { currentMonth, currentYear, goToPrevOrNextMonth }
}

export default useMonthlyCalendar
