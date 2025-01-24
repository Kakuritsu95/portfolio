import {
    createContext,
    createRef,
    MutableRefObject,
    ReactNode,
    RefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import { sectionsData } from "../constants/sectionsData"
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
}
interface SectionContextProperties {
    selectedSectionIndex: number
    sectionRefs: MutableRefObject<RefObject<HTMLDivElement>[]> | null
}

const defaultValue: SectionContextProperties = {
    selectedSectionIndex: 0,
    sectionRefs: null,
}

const SectionContext = createContext<SectionContextProperties>(defaultValue)

export function SectionContextProvider({
    children,
}: {
    children: ReactNode[]
}) {
    const sectionRefs = useRef(
        sectionsData.map(() => createRef<HTMLDivElement>()),
    )

    const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0)

    useEffect(() => {
        function callback(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(
                        (section) => section.current == entry.target,
                    )
                    setSelectedSectionIndex(() => index)

                    if (sectionRefs.current[index].current) {
                        const sectionContentDivWrapper =
                            sectionRefs.current[
                                index
                            ].current.getElementsByTagName("div")[0]
                        sectionContentDivWrapper.style.opacity = "100"
                        sectionContentDivWrapper.style.padding = "0"
                    }
                }
            })
        }
        const observer = new IntersectionObserver(callback, observerOptions)

        sectionRefs.current.forEach((section) => {
            if (section.current) observer.observe(section.current)
        })
        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <SectionContext.Provider
            value={{
                selectedSectionIndex,
                sectionRefs,
            }}
        >
            {children}
        </SectionContext.Provider>
    )
}

export function useSectionContext() {
    const sectionContext = useContext(SectionContext)
    if (!sectionContext) {
        throw new Error("Cannot use SectionContext outside of its provider")
    }
    return sectionContext
}
