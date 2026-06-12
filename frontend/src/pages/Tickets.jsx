import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  async function fetchTickets() {
    try {
      const res = await api.get("/tickets");
      setTickets(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateStatus(id, status) {
    try {
      await api.put(`/tickets/${id}/status`, {
        status,
      });

      fetchTickets();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Repair Tickets
        </h1>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Ticket ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Device</th>
              <th className="p-3 text-left">Issue</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket._id}
                className="border-t"
              >
                <td className="p-3">
                  {ticket.ticketId}
                </td>

                <td className="p-3">
                  {ticket.name}
                </td>

                <td className="p-3">
                  {ticket.phone}
                </td>

                <td className="p-3">
                  {ticket.brand} {ticket.model}
                </td>

                <td className="p-3">
                  {ticket.issueDescription}
                </td>

                <td className="p-3">
                  <select
                    value={ticket.status}
                    onChange={(e) =>
                      updateStatus(
                        ticket._id,
                        e.target.value
                      )
                    }
                    className="border rounded p-2"
                  >
                    <option>Pending</option>
                    <option>Assigned</option>
                    <option>Diagnosing</option>
                    <option>Waiting for Parts</option>
                    <option>Repair In Progress</option>
                    <option>Quality Check</option>
                    <option>Completed</option>
                    <option>Delivered</option>
                  </select>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </MainLayout>
  );
}

export default Tickets;