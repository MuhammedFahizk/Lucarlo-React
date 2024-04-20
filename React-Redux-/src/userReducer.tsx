import { createSlice } from "@reduxjs/toolkit";

import { userList } from "./Data";
import { act } from "react-dom/test-utils";
const userSlice = createSlice({
    name: 'Users',
    initialState: userList,
    reducers: {
        addUser:(state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addUser } = userSlice.actions
export default userSlice.reducer