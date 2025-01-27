import { ReactElement, forwardRef } from "react"
interface SectionWrapperProps {
    children: ReactElement[] | ReactElement
    bgColor?: string
    darkModeBgColor?: string
}
const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(
    ({ children, bgColor, darkModeBgColor }, ref) => {
        return (
            <section
                ref={ref}
                style={{ transitionProperty: "padding" }}
                className={`${bgColor} ${darkModeBgColor} relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 dark:text-gray-100 lg:px-10 2xl:px-24`}
            >
                <div className="flex flex-col gap-32 pt-32 opacity-0 duration-1000">
                    {" "}
                    {children}
                </div>
            </section>
        )
    },
)

export default SectionWrapper
