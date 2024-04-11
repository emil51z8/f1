import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import formular1Api from './apis/formular1Api';
import searchDriverReducer from './slices/searchDriverSlice';

export const store = configureStore({
    reducer: {
        [formular1Api.reducerPath]: formular1Api.reducer,
        searchDriver: searchDriverReducer,
    },
    

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(formular1Api.middleware),
    });

    setupListeners(store.dispatch);

    export {useGetDriversQuery} from './apis/formular1Api';
    export {useGetCircuitsQuery} from './apis/formular1Api';

    export default store;