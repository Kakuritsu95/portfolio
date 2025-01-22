import IntroSection from "../sections/introduction/IntroSection"
import { useSectionContext } from "../context/SectionsContext"
import AboutmeSection from "../sections/About/AboutmeSection"
import ProjectsSection from "../sections/projects/ProjectsSection"

export default function Homepage() {
    const { sectionRefs } = useSectionContext()

    return (
        <>
            <IntroSection />
            <AboutmeSection />
            <ProjectsSection />
            <section
                ref={sectionRefs?.current[3]}
                className="contact information relative h-dvh w-full"
            >
                Section 4
            </section>
        </>
    )
}
