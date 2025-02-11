import { useSectionContext } from "../../context/SectionsContext"
import Button from "../../ui/Button"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"
import { projects } from "../../constants/projects"
import { SlGlobe } from "react-icons/sl"
import { FaGithub } from "react-icons/fa"
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
            <ul className="flex flex-col space-y-20">
                {projects.map((project) => (
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
                            <div className="flex justify-center gap-5 xl:justify-start">
                                <Button
                                    to={project.projectURL}
                                    newTab
                                    color="sky"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span>VISIT</span>
                                        <SlGlobe />
                                    </div>
                                </Button>
                                <Button
                                    to={project.gitHubURL}
                                    newTab
                                    color="sky"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span>GitHub</span>
                                        <FaGithub />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    )
}
