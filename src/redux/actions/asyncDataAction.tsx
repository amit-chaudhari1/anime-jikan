import { MyAction } from "./actions";

const fetchData = () => {
  return { type: MyAction.FETCH };
};
const recieveData = (payload: any) => {
  return { type: MyAction.RECEIVE, payload: payload };
};

export const asyncDataAction = (URL: any) => {
  return async function (dispatch: any) {
    dispatch(fetchData());
    const response = await fetch(URL);
    const result = await response.json();
    dispatch(recieveData(result));
  };
};
