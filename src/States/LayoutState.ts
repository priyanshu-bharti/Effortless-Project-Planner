import {create} from 'zustand';
interface PageState{
    activePage:number
    pageChange:(index:number)=>void
}

export const usePageState = create<PageState>()((set) => ({
   activePage:0,
   pageChange:(index)=>set((state)=>({activePage:index})),
  }))


//   create<BearState>()((set) => ({
//     bears: 0,
//     increase: (by) => set((state) => ({ bears: state.bears + by })),
//   }))