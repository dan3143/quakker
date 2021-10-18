import { FC } from "react";
import { Link } from "react-router-dom";
import { getPrettyDate } from "utils";

interface QuakInfoProps {
  date: string;
  name: string;
  username: string;
}

const QuakInfo: FC<QuakInfoProps> = ({ date, name, username }) => (
  <section className="quak-info">
    <Link to={`/timeline/${username}`}>
      <span className="quak-info__name">{name}</span>
      <span className="quak-info__username">@{username} </span>
    </Link>
    <span className="quak-info__separator">•</span>
    <span className="quak-info__date">{getPrettyDate(date)}</span>
  </section>
);
export default QuakInfo;
