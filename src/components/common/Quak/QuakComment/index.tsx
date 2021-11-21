import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "context/AuthContext";
import { FC, useContext } from "react";
import { deleteComment } from "services/quaksService";
import { Comment } from "types/quak";
import QuakContent from "../QuakContent";
import QuakInfo from "../QuakInfo";

interface QuakCommentProps {
  tweetId: string;
  comment: Comment;
  onDelete: (id: string) => void;
}

const QuakComment: FC<QuakCommentProps> = ({ comment, tweetId, onDelete }) => {
  const auth = useContext(AuthContext);
  const user = auth.getUser();
  const { username, token } = user;
  const { _id } = comment;
  const userOwnsComment = username === comment.user.username;
  const handleDeleteComment = () => {
    deleteComment(token ?? "", tweetId, _id).then((data) => {
      if (data.message && data.message === "ok") {
        onDelete(_id);
      }
    });
  };

  return (
    <article className="comment">
      <div className="comment__content">
        <QuakInfo username={comment.user.username} name={comment.user.name} />
        <QuakContent id={comment._id} content={comment.comment} />
      </div>
      <div>
        {userOwnsComment && (
          <button
            className="quak-button"
            onClick={handleDeleteComment}
            aria-label="Delete comment"
          >
            <FontAwesomeIcon icon={faTrashAlt} className="quak-button__icon" />
          </button>
        )}
      </div>
    </article>
  );
};

export default QuakComment;
