import React from "react";
import "../style/button.scss";
import { clsx } from "clsx";
import { IconType } from "react-icons";

interface ButtonProps {
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "text";
  classes?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: null | string;
  fullWidth?: boolean;
  children: string | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  endIcon,
  startIcon,
  classes,
  disabled,
  onClick,
  href,
  fullWidth,
  children,
}) => {
  const customButton = (
    <button
      className={clsx(
        "button-default",
        variant && `button-${variant}`,
        size,
        classes,
        fullWidth && "button-full-width",
        disabled && "button-disabled",
      )}
      disabled={disabled}
      onClick={!href ? onClick : () => {}}>
      <>
        <span className='button-icon'>{startIcon && startIcon}</span>
        {children}
        <span className='button-icon'>{endIcon && endIcon}</span>
      </>
    </button>
  );

  return href ? (
    <a href={href} className='button-href'>
      {customButton}
    </a>
  ) : (
    customButton
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "text",
  disabled: false,
  onClick: () => {},
  href: null,
  fullWidth: false,
};

export default Button;
