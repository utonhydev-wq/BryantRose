import React from "react";

interface VerifiedBadgeProps {
  className?: string;
  size?: number;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  className = "inline-block align-middle",
  size = 18,
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      title="Verified account"
      aria-label="Verified account"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M19.998 3.094 14.638 0 10.37 4.267 4.267 4.267 4.267 10.37 0 14.638l3.094 5.36L0 25.358l4.267 4.268v6.103h6.103l4.268 4.267 5.36-3.094 5.36 3.094 4.268-4.267h6.103v-6.103l4.267-4.268-3.094-5.36 3.094-5.36-4.267-4.268V4.267h-6.103L25.358 0l-5.36 3.094Z"
          fill="#0095F6"
        />
        <path
          d="M17.07 27.2 9.87 20l2.83-2.83 4.37 4.37 10.26-10.26 2.83 2.83-13.09 13.09Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
};
