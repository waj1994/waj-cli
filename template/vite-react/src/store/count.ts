import { create } from 'zustand';

interface Count {
  count: number;
  add: () => void;
  addNum: (payload: number) => void;
}

const useCount = create<Count>(set => ({
  count: 0,
  add: () => set(state => ({ count: state.count + 1 })),
  addNum: payload => set(state => ({ count: state.count + payload }))
}));

export default useCount;
