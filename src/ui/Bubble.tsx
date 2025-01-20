import { useEffect, useState } from "react"
import { DimensionProps } from "../types/dimensions"

export default function Bubble({
    containerDimensions,
    indexOfBubble,
    popBubble,
}: {
    containerDimensions: DimensionProps
    indexOfBubble: number
    popBubble: (bubbleIndex: number) => void
}) {
    const randomPosition = () => {
        return {
            x: Math.random() * containerDimensions.x,
            y: Math.random() * containerDimensions.y,
        }
    }
    const [bubblePosition, setBubblePosition] = useState(() => randomPosition())

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBubblePosition(randomPosition)
        })
        const intervalId = setInterval(() => {
            setBubblePosition(randomPosition)
        }, 50000)
        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div
            onClick={() => popBubble(indexOfBubble)}
            className="absolute h-10 w-10 cursor-pointer rounded-full bg-sky-500 opacity-10 transition-transform duration-[50000ms] hover:h-[41px] hover:w-[38px]"
            style={{
                transform: `translate(${bubblePosition.x}px, ${bubblePosition.y}px)`,
                transition:
                    "transform 50s ease, width 0.2s ease-out, height 0.2s ease-out",
            }}
        >
            <div className="absolute right-2 top-1 h-2 w-2 rounded-full bg-white" />
        </div>
    )
}
