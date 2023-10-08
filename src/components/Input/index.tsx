import classNames from "classnames";
import style from "./Input.module.scss";
import { useEffect, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ value, onChange, className, ...rest }: Props) => {
  const [valueState, setValueState] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <input
      className={classNames(style.input, className)}
      value={valueState}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

export default Input;
