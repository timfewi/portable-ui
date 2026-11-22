import type { CSSProperties, ReactNode } from "react";
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
export declare function markerColor(kind: MarkerKind, tone?: "error" | "warning"): string;
/** 16 px shape-coded glyph for lists, layer toggles and legends. */
export declare function MarkerGlyph({ kind, tone, size, }: {
    kind: MarkerKind;
    tone?: "error" | "warning";
    size?: number;
}): import("react").JSX.Element;
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
export declare function MapView({ label, places, selectedId, onSelect, renderPopover, children, controls, attribution, height, className, }: MapViewProps): import("react").JSX.Element;
export interface MapPopoverCardProps {
    place: MapPlace;
    stats?: Array<{
        label: string;
        value: ReactNode;
    }>;
    actions?: ReactNode;
    onClose?: () => void;
}
export declare function MapPopoverCard({ place, stats, actions, onClose, }: MapPopoverCardProps): import("react").JSX.Element;
export declare function MapControls({ onZoomIn, onZoomOut, onFit, }: {
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onFit?: () => void;
}): import("react").JSX.Element;
/** Scale bar for the attribution corner. */
export declare function MapScale({ label, width, }: {
    label: string;
    width?: number;
}): import("react").JSX.Element;
export interface PlaceListProps {
    places: MapPlace[];
    selectedId?: string | null;
    onSelect?: (id: string | null) => void;
    /** Right-aligned meta text per place. */
    meta?: (place: MapPlace) => ReactNode;
}
export declare function PlaceList({ places, selectedId, onSelect, meta, }: PlaceListProps): import("react").JSX.Element;
/**
 * A drawn, fictional city for prototypes and empty states. Replace it with real
 * tiles in production; it uses the --pui-map-* tokens so it follows the theme.
 */
export declare function PlaceholderBasemap(): import("react").JSX.Element;
//# sourceMappingURL=Map.d.ts.map