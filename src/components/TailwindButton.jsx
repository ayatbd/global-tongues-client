// components/TailwindButton.jsx
import clsx from "clsx"; // optional but recommended. You can remove and use template strings.

const COLOR_STYLES = {
  blue: {
    filled: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 text-white",
    outlined:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-300",
  },
  green: {
    filled: "bg-green-600 hover:bg-green-700 focus:ring-green-300 text-white",
    outlined:
      "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-300",
    ghost: "text-green-600 hover:bg-green-50 focus:ring-green-300",
  },
  red: {
    filled: "bg-red-600 hover:bg-red-700 focus:ring-red-300 text-white",
    outlined:
      "border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-300",
    ghost: "text-red-600 hover:bg-red-50 focus:ring-red-300",
  },
  gray: {
    filled: "bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 text-white",
    outlined:
      "border border-gray-800 text-gray-800 hover:bg-gray-50 focus:ring-gray-300",
    ghost: "text-gray-800 hover:bg-gray-50 focus:ring-gray-300",
  },
};

export default function TailwindButton({
  children,
  color = "blue",
  variant = "filled",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-5 py-3 text-lg rounded-xl",
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-shadow transition-colors focus:outline-none focus:ring-4 active:scale-[.99]";

  const colorMap = COLOR_STYLES[color] ?? COLOR_STYLES.blue;
  const colorClasses = colorMap[variant] ?? colorMap.filled;
  const disabledClasses =
    "opacity-60 cursor-not-allowed hover:!bg-none hover:!text-current hover:!border-current";

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        base,
        sizes[size],
        colorClasses,
        className,
        disabled && disabledClasses
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
