import type { CSSProperties, ReactNode } from "react";
import { IconButton } from "../core/Button.js";
import {
  BuildingIcon,
  CloseIcon,
  FitIcon,
  MinusIcon,
  PlusIcon,
} from "../icons/index.js";
import { clamp, cx } from "../utils.js";

export type MarkerKind = "office" | "people" | "incident";

export interface MapPlace {
  id: string;
  kind: MarkerKind;
  /** Horizontal position, 0 (left edge) to 1 (right edge) of the map frame. */
  x: number;
  /** Vertical position, 0 (top) to 1 (bottom). */
  y: number;
  /** Full name for lists and the accessible label. */
  name: string;
  /** Short text printed under the marker. */
  short?: string;
  /** Secondary line in lists. */
  subtitle?: string;
  /** People markers print this count. */
  count?: number;
  /** Incident severity color. */
  tone?: "error" | "warning";
}

const kindLabel: Record<MarkerKind, string> = {
  office: "Office",
  people: "Teammates",
  incident: "Incident",
};

const glyphPath: Record<MarkerKind, string> = {
  office: "M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z",
  people: "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z",
  incident: "M8 1.5 15 14.5H1z",
};

export function markerColor(
  kind: MarkerKind,
  tone?: "error" | "warning",
): string {
  if (kind === "office") return "var(--pui-accent)";
  if (kind === "people") return "var(--pui-series-3)";
  return tone === "warning" ? "var(--pui-warning)" : "var(--pui-error)";
}

/** 16 px shape-coded glyph for lists, layer toggles and legends. */
export function MarkerGlyph({
  kind,
  tone,
  size = 16,
}: {
  kind: MarkerKind;
  tone?: "error" | "warning";
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      style={{ flex: "none" }}
    >
      <path d={glyphPath[kind]} fill={markerColor(kind, tone)} />
    </svg>
  );
}

function MarkerPin({ place }: { place: MapPlace }) {
  if (place.kind === "office") {
    return (
      <span className="pui-map__pin pui-map__pin--office">
        <BuildingIcon size={16} />
      </span>
    );
  }
  if (place.kind === "people") {
    const size = (place.count ?? 0) > 12 ? 40 : 32;
    return (
      <span
        className="pui-map__pin pui-map__pin--people"
        style={{ width: size, height: size }}
      >
        {place.count ?? ""}
      </span>
    );
  }
  return (
    <svg
      className="pui-map__pin pui-map__pin--incident"
      viewBox="0 0 34 30"
      aria-hidden="true"
    >
      <path
        d="M17 2 32 28H2Z"
        fill={markerColor("incident", place.tone)}
        stroke="var(--pui-bg)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 11v7M17 22v.01"
        stroke="var(--pui-bg)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export interface MapViewProps {
  label: string;
  places: MapPlace[];
  selectedId?: string | null;
  onSelect?: (id: string | null) => void;
  /** Content for the selected place, rendered in a popover beside its marker. */
  renderPopover?: (place: MapPlace) => ReactNode;
  /** The basemap: your map library's canvas or <PlaceholderBasemap />. */
  children?: ReactNode;
  /** Overlay controls, e.g. <MapControls />. */
  controls?: ReactNode;
  /** Attribution or scale line in the lower left. */
  attribution?: ReactNode;
  height?: CSSProperties["height"];
  className?: string;
}

/**
 * A map frame with shape-coded markers. Positions are fractions of the frame,
 * so any projection works: convert lat/lng to x/y with your map library.
 */
export function MapView({
  label,
  places,
  selectedId = null,
  onSelect,
  renderPopover,
  children,
  controls,
  attribution,
  height = 560,
  className,
}: MapViewProps) {
  const selected = places.find((p) => p.id === selectedId);
  const below = selected ? selected.y < 0.32 : false;
  return (
    <section
      aria-label={label}
      className={cx("pui-map", className)}
      style={{ height }}
    >
      {children}
      {places.map((place) => {
        const on = place.id === selectedId;
        return (
          <button
            key={place.id}
            type="button"
            className="pui-map__marker"
            aria-pressed={on}
            aria-label={`${kindLabel[place.kind]}: ${place.name}`}
            style={{ left: `${place.x * 100}%`, top: `${place.y * 100}%` }}
            onClick={() => onSelect?.(on ? null : place.id)}
          >
            <MarkerPin place={place} />
            {place.short ? (
              <span className="pui-map__label">{place.short}</span>
            ) : null}
          </button>
        );
      })}
      {selected && renderPopover ? (
        <div
          role="dialog"
          aria-label={selected.name}
          className="pui-map__popover"
          style={{
            left: `${clamp(selected.x * 100, 16, 84)}%`,
            top: `${selected.y * 100}%`,
            transform: below
              ? "translate(-50%, 44px)"
              : "translate(-50%, calc(-100% - 40px))",
          }}
        >
          {renderPopover(selected)}
        </div>
      ) : null}
      {controls}
      {attribution ? (
        <div className="pui-map__attribution">{attribution}</div>
      ) : null}
    </section>
  );
}

export interface MapPopoverCardProps {
  place: MapPlace;
  stats?: Array<{ label: string; value: ReactNode }>;
  actions?: ReactNode;
  onClose?: () => void;
}

export function MapPopoverCard({
  place,
  stats,
  actions,
  onClose,
}: MapPopoverCardProps) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ marginTop: 2 }}>
          <MarkerGlyph kind={place.kind} tone={place.tone} />
        </span>
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>{place.name}</span>
          {place.subtitle ? (
            <span style={{ fontSize: 12, color: "var(--pui-muted)" }}>
              {place.subtitle}
            </span>
          ) : null}
        </div>
        {onClose ? (
          <IconButton size="sm" label="Close details" onClick={onClose}>
            <CloseIcon size={14} />
          </IconButton>
        ) : null}
      </div>
      {stats && stats.length > 0 ? (
        <dl
          style={{
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 8,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "8px 10px",
                borderRadius: 8,
                background: "var(--pui-surface)",
                display: "flex",
                flexDirection: "column-reverse",
                gap: 2,
              }}
            >
              <dd
                className="pui-mono"
                style={{ margin: 0, fontSize: 15, fontWeight: 600 }}
              >
                {stat.value}
              </dd>
              <dt style={{ fontSize: 11, color: "var(--pui-muted)" }}>
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      ) : null}
      {actions ? (
        <div style={{ display: "flex", gap: 8 }}>{actions}</div>
      ) : null}
    </>
  );
}

export function MapControls({
  onZoomIn,
  onZoomOut,
  onFit,
}: {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFit?: () => void;
}) {
  return (
    <div className="pui-map__controls">
      <IconButton label="Zoom in" onClick={onZoomIn}>
        <PlusIcon />
      </IconButton>
      <IconButton label="Zoom out" onClick={onZoomOut}>
        <MinusIcon />
      </IconButton>
      <IconButton label="Fit all places" onClick={onFit}>
        <FitIcon />
      </IconButton>
    </div>
  );
}

/** Scale bar for the attribution corner. */
export function MapScale({
  label,
  width = 80,
}: {
  label: string;
  width?: number;
}) {
  return (
    <span className="pui-map__scale">
      <span className="pui-map__scale-bar" style={{ width }} />
      <span>{label}</span>
    </span>
  );
}

export interface PlaceListProps {
  places: MapPlace[];
  selectedId?: string | null;
  onSelect?: (id: string | null) => void;
  /** Right-aligned meta text per place. */
  meta?: (place: MapPlace) => ReactNode;
}

export function PlaceList({
  places,
  selectedId = null,
  onSelect,
  meta,
}: PlaceListProps) {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {places.map((place) => {
        const on = place.id === selectedId;
        return (
          <li key={place.id}>
            <button
              type="button"
              className="pui-place"
              aria-pressed={on}
              onClick={() => onSelect?.(on ? null : place.id)}
            >
              <MarkerGlyph kind={place.kind} tone={place.tone} />
              <span className="pui-place__text">
                <span className="pui-place__name">{place.name}</span>
                {place.subtitle ? (
                  <span className="pui-place__sub">{place.subtitle}</span>
                ) : null}
              </span>
              {meta ? (
                <span
                  className="pui-mono"
                  style={{ fontSize: 11, color: "var(--pui-muted)" }}
                >
                  {meta(place)}
                </span>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * A drawn, fictional city for prototypes and empty states. Replace it with real
 * tiles in production; it uses the --pui-map-* tokens so it follows the theme.
 */
export function PlaceholderBasemap() {
  return (
    <svg
      className="pui-map__base"
      viewBox="0 0 1000 880"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 0H1000V560C920 600 860 640 760 700C700 740 660 800 640 880H0Z"
        fill="var(--pui-map-land)"
      />
      <path
        d="M0 300C200 260 300 430 480 400S760 330 1000 470"
        fill="none"
        stroke="var(--pui-map-water)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <rect
        x="560"
        y="120"
        width="140"
        height="90"
        rx="18"
        fill="var(--pui-map-park)"
      />
      <rect
        x="120"
        y="520"
        width="110"
        height="140"
        rx="18"
        fill="var(--pui-map-park)"
      />
      <rect
        x="380"
        y="560"
        width="90"
        height="70"
        rx="14"
        fill="var(--pui-map-park)"
      />
      <g fill="none" stroke="var(--pui-map-road)" strokeLinecap="round">
        <path d="M0 480H640L760 700" strokeWidth="8" />
        <path d="M460 0V880" strokeWidth="8" />
        <path d="M0 160C300 140 600 100 1000 200" strokeWidth="6" />
        <path d="M260 0 220 880" strokeWidth="4" />
        <path d="M700 0 760 560" strokeWidth="4" />
        <path d="M0 740H560" strokeWidth="4" />
        <path d="M840 220 900 560" strokeWidth="3" />
      </g>
      <g stroke="var(--pui-map-road)" strokeWidth="1.5" opacity="0.8">
        <path d="M360 440V720M400 440V720M520 440V720M560 440V720M300 520H620M300 600H620M300 660H620" />
        <path d="M80 40V240M140 40V240M200 40V250M320 40V280M380 40V300M40 90H440M40 220H440" />
      </g>
    </svg>
  );
}
