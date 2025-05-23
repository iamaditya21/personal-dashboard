export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">My Dashboard</h1>
      <ul className="flex space-x-4 text-gray-700">
        <li><a href="#profile" className="hover:text-blue-500">Profile</a></li>
        <li><a href="#academics" className="hover:text-blue-500">Academics</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#extra" className="hover:text-blue-500">Extras</a></li>
      </ul>
    </nav>
  );
}
