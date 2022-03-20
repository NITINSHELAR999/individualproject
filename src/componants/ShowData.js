import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import View from "./View";

function ShowData() {
  const [data, setData] = useState([]);
  const [word, setword] = useState([]);
  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post").then((data) => {
      console.log(data["data"]);
      setData(data["data"]);
    });
  },[]);

  function view(ele) {
    setViewData(ele);
    console.log(ele);
  }

  let history = useNavigate();

  function addhis() {
    history("/AddData", { replace: true });
  }

  function deleteData(id){
       axios.delete(`http://localhost:3001/post/${id}`)

       const delete1 = data.filter((ele)=>{
          return ele.id !=id
       })
       setData(delete1)
      }

      function searchData(e){
        setword(e.target.value)
        axios.get("http://localhost:3001/post?q="+word).then((data) => {
          console.log(data["data"]);
          setData(data["data"]);
        });
      }
    
      
  return (

    <>
     <h1>ALL Data</h1> 
    <div className="container my-4">
      <div
        style={{
          paddingTop: "100px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <form className="d-flex">
          <input
            className="form-control me-6"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={searchData}
          />

          <button
            className="btn btn-outline-success"
            onClick={addhis}
            type="submit"
          >
            <Link to="AddData">AddEmployees</Link>
          </button>
        </form>
        <table className="table" style={{width:'100%'}}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th style={{width:'200px'}}  scope="col">Methods</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id+1}</th>
                  <td>{ele.fname}</td>
                  <td>{ele.lname}</td>
                  <td>{ele.email}</td>

                  <td  >
                  <span>
                    {" "}
                    <button className="btn btn-success" onClick={()=>deleteData(ele.id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>{" "}


                    <button className="btn btn-success"  >
                      <Link to={`/Edit/${ele.id}`}>
                        <i className="fas fa-edit"></i>
                      </Link>
                    </button>{" "}


                    <button
                      className="btn btn-success"
                    >
                      <Link to={`/View/${ele.id}`}>
                        {" "}
                        <i className="far fa-eye"></i>
                      </Link>
                    </button>{" "}

                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ShowData;
