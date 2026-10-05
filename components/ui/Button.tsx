import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "primary-dark" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "px-1 py-1 text-[13px]",
    md: "px-1 py-1.5 text-[14px]",
    lg: "px-1 py-2 text-[15px]",
  };

  // Contrast-driven variant styles (Black on light bg, White on dark bg)
  const variantClasses = {
    primary:
      "bg-[#101820] hover:bg-[#0F2628] text-white shadow-sm hover:shadow-lg font-semibold tracking-wide rounded-md px-6 py-3 border border-[#101820]",
    "primary-dark":
      "bg-white hover:bg-[#E6F3F4] text-[#101820] shadow-sm hover:shadow-lg font-semibold tracking-wide rounded-md px-6 py-3 border border-white",
    secondary:
      "bg-black/40 hover:bg-black/65 text-white border border-white/60 hover:border-white font-semibold backdrop-blur-md shadow-md rounded-md px-6 py-3",
    tertiary:
      "bg-transparent text-[#0F2628] hover:text-[#5FAAAD] font-semibold border-none shadow-none underline-offset-4 hover:underline p-0",
  };

  // Override padding for primary and secondary sizes if defined in sizeClasses
  const paddedSizeClasses = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const currentSizeClass = variant === "tertiary" ? sizeClasses[size] : paddedSizeClasses[size];

  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none group";

  const combinedClasses = `${baseClasses} ${currentSizeClass} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
