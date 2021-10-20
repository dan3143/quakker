import { FC } from "react";

interface InputProps {
  id: string;
  name?: string;
  title: string;
  type: string;
  setState?: (value: string) => void;
  state?: string;
  [rest: string]: any;
}

const Input: FC<InputProps> = ({
  id,
  name,
  title,
  type,
  setState,
  state,
  ...rest
}) => {
  name = name || id;
  const doNothing = (value: string) => {};
  const handler = setState ?? doNothing;
  const currentState = state ?? "";
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
        onChange={(e) => handler(e.target.value)}
        value={state}
        {...rest}
      />
    </div>
  );
};

export default Input;
