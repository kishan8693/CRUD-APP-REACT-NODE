import React, { useState, } from "react";
import { NavLink,useNavigate } from "react-router-dom";


const Register = () => {

  
  const [inp ,setInp] = useState({
    // thi is intial state
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:"",
  })

const navigate = useNavigate()

  const setdata = (e) =>{
    console.log(e.target.value)
    const {name,value} = e.target
    setInp((prevel)=>{
      return{
        ...prevel,
        [name]:value
      }
    })
  }
  
  const addinpdata = async(e) =>{
    e.preventDefault()
    const {name,email,age,mobile,work,add,desc} = inp
    const res = await fetch('/api/v1/Users',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,age,mobile,work,add,desc
      })
    })
    const data = await res.json()
    console.log(data)

    if(res.ok){
      alert("data added")
      navigate("/")

    }else{
      alert("error")
      console.log("error")
    }
  }

  return (
    <div className="container mt-3">
      <NavLink to="/">Home</NavLink>

      <form className="mt-3">
        <div className="row">

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label"> Name </label>
          <input type="text" value={inp.name}  onChange={setdata} className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputPassword1" className="form-label"> Email </label>
          <input type="email"  value={inp.email} onChange={setdata} className="form-control" name="email" id="exampleInputPassword1"/>
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="text"  value={inp.age}  onChange={setdata} className="form-control" name="age" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputPassword1" className="form-label"> Mobile </label>
          <input type="number"  value={inp.mobile} onChange={setdata} className="form-control" name="mobile" id="exampleInputPassword1"/>
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Work</label>
          <input type="text"  value={inp.work} onChange={setdata} className="form-control" name="work" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text"  value={inp.add} onChange={setdata} className="form-control" name="add" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Description </label>
          <textarea name="desc"   value={inp.desc}  onChange={setdata} className="form-control" cols={30} rows={5} id=""></textarea>
        </div>
        

        <button type="submit" onClick={addinpdata} className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
