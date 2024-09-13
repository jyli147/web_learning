import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { cartSlice } from "../components/store/slice"

const rootAction = {
    ...cartSlice.actions
}

export const useAction = () => {
    const dispatch = useDispatch()
    return useMemo(()=> bindActionCreators(rootAction, dispatch), [dispatch])
}