import { useSectionContext } from "../../context/SectionsContext"
import Button from "../../ui/Button"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"
import { projects } from "../../constants/projects"
export default function ProjectsSection() {
    const { sectionRefs } = useSectionContext()

    return (
        <SectionWrapper
            ref={sectionRefs?.current[2]!}
            bgColor="bg-[#f9fdfd]"
            darkModeBgColor="dark:bg-[#282727]"
        >
            <Sectionheader
                title="my projects"
                subTitle="Here's a showcase of my work. These projects were conceptualized, planned, and built
                        entirely from scratch by me"
            />
            <ul className="flex flex-col space-y-10">
                {projects.map((project, i) => (
                    <li
                        key={project.id}
                        className="flex flex-col items-center justify-center gap-10 text-center xl:flex-row xl:gap-24 xl:text-start"
                    >
                        <img
                            src={project.imageUrl}
                            className="flex-1 xl:w-1/2"
                            loading="lazy"
                        />
                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold">
                                {project.title}
                            </h3>
                            <p className="mx-auto text-lg xl:mx-0">
                                {project.description}
                            </p>

                            <Button color="sky">READ MORE</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    )
}
