import { useBubbleContext } from "../../context/BubbleContext"
import { DimensionProps } from "../../types/dimensions"
import Bubble from "./Bubble"

export default function BubbleList({
    containerDimensions,
}: {
    containerDimensions: DimensionProps
}) {
    const { bubbles } = useBubbleContext()

    return (
        <ul>
            {bubbles.map((bubble) => (
                <Bubble
                    key={bubble.index}
                    containerDimensions={containerDimensions}
                    bubble={bubble}
                />
            ))}
        </ul>
    )
}
