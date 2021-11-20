import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import { AuthContext } from "context/AuthContext";
import useQuaks from "hooks/useQuaks";
import { FC, useContext } from "react";
import Sidebar from "../Sidebar";
import "./quaks.scss";

const Quaks: FC = () => {
  const auth = useContext(AuthContext);
  const { token } = auth.getUser();
  const [quaks, addQuak, removeQuak] = useQuaks(token ?? "");
  return (
    <div className="home">
      <main className="home__content">
        <Metadata title="Home" />
        <h2 className="home__title">Home</h2>
        {quaks.map((quak) => (
          <Quak quak={quak} key={quak._id} />
        ))}
      </main>
      <Sidebar />
    </div>
  );
};

export default Quaks;
