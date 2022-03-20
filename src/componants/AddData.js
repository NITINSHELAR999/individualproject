import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Router } from 'react-router-dom';
 
function AddData() {

let navigate = useNavigate()

  const[data1,setData1]=useState({
    
    fname:'',
     lname:'',
    email:'',
  })
       
  function data(e){
      
    setData1({...data1,[e.target.name]:e.target.value})

    console.log(data1)
  }

  function adddata(e){
     
    e.preventDefault();
    axios.post("http://localhost:3001/post",data1).then((data)=>{
      console.log(data['data'])

      navigate('/ShowData')
    }).catch((error)=>{
      console.log('erorrr')
    })

     
  }

    
 

  return (
    <>
    <h2>ADD Data</h2>
  <div className='container' style={{marginLeft:'25%',paddingTop:'100px'}}>

  <form className="col md-3">
  <div className="col-8">
    <label htmlFor="inputEmail4" className="form-label">Frist Name</label>
    <input type="text" name='fname' onChange={data} className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-8">
    <label  className="form-label">Last Name</label>
    <input type="text" name='lname' onChange={data} className="form-control" id="inputPassword4"/>
  </div>
  <div className=" col-8">
    <label htmlFor="inputAddress" className="form-label">Email</label>
    <input type="email" name='email' onChange={data} className="form-control" id="inputAddress" />
  </div>
   
 
    
  <div className="col-8" style={{paddingTop:'20px'}}>
    <button type="submit" onClick={adddata} className="btn  btn-primary">ADD DATA</button>
  </div>
</form>
  </div>
  </>
  );
}

export default AddData
