import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
function NewTicket() {
  const [form, setForm] = useState({
    deviceType: "Laptop",
    brand: "",
    model: "",
    serialNumber: "",
    issueDescription: "",
    serviceType: "Carry-in",
    preferredDate: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await api.post("/tickets", form);

    alert(
      "Ticket Created Successfully!\n\n" +
      res.data.ticketId
    );

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">

        <h1 className="text-3xl font-bold mb-6">
          Book Repair Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Device Type */}

          <div>
            <label className="font-semibold block mb-2">
              Device Type
            </label>

            <div className="flex gap-6">
              {["Laptop", "Desktop", "Printer"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="deviceType"
                    value={type}
                    checked={form.deviceType === type}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Device Details */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={form.brand}
              onChange={handleChange}
              className="border rounded p-3"
              required
            />

            <input
              type="text"
              name="model"
              placeholder="Model"
              value={form.model}
              onChange={handleChange}
              className="border rounded p-3"
              required
            />

            <input
              type="text"
              name="serialNumber"
              placeholder="Serial Number"
              value={form.serialNumber}
              onChange={handleChange}
              className="border rounded p-3 md:col-span-2"
            />
          </div>

          {/* Issue */}

          <div>
            <label className="font-semibold block mb-2">
              Issue Description
            </label>

            <textarea
              name="issueDescription"
              rows="5"
              value={form.issueDescription}
              onChange={handleChange}
              placeholder="Describe the problem..."
              className="w-full border rounded p-3"
              required
            />
          </div>

          {/* Service Type */}

          <div>
            <label className="font-semibold block mb-2">
              Service Type
            </label>

            <div className="flex gap-6">
              {["Carry-in", "Onsite"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="serviceType"
                    value={type}
                    checked={form.serviceType === type}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Preferred Date */}

          <div>
            <label className="font-semibold block mb-2">
              Preferred Date
            </label>

            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              className="border rounded p-3"
            />
          </div>

          {/* Customer Details */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded p-3"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border rounded p-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="border rounded p-3 md:col-span-2"
            />

            <textarea
              name="address"
              placeholder="Address (required for onsite service)"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="border rounded p-3 md:col-span-2"
            />
          </div>

          {/* Buttons */}

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Create Ticket
            </button>

            <button
              type="button"
              onClick={() => {
                const msg =
`Repair Request

Name: ${form.name}
Phone: ${form.phone}

Device: ${form.deviceType}
Brand: ${form.brand}
Model: ${form.model}

Issue:
${form.issueDescription}

Service Type:
${form.serviceType}

Preferred Date:
${form.preferredDate}`;

                window.open(
                  `https://wa.me/919435070738?text=${encodeURIComponent(msg)}`
                );
              }}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              WhatsApp
            </button>

          </div>

        </form>
      </div>
    </MainLayout>
  );
}

export default NewTicket;

