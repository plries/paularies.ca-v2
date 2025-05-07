export type ToggleInputPropTypes = {
    label: string;
    onChange: () => void;
    isChecked: boolean;
    additionalClasses?: {
        container?: string;
        label?: string;
    }
};