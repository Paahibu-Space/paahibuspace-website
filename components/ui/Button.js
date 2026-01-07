import { cn } from "@/lib/utils";

export default function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 shadow-sm",
    secondary: "bg-secondary text-white hover:opacity-90 shadow-sm",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent text-primary hover:bg-primary/5",
    white: "bg-white text-primary hover:bg-gray-100",
    "white-outline": "bg-transparent border-2 border-white/30 text-white hover:bg-white/10",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-lg px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
