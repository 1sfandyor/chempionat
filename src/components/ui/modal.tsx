import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ModalProps } from "@/interfaces/modal.interface";

const Modal = ({isOpen, onClose, title, body, step}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-none">
        <DialogHeader>
          <DialogTitle className={`flex ${step === 1  ? "mb-9" : step === 2 ? 'mb-3' : step === 3 ? "mb-[52px]" : 'mb-0' } text-2xl leading-7 font-normal w-[254px]`}>
            {title}
          </DialogTitle>
          <div className="flex items-center justify-center">
            {body}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Modal