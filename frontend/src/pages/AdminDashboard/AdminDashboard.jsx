import React, { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {

    try {

      const response = await api.get(
        "api/users/users"
      );

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchUsers();

  }, []);

  return (

    <div className="admin-container">

      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Access Pages</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>

          {
            users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {user.allowedPages.join(", ")}
                </td>

                <td>
                 <button onClick={() =>navigate(`/Edituser/${user._id}`)}> Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>

  );

}