import { Outlet } from "react-router"

import Sidebar from "./Sidebar"

export default function AppLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full">
                <Outlet />
            </main>
        </div>
    )
}
