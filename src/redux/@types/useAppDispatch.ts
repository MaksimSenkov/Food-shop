import { useDispatch } from "react-redux";
import { ReduxState } from "./types";

export const useAppDispatch: () => ReduxState.AppDispatch = useDispatch;
