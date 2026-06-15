import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
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
      const res = await api.get(
        "/dashboard/stats"
      );

      setStats(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AdminLayout>

      <h2 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h2>

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

    </AdminLayout>
  );
}

export default Dashboard;