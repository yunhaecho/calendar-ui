import { DOT_COLOR_MAP, DotColor } from "../../utils/eventTypes";

type Props = {
  color: DotColor;
};

const HighlightBox = ({ color }: Props) => {
  return (
    <span
      className={`block w-6 h-6 rounded-full ${DOT_COLOR_MAP[color]} flex-shrink-0`}
    />
  );
};

export default HighlightBox;
