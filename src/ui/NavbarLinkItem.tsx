import { IconType } from "react-icons"

interface NavBarLinkItemProps {
    Icon: IconType
    children: string
    url: string
}
export default function NavbarLinkItem({
    Icon,
    children,
    url,
}: NavBarLinkItemProps) {
    return (
        <a
            href={url}
            className="flex items-center gap-3 font-semibold hover:text-blue-400 dark:text-gray-100 dark:hover:text-blue-400"
            target="_blank"
        >
            <Icon className="min-h-8 min-w-8" />
            <span>{children}</span>
        </a>
    )
}
