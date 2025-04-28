import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className = "",
  variant = "default",
  to,
  size = "base",
}) => {
  // Size classes mapping
  const sizeClasses = {
    xs: "px-3 py-1.5 text-xs sm:text-sm",
    sm: "px-4 py-2 text-sm sm:text-base",
    base: "px-6 py-3 text-base sm:text-lg",
    lg: "px-8 py-4 text-lg sm:text-xl",
    xl: "px-10 py-5 text-xl sm:text-2xl",
  };

  // Variant classes
  const variantClasses = {
    default: `bg-primary-blue text-white hover:shadow-md hover:bg-primary-blue-hover`,
    secondary: `border-2 border-[#FFFFFF1A] text-white hover:bg-[#FFFFFF1A] hover:border-white hover:text-white`,
  };

  // Base classes
  const baseClasses = `rounded-md text-center cursor-pointer transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return <button className={baseClasses}>{children}</button>;
};

export default Button;
