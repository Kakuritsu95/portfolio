import { ReactElement, ReactNode } from "react"

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
}: {
    color: "rose" | "sky" | "violet"
    onClick?: () => void
    disabled?: boolean
    children: string | ReactNode
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`rounded px-12 py-3 text-xl font-semibold text-gray-100 duration-300 ${disabled ? "cursor-not-allowed bg-gray-500" : colors[color]}`}
        >
            {children}
        </button>
    )
}
