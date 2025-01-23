import { Outlet } from "react-router"
import Sidebar from "./Sidebar"
import { SectionContextProvider } from "../context/SectionsContext"
import Navbar from "./Navbar"
import useLocalStorage from "../hooks/useLocalStorage"
import { useEffect } from "react"

export default function AppLayout() {
    const [theme, setTheme] = useLocalStorage("theme")

    useEffect(() => {
        window.document.documentElement.classList.add(theme)
    }, [theme])
    return (
        <div className="flex justify-center">
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
