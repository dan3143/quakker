import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { likeQuak } from "services/quaksService";

interface QuakButtonsProps {
  id: string;
  likes: number;
  requaks: number;
  replies: number;
  token: string;
}

const QuakButtons: FC<QuakButtonsProps> = ({
  id,
  likes,
  requaks,
  replies,
  token,
}) => {
  const [likeAmout, setLikeAmout] = useState(likes);

  const handleLike = () => {
    likeQuak(token ?? "", id).then((data) => {
      if (data.message === "ok") {
        setLikeAmout(likeAmout + 1);
      }
    });
  };

  return (
    <section className="quak-buttons">
      <Link to={`/quak/${id}`} className="quak-button quak-button--replies">
        <FontAwesomeIcon icon={faComment} className="quak-button__icon" />
        <span className="quak-button__amount">{replies}</span>
      </Link>
      <button className="quak-button quak-button--requaks" name="requak">
        <FontAwesomeIcon icon={faRetweet} className="quak-button__icon" />
        <span className="quak-button__amount">{requaks}</span>
      </button>
      <button
        className="quak-button quak-button--likes"
        name="like"
        onClick={handleLike}
      >
        <FontAwesomeIcon icon={faHeart} className="quak-button__icon" />
        <span className="quak-button__amount">{likeAmout}</span>
      </button>
    </section>
  );
};

export default QuakButtons;
