import { useState } from "react"

export default function BubbleWand() {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    return (
        <div className="relative flex w-24">
            <img
                src="/bubble-wand.svg"
                alt="magic-wand"
                className="z-50 w-24 p-5 duration-300 hover:rotate-6"
                onClick={() => setIsCreating(true)}
            />

            <div
                className={`absolute left-16 top-5 cursor-pointer rounded-full bg-sky-500 opacity-10 transition-transform hover:h-[41px] hover:w-[38px] ${isCreating ? "h-10 w-10" : "h-0 w-0"}`}
                style={{
                    transition: "width 1.2s ease-out, height 0.9s ease-out",
                }}
            >
                <div className="absolute right-2 top-1 h-2 w-2 rounded-full bg-white" />
            </div>
        </div>
    )
}
