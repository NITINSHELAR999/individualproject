import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function View() {
  const [data1, setData1] = useState({});
 
  let navigate=useNavigate()

  useEffect(() => {
    getEpm();
  }, []);

  function getEpm() {
    axios.get(`http://localhost:3001/post/${id}`).then((data) => {
      console.log(data["data"]);
      setData1(data["data"]);
    });
  }
  const { id } = useParams();

  function showData1(){
    navigate('/')
  }

  return (
    <>
    <h2 id="view">View Data</h2>
    <div className="container" style={{ paddingTop: "100px" }}>
      <div class="card text-center">
        <div class="card-header" id="employee">Employee details</div>
        <div class="card-body" id="namebox">
          <h5 class="card-title" className="view">Name :-{`${data1.fname} ${data1.lname}`}</h5>
          <p class="card-text"></p>
          <p class="card-text" className="view">Email :-{data1.email}</p>
        </div>
        <div class="card-footer text-muted" id="show">
          <div style={{ paddingTop: "20px" }}>
            <button
              type="submit"   
              className="btn  btn-primary"
              onClick={showData1}
            >
              Show all data
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default View;
