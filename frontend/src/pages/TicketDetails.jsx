import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import api from "../services/api";

function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] =
    useState(null);

  useEffect(() => {
    fetchTicket();
  }, []);

  async function fetchTicket() {
    try {
      const res = await api.get(
        `/tickets/${id}`
      );

      setTicket(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function saveJob() {
    try {
      await api.put(
        `/tickets/${id}`,
        ticket
      );

      alert(
        "Repair Job Saved Successfully"
      );
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    }
  }

  if (!ticket) {
    return (
      <AdminLayout>
        <div>Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded shadow">

          <h1 className="text-3xl font-bold">
            {ticket.ticketId}
          </h1>

          <p className="text-gray-500">
            {ticket.brand} {ticket.model}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-4">
              Customer Information
            </h2>

            <p>
              <strong>Name:</strong>{" "}
              {ticket.name}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {ticket.phone}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {ticket.email}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {ticket.address}
            </p>

          </div>

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-4">
              Device Information
            </h2>

            <p>
              <strong>Brand:</strong>{" "}
              {ticket.brand}
            </p>

            <p>
              <strong>Model:</strong>{" "}
              {ticket.model}
            </p>

            <p>
              <strong>Serial:</strong>{" "}
              {ticket.serialNumber}
            </p>

            <p>
              <strong>Issue:</strong>{" "}
              {ticket.issueDescription}
            </p>

          </div>

        </div>

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-bold mb-4">
            Diagnosis
          </h2>

          <textarea
            rows="4"
            value={ticket.diagnosis}
            onChange={(e) =>
              setTicket({
                ...ticket,
                diagnosis:
                  e.target.value,
              })
            }
            className="w-full border p-3 rounded"
          />

        </div>

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-bold mb-4">
            Parts Required
          </h2>

          <textarea
            rows="4"
            value={
              ticket.partsRequired
            }
            onChange={(e) =>
              setTicket({
                ...ticket,
                partsRequired:
                  e.target.value,
              })
            }
            className="w-full border p-3 rounded"
          />

        </div>

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-bold mb-4">
            Repair Notes
          </h2>

          <textarea
            rows="4"
            value={
              ticket.repairNotes
            }
            onChange={(e) =>
              setTicket({
                ...ticket,
                repairNotes:
                  e.target.value,
              })
            }
            className="w-full border p-3 rounded"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-4">
              Estimated Cost
            </h2>

            <input
              type="number"
              value={
                ticket.estimatedCost
              }
              onChange={(e) =>
                setTicket({
                  ...ticket,
                  estimatedCost:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />

          </div>

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-4">
              Customer Approval
            </h2>

            <select
              value={
                ticket.customerApproval
              }
              onChange={(e) =>
                setTicket({
                  ...ticket,
                  customerApproval:
                    e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            >
              <option>
                Pending
              </option>

              <option>
                Approved
              </option>

              <option>
                Rejected
              </option>
            </select>

          </div>

        </div>

        <button
          onClick={saveJob}
          className="bg-green-600 text-white px-8 py-3 rounded"
        >
          Save Job
        </button>

      </div>

    </AdminLayout>
  );
}

export default TicketDetails;