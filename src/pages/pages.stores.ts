import { create } from "zustand";
import { HomeStoreDef } from "./pages.types";

const useHomeStore = create<HomeStoreDef>((set) => ({
    showNavigation: false,
    toggleShowNavigation: () => set((state) => ({
        showNavigation: !state.showNavigation
    }))
}))

export {
    useHomeStore
}