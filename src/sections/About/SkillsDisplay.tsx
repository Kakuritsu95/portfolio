import { SKILLS } from "../../constants/skills"
import SkillBadge from "./SkillBadge"

export default function SkillsDisplay() {
    return (
        <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <ul className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </ul>
        </div>
    )
}
