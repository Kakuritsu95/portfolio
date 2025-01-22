import { useSectionContext } from "../../context/SectionsContext"
import SkillsDisplay from "./SkillsDisplay"
import Summary from "./Summary"

export default function AboutmeSection() {
    const { sectionRefs } = useSectionContext()
    return (
        <section
            className="flex min-h-dvh w-full flex-col items-center justify-center space-y-28 px-2 py-4 lg:px-12"
            ref={sectionRefs?.current[1]}
        >
            <div className="flex flex-col items-center space-y-4">
                <h2 className="text-4xl font-bold tracking-wider text-gray-800">
                    ABOUT ME
                </h2>
                <div className="h-1.5 w-9 rounded bg-violet-500" />
                <div className="border-b-2 pb-5 text-center text-lg font-[500] text-gray-700">
                    <p>What do I do, an overview of my journey in tech</p>
                    <p>and a glimpse into my programming skills.</p>
                </div>
            </div>
            <div className="flex flex-col gap-24 xl:flex-row">
                <Summary />
                <SkillsDisplay />
            </div>
        </section>
    )
}
