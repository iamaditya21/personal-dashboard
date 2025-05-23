// Skills.tsx
interface Skill {
  name: string;
  level: number;
}

type SkillsProps = {
  skills: Skill[];
};

// ❗ Add type annotation to the props here
export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map(({ name, level }, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
