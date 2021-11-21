import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Quak as QuakType } from "types/quak";
import QuakButtons from "./QuakButtons";
import QuakContent from "./QuakContent";
import QuakInfo from "./QuakInfo";
import "./quak.scss";
import { getUserPfpUrl } from "services/userService";
import { AuthContext } from "context/AuthContext";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteQuak } from "services/quaksService";

interface QuakProps {
  quak: QuakType;
  onDelete: (id: string) => void;
}

const Quak: FC<QuakProps> = ({ quak, onDelete }) => {
  const { _id, user, content, createdAt, likes, comments } = quak;
  const { username, name, email } = user;
  const profilePic = getUserPfpUrl(email);
  const auth = useContext(AuthContext);
  const authUser = auth.getUser();
  const { token } = authUser;
  const handleDelete = () => {
    deleteQuak(token ?? "", _id).then((data) => {
      onDelete(_id);
    });
  };
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
          token={token ?? ""}
        />
      </div>
      {authUser.email === user.email && (
        <div>
          <button
            className="quak-button quak-button--likes"
            name="delete"
            aria-label="Delete quak"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrashAlt} className="quak-button__icon" />
          </button>
        </div>
      )}
    </article>
  );
};

export default Quak;
