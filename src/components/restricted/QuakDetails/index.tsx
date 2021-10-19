import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import useQuaks from "hooks/useQuaks";
import { useParams } from "react-router";

interface QuakDetailsParams {
  id: string;
}

const QuakDetails = () => {
  const { id } = useParams<QuakDetailsParams>();
  const [quaks, ..._] = useQuaks();
  const idNumber = parseInt(id);
  const quak = quaks.find((q) => q.id === idNumber);
  if (quak === undefined) {
    return <div></div>;
  }
  const replies = quaks.filter(
    (q) => q.parent === quak.id && q.type === "reply"
  );
  return (
    <main>
      <Metadata title={`${quak.user}'s quak'`} description={quak.content} />
      <Quak quak={quak} />
      <h3 style={{ margin: "20px" }}>Replies</h3>
      {replies.map((q) => (
        <Quak quak={q} key={q.id} />
      ))}
    </main>
  );
};

export default QuakDetails;
