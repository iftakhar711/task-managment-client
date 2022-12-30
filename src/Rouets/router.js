import { createBrowserRouter } from "react-router-dom";
import Signin from "../Components/Register/Signin";
import Signup from "../Components/Register/Signup";
import Addtask from "../Components/Task-manag/AddTask/Addtask";
import Mytask from "../Components/Task-manag/Mytask/Mytask";
import Main from "../Layout/Main";
import Privaterouets from "./Privaterouets";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Addtask></Addtask>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/mytask',
                element: <Privaterouets><Mytask></Mytask></Privaterouets>
            },
            {
                path: '/login',
                element: <Signin></Signin>
            }
        ]
    }
])