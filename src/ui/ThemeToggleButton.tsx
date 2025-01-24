import { MdDarkMode } from "react-icons/md"
import { FaSun } from "react-icons/fa"
import { useThemeContext } from "../context/ThemeContext"
export default function ThemeToggleButton() {
    const { toggleTheme } = useThemeContext()
    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-6 w-24 items-center justify-between rounded-full bg-gray-200 px-4 py-5 dark:bg-gray-600 lg:mt-12"
        >
            <div className="absolute left-1 h-8 w-8 rounded-full bg-gray-800 duration-300 dark:translate-x-14 dark:bg-gray-50" />
            <MdDarkMode className="text-yellow-500" />
            <FaSun className="text-orange-500" />
        </button>
    )
}
