interface RotatingBoxProps {
    gradientFrom: string
    gradientTo: string
}
export default function RotatingBox({
    gradientFrom,
    gradientTo,
}: RotatingBoxProps) {
    return (
        <div
            className={`${gradientFrom} ${gradientTo} hidden h-16 w-16 bg-gradient-to-tr transition-all duration-500 hover:rotate-180 xl:block`}
        />
    )
}
