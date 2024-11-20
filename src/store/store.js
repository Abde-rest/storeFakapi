import { create } from "zustand";

// const useStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
//   }))

export const useStore = create((set) => ({
  ListShoping: [],
  AllPrice: 0,
  addToShpingList: (Prodect) =>
    set((state) => {
      console.log(state.ListShoping);

      return {
        AllPrice: state.AllPrice + Prodect.price,
        ListShoping: [...state.ListShoping, Prodect],
      };
    }),
}));
