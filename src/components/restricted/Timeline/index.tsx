import Metadata from "components/common/Metadata";
import Quak from "components/common/Quak";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserInfo from "./UserInfo";
import "./timeline.scss";
import { getUser, getUserQuaks } from "services/userService";
import { Author, Quak as QuakType } from "types/quak";
import Loading from "components/common/Loading";

interface TimelineParams {
  username: string;
}

const Timeline: FC = () => {
  const { username } = useParams<TimelineParams>();
  const [user, setUser] = useState<Author>({
    name: "",
    email: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [quaks, setQuaks] = useState<Array<QuakType>>([]);

  const handleDeleteQuak = (id: string) => {
    const filtered = quaks.filter((quak) => quak._id !== id);
    setQuaks(filtered);
  };

  useEffect(() => {
    getUser(username).then((user) => {
      setUser(user);
      getUserQuaks(username).then((quaks) => {
        setQuaks(quaks);
        setIsLoading(false);
      });
    });

    return () => {
      setQuaks([]);
      setUser({
        name: "",
        email: "",
        username: "",
      });
    };
  }, []);

  return (
    <main className="timeline">
      <Metadata title={`${username}'s profile`} />
      <UserInfo user={user} nQuaks={quaks.length} />
      {isLoading ? (
        <Loading />
      ) : (
        quaks.map((quak) => (
          <Quak quak={quak} key={quak._id} onDelete={handleDeleteQuak} />
        ))
      )}
    </main>
  );
};

export default Timeline;
