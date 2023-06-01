export interface FooterSvgProps {
  d: string;
}

export default function FooterSvg({ d }: FooterSvgProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
  );
}
