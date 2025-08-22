import React from "react";

type variant = "primary" | "secondary";
type buttonType = "button" | "submit" | "reset";
type typeContent = "filled" | "outline" | "text";
type padding = "small" | "medium" | "large";
type animate = "hover" | "focus" | "active";
type textColor = "primary" | "secondary" | "content";

interface ButtonProps {
  onClick: () => void;
  variants?: variant;
  type?: buttonType;
  typeContent?: typeContent;
  children: React.ReactNode;
  padding: padding;
  className?: string;
  animate?: animate;
  textColor?: textColor;
}

const paddingClasses = {
  small: "p-2",
  medium: "p-4",
  large: "p-6",
};

const variantsClasses = {
  primary: "bg-primary",
  secondary: "bg-gray-500",
  outline: "border border-gray-500",
};

const textColorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  content: "text-content",
};

const typeContentClasses = {
  filled: "bg-secondary text-white",
  outline: "border border-secondary text-secondary",
  text: "text-secondary",
};

const animateClasses: Record<animate, string> = {
  hover: "transition duration-300 ease-in-out transform hover:scale-105",
  focus: "",
  active: "",
};

const Button = ({
  onClick,
  variants,
  typeContent,
  type,
  children,
  padding,
  className,
  animate,
  textColor
}: ButtonProps) => {
  return (
    <button
      className={`rounded cursor-pointer ${variantsClasses[variants || "primary"]} ${
        typeContentClasses[typeContent || "filled"]
      } ${paddingClasses[padding || "medium"]}
      ${animateClasses[animate || "hover"]}
      ${textColorClasses[textColor || "primary"]}
      ${className}
      `}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
