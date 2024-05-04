import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../taskSlice/taskSlice";

let store=configureStore({
    reducer:{
        taskList:taskSlice
    }
})
export default store;