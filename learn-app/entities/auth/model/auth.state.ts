import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "jotai";
import { createJSONStorage, atomWithStorage } from "jotai/utils";
import { IAuthInterface, IAuthRequest } from "./auth.interfaces";
import { API } from "../../../constants/api";
import axios from "axios";

const storage = createJSONStorage<IAuthState>(() => AsyncStorage);

const INITIAL_STATE = {
  access_token: null,
  isLoading: false,
  error: null,
};

export const authAtom = atomWithStorage<IAuthState>(
  "auth",
  INITIAL_STATE,
  storage
);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_, set, req: IAuthRequest) => {
    set(authAtom, {
      isLoading: true,
      access_token: null,
      error: null,
    });

    try {
      await new Promise<void>((res) => setTimeout(res, 100));
      const { data } = await axios.post<IAuthInterface>(API.login, req);

      set(authAtom, {
        isLoading: false,
        access_token: data.access_token,
        error: null,
      });
    } catch (error) {
      console.log(error);

      if (error instanceof axios.AxiosError) {
        set(authAtom, {
          isLoading: false,
          access_token: null,
          error: error.response?.data?.message,
        });
      }
    }
  }
);

export const logoutAtom = atom(null, (_, set) => {
  set(authAtom, INITIAL_STATE);
});

export interface IAuthState {
  access_token: string | null;
  isLoading: boolean;
  error: string | null;
}
