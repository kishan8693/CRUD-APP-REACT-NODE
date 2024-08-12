import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'



const Edit = () => {

    const navigate = useNavigate()
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

  const { id } = useParams();
  // const [userdata, setUserdata] = useState(null);

      const getdata = async () => {
        try {
          const res = await fetch(`/api/v1/Users/${id}`, {
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
    
          if (typeof data === 'object') {
            setInp(data);
          } else {
            console.error("Expected an object but got:", data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const updateUser = async(e) =>{
        e.preventDefault()
        const {name,email,age,mobile,add,desc} = inp
        const res2 = await fetch(`/api/v1/Users/${id}`,{
          method:'put',
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,email,age,mobile,add,desc
          })
        })
        setInp({
          name:"",
          email:"",
          age:"",
          mobile:"",
          work:"",
          add:"",
          desc:"",
        })
        const data2 = await res2.json()
        console.log(data2);

        if(res2.status === 422 || !data2){
          alert("fill the data")
        }else{
          alert("data updated")
          navigate('/')
        }
        
      }

      useEffect(()=>{
        getdata()
      },[])
  return (
    <div className="container mt-3">
    <NavLink to="/">Home</NavLink>

    <form className="mt-3">
      <div className="row">

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1" class="form-label"> Name </label>
        <input type="text" value={inp.name}  onChange={setdata} class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputPassword1" class="form-label"> Email </label>
        <input type="email"  value={inp.email} onChange={setdata} class="form-control" name="email" id="exampleInputPassword1"/>
      </div>

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1" class="form-label">Age</label>
        <input type="text"  value={inp.age}  onChange={setdata} class="form-control" name="age" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputPassword1" class="form-label"> Mobile </label>
        <input type="number"  value={inp.mobile} onChange={setdata} class="form-control" name="mobile" id="exampleInputPassword1"/>
      </div>

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1" class="form-label">Work</label>
        <input type="text"  value={inp.work} onChange={setdata} class="form-control" name="work" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>

      <div class="mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text"  value={inp.add} onChange={setdata} class="form-control" name="add" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Description </label>
        <textarea name="desc"   value={inp.desc}  onChange={setdata} className="form-control" cols={30} rows={5} id=""></textarea>
      </div>
      

      <button type="submit" class="btn btn-primary" onClick={updateUser}>
        Submit
      </button>
      </div>
    </form>
  </div>
  )
}

export default Edit
