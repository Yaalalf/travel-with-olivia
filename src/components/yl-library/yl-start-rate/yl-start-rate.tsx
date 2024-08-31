import YLIcon from "../yl-icon";
import "./base.css";

export default function YLStartRate({ value, max = 5 }: YLStartRateProps) {
  const starRate: EYLStartRateState[] = Array(max).fill(
    EYLStartRateState.EMPTY,
    0,
    5
  );

  for (let index = 0; index < Math.ceil(value); index++) {
    if (value % 2 != 0 && index == Math.ceil(value) - 1) {
      starRate[index] = EYLStartRateState.HALF;
    } else {
      starRate[index] = EYLStartRateState.FULL;
    }
  }

  return (
    <div className="yl-start-rate">
      {starRate.map((rate, index) => (
        <YLIcon
          className="yl-start-rate-icon"
          key={index}
          icon={
            rate == EYLStartRateState.FULL
              ? "/star-full-icon.svg"
              : rate == EYLStartRateState.HALF
              ? "/star-half-icon.svg"
              : "/star-icon.svg"
          }
        />
      ))}
    </div>
  );
}

interface YLStartRateProps {
  value: number;

  max?: number;
}

enum EYLStartRateState {
  FULL = 1,
  HALF = 0,
  EMPTY = -1,
}
