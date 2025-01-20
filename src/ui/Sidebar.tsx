import Navbar from "./Navbar"
import PortfolioImage from "./PortfolioImage"

export default function Sidebar() {
    return (
        <aside className="l-0 sticky top-0 h-dvh space-y-12 border-r-2 border-gray-200 px-20 py-8">
            <PortfolioImage />
            <Navbar />
        </aside>
    )
}
