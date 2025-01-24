import { useSectionContext } from "../../context/SectionsContext"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"
import SkillsDisplay from "./SkillsDisplay"
import Summary from "./Summary"

export default function AboutmeSection() {
    const { sectionRefs } = useSectionContext()
    return (
        <SectionWrapper
            ref={sectionRefs?.current[1]!}
            darkModeBgColor="dark:bg-[#232323]"
        >
            <Sectionheader
                title="about me"
                subTitle="What do I do, an overview of my journey in tech and a glimpse into my programming skills"
            />
            <div className="flex flex-col gap-24 2xl:flex-row">
                <Summary />
                <SkillsDisplay />
            </div>
        </SectionWrapper>
    )
}
