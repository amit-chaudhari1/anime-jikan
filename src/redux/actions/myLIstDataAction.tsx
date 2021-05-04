import { MyAction } from "./actions";

export const getAllList = (payload: any) => {
  return { type: MyAction.GETALLLIST, payload: payload };
};
export const addToMyList = (payload: any) => {
  return { type: MyAction.ADDTOMYLIST, payload: payload };
};
export const removeFromMyList = (payload: any) => {
  return { type: MyAction.REMOVEFROMLIST, payload: payload };
};
