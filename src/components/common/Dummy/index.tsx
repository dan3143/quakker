import Metadata from "components/common/Metadata";
import { FC } from "react";

interface DummyProps {
  name: string;
}

const Dummy: FC<DummyProps> = ({ name }) => (
  <main className="dummy">
    <Metadata title={name} description={`${name} dummy page`} />
    <h1>{name}</h1>
    <p>This page doesn't exist yet.</p>
  </main>
);

export default Dummy;
