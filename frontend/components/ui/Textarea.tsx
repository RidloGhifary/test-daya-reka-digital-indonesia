import { forwardRef, ForwardedRef, RefAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    RefAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, disabled, ...props },
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={twMerge(
          `flex w-full rounded-md border bg-white px-3 py-3 text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
