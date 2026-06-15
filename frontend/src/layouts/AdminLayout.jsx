import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  function handleLogout() {
    localStorage.clear();
    window.location.href =
      "/admin/login";
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-slate-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Admin Panel
          </h1>

          <nav className="flex gap-6 items-center">

            <Link
              to="/admin/dashboard"
              className="hover:text-gray-300"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/tickets"
              className="hover:text-gray-300"
            >
              Tickets
            </Link>

            <Link
              to="/admin/technicians"
              className="hover:text-gray-300"
            >
              Technicians
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>

          </nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;