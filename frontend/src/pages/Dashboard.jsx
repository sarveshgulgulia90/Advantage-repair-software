import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <div className="flex gap-3">
          <Link
            to="/new-ticket"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + New Repair Ticket
          </Link>

          <Link
            to="/tickets"
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
          >
            View Tickets
          </Link>
        <Link
  to="/track-ticket"
  className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
>
  Track Ticket
</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Total Tickets</h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Pending</h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">In Progress</h2>
          <p className="text-4xl">0</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Completed</h2>
          <p className="text-4xl">0</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;