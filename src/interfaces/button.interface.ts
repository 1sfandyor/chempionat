export interface ButtonsType {
className?: string,
spanClasses?: string,
href?: string,
onClick?: () => void;
px?: string,
py?: string,
text?: string,
type?: "submit" | "button" | "reset";
disabled?: boolean;
}