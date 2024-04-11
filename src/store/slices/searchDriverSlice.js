import {createSlice} from '@reduxjs/toolkit';

const searchDriverSlice = createSlice({
    name: 'searchDriver',
    initialState: 
    {searchTerm: ''}
    ,
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const {changeSearchTerm} = searchDriverSlice.actions;
export default searchDriverSlice.reducer;