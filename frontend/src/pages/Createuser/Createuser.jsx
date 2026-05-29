import { useState } from "react";
import api from "../../api";
import './createuser.css'

export default function Createuser() {
     const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleregister = async (e) => {

        e.preventDefault();

        try {
            const response = await api.post( "api/users/register",
                {name,
                    email,
                    password,
                    role: "admin",
                    allowedPages: ["dashboard","reports"]
                }
            );
            console.log(response.data);

            alert("User Registered Successfully");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };
  return (
    <div className="create-user-container">

      <form className="create-user-form" onSubmit={handleregister}>

        <h1>Create User</h1>

         <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <div className="checkbox-section">
          <h3>Page Access</h3>

          <label>
            <input type="checkbox" />
            Dashboard
          </label>
          <label>
            <input type="checkbox" />
            Reports
          </label>
          <label>
            <input type="checkbox" />
            Settings
          </label>
          <label>
            <input type="checkbox" />
            Profile
          </label>
        </div>
        <button>Create User</button>
      </form>

    </div>
  )
}
