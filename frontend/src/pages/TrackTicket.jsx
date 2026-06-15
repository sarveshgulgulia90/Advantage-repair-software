import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function TrackTicket() {
  const [ticketId, setTicketId] = useState("");
  const [ticket, setTicket] = useState(null);

  const statuses = [
    "Pending",
    "Assigned",
    "Diagnosing",
    "Waiting for Parts",
    "Repair In Progress",
    "Quality Check",
    "Completed",
    "Delivered",
  ];

  async function handleTrack() {
    try {
      const res = await api.get(
        `/tickets/track/${ticketId}`
      );

      setTicket(res.data);
    } catch (error) {
      alert("Ticket not found");
      setTicket(null);
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case "Completed":
      case "Delivered":
        return "bg-green-500";

      case "Diagnosing":
      case "Repair In Progress":
      case "Quality Check":
        return "bg-yellow-500";

      case "Waiting for Parts":
        return "bg-orange-500";

      default:
        return "bg-blue-500";
    }
  }

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Track Your Repair
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter Ticket ID"
              value={ticketId}
              onChange={(e) =>
                setTicketId(e.target.value)
              }
              className="border p-3 flex-1 rounded-lg"
            />

            <button
              onClick={handleTrack}
              className="bg-blue-600 text-white px-6 rounded-lg"
            >
              Track
            </button>

          </div>

        </div>

        {ticket && (
          <div className="bg-white p-8 rounded-xl shadow mt-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold">
                {ticket.ticketId}
              </h2>

              <span
                className={`text-white px-4 py-2 rounded-full ${getStatusColor(
                  ticket.status
                )}`}
              >
                {ticket.status}
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div>
                <strong>Customer:</strong>{" "}
                {ticket.name}
              </div>

              <div>
                <strong>Phone:</strong>{" "}
                {ticket.phone}
              </div>

              <div>
                <strong>Device:</strong>{" "}
                {ticket.brand} {ticket.model}
              </div>

              <div>
                <strong>Preferred Date:</strong>{" "}
                {ticket.preferredDate}
              </div>

            </div>

            <div className="mb-8">

              <h3 className="font-bold text-xl mb-2">
                Reported Issue
              </h3>

              <div className="bg-gray-100 p-4 rounded">
                {ticket.issueDescription}
              </div>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-4">
                Repair Progress
              </h3>

              <div className="space-y-3">

                {statuses.map((status) => {
                  const currentIndex =
                    statuses.indexOf(
                      ticket.status
                    );

                  const statusIndex =
                    statuses.indexOf(status);

                  const completed =
                    statusIndex <= currentIndex;

                  return (
                    <div
                      key={status}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          completed
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                      >
                        {completed
                          ? "✓"
                          : ""}
                      </div>

                      <span
                        className={
                          completed
                            ? "font-semibold"
                            : "text-gray-500"
                        }
                      >
                        {status}
                      </span>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        )}

      </div>
    </MainLayout>
  );
}

export default TrackTicket;