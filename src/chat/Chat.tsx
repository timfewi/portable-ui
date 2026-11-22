import { type ReactNode, type SyntheticEvent, useId } from "react";
import { Avatar, type PresenceStatus } from "../core/Avatar.js";
import { Counter } from "../core/Badge.js";
import { Button, IconButton } from "../core/Button.js";
import { useControllable } from "../core/Selection.js";
import {
  ArrowRightIcon,
  AtIcon,
  LinkIcon,
  PaperclipIcon,
} from "../icons/index.js";
import { cx } from "../utils.js";

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

export function ChannelList({
  heading,
  channels,
  currentId,
  onSelect,
}: ChannelListProps) {
  const headingId = useId();
  return (
    <div className="pui-chat-nav">
      <span id={headingId} className="pui-overline pui-chat-nav__heading">
        {heading}
      </span>
      <ul aria-labelledby={headingId} className="pui-chat-nav__list">
        {channels.map((channel) => {
          const current = channel.id === currentId;
          return (
            <li key={channel.id}>
              <button
                type="button"
                className="pui-channel"
                aria-current={current ? "page" : undefined}
                data-unread={
                  channel.unread || channel.mentions ? true : undefined
                }
                onClick={() => onSelect?.(channel.id)}
              >
                <span className="pui-channel__hash" aria-hidden="true">
                  #
                </span>
                <span className="pui-channel__name">{channel.name}</span>
                {channel.mentions && !current ? (
                  <Counter
                    tone="accent"
                    aria-label={`${channel.mentions} mentions`}
                  >
                    {channel.mentions}
                  </Counter>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export interface PersonItem extends ChatPerson {
  id: string;
  presence?: PresenceStatus;
  /** Short status text on the right, e.g. "away". */
  note?: string;
}

export function PeopleList({
  heading,
  people,
  currentId,
  onSelect,
}: {
  heading: string;
  people: PersonItem[];
  currentId?: string;
  onSelect?: (id: string) => void;
}) {
  const headingId = useId();
  return (
    <div className="pui-chat-nav">
      <span id={headingId} className="pui-overline pui-chat-nav__heading">
        {heading}
      </span>
      <ul aria-labelledby={headingId} className="pui-chat-nav__list">
        {people.map((person) => (
          <li key={person.id}>
            <button
              type="button"
              className="pui-channel"
              aria-current={person.id === currentId ? "page" : undefined}
              style={{ color: "var(--pui-fg)" }}
              onClick={() => onSelect?.(person.id)}
            >
              <Avatar
                name={person.name}
                src={person.src}
                tint={person.tint}
                size={20}
                presence={person.presence}
                decorative
              />
              <span className="pui-channel__name">{person.name}</span>
              {person.note ? (
                <span style={{ fontSize: 11, color: "var(--pui-muted)" }}>
                  {person.note}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MessageList({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="log"
      aria-label={label}
      className={cx("pui-message-list", className)}
    >
      {children}
    </div>
  );
}

export function ChatDivider({
  label,
  variant = "day",
}: {
  label: string;
  variant?: "day" | "new";
}) {
  return (
    <div className={cx("pui-divider", variant === "new" && "pui-divider--new")}>
      <span className="pui-divider__label">{label}</span>
    </div>
  );
}

export function ChatEvent({
  children,
  time,
}: {
  children: ReactNode;
  time?: string;
}) {
  return (
    <div className="pui-event">
      <ArrowRightIcon size={14} />
      <span>{children}</span>
      {time ? <span className="pui-mono">{time}</span> : null}
    </div>
  );
}

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

export function Message({
  author,
  time,
  children,
  continued = false,
  highlighted = false,
  attachment,
  reactions,
  onToggleReaction,
  thread,
  onOpenThread,
}: MessageProps) {
  return (
    <article
      className={cx("pui-message", continued && "pui-message--continued")}
      data-highlighted={highlighted || undefined}
      aria-label={continued ? undefined : `${author.name}, ${time}`}
    >
      <div className="pui-message__gutter">
        {continued ? null : (
          <Avatar
            name={author.name}
            src={author.src}
            tint={author.tint}
            size={36}
            decorative
          />
        )}
      </div>
      <div className="pui-message__body">
        {continued ? null : (
          <div className="pui-message__head">
            <span className="pui-message__author">{author.name}</span>
            <time className="pui-message__time">{time}</time>
          </div>
        )}
        <p className="pui-message__text">{children}</p>
        {attachment}
        {reactions && reactions.length > 0 ? (
          <div className="pui-message__reactions">
            {reactions.map((reaction) => (
              <button
                key={reaction.id}
                type="button"
                className="pui-reaction"
                aria-pressed={Boolean(reaction.mine)}
                aria-label={`${reaction.label}, ${reaction.count}`}
                onClick={() => onToggleReaction?.(reaction.id)}
              >
                {reaction.icon}
                <span className="pui-mono">{reaction.count}</span>
              </button>
            ))}
          </div>
        ) : null}
        {thread && thread.count > 0 ? (
          <button
            type="button"
            className="pui-thread-link"
            onClick={onOpenThread}
          >
            {thread.participants?.[0] ? (
              <Avatar
                name={thread.participants[0].name}
                tint={thread.participants[0].tint}
                size={18}
                decorative
              />
            ) : null}
            <span className="pui-thread-link__count">
              {thread.count} {thread.count === 1 ? "reply" : "replies"}
            </span>
            {thread.lastReply ? (
              <span className="pui-thread-link__meta">
                Last reply {thread.lastReply}
              </span>
            ) : null}
          </button>
        ) : null}
      </div>
    </article>
  );
}

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

export function Composer({
  channelName,
  value,
  defaultValue = "",
  onValueChange,
  onSend,
  status,
  onAttach,
  onMention,
  onLinkIssue,
  disabled = false,
}: ComposerProps) {
  const id = useId();
  const [draft, setDraft] = useControllable(value, defaultValue, onValueChange);
  const empty = draft.trim().length === 0;

  const submit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (empty || disabled) return;
    onSend(draft.trim());
    setDraft("");
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 6 }}
    >
      <div className="pui-composer">
        <label htmlFor={id} className="pui-sr-only">
          Message #{channelName}
        </label>
        <input
          id={id}
          className="pui-composer__input"
          placeholder={`Message #${channelName}`}
          value={draft}
          disabled={disabled}
          autoComplete="off"
          onChange={(event) => setDraft(event.target.value)}
        />
        <div className="pui-composer__toolbar">
          {onLinkIssue ? (
            <IconButton size="sm" label="Link an issue" onClick={onLinkIssue}>
              <LinkIcon size={14} />
            </IconButton>
          ) : null}
          {onAttach ? (
            <IconButton size="sm" label="Attach file" onClick={onAttach}>
              <PaperclipIcon size={14} />
            </IconButton>
          ) : null}
          {onMention ? (
            <IconButton size="sm" label="Mention someone" onClick={onMention}>
              <AtIcon size={14} />
            </IconButton>
          ) : null}
          <span style={{ flex: 1 }} />
          <Button
            type="submit"
            size="sm"
            variant={empty ? "secondary" : "primary"}
            disabled={empty || disabled}
          >
            Send
            <ArrowRightIcon size={12} />
          </Button>
        </div>
      </div>
      <span aria-live="polite" className="pui-composer__status">
        {status}
      </span>
    </form>
  );
}
