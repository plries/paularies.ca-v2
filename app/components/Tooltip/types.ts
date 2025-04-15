export type TooltipPropTypes = {
    children: React.ReactNode;
    text?: string;
    image?: {
        src: string;
        width: number;
        height: number;
        alt: string;
    }
};