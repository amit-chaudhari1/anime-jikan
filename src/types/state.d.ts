import { DefaultRootState } from "react-redux";

export default interface State extends DefaultRootState {
  theme: any; //TODO: yeah, I'll fix this later
  loading: any;
  myList: any;
  resumeId: any;
  data: any;
}
