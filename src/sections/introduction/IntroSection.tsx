import { useEffect, useState } from "react"

import { DimensionProps } from "../../types/dimensions"
import { FaArrowDown } from "react-icons/fa"

import { BubbleContextProvider } from "../../context/BubbleContext"
import { useSectionContext } from "../../context/SectionsContext"
import BubbleWand from "./BubbleWand"
import BubbleList from "./BubbleList"
export default function IntroSection() {
    const { sectionRefs } = useSectionContext()
    const intoSectionRef = sectionRefs?.current[0]
    const [sectionDimesions, setSectionDimensions] = useState<DimensionProps>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function updateDimensions() {
            if (!intoSectionRef || !intoSectionRef.current) return
            const sectionWidthInPixels = intoSectionRef.current?.clientWidth
            const sectionHeightInPixels = intoSectionRef.current?.clientHeight
            setSectionDimensions({
                x: sectionWidthInPixels,
                y: sectionHeightInPixels,
            })
        }
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    return (
        <BubbleContextProvider bubbleQuantity={25}>
            <section
                ref={intoSectionRef}
                className="relative h-dvh w-full overflow-hidden bg-slate-100"
            >
                <BubbleWand />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 text-nowrap text-center text-[1.65rem] font-semibold text-gray-700 sm:text-start sm:text-4xl sm:leading-[3.4rem] sm:lg:text-start">
                    <div className="absolute -left-24 hidden h-16 w-16 bg-gradient-to-tr from-red-500 to-blue-500 transition-all duration-1000 hover:rotate-180 xl:block" />
                    <div className="absolute -right-24 bottom-0 hidden h-16 w-16 bg-gradient-to-tr from-teal-500 to-blue-500 transition-all duration-1000 hover:rotate-180 xl:block" />
                    <div>
                        Hi, I`m{" "}
                        <span className="text-emerald-400">
                            Thodoris Christoforides
                        </span>
                        !
                        <p>
                            Im a <span className="text-violet-400">29</span>
                            -year-old web{" "}
                            <span className="text-orange-400">developer</span>
                        </p>
                        <span>based in </span>
                        <span className="text-indigo-400">Xanthi, Greece.</span>
                    </div>
                    <p className="text-lg font-[500]">
                        Welcome to my portfolio!
                    </p>
                    <div className="flex flex-col items-center gap-4 text-wrap sm:flex-row">
                        <span className="text-2xl font-normal">
                            Learn more about my journey, skills and projects!
                        </span>
                        <button
                            onClick={() =>
                                sectionRefs?.current[1].current?.scrollIntoView(
                                    { behavior: "smooth" },
                                )
                            }
                            className="animate-pointdown rounded bg-gray-300 p-1 duration-200 hover:bg-blue-500 hover:text-white"
                        >
                            <FaArrowDown size={20} />
                        </button>
                    </div>
                </div>
                {sectionDimesions.x && (
                    <BubbleList containerDimensions={sectionDimesions} />
                )}
            </section>
        </BubbleContextProvider>
    )
}
