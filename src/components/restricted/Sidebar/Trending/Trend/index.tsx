import { formatNumber } from "utils";
import { Link } from "react-router-dom";
import Trend from "types/trend";
import { FC } from "react";

interface TrendProps {
  index: number;
  trend: Trend;
}

const Trend: FC<TrendProps> = ({ index, trend }) => {
  const { name, quak_volume } = trend;
  return (
    <article className="trend">
      <Link to={`/search?q=${name}`}>
        <p className="trend__position">{index}. Trending</p>
        <p className="trend__name">#{name}</p>
        <p className="trend__quaks">{formatNumber(quak_volume)} Quaks</p>
      </Link>
    </article>
  );
};

export default Trend;
