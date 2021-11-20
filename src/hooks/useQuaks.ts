import { useEffect, useState } from "react";
import { createQuak, deleteQuak, getAllQuaks } from "services/quaksService";
import { Quak } from "types/quak";

const useQuaks = (
  token: string
): [Quak[], (s: string) => void, (id: string) => void] => {
  const [quaks, setQuaks] = useState<Array<Quak>>([]);
  useEffect(() => {
    getAllQuaks(token).then((quaks) => {
      setQuaks(quaks);
    });
    return () => {
      setQuaks([]);
    };
  }, []);
  const addQuak = (content: string) => {
    createQuak(token, content).catch(console.error);
  };
  const removeQuak = (id: string) => {
    deleteQuak(token, id).catch(console.error);
  };
  return [quaks, addQuak, removeQuak];
};

export default useQuaks;
