import { Outlet } from "react-router"

import Sidebar from "./Sidebar"
import { SectionContextProvider } from "../context/SectionsContext"

export default function AppLayout() {
    return (
        <div className="flex">
            <SectionContextProvider>
                <Sidebar />
                <main className="w-full">
                    <Outlet />
                </main>
            </SectionContextProvider>
        </div>
    )
}
