export default function SkillBadge({ skill }: { skill: string }) {
    return (
        <li className="rounded bg-gray-200 p-3 text-center font-semibold text-gray-800">
            {skill}
        </li>
    )
}
