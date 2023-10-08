import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";

type Props = {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  size = `medium`,
  variant = `primary`,
  onClick,
  disabled,
  className,
  type,
  ...rest
}: Props) => {
  return (
    <button
      className={classNames(
        "button",
        className,
        styles.button,
        styles[size],
        styles[variant]
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
