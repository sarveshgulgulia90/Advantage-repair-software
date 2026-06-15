import { useEffect, useState } from "react";
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
        {
          status,
        }
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

      <h1 className="text-3xl font-bold mb-6">
        Ticket Management
      </h1>

      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">
                Ticket ID
              </th>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Phone
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
                  {ticket.brand}{" "}
                  {ticket.model}
                </td>

                <td className="p-3">

                  <select
                    value={
                      ticket.assignedTechnician ||
                      ""
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

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Tickets;