import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "../components/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector