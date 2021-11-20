import { useState } from "react";
import { createQuak, deleteQuak } from "services/quaksService";
import { Quak } from "types/quak";

const useQuaks = (
  token: string
): [
  Quak[],
  (quaks: Array<Quak>) => void,
  (s: string) => void,
  (id: string) => void
] => {
  const [quaks, setQuaks] = useState<Array<Quak>>([]);

  const addQuak = (content: string) => {
    createQuak(token, content)
      .then((quak) => setQuaks([...quaks, quak]))
      .catch(console.error);
  };
  const removeQuak = (id: string) => {
    deleteQuak(token, id).catch(console.error);
  };
  return [quaks, setQuaks, addQuak, removeQuak];
};

export default useQuaks;
