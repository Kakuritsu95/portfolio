import { useEffect, useState } from "react"

import { DimensionProps } from "../../types/dimensions"
import { FaArrowDown } from "react-icons/fa"

import { BubbleContextProvider } from "../../context/BubbleContext"
import { useSectionContext } from "../../context/SectionsContext"
import BubbleWand from "./BubbleWand"
import BubbleList from "./BubbleList"
import SectionWrapper from "../../ui/SectionWrapper"
import RotatingBox from "../../ui/RotatingBox"
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
    }, [])

    return (
        <BubbleContextProvider bubbleQuantity={25}>
            <SectionWrapper ref={intoSectionRef} bgColor="#ebfdfd">
                <div className="relative h-dvh w-full items-center overflow-hidden bg-gradient-to-br">
                    <BubbleWand />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 text-nowrap text-center text-[1.65rem] font-semibold text-gray-700 sm:text-start sm:text-4xl sm:leading-[3.4rem] sm:lg:text-start">
                        <div className="flex space-x-8">
                            <RotatingBox
                                gradientFrom="from-sky-500"
                                gradientTo="to-teal-500"
                            />
                            <div className="space-y-5">
                                <div>
                                    Hi, I`m{" "}
                                    <span className="font-bold text-emerald-400">
                                        Thodoris Christoforides
                                    </span>
                                    !
                                    <p>
                                        Im a{" "}
                                        <span className="font-bold text-violet-400">
                                            29
                                        </span>
                                        -year-old web{" "}
                                        <span className="font-bold text-orange-400">
                                            developer
                                        </span>
                                    </p>
                                    <span>based in </span>
                                    <span className="text-xl text-indigo-400 sm:text-3xl">
                                        Xanthi, Greece.
                                    </span>
                                </div>
                                <p className="text-lg font-[500]">
                                    Welcome to my portfolio!
                                </p>
                                <div className="flex flex-col items-center gap-4 text-wrap sm:flex-row">
                                    <span className="text-2xl font-normal">
                                        Learn more about my journey, skills and
                                        projects!
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
                            <div className="self-end">
                                <RotatingBox
                                    gradientFrom="from-sky-500"
                                    gradientTo="to-violet-500"
                                />
                            </div>
                        </div>
                    </div>
                    {sectionDimesions.x && (
                        <BubbleList containerDimensions={sectionDimesions} />
                    )}
                </div>
            </SectionWrapper>
        </BubbleContextProvider>
    )
}
