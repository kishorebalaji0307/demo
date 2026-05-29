import React from 'react'
import './UserDashboard.css'

export default function UserDashboard() {
  return (
  <div className="user-dashboard">
      <h1>User Dashboard</h1>

      <div className="card-container">

        <div className="card">
          <h2>Dashboard</h2>
          <p>User dashboard access page</p>
        </div>

        <div className="card">
          <h2>Reports</h2>
          <p>Reports access page</p>
        </div>

        <div className="card">
          <h2>Settings</h2>
          <p>Settings access page</p>
        </div>

      </div>

    </div>
  )
}
