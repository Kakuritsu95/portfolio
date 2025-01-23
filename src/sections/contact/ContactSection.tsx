import { useSectionContext } from "../../context/SectionsContext"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"
import ContactForm from "./ContactForm"

export default function ContactSection() {
    const { sectionRefs } = useSectionContext()

    return (
        <SectionWrapper ref={sectionRefs?.current[3]}>
            <Sectionheader
                title="Send me a message !"
                subTitle="Got a question or a proposal or just want to say hello?"
                subTitle2="Go ahead."
            />
            <ContactForm />
        </SectionWrapper>
    )
}
