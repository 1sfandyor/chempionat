import { RegisterModalState } from '@/interfaces/registerModal.interface'
import { create } from 'zustand'

export const useRegisterModal = create<RegisterModalState>(set => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false})
}))