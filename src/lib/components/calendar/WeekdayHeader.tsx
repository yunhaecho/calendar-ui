const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

const WeekdayHeader = () => (
  <ul className="mb-20 grid h-full grid-cols-7 gap-10">
    {weekNames.map(week => {
      return (
        <div
          key={week}
          className={`text-center ${week === 'Sun' ? 'text-red-500' : week === 'Sat' ? 'text-blue-300' : 'text-gray-600'}`}
        >
          {week}
        </div>
      )
    })}
  </ul>
)

export default WeekdayHeader
