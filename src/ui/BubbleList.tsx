import { useState } from "react"
import { DimensionProps } from "../types/dimensions"
import Bubble from "./Bubble"

export default function BubbleList({
    bubbleQuantity = 20,
    containerDimensions,
}: {
    bubbleQuantity: number
    containerDimensions: DimensionProps
}) {
    const [bubbles, setBubbles] = useState<number[]>(() =>
        Array.from({ length: bubbleQuantity }, (_, i) => i + 1),
    )
    function popBubble(indexOfBubble: number) {
        console.log(
            indexOfBubble,
            bubbles.findIndex((val) => val == indexOfBubble),
        )
        setBubbles([
            ...bubbles.slice(
                0,
                bubbles.findIndex((val) => val == indexOfBubble),
            ),
            ...bubbles.slice(
                bubbles.findIndex((val) => val == indexOfBubble) + 1,
            ),
        ])
    }

    return (
        <ul>
            {bubbles.map((i) => (
                <Bubble
                    key={i}
                    containerDimensions={containerDimensions}
                    indexOfBubble={i}
                    popBubble={popBubble}
                />
            ))}
        </ul>
    )
}
