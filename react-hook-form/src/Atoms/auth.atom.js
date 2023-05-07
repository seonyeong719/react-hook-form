import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const AuthAtom = atom({
  key: "AuthAtom",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
