// The Sentinel mark: a boundary that opens only where authorization is.
// The gap at the top is the scope grant; the check inside is the authorization.
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
        d="M22 8H14A6 6 0 0 0 8 14V50A6 6 0 0 0 14 56H50A6 6 0 0 0 56 50V14A6 6 0 0 0 50 8H42"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 34 30 42 44 26"
        fill="none"
        stroke="var(--ledger-tint)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
