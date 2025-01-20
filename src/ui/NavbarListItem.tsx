import { IconType } from "react-icons"
interface NavbarListItemProps {
    Icon: IconType
    text: string
    isActive: boolean
    setActiveNavbarItem: (text: string) => void
    isSelected?: boolean
}
export default function NavbarListItem({
    Icon,
    text,
    isActive,
    setActiveNavbarItem,
}: NavbarListItemProps) {
    return (
        <li
            onMouseEnter={() => setActiveNavbarItem(text)}
            className={`flex items-center gap-3 ${isActive ? "text-blue-800" : "text-gray-800"}`}
        >
            <Icon size={isActive ? 44 : 34} />
            <div
                className={`rounded border-blue-800 p-1.5 ${isActive && "border-l-2 bg-gray-100"}`}
            >
                <span>{text}</span>
            </div>
        </li>
    )
}
