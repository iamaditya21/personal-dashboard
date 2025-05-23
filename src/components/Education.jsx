export default function Education({ education }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <ul className="space-y-4">
        {education.map(({ degree, institution, year, details }, idx) => (
          <li key={idx}>
            <h3 className="font-semibold text-lg">{degree}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {institution} | {year}
            </p>
            <p className="mt-1">{details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
