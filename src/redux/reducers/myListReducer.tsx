import { MyAction } from "../actions/actions";

export const myListReducer = (state = [], action: any) => {
  switch (action.type) {
    case MyAction.ADDTOMYLIST:
      return [...state, action.payload];
    case MyAction.REMOVEFROMLIST:
      return [...state.filter((items: any) => items.id != action.payload)]; // TODO: I don't even know what this is, not an inkling of an idea.
    case MyAction.GETALLLIST:
      return action.payload;
    default:
      return state;
  }
};
