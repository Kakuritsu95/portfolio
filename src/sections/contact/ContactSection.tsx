import { useSectionContext } from "../../context/SectionsContext"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"
import ContactForm from "./ContactForm"
import ContactLinks from "../../ui/ContactLinks"
export default function ContactSection() {
    const { sectionRefs } = useSectionContext()

    return (
        <SectionWrapper
            ref={sectionRefs?.current[3]}
            darkModeBgColor="dark:bg-[#232323]"
        >
            <Sectionheader
                title="Send me a message!"
                subTitle="Got a question or a proposal or just want to say hello? Go ahead"
            />
            <ContactForm />
            <ContactLinks />
        </SectionWrapper>
    )
}
