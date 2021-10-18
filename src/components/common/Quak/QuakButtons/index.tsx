import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FC } from "react";

interface QuakButtonsProps {
  id: number;
  likes: number;
  requaks: number;
  replies: number;
}

const QuakButtons: FC<QuakButtonsProps> = ({ id, likes, requaks, replies }) => (
  <section className="quak-buttons">
    <Link to={`/quak/${id}`} className="quak-button quak-button--replies">
      <FontAwesomeIcon icon={faComment} className="quak-button__icon" />
      <span className="quak-button__amount">{replies}</span>
    </Link>
    <button className="quak-button quak-button--requaks" name="requak">
      <FontAwesomeIcon icon={faRetweet} className="quak-button__icon" />
      <span className="quak-button__amount">{requaks}</span>
    </button>
    <button className="quak-button quak-button--likes" name="like">
      <FontAwesomeIcon icon={faHeart} className="quak-button__icon" />
      <span className="quak-button__amount">{likes}</span>
    </button>
    <button className="quak-button quak-button--share" name="share">
      <FontAwesomeIcon icon={faShare} className="quak-button__icon" />
    </button>
  </section>
);

export default QuakButtons;
