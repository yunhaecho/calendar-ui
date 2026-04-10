import { ALL_DOT_COLORS, DOT_COLOR_MAP } from "../../utils/eventTypes";

const EventExplainBox = () => {
  return (
    <div className="p-5 mt-15 pt-15 border-t border-gray-300 flex flex-col gap-10">
      <div className="flex items-center gap-12 flex-wrap">
        {ALL_DOT_COLORS.map((colorName) => (
          <div key={colorName} className="flex items-center gap-4">
            <span
              className={`block w-6 h-6 rounded-full ${DOT_COLOR_MAP[colorName]}`}
            />
            <span className="text-12 text-gray-600">{colorName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventExplainBox;
