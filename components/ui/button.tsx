import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ink text-ink-inverse hover:bg-ink/90 hover:shadow-[0_0_36px_-8px_rgba(245,245,242,0.5)]",
        outline: "border border-border text-ink hover:bg-surface-hover hover:border-ink/30",
        ghost: "text-ink-secondary hover:text-ink hover:bg-surface-hover",
        link: "text-ink underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
