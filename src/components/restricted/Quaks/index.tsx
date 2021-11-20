import Loading from "components/common/Loading";
import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import QuakForm from "components/common/QuakForm";
import { AuthContext } from "context/AuthContext";
import useQuaks from "hooks/useQuaks";
import { FC, useContext, useEffect, useState } from "react";
import { createQuak, getAllQuaks } from "services/quaksService";
import Sidebar from "../Sidebar";
import { Quak as QuakType } from "types/quak";
import "./quaks.scss";

const Quaks: FC = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = auth.getUser();
  const [quaks, setQuaks, _] = useQuaks(token ?? "");
  const [quak, setQuak] = useState("");

  const handleCreateQuak = () => {
    createQuak(token ?? "", quak).then((q: QuakType) => {
      setQuaks([q, ...quaks]);
      setQuak("");
    });
  };

  const handleDeleteQuak = (id: string) => {
    const filtered = quaks.filter((quak) => quak._id !== id);
    setQuaks(filtered);
  };

  useEffect(() => {
    getAllQuaks(token ?? "").then((quaks) => {
      setQuaks(quaks);
      setIsLoading(false);
    });
    return () => {
      setQuaks([]);
    };
  }, []);

  return (
    <div className="home">
      <main className="home__content">
        <Metadata title="Home" />
        <QuakForm
          placeholder="Make a quak"
          setState={setQuak}
          state={quak}
          action={handleCreateQuak}
        />
        <h2 className="home__title">Home</h2>
        {isLoading ? (
          <Loading />
        ) : (
          quaks.map((quak) => (
            <Quak quak={quak} key={quak._id} onDelete={handleDeleteQuak} />
          ))
        )}
      </main>
      <Sidebar />
    </div>
  );
};

export default Quaks;
