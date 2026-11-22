export type PresenceStatus = "online" | "away" | "dnd" | "offline";
/** Presence glyph: each status has its own shape, not just its own color. */
export declare function PresenceDot({ status, size, ring, }: {
    status: PresenceStatus;
    size?: number;
    /** Ring color separating the dot from what it overlaps. */
    ring?: string;
}): import("react").JSX.Element;
export declare function PresenceLabel({ status }: {
    status: PresenceStatus;
}): import("react").JSX.Element;
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
export declare function Avatar({ name, src, size, tint, presence, presenceRing, decorative, className, }: AvatarProps): import("react").JSX.Element;
export interface AvatarStackProps {
    people: Array<{
        name: string;
        src?: string;
        tint?: string;
    }>;
    max?: number;
    size?: number;
    /** Ring color between avatars; match the surface behind the stack. */
    ring?: string;
}
export declare function AvatarStack({ people, max, size, ring, }: AvatarStackProps): import("react").JSX.Element;
//# sourceMappingURL=Avatar.d.ts.map