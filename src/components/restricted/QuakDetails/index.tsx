import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import useQuaks from "hooks/useQuaks";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getQuak } from "services/quaksService";
import { Quak as QuakType } from "types/quak";

interface QuakDetailsParams {
  id: string;
}

const QuakDetails = () => {
  const { id } = useParams<QuakDetailsParams>();
  const [quak, setQuak] = useState<QuakType>();

  useEffect(() => {
    getQuak(id).then(setQuak).catch(console.error);
    return () => {
      setQuak(undefined);
    };
  }, []);

  if (!quak) return <div></div>;

  const { comments } = quak;

  return (
    <main>
      <Metadata title={`${quak.user}'s quak'`} description={quak.content} />
      <Quak quak={quak} />
      <h3 style={{ margin: "20px" }}>Replies</h3>
      {comments.map((c) => (
        <div>{c.comment}</div>
      ))}
    </main>
  );
};

export default QuakDetails;
