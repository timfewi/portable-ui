import { type DragEvent, type ReactNode } from "react";
import { type IssueStatus, type IssueType, type Priority } from "../core/Badge.js";
export interface KanbanColumnDef {
    id: string;
    title: string;
    /** Drives the column glyph. */
    status?: IssueStatus;
    /** Shows a warning and count pill when exceeded; moves are never blocked. */
    wipLimit?: number;
}
export interface KanbanPerson {
    name: string;
    src?: string;
    tint?: string;
}
export interface KanbanIssue {
    id: string;
    /** Human key, e.g. "BRD-142". */
    key: string;
    title: string;
    columnId: string;
    type?: IssueType;
    priority?: Priority;
    points?: number;
    assignee?: KanbanPerson;
    labels?: Array<{
        name: string;
        color?: string;
    }>;
    comments?: number;
    subtasks?: {
        done: number;
        total: number;
    };
}
export interface IssueCardProps {
    issue: KanbanIssue;
    selected?: boolean;
    done?: boolean;
    onSelect?: () => void;
    /** Rendered under the card while it is selected, e.g. move buttons. */
    actions?: ReactNode;
    draggable?: boolean;
    onDragStart?: (event: DragEvent<HTMLElement>) => void;
    onDragEnd?: () => void;
    dragging?: boolean;
}
export declare function IssueCard({ issue, selected, done, onSelect, actions, draggable, onDragStart, onDragEnd, dragging, }: IssueCardProps): import("react").JSX.Element;
export interface KanbanBoardProps {
    columns: KanbanColumnDef[];
    issues: KanbanIssue[];
    /** Called for button moves and drag-and-drop. The board does not reorder issues itself. */
    onMoveIssue?: (issueId: string, toColumnId: string) => void;
    selectedId?: string | null;
    defaultSelectedId?: string | null;
    onSelectIssue?: (issueId: string | null) => void;
    /** Shows a "+" in each header and an "Add issue" row. */
    onAddIssue?: (columnId: string) => void;
    /** Shown in a column with no issues. */
    emptyText?: ReactNode;
    /** Minimum column height in px. */
    columnMinHeight?: number;
    /** Column whose cards render as finished. Defaults to the "done" status column. */
    doneColumnId?: string;
}
/**
 * A controlled Kanban board. Select a card to reveal keyboard-accessible
 * "move" buttons; cards can also be dragged between columns.
 */
export declare function KanbanBoard({ columns, issues, onMoveIssue, selectedId, defaultSelectedId, onSelectIssue, onAddIssue, emptyText, columnMinHeight, doneColumnId, }: KanbanBoardProps): import("react").JSX.Element;
//# sourceMappingURL=Kanban.d.ts.map