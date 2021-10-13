import Logo from "components/common/Logo";
import { FC } from "react";

interface FormProps {
  title: string;
}

const Form: FC<FormProps> = ({ children, title, ...rest }) => (
  <div className="form">
    <header>
      <Logo width={64} height={64} />
      <p className="form__appname">Quakker</p>
      <h2 className="form__title">{title}</h2>
    </header>
    <main>
      <form {...rest} className="form__content">
        {children}
      </form>
    </main>
  </div>
);

export default Form;
