import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold">
          Admin Dashboard
        </h2>

        <div className="flex gap-3">

          <Link
            to="/admin/tickets"
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            Manage Tickets
          </Link>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href =
                "/admin/login";
            }}
            className="bg-red-600 text-white px-5 py-3 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">
            Total Tickets
          </h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">
            Pending
          </h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">
            In Progress
          </h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">
            Completed
          </h2>
          <p className="text-4xl">0</p>
        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;