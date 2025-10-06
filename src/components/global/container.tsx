import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, className = "", fluid = false }) => {
  return (
    <div
      className={`${fluid ? "w-full" : "mx-auto max-w-screen-xl"} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};


export default Container;
