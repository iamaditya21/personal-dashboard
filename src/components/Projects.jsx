export default function Projects({ projects }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="list-disc list-inside space-y-3">
        {projects.map(({ name, description, link }, idx) => (
          <li key={idx}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              {name}
            </a>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
