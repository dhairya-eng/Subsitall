export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="font-bold text-lg">SubSync</h1>
      <a href="/" className="text-sm text-gray-500 hover:underline">
        Logout
      </a>
    </nav>
  );
}
