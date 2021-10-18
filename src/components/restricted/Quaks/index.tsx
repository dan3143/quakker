import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import useQuaks from "hooks/useQuaks";
import { FC } from "react";
import "./quaks.scss";

const Quaks: FC = () => {
  const [quaks, addQuak, removeQuak] = useQuaks();
  return (
    <main>
      <Metadata title="Home" />
      <h2 className="home__title">Home</h2>
      {quaks.map((quak) => (
        <Quak quak={quak} key={quak.id} />
      ))}
    </main>
  );
};

export default Quaks;
