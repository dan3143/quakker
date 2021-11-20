import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import QuakComment from "components/common/Quak/QuakComment";
import QuakForm from "components/common/QuakForm";
import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { commentQuak, getQuak } from "services/quaksService";
import { Quak as QuakType, Comment } from "types/quak";
import Sidebar from "../Sidebar";

interface QuakDetailsParams {
  id: string;
}

const QuakDetails = () => {
  const { id } = useParams<QuakDetailsParams>();
  const [quak, setQuak] = useState<QuakType>();
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [comment, setComment] = useState("");
  const auth = useContext(AuthContext);
  const user = auth.getUser();
  const { token, username, name } = user;

  useEffect(() => {
    getQuak(id)
      .then((quak) => {
        setQuak(quak);
        setComments(quak.comments);
      })
      .catch(console.error);
    return () => {
      setQuak(undefined);
    };
  }, []);

  const handleComment = () => {
    if (comment.trim() === "") return;
    commentQuak(token ?? "", id, comment).then(() => {
      location.reload();
    });
    //window.location.reload();
  };

  if (!quak) return <div></div>;

  return (
    <main className="quak-details">
      <Metadata title={`${quak.user}'s quak'`} description={quak.content} />
      <Quak quak={quak} />
      <h3 style={{ margin: "20px" }}>Replies</h3>
      {comments.map((c) => (
        <QuakComment key={c._id} comment={c} />
      ))}
      <QuakForm
        placeholder="Make a comment"
        action={handleComment}
        setState={setComment}
        state={comment}
      />
    </main>
  );
};

export default QuakDetails;
