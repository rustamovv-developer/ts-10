import { create } from "zustand";

const wishlist = create((set) => ({
  wishles: [],
  toggleToWishes: () =>
    set((state) => ({
      wishles: state.wishles,
    })),
}));

export default toggleToWishes;
