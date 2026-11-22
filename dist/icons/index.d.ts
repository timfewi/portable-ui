import type { ReactNode, SVGProps } from "react";
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
    /** Pixel size of the square icon. */
    size?: number;
    /** Accessible name. Without it the icon is decorative and hidden from assistive tech. */
    label?: string;
}
/** 24×24 stroke icon frame shared by every icon in the set. */
export declare function Icon({ size, label, strokeWidth, children, ...rest }: IconProps & {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function PlusIcon(props: IconProps): import("react").JSX.Element;
export declare function MinusIcon(props: IconProps): import("react").JSX.Element;
export declare function SearchIcon(props: IconProps): import("react").JSX.Element;
export declare function CloseIcon(props: IconProps): import("react").JSX.Element;
export declare function ChevronLeftIcon(props: IconProps): import("react").JSX.Element;
export declare function ChevronRightIcon(props: IconProps): import("react").JSX.Element;
export declare function ChevronDownIcon(props: IconProps): import("react").JSX.Element;
export declare function MoreIcon(props: IconProps): import("react").JSX.Element;
export declare function InfoIcon(props: IconProps): import("react").JSX.Element;
export declare function AlertCircleIcon(props: IconProps): import("react").JSX.Element;
export declare function AlertTriangleIcon(props: IconProps): import("react").JSX.Element;
export declare function CheckCircleIcon(props: IconProps): import("react").JSX.Element;
export declare function CheckIcon(props: IconProps): import("react").JSX.Element;
export declare function EyeIcon(props: IconProps): import("react").JSX.Element;
export declare function FlameIcon(props: IconProps): import("react").JSX.Element;
export declare function CommentIcon(props: IconProps): import("react").JSX.Element;
export declare function UserIcon(props: IconProps): import("react").JSX.Element;
export declare function BellIcon(props: IconProps): import("react").JSX.Element;
export declare function PinIcon(props: IconProps): import("react").JSX.Element;
export declare function SendIcon(props: IconProps): import("react").JSX.Element;
export declare function BoldIcon(props: IconProps): import("react").JSX.Element;
export declare function CodeIcon(props: IconProps): import("react").JSX.Element;
export declare function LinkIcon(props: IconProps): import("react").JSX.Element;
export declare function PaperclipIcon(props: IconProps): import("react").JSX.Element;
export declare function AtIcon(props: IconProps): import("react").JSX.Element;
export declare function ArrowUpIcon(props: IconProps): import("react").JSX.Element;
export declare function ArrowDownIcon(props: IconProps): import("react").JSX.Element;
export declare function BuildingIcon(props: IconProps): import("react").JSX.Element;
export declare function FitIcon(props: IconProps): import("react").JSX.Element;
export declare function TableIcon(props: IconProps): import("react").JSX.Element;
export declare function EditIcon(props: IconProps): import("react").JSX.Element;
export declare function HomeIcon(props: IconProps): import("react").JSX.Element;
export declare function ListIcon(props: IconProps): import("react").JSX.Element;
export declare function BoardIcon(props: IconProps): import("react").JSX.Element;
export declare function ChartIcon(props: IconProps): import("react").JSX.Element;
export declare function MapIcon(props: IconProps): import("react").JSX.Element;
export declare function SpinnerIcon(props: IconProps): import("react").JSX.Element;
export declare const ArrowRightIcon: typeof SendIcon;
//# sourceMappingURL=index.d.ts.map