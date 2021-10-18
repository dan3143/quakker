
import { useState } from 'react';
import Quak from 'types/quak';
import fakeQuaks from 'mocks/quaks';

const useQuaks = () : [Quak[], (q: Quak) => void, (id: number) => void] => {
    const [quaks, setQuaks] = useState(fakeQuaks);
    const addQuak = (quak: Quak) => setQuaks([...quaks, quak]);
    const removeQuak = (id: number) => quaks.filter(quak => quak.id !== id);
    return [quaks, addQuak, removeQuak];
}

export default useQuaks;