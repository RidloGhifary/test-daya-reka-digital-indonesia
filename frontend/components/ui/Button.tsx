import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-md p-4 transition hover:opacity-70 text-center`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
