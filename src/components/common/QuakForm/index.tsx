import { AuthContext } from "context/AuthContext";
import { FC, FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { getUserPfpUrl } from "services/userService";
import "./quak_form.scss";

interface QuakFormProps {
  action: () => void;
  placeholder: string;
}

const QuakForm: FC<QuakFormProps> = ({ action, placeholder }) => {
  const auth = useContext(AuthContext);
  const user = auth.getUser();
  const { username, name } = user;
  const profilePic = getUserPfpUrl(user.email);
  const onSubmitAction = (e: FormEvent) => {
    e.preventDefault();
    action();
  };
  return (
    <div className="quak-form">
      <section className="quak-form__pfp">
        <Link to={`/timeline/${username}`}>
          <img src={profilePic} alt={name} />
        </Link>
      </section>
      <form onSubmit={onSubmitAction}>
        <textarea
          className="quak-form__input"
          name="content"
          aria-label="Quak content"
          placeholder={placeholder}
          rows={2}
        ></textarea>
        <input type="submit" value="Crear" className="button button--primary" />
      </form>
    </div>
  );
};

export default QuakForm;
