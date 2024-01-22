import React, { useState } from 'react'
import zr from '../Asset/Download-Icon-unscreen.gif'
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Add() {

const[id,setid]=useState("")
const[firstname,setfirstname]=useState("")
const[lastname,setlastname]=useState("")
const[phone,setphone]=useState("")
const[email,setemail]=useState("")
const[Password,setpassword]=useState("")
const[username,setusername]=useState("")
const[city,setcity]=useState("")
const[street,setstreet]=useState("")
const[number,setnumber]=useState("")
const[Zipcode,setzipcode]=useState("")
const[Latitude,setlatitude]=useState("")
const[Longitude,setlongitude]=useState("")



const base_url='http://localhost:8000/add-contact'


const location = useNavigate()// COMPONENTRS TO COMPONENTS

const addcontact=(e)=>{
  e.preventDefault()
  console.log(id,firstname,lastname,phone,email,Password,username,city,street,number,Zipcode,Latitude,Longitude);

  //api call to add employee details

  const body={
    id,firstname,lastname,phone,email,Password,username,city,street,number,Zipcode,Latitude,Longitude
  }
  const result = axios.post(base_url,body).then((response)=>{

    console.log(response);
    alert(response.data.message)
    location('/admin')


  })
  .catch((error)=>
  {
    alert('pls enter id')
  })
}







  return (
    <div>
      <br />
      <br />
      <h1 style={{marginLeft:'540px'}}>Add Contact</h1>
      <img style={{marginLeft:'760px',marginTop:'-85px'}} width={'130px'} src={zr} alt="" />

<p style={{textAlign:'justify',padding:'10%',marginTop:'-100px'}}>Adding a new contact to your address book has never been easier. Whether you're using a traditional paper address book or a digital contact management system, the process is straightforward. In our interconnected world, maintaining a comprehensive list of contacts is crucial for effective communication. To add a new contact digitally, simply navigate to your contacts app or platform, click on the 'Add Contact' option, and fill in the necessary details such as name, phone number, email address, and any other relevant information. For those who prefer a more classic approach, grab your trusty address book, find an empty page, and carefully write down the contact's details. Regardless of the method, staying organized with your contacts ensures that you can reach out to friends, family, and colleagues with ease.</p>

 
 <h1 style={{marginTop:'-70px'}} className='text-center'>Add Details</h1>
 <br />

<div  className='container'>
      <MDBInputGroup onChange={(e)=>setid(e.target.value)} style={{marginLeft:'340px'}} className='mb-3 w-50' size='lg' textBefore={<span style={{width: '125px'}}>ID</span>}>
        <input  className='form-control' type='text' />
      </MDBInputGroup>
      

      <MDBInputGroup onChange={(e)=>setfirstname(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>NAME</span>}>
      
        <input  className='form-control' type='text' />
      </MDBInputGroup>

      <MDBInputGroup onChange={(e)=>setlastname(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Last name</span>}>
        <input  className='form-control' type='text' />
      </MDBInputGroup>
      <MDBInputGroup onChange={(e)=>setphone(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Phone</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
      <MDBInputGroup onChange={(e)=>setemail(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Email</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
      <MDBInputGroup onChange={(e)=>setpassword(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Password</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
      <MDBInputGroup onChange={(e)=>setusername(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>User name</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
      <MDBInputGroup onChange={(e)=>setcity(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>City</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>

       <MDBInputGroup onChange={(e)=>setstreet(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Street</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
       <MDBInputGroup onChange={(e)=>setnumber(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>NUMBER</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
       <MDBInputGroup onChange={(e)=>setzipcode(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Zipcode</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
       <MDBInputGroup onChange={(e)=>setlatitude(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Latitude</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
       <MDBInputGroup onChange={(e)=>setlongitude(e.target.value)} style={{marginLeft:'340px'}} className='mb-3  w-50' size='lg' textBefore={<span style={{width: '125px'}}>Longitude</span>}>
        <input  className='form-control ' type='text' />
      </MDBInputGroup>
      



<div className='text-center'>
  <button onClick={(e)=>addcontact(e)} className='btn btn-dark  text-white rounded-pill m-4 text-center'>Add Contact</button>
</div>

      </div>

      


    </div>
  )
}

export default Add