# Advantage Repair Software

A full-stack Repair Management System built using React, Node.js, Express, MongoDB Atlas, and Tailwind CSS.

## Features

### Customer Features

* Create Repair Tickets
* Generate Unique Ticket IDs
* Track Repair Status
* WhatsApp Inquiry Support

### Admin Features

* View All Repair Tickets
* Manage Repair Requests
* Update Ticket Status
* Monitor Repair Workflow

### Repair Workflow

* Pending
* Assigned
* Diagnosing
* Waiting for Parts
* Repair In Progress
* Quality Check
* Completed
* Delivered

## Technology Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

## Project Structure

```text
repair-management-system/

├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── components/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
```

## Installation

### Clone Repository

```bash
git clone https://github.com/sarveshgulgulia90/Advantage-repair-software.git
cd Advantage-repair-software
```

### Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5002

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Run Backend

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5002
```

## Current Features Implemented

* Ticket Creation
* MongoDB Storage
* Auto Ticket ID Generation
* Ticket Listing
* Status Management
* Customer Ticket Tracking
* Dashboard Navigation

## Planned Features

### Authentication

* Admin Login
* JWT Authentication
* Role-Based Access Control

### Technician Module

* Technician Accounts
* Assigned Repairs
* Repair Notes
* Progress Updates

### PDF System

* Repair Receipt PDF
* Repair Report PDF
* Invoice Generation

### Advanced Features

* File Uploads
* Device Images
* Inventory Management
* Analytics Dashboard
* Email Notifications
* SMS Notifications


