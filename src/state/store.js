import {configureStore} from '@reduxjs/toolkit';
import projectReducer from './Slice/Slice';

const store = configureStore({
    reducer: {
        project: projectReducer,
    },
});

export default store;