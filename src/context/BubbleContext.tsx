import { createContext, ReactElement, useContext, useState } from "react"
import { DimensionProps } from "../types/dimensions"
export interface BubbleType {
    index: number
    startingPosition?: DimensionProps
}
interface BubbleContextType {
    bubbles: BubbleType[]
    popBubble: (indexOfBubble: number) => void
    createBubble: (startingPosition: DimensionProps) => void
}
const defaultValues = {
    bubbles: [],
    popBubble: () => {},
    createBubble: () => {},
}
const BubbleContext = createContext<BubbleContextType>(defaultValues)

export function BubbleContextProvider({
    children,
    bubbleQuantity = 25,
}: {
    children: ReactElement
    bubbleQuantity: number
}) {
    const [bubbles, setBubbles] = useState<BubbleType[]>(() =>
        Array.from({ length: bubbleQuantity }, (_, i) => {
            return { index: i + 1 }
        }),
    )
    function popBubble(indexOfBubble: number) {
        const bubbleToRemoveIndex = bubbles.findIndex(
            (bubble) => bubble.index == indexOfBubble,
        )

        setBubbles([
            ...bubbles.slice(0, bubbleToRemoveIndex),
            ...bubbles.slice(bubbleToRemoveIndex + 1),
        ])
    }

    function createBubble(startingPosition: DimensionProps) {
        setBubbles([
            ...bubbles,
            {
                index:
                    bubbles.at(-1)?.index !== undefined
                        ? bubbles.at(-1)!.index + 1
                        : 0,
                startingPosition,
            },
        ])
    }
    return (
        <BubbleContext.Provider value={{ bubbles, popBubble, createBubble }}>
            {children}
        </BubbleContext.Provider>
    )
}

export function useBubbleContext() {
    const bubbleContext = useContext(BubbleContext)
    if (!bubbleContext)
        throw new Error("Cannot use bubble context outside it's provider")
    return bubbleContext
}
