import { useSectionContext } from "../../context/SectionsContext"
import Sectionheader from "../../ui/SectionHeader"
import SectionWrapper from "../../ui/SectionWrapper"

export default function ProjectsSection() {
    const { sectionRefs } = useSectionContext()
    const projects: string[] = ["Kakushops", "GlobeGurus", "Cabins"]

    return (
        <SectionWrapper ref={sectionRefs?.current[2]!} bgColor="#fbfefe">
            <Sectionheader
                title="my projects"
                subTitle="Here's a showcase of my work"
                subTitle2="These projects were conceptualized, planned, and built
                        entirely from scratch by me"
            />
            <ul className="flex flex-col space-y-10">
                {projects.map((project, i) => (
                    <li
                        key={project}
                        className="flex flex-col items-center justify-center gap-10 text-center xl:flex-row xl:gap-24 xl:text-start"
                    >
                        <img
                            src={i != 1 ? "/kakushops.png" : "/globegurus.png"}
                            className="flex-1 xl:w-1/2"
                            loading="lazy"
                        />
                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold">{project}</h3>
                            <p className="mx-auto text-lg text-gray-700 xl:mx-0 2xl:w-2/3">
                                Dopefolio is a successful Open-Source project
                                that I created which have been featured on some
                                of the biggest tech sites like CSS-Tricks,
                                Hostinger, etc & used by thousands of developers
                                globally
                            </p>
                            <button className="rounded bg-sky-600 px-11 py-3 text-lg font-semibold text-gray-50">
                                READ MORE
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    )
}
