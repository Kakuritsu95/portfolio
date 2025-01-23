import { IconType } from "react-icons"

export default interface Section {
    id: number
    nav: {
        title: string
        icon: IconType
    }
    header?: {
        title: string
        subTitle: string
        subTitle2: string
    }
}
