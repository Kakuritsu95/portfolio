import Navbar from "./Navbar"
import PortfolioImage from "./PortfolioImage"

export default function Sidebar() {
    return (
        <aside className="sticky left-0 top-0 hidden h-dvh translate-x-full space-y-12 border-r-2 border-gray-200 px-20 py-8 dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0 lg:block">
            <PortfolioImage />
            <Navbar />
        </aside>
    )
}
