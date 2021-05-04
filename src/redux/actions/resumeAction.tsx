import { MyAction } from "./actions";

export const resumeAction = (payload: any) => {
  return { type: MyAction.RESUMEID, payload: payload };
};
