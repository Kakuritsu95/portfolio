import { IconType } from "react-icons"
import { useSectionContext } from "../context/SectionsContext"
interface NavbarListItemProps {
    Icon: IconType
    text: string
    isActive: boolean
    setActiveNavbarItem: (text: string) => void
    isSelected?: boolean
    index: number
    activeNavbarItem: string
}
export default function NavbarListItem({
    Icon,
    text,
    isActive,
    setActiveNavbarItem,
    index,
    isSelected,
    activeNavbarItem,
}: NavbarListItemProps) {
    const { sectionRefs } = useSectionContext()
    const isMarked = (!activeNavbarItem && isSelected) || isActive
    return (
        <li
            onMouseEnter={() => setActiveNavbarItem(text)}
            onClick={() => {
                sectionRefs?.current[index].current?.scrollIntoView({
                    behavior: "smooth",
                })
            }}
            className={`flex items-center gap-3 ${isMarked ? "text-blue-800" : "text-gray-800"}`}
        >
            <Icon size={isActive ? 44 : 34} />
            <div
                className={`rounded border-blue-800 p-1.5 ${isMarked && "border-l-2 bg-gray-100"}`}
            >
                <span>{text}</span>
            </div>
        </li>
    )
}
