import useUsers from "hooks/useUser";
import { FC } from "react";
import { Link } from "react-router-dom";
import QuakType from "types/quak";
import QuakButtons from "./QuakButtons";
import QuakContent from "./QuakContent";
import QuakInfo from "./QuakInfo";
import "./quak.scss";

interface QuakProps {
  quak: QuakType;
}

const Quak: FC<QuakProps> = ({ quak }) => {
  const { id, user, content, date, replies, requaks, likes } = quak;
  const [_, getUser, ...rest] = useUsers();
  const { username, name, profilePic } = getUser(user) ?? {
    username: "",
    name: "",
    profilePic: "",
  };
  return (
    <article className="quak">
      <div className="quak__profile-photo">
        <Link to={`/timeline/${username}`}>
          <img src={profilePic} alt={name} />
        </Link>
      </div>
      <div className="quak__main">
        <QuakInfo username={username} date={date} name={name}></QuakInfo>
        <QuakContent id={id} content={content ?? ""} />
        <QuakButtons
          id={id}
          likes={likes ?? 0}
          replies={replies ?? 0}
          requaks={requaks ?? 0}
        />
      </div>
    </article>
  );
};

export default Quak;
