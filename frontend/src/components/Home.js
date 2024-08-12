import React, { useEffect, useState } from "react";
import { NavLink, useNavigate,} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Home() {
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate(); 

  const getdata = async () => {
    try {
      const res = await fetch("/api/v1/Users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data)) {
        setUserdata(data);
      } else {
        console.error("Expected an array but got:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async(id) =>{
    const res2 = await fetch(`/api/v1/Users/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const deleteData = await res2.json()
    console.log(deleteData)
    getdata();
  }


  useEffect(() => {
    getdata();
  }, []);



  return (
    <>
      <div>
  <div className="mt-5">
    <div className="container">
      <div className="add_btn mt-2 mb-2">
        <NavLink to="/register" className="btn btn-primary">
          Add data
        </NavLink>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col" className=" text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((element, id) => (
              <tr key={element._id}>
                <th scope="row">{id + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.work}</td>
                <td>{element.mobile}</td>
                <td className="d-flex justify-content-between">
                  <NavLink to={`view/${element._id}`}>
                    <button className="btn btn-primary">
                      <RemoveRedEyeIcon />
                    </button>
                  </NavLink>
                  <NavLink to={`edit/${element._id}`}>
                    <button className="btn btn-success">
                      <EditIcon />
                    </button>
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(element._id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
  </div>
</div>

    </>
  );
}
