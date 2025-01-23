import { createBrowserRouter } from "react-router"
import Homepage from "../pages/Homepage"
import AppLayout from "../ui/AppLayout"
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
        ],
    },
])

export default router
