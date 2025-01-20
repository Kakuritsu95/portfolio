import { useEffect, useRef, useState } from "react"

import { DimensionProps } from "../../types/dimensions"
import { FaArrowDown } from "react-icons/fa"
import BubbleList from "../../ui/BubbleList"
import BubbleWand from "../../ui/BubbleWand"
export default function IntroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const [sectionDimesions, setSectionDimensions] = useState<DimensionProps>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function updateDimensions() {
            if (!ref.current) return
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
        <section
            ref={ref}
            className="relative h-dvh w-full overflow-hidden bg-slate-100"
        >
            <BubbleWand />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 text-4xl font-semibold text-gray-800">
                <div>
                    Hi, I`m <span className="text-emerald-400">Thodoris</span>!
                    <p>
                        Im a <span className="text-violet-400">29</span> years
                        old web{" "}
                        <span className="text-indigo-400">developer</span> based
                        in Greece.
                    </p>
                </div>
                <p className="text-lg font-[500]">Welcome to my portfolio!</p>
                <div className="flex items-center space-x-4">
                    <span className="text-2xl">
                        Learn more about my journey, skills and projects!
                    </span>
                    <button className="animate-pointdown rounded bg-gray-300 p-1 duration-200 hover:bg-blue-500 hover:text-white">
                        <FaArrowDown size={20} />
                    </button>
                </div>
            </div>
            {sectionDimesions.x && (
                <BubbleList
                    containerDimensions={sectionDimesions}
                    bubbleQuantity={25}
                />
            )}
        </section>
    )
}
