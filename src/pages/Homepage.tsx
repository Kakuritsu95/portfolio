import IntroSection from "../sections/introduction/IntroSection"
import AboutmeSection from "../sections/About/AboutmeSection"
import ProjectsSection from "../sections/projects/ProjectsSection"
import ContactSection from "../sections/contact/ContactSection"

export default function Homepage() {
    return (
        <>
            <IntroSection />
            <AboutmeSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}
