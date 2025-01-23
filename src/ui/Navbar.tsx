import NavbarListItem from "./NavbarListItem"
import { useState } from "react"
import { useSectionContext } from "../context/SectionsContext"
import { sectionsData } from "../constants/sectionsData"

export default function Navbar() {
    const [activeNavbarItem, setActiveNavbarItem] = useState<string>("")
    const { selectedSectionIndex } = useSectionContext()

    return (
        <nav>
            <ul
                onMouseLeave={() => setActiveNavbarItem("")}
                className="flex cursor-pointer gap-3.5 text-xl font-bold lg:flex-col"
            >
                {sectionsData.map((section, i) => (
                    <NavbarListItem
                        Icon={section.nav.icon}
                        text={section.nav.title}
                        setActiveNavbarItem={setActiveNavbarItem}
                        activeNavbarItem={activeNavbarItem}
                        isSelected={i == selectedSectionIndex}
                        key={section.id}
                        index={i}
                    />
                ))}
            </ul>
        </nav>
    )
}
