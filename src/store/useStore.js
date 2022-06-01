import create from "zustand";
import createPostSlice from "./slices/createPostSlice";
import createUserSlice from "./slices/createUserslice";

const useStore = create((set, get) => ({
  ...createPostSlice(set, get),
  ...createUserSlice(set, get),
}));

export default useStore;
