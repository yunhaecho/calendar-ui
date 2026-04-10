import { ALL_DOT_COLORS, DOT_COLOR_MAP } from '../../utils/eventTypes'

const EventExplainBox = () => {
  return (
    <div className="mt-15 flex flex-col gap-10 border-t border-gray-300 p-5 pt-15">
      <div className="flex flex-wrap items-center gap-12">
        {ALL_DOT_COLORS.map(colorName => (
          <div key={colorName} className="flex items-center gap-4">
            <span
              className={`block h-6 w-6 rounded-full ${DOT_COLOR_MAP[colorName]}`}
            />
            <span className="text-12 text-gray-600">{colorName}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventExplainBox
