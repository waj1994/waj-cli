import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CountState {
  count: number
  increase: () => void
  decrease: () => void
}

const useCount = create(persist<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}), {
  name: 'count-storage',
}))

export default useCount