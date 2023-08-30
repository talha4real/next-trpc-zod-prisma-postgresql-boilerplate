import create from "zustand";
import { IUser } from "../lib/types";

type Store = {
  authUser: IUser | null;
  pageLoading: boolean;
  email: string;
  setAuthUser: (user: IUser) => void;
  setEmail: (text: string) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  pageLoading: false,
  email: "",
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setEmail: (text) => set((state) => ({ ...state, email: text })), // Fixed setEmail
}));

export default useStore;
