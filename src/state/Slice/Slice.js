import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        resetProjet: (state) => {
            state.value = null;
        },
        setProjet: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { resetProjet,setProjet } = projectSlice.actions;

export default projectSlice.reducer;