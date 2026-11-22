import type { CSSProperties } from "react";
import { cx, initialsOf } from "../utils.js";

export type PresenceStatus = "online" | "away" | "dnd" | "offline";

const presenceLabel: Record<PresenceStatus, string> = {
  online: "Online",
  away: "Away",
  dnd: "Do not disturb",
  offline: "Offline",
};

/** Presence glyph: each status has its own shape, not just its own color. */
export function PresenceDot({
  status,
  size = 12,
  ring,
}: {
  status: PresenceStatus;
  size?: number;
  /** Ring color separating the dot from what it overlaps. */
  ring?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      role="img"
      style={{ flex: "none" }}
    >
      <title>{presenceLabel[status]}</title>
      {ring ? <circle cx="6" cy="6" r="6" fill={ring} /> : null}
      {status === "online" ? (
        <circle cx="6" cy="6" r="4.5" fill="var(--pui-success)" />
      ) : null}
      {status === "away" ? (
        <>
          <circle
            cx="6"
            cy="6"
            r="3.75"
            fill="none"
            stroke="var(--pui-warning)"
            strokeWidth="1.5"
          />
          <path d="M6 2.25a3.75 3.75 0 0 1 0 7.5z" fill="var(--pui-warning)" />
        </>
      ) : null}
      {status === "dnd" ? (
        <>
          <circle cx="6" cy="6" r="4.5" fill="var(--pui-error)" />
          <path
            d="M3.75 6h4.5"
            stroke="var(--pui-bg)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {status === "offline" ? (
        <circle
          cx="6"
          cy="6"
          r="3.75"
          fill="none"
          stroke="var(--pui-muted)"
          strokeWidth="1.5"
        />
      ) : null}
    </svg>
  );
}

export function PresenceLabel({ status }: { status: PresenceStatus }) {
  return (
    <span className="pui-presence-label">
      <PresenceDot status={status} />
      {presenceLabel[status]}
    </span>
  );
}

export interface AvatarProps {
  /** Full name; used for initials and the accessible name. Omit for "Unassigned". */
  name?: string;
  src?: string;
  size?: number;
  /** Tint mixed into the avatar background, e.g. `cssVar.info`. */
  tint?: string;
  presence?: PresenceStatus;
  /** Ring color for the presence dot; match the surface behind the avatar. */
  presenceRing?: string;
  /** Hide from assistive tech when the name is already printed next to it. */
  decorative?: boolean;
  className?: string;
}

export function Avatar({
  name,
  src,
  size = 28,
  tint,
  presence,
  presenceRing = "var(--pui-surface)",
  decorative = false,
  className,
}: AvatarProps) {
  const label = name ?? "Unassigned";
  const style = {
    width: size,
    height: size,
    fontSize: Math.max(8, Math.round(size * 0.38)),
    "--pui-avatar-tint": tint,
  } as CSSProperties;
  return (
    <span
      role="img"
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
      title={label}
      className={cx("pui-avatar", !name && "pui-avatar--empty", className)}
      style={style}
    >
      {src ? (
        <img src={src} alt="" />
      ) : (
        <span aria-hidden="true">{name ? initialsOf(name) : "?"}</span>
      )}
      {presence ? (
        <span className="pui-avatar__presence" aria-hidden="true">
          <PresenceDot
            status={presence}
            size={Math.max(8, Math.round(size * 0.36))}
            ring={presenceRing}
          />
        </span>
      ) : null}
    </span>
  );
}

export interface AvatarStackProps {
  people: Array<{ name: string; src?: string; tint?: string }>;
  max?: number;
  size?: number;
  /** Ring color between avatars; match the surface behind the stack. */
  ring?: string;
}

export function AvatarStack({
  people,
  max = 3,
  size = 28,
  ring,
}: AvatarStackProps) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  const names = people.map((p) => p.name);
  const label =
    rest > 0
      ? `${shown.map((p) => p.name).join(", ")} and ${rest} others`
      : names.join(", ");
  return (
    <span
      role="img"
      aria-label={label}
      className="pui-avatar-stack"
      style={ring ? ({ "--pui-stack-ring": ring } as CSSProperties) : undefined}
    >
      {shown.map((person) => (
        <Avatar key={person.name} {...person} size={size} decorative />
      ))}
      {rest > 0 ? (
        <span
          aria-hidden="true"
          className="pui-avatar pui-avatar-stack__more"
          style={{
            width: size,
            height: size,
            fontSize: Math.round(size * 0.38),
          }}
        >
          +{rest}
        </span>
      ) : null}
    </span>
  );
}
