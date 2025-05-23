export default function Internships({ internships }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Internships</h2>
      <ul className="space-y-4">
        {internships.map(({ role, company, duration, description, link }, idx) => (
          <li key={idx}>
            <h3 className="font-semibold text-lg">
              {role} @{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {company}
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{duration}</p>
            <p className="mt-1">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
