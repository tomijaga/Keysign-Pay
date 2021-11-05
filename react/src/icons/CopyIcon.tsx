import React from "react";

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
    >
      <path
        d="M4.10001 2.55V11.85C4.10001 12.2611 4.26331 12.6553 4.55399 12.946C4.84468 13.2367 5.23892 13.4 5.65001 13.4H11.85C12.2611 13.4 12.6553 13.2367 12.946 12.946C13.2367 12.6553 13.4 12.2611 13.4 11.85V5.06255C13.4 4.85606 13.3587 4.65165 13.2786 4.46134C13.1985 4.27102 13.0811 4.09864 12.9335 3.9543L10.3643 1.44175C10.0748 1.15861 9.68588 1.00005 9.28089 1H5.65001C5.23892 1 4.84468 1.1633 4.55399 1.45398C4.26331 1.74467 4.10001 2.13891 4.10001 2.55V2.55Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3 13.4V14.95C10.3 15.3611 10.1367 15.7553 9.84602 16.046C9.55533 16.3367 9.16109 16.5 8.75 16.5H2.55C2.13891 16.5 1.74467 16.3367 1.45398 16.046C1.1633 15.7553 1 15.3611 1 14.95V6.425C1 6.01391 1.1633 5.61967 1.45398 5.32898C1.74467 5.0383 2.13891 4.875 2.55 4.875H4.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
