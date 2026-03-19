import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <input
          ref={ref}
          className={`
          w-full px-3 py-2 text-sm rounded-lg border
            outline-none transition-all duration-200
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-white
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-800"
            }
            disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed
            ${className}
        `}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
