import { atom } from "jotai";
import { API } from "../../../constants/api";
import { axiosBaseReq } from "../../../utils/axiosBaseReq.util";
import { authAtom } from "../../auth/model/auth.state";
import { StudentCourseDescription } from "./course.model";

interface ICoursesState {
  courses: StudentCourseDescription[];
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE = {
  courses: [],
  isLoading: false,
  error: null,
};
export const coursesAtom = atom<ICoursesState>(INITIAL_STATE);

export const loadCoursesAtom = atom(null, async (get, set) => {
  set(coursesAtom, {
    ...INITIAL_STATE,
    isLoading: true,
  });
  const { access_token } = await get(authAtom);

  const { error, data } = await axiosBaseReq<null, StudentCourseDescription[]>(
    "get",
    API.courses,
    null,
    {
      params: {
        studentCourse: "dontMy",
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (error) {
    set(coursesAtom, {
      ...INITIAL_STATE,
      error,
    });
    return;
  }

  set(coursesAtom, { ...INITIAL_STATE, courses: data?.length ? data : [] });
});
