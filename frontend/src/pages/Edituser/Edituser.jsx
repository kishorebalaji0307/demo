import { useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import './Editeuser.css'

export default function Edituser() {
   const { id } = useParams();

  const [allowedPages, setAllowedPages] = useState("");

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const response = await api.put(

        `api/users/update-user/${id}`,

        {
          allowedPages: allowedPages.split(",")
        }

      );

      console.log(response.data);

      alert("User Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

return (

  <div className="edit-user-container">

    <form
      className="edit-user-form"
      onSubmit={handleUpdate}
    >

      <h1>Edit User</h1>

      <input
        type="text"
        placeholder="dashboard,reports,settings"
        value={allowedPages}
        onChange={(e) =>
          setAllowedPages(e.target.value)
        }
      />

      <button>
        Update User
      </button>

    </form>

  </div>

)};