import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import useQuaks from "hooks/useQuaks";
import { FC } from "react";
import { useParams } from "react-router";
import UserInfo from "./UserInfo";
import "./timeline.scss";

interface TimelineParams {
  username: string;
}

const Timeline: FC = () => {
  const { username } = useParams<TimelineParams>();
  const [quaks, ..._] = useQuaks();
  const userQuaks = quaks.filter((quak) => quak.user === username);
  const nQuaks = userQuaks.length;
  return (
    <main className="timeline">
      <Metadata title={`${username}'s profile`} />
      <UserInfo username={username} nQuaks={nQuaks} />
      {userQuaks.map((quak) => (
        <Quak quak={quak} key={quak.id} />
      ))}
    </main>
  );
};

export default Timeline;
