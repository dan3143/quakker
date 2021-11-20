import { FC } from "react";
import { Comment } from "types/quak";
import QuakContent from "../QuakContent";
import QuakInfo from "../QuakInfo";

interface QuakCommentProps {
  comment: Comment;
}

const QuakComment: FC<QuakCommentProps> = ({ comment }) => {
  return (
    <article className="comment">
      <QuakInfo username={comment.user.username} name={comment.user.name} />
      <QuakContent id={comment._id} content={comment.comment} />
    </article>
  );
};

export default QuakComment;
