import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import useQuaks from "hooks/useQuaks";
import { FC } from "react";
import Sidebar from "../Sidebar";
import "./quaks.scss";

const Quaks: FC = () => {
  const [quaks, addQuak, removeQuak] = useQuaks();
  return (
    <div className="home">
      <main className="home__content">
        <Metadata title="Home" />
        <h2 className="home__title">Home</h2>
        {quaks.map((quak) => (
          <Quak quak={quak} key={quak.id} />
        ))}
      </main>
      <Sidebar />
    </div>
  );
};

export default Quaks;
