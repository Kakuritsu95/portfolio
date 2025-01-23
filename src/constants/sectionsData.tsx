import { BsPersonFill } from "react-icons/bs"
import Section from "../types/section"
import { TbInfoHexagonFilled } from "react-icons/tb"
import { HiBriefcase } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"

export const sectionsData: Section[] = [
    { id: 1, nav: { title: "Introduction", icon: BsPersonFill } },
    {
        id: 2,
        nav: { title: "About me", icon: TbInfoHexagonFilled },
        header: {
            title: "about me",
            subTitle: "What do I do, an overview of my journey in tech",
            subTitle2: "and a glimpse into my programming skills.",
        },
    },
    {
        id: 3,
        nav: { title: "Projects", icon: HiBriefcase },
        header: {
            title: "my projects",
            subTitle: "Here's a showcase of my work:",
            subTitle2:
                "These projects were conceptualized, planned, and built entirely from scratch by me.",
        },
    },
    { id: 4, nav: { title: "Contact me", icon: MdEmail } },
]
