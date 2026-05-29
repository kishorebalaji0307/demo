import { useState } from "react";
import api from "../../api";
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "api/users/login",

                {
                    email,
                    password
                }

            );

            console.log(response.data);

            alert("Login Success");

            localStorage.setItem(
                "token",
                response.data.token
            );

        } catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
      
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
        <button>
          Login
        </button>
      </form>
    </div>
  );
  
}


