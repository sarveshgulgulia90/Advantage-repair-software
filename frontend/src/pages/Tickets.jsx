import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
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
      await api.put(
        `/tickets/${id}/status`,
        { status }
      );

      fetchTickets();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateTechnician(
    id,
    assignedTechnician
  ) {
    try {
      await api.put(
        `/tickets/${id}/technician`,
        {
          assignedTechnician,
        }
      );

      fetchTickets();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AdminLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Repair Jobs
        </h1>

      </div>

      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>

              <th className="p-3 text-left">
                Ticket
              </th>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Device
              </th>

              <th className="p-3 text-left">
                Technician
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {tickets.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="p-6 text-center text-gray-500"
                >
                  No Repair Jobs Found
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr
                  key={ticket._id}
                  className="border-t"
                >

                  <td className="p-3">

                    <div className="font-semibold">
                      {ticket.ticketId}
                    </div>

                    <div className="text-sm text-gray-500">
                      {ticket.phone}
                    </div>

                  </td>

                  <td className="p-3">
                    {ticket.name}
                  </td>

                  <td className="p-3">

                    <div>
                      {ticket.brand}
                    </div>

                    <div className="text-sm text-gray-500">
                      {ticket.model}
                    </div>

                  </td>

                  <td className="p-3">

                    <select
                      value={
                        ticket.assignedTechnician || ""
                      }
                      onChange={(e) =>
                        updateTechnician(
                          ticket._id,
                          e.target.value
                        )
                      }
                      className="border rounded p-2"
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Rahul">
                        Rahul
                      </option>

                      <option value="Amit">
                        Amit
                      </option>

                      <option value="Sarvesh">
                        Sarvesh
                      </option>

                    </select>

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
                      <option>
                        Pending
                      </option>

                      <option>
                        Assigned
                      </option>

                      <option>
                        Diagnosing
                      </option>

                      <option>
                        Waiting for Parts
                      </option>

                      <option>
                        Repair In Progress
                      </option>

                      <option>
                        Quality Check
                      </option>

                      <option>
                        Completed
                      </option>

                      <option>
                        Delivered
                      </option>

                    </select>

                  </td>

                  <td className="p-3">

                    <Link
                      to={`/admin/tickets/${ticket._id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Open Job
                    </Link>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Tickets;