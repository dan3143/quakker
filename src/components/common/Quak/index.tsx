import useUsers from "hooks/useUser";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Quak as QuakType } from "types/quak";
import QuakButtons from "./QuakButtons";
import QuakContent from "./QuakContent";
import QuakInfo from "./QuakInfo";
import "./quak.scss";
import { getUserPfpUrl } from "services/userService";

interface QuakProps {
  quak: QuakType;
}

const Quak: FC<QuakProps> = ({ quak }) => {
  const { _id, user, content, createdAt, likes, comments } = quak;
  const { username, name } = user;
  const profilePic = getUserPfpUrl(username);
  return (
    <article className="quak">
      <div className="quak__profile-photo">
        <Link to={`/timeline/${username}`}>
          <img src={profilePic} alt={name} />
        </Link>
      </div>
      <div className="quak__main">
        <QuakInfo username={username} date={createdAt} name={name}></QuakInfo>
        <QuakContent id={_id} content={content ?? ""} />
        <QuakButtons
          id={_id}
          likes={likes ?? 0}
          replies={comments.length}
          requaks={0}
        />
      </div>
    </article>
  );
};

export default Quak;
