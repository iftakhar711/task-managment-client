import { createBrowserRouter } from "react-router-dom";
import Signup from "../Components/Register/Signup";
import Addtask from "../Components/Task-manag/AddTask/Addtask";
import Mytask from "../Components/Task-manag/Mytask/Mytask";
import Main from "../Layout/Main";

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
                element: <Mytask></Mytask>
            }
        ]
    }
])