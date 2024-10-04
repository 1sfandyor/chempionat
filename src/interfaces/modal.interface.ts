import { ReactElement } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: ReactElement;
  step?: number
}