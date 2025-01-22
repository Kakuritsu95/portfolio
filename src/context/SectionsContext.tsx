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
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
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
        [...Array(4)].map((el) => createRef<HTMLDivElement>()),
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
