import { ReactNode } from "react"
import { Link } from "react-router"

const colors: { [key: string]: string } = {
    rose: "bg-rose-500 hover:bg-rose-600",
    violet: "bg-violet-500 hover:bg-violet-600",
    sky: "bg-sky-500 hover:bg-sky-600",
}
export default function Button({
    color,
    onClick,
    disabled,
    children,
    newTab,
    to,
}: {
    color: "rose" | "sky" | "violet"
    onClick?: () => void
    disabled?: boolean
    to?: string
    newTab?: boolean
    children: string | ReactNode | ReactNode[]
}) {
    return to ? (
        <Link
            to={to}
            target={newTab ? "_blank" : "_self"}
            className={`rounded px-12 py-3 text-xl font-semibold text-gray-100 duration-300 ${disabled ? "cursor-not-allowed bg-gray-500" : colors[color]}`}
        >
            {children}
        </Link>
    ) : (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`rounded px-12 py-3 text-xl font-semibold text-gray-100 duration-300 ${disabled ? "cursor-not-allowed bg-gray-500" : colors[color]}`}
        >
            {children}
        </button>
    )
}
