import React from "react";

const Typography = ({ children, variant = "body", className }) => {
  const variantClasses = {
    heading1: "text-4xl font-bold",
    heading2: "text-3xl font-semibold",
    heading3: "text-2xl font-medium",
    body: "text-base",
    subtitle: "text-lg font-medium",
  };

  const classes = `${variantClasses[variant]} ${className}`;

  return <p className={classes}>{children}</p>;
};

export default Typography;
