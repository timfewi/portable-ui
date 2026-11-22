import { type ReactNode } from "react";
import { type PresenceStatus } from "../core/Avatar.js";
export interface ChatPerson {
    name: string;
    src?: string;
    tint?: string;
}
export interface ChannelItem {
    id: string;
    name: string;
    /** Bold text when there are unread messages. */
    unread?: boolean;
    /** Mentions show a counter pill. */
    mentions?: number;
}
export interface ChannelListProps {
    heading: string;
    channels: ChannelItem[];
    currentId?: string;
    onSelect?: (id: string) => void;
}
export declare function ChannelList({ heading, channels, currentId, onSelect, }: ChannelListProps): import("react").JSX.Element;
export interface PersonItem extends ChatPerson {
    id: string;
    presence?: PresenceStatus;
    /** Short status text on the right, e.g. "away". */
    note?: string;
}
export declare function PeopleList({ heading, people, currentId, onSelect, }: {
    heading: string;
    people: PersonItem[];
    currentId?: string;
    onSelect?: (id: string) => void;
}): import("react").JSX.Element;
export declare function MessageList({ label, children, className, }: {
    label: string;
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function ChatDivider({ label, variant, }: {
    label: string;
    variant?: "day" | "new";
}): import("react").JSX.Element;
export declare function ChatEvent({ children, time, }: {
    children: ReactNode;
    time?: string;
}): import("react").JSX.Element;
export interface Reaction {
    id: string;
    /** Icon element (no emoji glyphs in Portable UI). */
    icon: ReactNode;
    label: string;
    count: number;
    /** Whether the current user reacted. */
    mine?: boolean;
}
export interface ThreadSummary {
    count: number;
    lastReply?: string;
    participants?: ChatPerson[];
}
export interface MessageProps {
    author: ChatPerson;
    time: string;
    children: ReactNode;
    /** Same author as the previous message: hides avatar and name. */
    continued?: boolean;
    highlighted?: boolean;
    /** Rich content under the text, e.g. an issue preview card. */
    attachment?: ReactNode;
    reactions?: Reaction[];
    onToggleReaction?: (id: string) => void;
    thread?: ThreadSummary;
    onOpenThread?: () => void;
}
export declare function Message({ author, time, children, continued, highlighted, attachment, reactions, onToggleReaction, thread, onOpenThread, }: MessageProps): import("react").JSX.Element;
export interface ComposerProps {
    /** Used for the placeholder and accessible name: "Message #name". */
    channelName: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Called with trimmed text on Enter or Send; the draft clears afterwards. */
    onSend: (text: string) => void;
    /** Live status line, e.g. "Jonas is typing…". */
    status?: ReactNode;
    onAttach?: () => void;
    onMention?: () => void;
    onLinkIssue?: () => void;
    disabled?: boolean;
}
export declare function Composer({ channelName, value, defaultValue, onValueChange, onSend, status, onAttach, onMention, onLinkIssue, disabled, }: ComposerProps): import("react").JSX.Element;
//# sourceMappingURL=Chat.d.ts.map