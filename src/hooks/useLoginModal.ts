import { LoginModalState } from '@/interfaces/LoginModal.interface'
import { create } from 'zustand'

export const useLoginModal = create<LoginModalState>(set => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false})
}))