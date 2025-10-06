import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filled?: boolean;
  outline?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  filled,
  outline,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "h-[50px] px-[30px] rounded-full font-medium text-sm transition-colors duration-200 cursor-pointer text-[16px]";

  const filledStyles = "bg-primary text-white hover:bg-[#FF8126] hover:text-primary";
  const outlineStyles = "bg-[#F9F4FF] text-primary hover:bg-primary hover:text-white";

  let appliedStyles = baseStyles;
  if (filled) appliedStyles += " " + filledStyles;
  if (outline) appliedStyles += " " + outlineStyles;

  // Default to filled if neither is passed
  if (!filled && !outline) appliedStyles += " " + filledStyles;

  return (
    <button className={`${appliedStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
