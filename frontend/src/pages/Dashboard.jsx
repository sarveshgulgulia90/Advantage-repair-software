import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const res = await api.get("/dashboard/stats");
      setStats(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/admin/login";
  }

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
            onClick={handleLogout}
            className="bg-red-600 text-white px-5 py-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold text-gray-700">
            Total Tickets
          </h2>

          <p className="text-5xl font-bold mt-2">
            {stats.total}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold text-gray-700">
            Pending
          </h2>

          <p className="text-5xl font-bold mt-2">
            {stats.pending}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold text-gray-700">
            In Progress
          </h2>

          <p className="text-5xl font-bold mt-2">
            {stats.inProgress}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold text-gray-700">
            Completed
          </h2>

          <p className="text-5xl font-bold mt-2">
            {stats.completed}
          </p>
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;