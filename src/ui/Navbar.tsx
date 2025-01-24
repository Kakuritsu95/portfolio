import { useState } from "react"
import { useSectionContext } from "../context/SectionsContext"
import { sectionsData } from "../constants/sectionsData"
import NavbarListItem from "./NavbarListItem"
import ThemeToggleButton from "./ThemeToggleButton"

import ContactLinks from "./ContactLinks"

export default function Navbar() {
    const [activeNavbarItem, setActiveNavbarItem] = useState<string>("")
    const { selectedSectionIndex } = useSectionContext()

    return (
        <nav className="flex flex-row items-center lg:flex-col lg:items-start lg:gap-24">
            <ul
                onMouseLeave={() => setActiveNavbarItem("")}
                className="flex cursor-pointer items-center gap-3.5 text-xl font-bold lg:flex-col lg:items-start"
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
                <ThemeToggleButton />
            </ul>
            <div className="hidden lg:block">
                <ContactLinks />
            </div>
        </nav>
    )
}
