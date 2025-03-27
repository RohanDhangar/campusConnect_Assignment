import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    lists : [{
        id: 1,
        title: "first list",
    }]
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addlist: (state, action) => {
            const list = {
                id: nanoid(),
                title: action.payload.title
            }
            state.push(list);
        },
        removelist: (state,action) => {
            state.lists = state.lists.filter((list) => list.id !== action.payload.id);
        },
        editlist: (state,action) => {
            const list = state.lists.find((list) => list.id === action.payload.id)
            list.title = action.payload.title;
        }
    }
})

export const { addlist, removelist, editlist } = listSlice.actions;
export default listSlice.reducer;