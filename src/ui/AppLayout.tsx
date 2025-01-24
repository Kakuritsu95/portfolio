import { Outlet } from "react-router"
import Sidebar from "./Sidebar"
import { SectionContextProvider } from "../context/SectionsContext"
import Navbar from "./Navbar"

import { ThemeContextProvider } from "../context/ThemeContext"

export default function AppLayout() {
    return (
        <div className="flex">
            <ThemeContextProvider>
                <SectionContextProvider>
                    <Sidebar />
                    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 opacity-90 lg:hidden">
                        <Navbar />
                    </div>
                    <main className="w-full">
                        <Outlet />
                    </main>
                </SectionContextProvider>
            </ThemeContextProvider>
        </div>
    )
}
