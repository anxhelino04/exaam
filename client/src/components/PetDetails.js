import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getPet/${id}`)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function deleteHandler() {
    axios
      .delete(`http://localhost:8000/api/deletePet/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  const Addlikes = () => {
    if (pet) {
      let likess;
      likess = JSON.stringify(pet.likes) || 0;
      likess = Number(likess) + 1;
      let finalPet = {
        ...pet,
        likes: likess,
      };
      console.log(finalPet, "trekansh");
      axios
        .put("http://localhost:8000/api/editPet/" + id, finalPet)
        .then((res) => {
          console.log(finalPet);
          navigate("/");
        });
    }
  };
  return (
    <div>
      <Link style={{ marginLeft: "46em" }} to="/">
        Back to home
      </Link>
      <div style={{ display: "flex" }}>
        <h4 style={{ textAlign: "left", margin: "1.4em", marginRight: "21em" }}>
          Details about : {pet.name}
        </h4>
        <button
          style={{ height: "2em", margin: "2em" }}
          onClick={deleteHandler}
        >
          Adopt {pet.name}
        </button>
      </div>
      <div style={{ border: "2px solid black", margin: "2em" }}>
        <h5 style={{ textAlign: "left", margin: "1em" }}>
          Pet Type:{pet.type}
        </h5>
        <h5 style={{ textAlign: "left", margin: "1em" }}>
          Pet Description:{pet.description}
        </h5>
        <h5 style={{ textAlign: "left", margin: "1em" }}>
          Skills:{pet.skill1}
        </h5>
        <h5 style={{ textAlign: "left", margin: "1em" }}>{pet.skill2}</h5>
        <h5 style={{ textAlign: "left", margin: "1em" }}>{pet.skill3}</h5>
        <br />
        <button onClick={Addlikes}>Like{pet.name}</button>
        <h5>{pet.likes} like(s)</h5>
      </div>
    </div>
  );
};

export default PetDetails;
