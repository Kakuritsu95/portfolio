import { Outlet } from "react-router"

import Sidebar from "./Sidebar"
import { SectionContextProvider } from "../context/SectionsContext"
import Navbar from "./Navbar"

export default function AppLayout() {
    return (
        <div className="relative flex">
            <SectionContextProvider>
                <Sidebar />
                <aside className="fixed left-1/2 top-4 z-50 -translate-x-1/2 opacity-90 lg:hidden">
                    <Navbar />
                </aside>
                <main className="w-full">
                    <Outlet />
                </main>
            </SectionContextProvider>
        </div>
    )
}
