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
    const introSectionRef = sectionRefs?.current[0]
    const [sectionDimesions, setSectionDimensions] = useState<DimensionProps>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function updateDimensions() {
            if (!introSectionRef || !introSectionRef.current) return
            const sectionWidthInPixels = introSectionRef.current?.clientWidth
            const sectionHeightInPixels = introSectionRef.current?.clientHeight
            setSectionDimensions({
                x: sectionWidthInPixels,
                y: sectionHeightInPixels,
            })
        }
        updateDimensions()
    }, [])

    return (
        <BubbleContextProvider bubbleQuantity={25}>
            <SectionWrapper ref={introSectionRef} bgColor="#ebfdfd">
                <div className="absolute left-0 top-0">
                    <BubbleWand />
                </div>
                <div className="flex space-x-8">
                    <RotatingBox
                        gradientFrom="from-sky-500"
                        gradientTo="to-teal-500"
                    />
                    <div className="space-y-5 text-4xl text-gray-700">
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
                <>
                    {sectionDimesions.x && (
                        <BubbleList containerDimensions={sectionDimesions} />
                    )}
                </>
            </SectionWrapper>
        </BubbleContextProvider>
    )
}
