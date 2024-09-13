// import { configureStore } from '@reduxjs/toolkit'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import newReduser from './slices'
// import { baseApi } from '../api/api'


// export const store = configureStore({
//   reducer: {
//         news: newReduser,
//         [baseApi.reducerPath]: baseApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(baseApi.middleware),
// })


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()