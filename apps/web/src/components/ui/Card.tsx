import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({
  children,
  className = "",
  padding = "md",
}: CardProps) => {
  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
