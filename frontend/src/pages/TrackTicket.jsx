import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function TrackTicket() {
  const [ticketId, setTicketId] = useState("");
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");

  async function handleTrack() {
    try {
      const res = await api.get(
        `/tickets/track/${ticketId}`
      );

      setTicket(res.data);
      setError("");
    } catch (_error) {
      setTicket(null);
      setError("Ticket not found");
    }
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Track Repair Ticket
        </h1>

        <div className="bg-white p-6 rounded shadow">

          <input
            type="text"
            placeholder="REP-2026-00001"
            value={ticketId}
            onChange={(e) =>
              setTicketId(e.target.value)
            }
            className="border p-3 w-full rounded"
          />

          <button
            onClick={handleTrack}
            className="mt-4 bg-blue-600 text-white px-5 py-3 rounded"
          >
            Track Ticket
          </button>

        </div>

        {error && (
          <div className="text-red-600 mt-4">
            {error}
          </div>
        )}

        {ticket && (
          <div className="bg-white p-6 rounded shadow mt-6">

            <h2 className="text-2xl font-bold mb-4">
              {ticket.ticketId}
            </h2>

            <p>
              <strong>Customer:</strong>{" "}
              {ticket.name}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {ticket.phone}
            </p>

            <p>
              <strong>Device:</strong>{" "}
              {ticket.brand} {ticket.model}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {ticket.status}
            </p>

            <p>
              <strong>Issue:</strong>{" "}
              {ticket.issueDescription}
            </p>

          </div>
        )}

      </div>
    </MainLayout>
  );
}

export default TrackTicket;