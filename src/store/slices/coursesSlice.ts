import { Course } from "@/api/courses";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CoursesState {
    items: Course[];
    searchQuery: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: CoursesState = {
    items: [],
    searchQuery: '',
    isLoading: false,
    error: null,
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        searchCoursesRequest: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.isLoading = true;
            state.error = null;
        },
        searchCoursesSuccess: (state, action: PayloadAction<Course[]>) => {
            state.isLoading = false;
            state.items = action.payload;
        },
        searchCoursesFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    searchCoursesRequest,
    searchCoursesSuccess,
    searchCoursesFailure,
} = coursesSlice.actions;
export default coursesSlice.reducer;