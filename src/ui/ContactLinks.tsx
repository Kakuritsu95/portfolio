import { FaGithub, FaLinkedin } from "react-icons/fa"
import NavbarLinkItem from "./NavbarLinkItem"
import { CgMail } from "react-icons/cg"
import { MdCloudDownload } from "react-icons/md"

export default function ContactLinks() {
    return (
        <div className="flex h-40 w-full flex-wrap justify-between gap-4 font-semibold dark:text-gray-200">
            <NavbarLinkItem
                url="https://github.com/Kakuritsu95"
                Icon={FaGithub}
            >
                GitHub
            </NavbarLinkItem>
            <NavbarLinkItem url="https://www.linkedin.com/" Icon={FaLinkedin}>
                LinkedIn
            </NavbarLinkItem>
            <NavbarLinkItem
                Icon={MdCloudDownload}
                url="mailto:thodchristof@gmail.com"
            >
                Resume
            </NavbarLinkItem>
            <NavbarLinkItem Icon={CgMail} url="mailto:thodchristof@gmail.com">
                thodchristof@gmail.com
            </NavbarLinkItem>
        </div>
    )
}
