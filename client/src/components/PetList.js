import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PetList = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPets")
      .then((res) => {
        console.log(res.data);
        setPets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Link style={{ marginLeft: "46em" }} to="/form">
        Add a pet to the shelter
      </Link>
      <p
        style={{
          color: "purple",
          fontSize: "1.1em",
          textAlign: "left",
          margin: "2em",
        }}
      >
        These pets are looking for a good home
      </p>
      <table style={{ margin: "2em" }}>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
        {pets.map((pet, index) => {
          return (
            <tr key={index}>
              <td>
                <h5>{pet.name}</h5>
              </td>
              <td>
                <h5>{pet.type}</h5>
              </td>
              <td>
                <Link to={`/list/${pet._id}`}>details</Link>&nbsp;&nbsp;
                <Link to={`/edit/${pet._id}`}>edit</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default PetList;
