import { IconType } from "react-icons"
import { useSectionContext } from "../context/SectionsContext"
interface NavbarListItemProps {
    Icon: IconType
    text: string
    setActiveNavbarItem: (text: string) => void
    isSelected?: boolean
    index: number
    activeNavbarItem: string
}
export default function NavbarListItem({
    Icon,
    text,
    setActiveNavbarItem,
    index,
    isSelected,
    activeNavbarItem,
}: NavbarListItemProps) {
    const { sectionRefs } = useSectionContext()
    const isHovered = activeNavbarItem == text
    const isMarked = (!activeNavbarItem && isSelected) || isHovered

    return (
        <li
            onMouseEnter={() => setActiveNavbarItem(text)}
            onClick={() => {
                sectionRefs?.current[index].current?.scrollIntoView({
                    behavior: "smooth",
                })
            }}
            className={`flex items-center gap-3 ${isMarked ? "text-blue-800" : "text-gray-800 dark:text-gray-200"}`}
        >
            <Icon size={isMarked ? 44 : 34} />
            <div
                className={`hidden rounded border-blue-800 p-1.5 lg:block ${isMarked && "border-l-2 bg-gray-100 dark:bg-gray-500"}`}
            >
                <span>{text}</span>
            </div>
        </li>
    )
}
