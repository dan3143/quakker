import { FC } from "react";

interface InputProps {
  id: string;
  name?: string;
  title: string;
  type: string;
}

const Input: FC<InputProps> = ({ id, name, title, type, ...rest }) => {
  name = name || id;
  return (
    <div className="input">
      <label htmlFor={id} id={`${id}-label`} className="input__label">
        {title}
      </label>
      <input
        type={type}
        id={id}
        className="input__field"
        name={name}
        aria-labelledby={`${id}-label`}
        {...rest}
      />
    </div>
  );
};

export default Input;
