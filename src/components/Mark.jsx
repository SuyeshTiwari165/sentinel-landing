// The Sentinel mark: a watchtower with its sightline running through the window.
// The tower keeps watch over what you are allowed to scan; the line is the scan itself.
export default function Mark({ size = 24, title, className = "" }) {
  return (
    <svg
      className={`mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : "true"}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M32 6 48 14V18H16V14ZM22 18H42V28L46 54H18L22 28ZM26 21V28H38V21ZM4 23H22V26.5H4ZM42 23H60V26.5H42ZM12 54H52V58H12Z"
      />
    </svg>
  );
}
