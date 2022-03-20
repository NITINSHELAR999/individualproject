import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [state, setState] = useState({});
  const [data1, setData1] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  
  let navigateCode =useNavigate()

  useEffect(() => {
    getEpm();

  }, []);

  function getEpm() {
    axios.get(`http://localhost:3001/post/${id}`).then((data) => {
      console.log(data["data"]);
      setData1(data["data"])
    });
  }
  const { id } = useParams();



  function data(e) {
    setData1({ ...data1, [e.target.name]: e.target.value });

    console.log(data1);
  }

  function adddata(){
    axios.put(`http://localhost:3001/post/${id}`,data1).then((data) => {
      console.log(data["data"]);
      setData1(data["data"])
      navigateCode('/')
    });
  }

  return (
    <>
    <h1>Edit Data</h1>
    <div>
      <div
        className="container my-4"
        style={{ marginLeft: "25%", paddingTop: "100px" }}
      >
        <form className="col md-3">
          <div className="col-8">
            <label htmlFor="inputEmail4" className="form-label">
              Frist Name
            </label>
            <input
              type="text"
              name="fname"
              value={data1.fname}
              onChange={data}
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-8">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lname"
              value={data1.lname}
              onChange={data}
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className=" col-8">
            <label htmlFor="inputAddress" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={data}
              value={data1.email}
              className="form-control"
              id="inputAddress"
            />
          </div>

          <div className="col-8" style={{ paddingTop: "20px" }}>
            <button
              type="submit"
              onClick={adddata}
              className="btn  btn-primary"
            >
              ADD DATA
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Edit;
