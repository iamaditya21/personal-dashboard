export default function Extras({ goals, hobbies }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6 grid md:grid-cols-2 gap-6">
      {/* Goals Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Goals</h2>
        <ul className="list-disc list-inside space-y-2">
          {goals.map((goal, idx) => (
            <li key={idx}>{goal}</li>
          ))}
        </ul>
      </div>

      {/* Hobbies Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
        <ul className="list-disc list-inside space-y-2">
          {hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
