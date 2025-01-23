import { useSectionContext } from "../../context/SectionsContext"
import Button from "../../ui/Button"

export default function Summary() {
    const { sectionRefs } = useSectionContext()
    return (
        <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Short summary!</h3>
            <div className="space-y-3 text-lg font-normal text-gray-600">
                <p>
                    I`m a{" "}
                    <span className="font-semibold">
                        Full-stack software developer
                    </span>{" "}
                    with a focus on the web.
                </p>
                <p>
                    My journey in programming began in 2021, driven by the
                    excitement of learning new things. I specialize in working
                    with <span className="font-semibold">React</span> and it's
                    ecosystem, including{" "}
                    <span className="font-semibold">
                        Redux, TanStack, React Router
                    </span>{" "}
                    and more. I also have strong skills in backend development
                    and database management.
                </p>
                <p>
                    I`ve worked with both{" "}
                    <span className="font-semibold">SQL (postgre, mysql)</span>{" "}
                    and <span className="font-semibold">NoSQL (mongoDB)</span>{" "}
                    databases, gaining experience in designing and optimizing
                    data structures and schemas. On the backend, I`ve built
                    applications using frameworks like{" "}
                    <span className="font-semibold">Spring Boot</span> and{" "}
                    <span className="font-semibold">Express.js</span>, which
                    have enhanced my ability to create robust and scalable
                    server-side solutions.
                </p>
                <p>
                    I`m open to
                    <span className="font-semibold"> job</span> opportunities
                    where I can solve complex tasks and continue to grow my
                    knowledge and skills. If my skills align with what you're
                    looking for, I'd be more than glad to share more details or
                    discuss further in an interview.
                </p>
            </div>
            <div className="flex space-x-5">
                <Button
                    color="rose"
                    onClick={() => {
                        sectionRefs?.current[2].current?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }}
                >
                    Projects
                </Button>
                <Button
                    color="violet"
                    onClick={() => {
                        sectionRefs?.current[3].current?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }}
                >
                    Contact
                </Button>
            </div>
        </div>
    )
}
