interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  return (
    <button
      className={`
      inline-block
      text-white
      border-2
      border-brandPrimary
      ${variant === "primary" ? "bg-brandPrimary" : "bg-brandDark"}
      ${
        size === "small"
          ? "px-3 py-1 text-sm"
          : size === "large"
          ? "px-6 py-3 text-lg"
          : "px-5 py-2 text-base"
      }
      font-semibold
      rounded-full 
      hover:opacity-80 
      transition-opacity duration-300
      ease-in-out
    `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
