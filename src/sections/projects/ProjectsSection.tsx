import { useSectionContext } from "../../context/SectionsContext"

export default function ProjectsSection() {
    const { sectionRefs } = useSectionContext()
    const projects: string[] = ["Kakushops", "GlobeGurus", "Cabins"]
    return (
        <section
            className="flex min-h-dvh w-full flex-col items-center justify-center space-y-14 bg-gray-50 px-2 py-4 xl:px-12"
            ref={sectionRefs?.current[2]}
        >
            <div className="flex flex-col items-center space-y-4">
                <h2 className="text-4xl font-bold tracking-wider text-gray-800">
                    MY PROJECTS
                </h2>
                <div className="h-1.5 w-9 rounded bg-violet-500" />
                <div className="border-b-2 pb-5 text-center text-lg font-[500] text-gray-700">
                    <p>Here's a showcase of my work:</p>
                    <p>
                        These projects were conceptualized, planned, and built
                        entirely from scratch by me.
                    </p>
                </div>
            </div>
            <ul className="space-y-10">
                {projects.map((project, i) => (
                    <li className="flex flex-col items-center justify-center gap-10 text-center xl:flex-row xl:gap-24 xl:text-start">
                        <img
                            src={i != 1 ? "/kakushops.png" : "/globegurus.png"}
                            className="flex-1 xl:w-1/2"
                            loading="lazy"
                        />
                        <div className="space-y-10">
                            <h3 className="text-2xl font-bold">{project}</h3>
                            <p className="mx-auto text-lg text-gray-700 xl:mx-0 xl:w-2/3">
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
        </section>
    )
}
