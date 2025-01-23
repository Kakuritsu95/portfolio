import { ReactElement, forwardRef } from "react"
interface SectionWrapperProps {
    children: ReactElement[] | ReactElement

    bgColor?: string
}
const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(
    ({ children, bgColor }, ref) => {
        return (
            <section
                ref={ref}
                // style={{ backgroundColor: bgColor }}
                className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 pt-32 opacity-0 duration-1000 lg:px-10 2xl:px-24 dark:bg-red-500"
            >
                {children}
            </section>
        )
    },
)

export default SectionWrapper
