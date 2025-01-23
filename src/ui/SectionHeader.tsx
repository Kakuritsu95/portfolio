interface SectionHeaderProps {
    title: string
    subTitle: string
    subTitle2: string
}
export default function Sectionheader({
    title,
    subTitle,
    subTitle2,
}: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center space-y-4 pb-24 text-center">
            <h2 className="text-4xl font-bold tracking-wider text-gray-700">
                {title.toUpperCase()}
            </h2>
            <div className="h-1.5 w-9 rounded bg-violet-500" />
            <div className="border-b-2 pb-5 text-center text-lg font-[500] text-gray-700">
                <p>{subTitle}</p>
                <p>{subTitle2}.</p>
            </div>
        </div>
    )
}
