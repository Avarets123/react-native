import { atom } from "jotai";
import { IUserModel } from "./user.model";
import { axiosBaseReq } from "../../../utils/axiosBaseReq.util";
import { API } from "../../../constants/api";
import { authAtom } from "../../auth/model/auth.state";

interface IUserState {
  profile: IUserModel | null;
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE = {
  profile: null,
  isLoading: false,
  error: null,
};
export const profileAtom = atom<IUserState>(INITIAL_STATE);

export const loadProfileAtom = atom(
  (get) => get(profileAtom),
  async (get, set) => {
    set(profileAtom, {
      ...INITIAL_STATE,
      isLoading: true,
    });
    const { access_token } = await get(authAtom);

    const { error, data } = await axiosBaseReq<null, IUserModel>(
      "get",
      API.profile,
      null,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (error) {
      set(profileAtom, {
        ...INITIAL_STATE,
        error,
      });
      return;
    }

    //@ts-ignore
    set(profileAtom, { ...INITIAL_STATE, profile: data.profile });
  }
);
