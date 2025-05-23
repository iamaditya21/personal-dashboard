export default function Certifications({ certifications }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Certifications</h2>
      <ul className="space-y-3">
        {certifications.map(({ title, issuer, date, link }, idx) => (
          <li key={idx}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              {title}
            </a>{" "}
            - <span>{issuer}</span> (<span>{date}</span>)
          </li>
        ))}
      </ul>
    </section>
  );
}
