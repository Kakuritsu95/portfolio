import IntroSection from "../features/introduction/IntroSection"
import { useSectionContext } from "../context/SectionsContext"

export default function Homepage() {
    const { sectionRefs } = useSectionContext()

    return (
        <>
            <IntroSection />

            <section
                ref={sectionRefs?.current[1]}
                className="aboutme relative h-dvh w-full"
            >
                Section 2
            </section>
            <section
                ref={sectionRefs?.current[2]}
                className="projects relative h-dvh w-full"
            >
                Section 3
            </section>
            <section
                ref={sectionRefs?.current[3]}
                className="contact information relative h-dvh w-full"
            >
                Section 4
            </section>
        </>
    )
}
