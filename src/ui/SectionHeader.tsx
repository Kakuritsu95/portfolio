interface SectionHeaderProps {
    title: string
    subTitle: string
}
export default function Sectionheader({ title, subTitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center space-y-6 text-center text-gray-700 dark:text-gray-200">
            <h2 className="text-3xl font-bold tracking-wider sm:text-4xl">
                {title.toUpperCase()}
            </h2>
            <div className="h-1.5 w-9 rounded bg-violet-500" />
            <p className="text-center text-lg font-[500]">{subTitle}</p>
        </div>
    )
}
