import { useEffect, useState } from "react"

import { DimensionProps } from "../../types/dimensions"
import { FaArrowDown } from "react-icons/fa"
import BubbleList from "../../ui/BubbleList"
import BubbleWand from "../../ui/BubbleWand"
import { BubbleContextProvider } from "../../context/BubbleContext"
import { useSectionContext } from "../../context/SectionsContext"
export default function IntroSection() {
    const { sectionRefs } = useSectionContext()
    const ref = sectionRefs?.current[0]
    const [sectionDimesions, setSectionDimensions] = useState<DimensionProps>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function updateDimensions() {
            if (!ref || !ref.current) return
            const sectionWidthInPixels = ref.current?.clientWidth
            const sectionHeightInPixels = ref.current?.clientHeight
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
                ref={ref}
                className="relative h-dvh w-full overflow-hidden bg-slate-100"
            >
                <BubbleWand />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 text-nowrap text-4xl font-semibold text-gray-700">
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
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl">
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
