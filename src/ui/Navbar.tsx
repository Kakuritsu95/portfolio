import { BsPersonFill } from "react-icons/bs"
import { TbInfoHexagonFilled } from "react-icons/tb"
import { HiBriefcase } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import NavbarListItem from "./NavbarListItem"
import { NavbarListItemData } from "../types/navigation"
import { useState } from "react"
const navbarListData: NavbarListItemData[] = [
    { icon: BsPersonFill, text: "Introduction" },
    { icon: TbInfoHexagonFilled, text: "About me" },
    { icon: HiBriefcase, text: "Projects" },
    { icon: MdEmail, text: "Contact me" },
]
export default function Navbar() {
    const [activeNavbarItem, setActiveNavbarItem] = useState<string>(
        navbarListData[0].text,
    )
    return (
        <nav>
            <ul className="cursor-pointer space-y-3.5 text-xl font-bold">
                {navbarListData.map((item) => (
                    <NavbarListItem
                        Icon={item.icon}
                        text={item.text}
                        setActiveNavbarItem={setActiveNavbarItem}
                        isActive={activeNavbarItem == item.text}
                        key={item.text}
                    />
                ))}
            </ul>
        </nav>
    )
}
