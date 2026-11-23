import { ReactNode } from "react";

export const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const Star = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
    <path d="M14 0c1 8 6 13 14 14-8 1-13 6-14 14-1-8-6-13-14-14 8-1 13-6 14-14z" />
  </svg>
);

export const ButtonArrow = () => (
  <span className="dot">
    <Arrow />
  </span>
);

/** A section label like "02  Live music". */
export const Label = ({ n, children }: { n?: string; children: ReactNode }) => (
  <div className="label" data-up="">
    {n && <b>{n}</b>}
    {children}
  </div>
);

/**
 * Headline whose parts rise from behind a mask. `parts` alternate plain and
 * italic: [plain, italic, plain, ...]. With `block` each part is its own line
 * (the hero styles its own italic line); otherwise the parts run on together.
 */
export const Lines = ({
  parts,
  className,
  as: Tag = "h2",
  block = false,
}: {
  parts: string[];
  className?: string;
  as?: "h1" | "h2";
  block?: boolean;
}) => (
  <Tag className={`lines ${block ? "" : "flow"} ${className ?? ""}`} data-lines="">
    {parts.map((part, i) =>
      part ? (
        <span className="ln" key={i}>
          <span>
            {i % 2 === 1 && !block ? (
              <em className="serif" style={{ fontStyle: "italic" }}>
                {part}
              </em>
            ) : (
              part
            )}
          </span>
          {!block && i < parts.length - 1 ? " " : null}
        </span>
      ) : null
    )}
  </Tag>
);
