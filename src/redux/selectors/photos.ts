import { RootState } from "../store";

const selectPhotoState = (state: RootState) => state.photo;

export default selectPhotoState;
