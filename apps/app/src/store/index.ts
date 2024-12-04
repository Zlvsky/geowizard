import { create } from 'zustand'

interface ITutorialStore {
  open: boolean
  setOpen: (value: boolean) => void
}

export const useTutorialStore = create<ITutorialStore>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value })
}))
