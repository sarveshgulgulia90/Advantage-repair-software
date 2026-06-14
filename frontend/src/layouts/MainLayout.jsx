import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Advantage Repair Services
          </h1>

          <nav className="flex gap-6">

  <Link
    to="/"
    className="hover:text-gray-200"
  >
    Home
  </Link>

  <Link
    to="/new-ticket"
    className="hover:text-gray-200"
  >
    Book Repair
  </Link>

  <Link
    to="/track-ticket"
    className="hover:text-gray-200"
  >
    Track Ticket
  </Link>

  <a
    href="https://wa.me/919435070738"
    target="_blank"
    rel="noreferrer"
    className="hover:text-gray-200"
  >
    Contact Us
  </a>

</nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;

