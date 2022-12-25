import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Form = () => {
  const [pets, setPets] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: 0,
  });
  const navigate = useNavigate();
  const [nameBeErrors, setNameBeErrors] = useState("");
  const [typeBeErrors, setTypeBeErrors] = useState("");
  const [descriptionBeErrors, setDescriptionBeErrors] = useState("");
  function onChangeHandler(e) {
    setPets({
      ...pets,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createPet", {
        ...pets,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors.name.kind, "gol dhe trekansh");
        setNameBeErrors(err.response.data.err.errors.name.kind);
        setTypeBeErrors(err.response.data.err.errors.type.kind);
        setDescriptionBeErrors(err.response.data.err.errors.description.kind);
      });
  }

  return (
    <div>
      <Link style={{ marginLeft: "46em" }} to="/">
        Back to home
      </Link>
      <h4 style={{ textAlign: "left", margin: "1.4em" }}>
        Know a pet needing a home?
      </h4>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          margin: "2em",
          border: "2px solid black",
          padding: "2em",
        }}
      >
        <div style={{ marginRight: "5em", marginLeft: "3em" }}>
          <label className="form-label">Pet Name:</label>
          <br></br>
          <input
            type="text"
            style={{ height: "1.7em", marginTop: "0.8em" }}
            name="name"
            onChange={onChangeHandler}
          />
          <br></br>
          {nameBeErrors === "unique" ? (
            <span style={{ color: "red" }}>*Name IS NOT UNIQUE</span>
          ) : null}
          {nameBeErrors === "minlength" ? (
            <span style={{ color: "red" }}>
              *Name Must be at least 3 characters
            </span>
          ) : null}
          {nameBeErrors === "required" ? (
            <span style={{ color: "red" }}>
              *Name Must be at least 3 characters
            </span>
          ) : null}
          <br />
          <label className="form-label">Pet Type:</label>
          <br></br>
          <input
            name="type"
            onChange={onChangeHandler}
            style={{ height: "1.7em", marginTop: "0.8em" }}
          ></input>
          <br></br>
          {typeBeErrors === "minlength" ? (
            <span style={{ color: "red" }}>
              *Type Must be at least 3 characters
            </span>
          ) : null}
          <br></br>
          <label className="form-label">Pet Description:</label>
          <br></br>
          <input
            style={{ height: "1.7em", marginTop: "0.8em" }}
            name="description"
            onChange={onChangeHandler}
          ></input>
          <br></br>
          {descriptionBeErrors === "minlength" ? (
            <span style={{ color: "red" }}>
              *Description Must be at least 3 characters
            </span>
          ) : null}
          <br></br>
          <br></br>
          <button className="btn-blue">Add pet</button>
        </div>
        <div>
          <h5>Skills(optional)</h5>
          <label className="form-label">Skill1:</label>
          <br></br>
          <input
            style={{ height: "1.7em", marginTop: "0.8em" }}
            name="skill1"
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <label className="form-label">Skill2:</label>
          <br></br>
          <input
            style={{ height: "1.7em", marginTop: "0.8em" }}
            name="skill2"
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <label className="form-label">Skill3:</label>
          <br></br>
          <input
            style={{ height: "1.7em", marginTop: "0.8em" }}
            name="skill3"
            onChange={onChangeHandler}
          ></input>
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default Form;
