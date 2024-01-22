import React from 'react'

import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import {  useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ed from '../Asset/Emoticon-toggle-button-unscreen.gif'
import axios from 'axios';

function Edit() {


  const[usid,setId]=useState("")
    const[usfirstname,setFirstname]=useState("")
    const[uslastname,setLastname]=useState("")
    const[uslat,setLat]=useState("")
    const[uslong,setLong]=useState("")
    const[uscity,setCity]=useState("")
    const[usstreet,setStreet]=useState("")
    const[usnumber,setNumber]=useState("")
    const[uszipcode,setzipcode]=useState("")
    const[usemail,setEmail]=useState("")
    const[ususername,setUsername]=useState("")
    const[uspassword,setPassword]=useState("")
    const[usphone,setPhone]=useState("")


    const {id} =  useParams()
    console.log(id);

    const base_url='http://localhost:8000'

    const location=useNavigate();


    const viewUser = async (id)=>{
        const result = await axios.get(`${base_url}/get-an-contact/${id}`) //address
        console.log(result.data.contacts);
        setId(result.data.contacts.id)
        setFirstname(result.data.contacts.name.firstname)
        setLastname(result.data.contacts.name.lastname)
        setLat(result.data.contacts.address.geolocation.lat)
        setLong(result.data.contacts.address.geolocation.long)
        setCity(result.data.contacts.address.city)
        setStreet(result.data.contacts.address.street)
        setNumber(result.data.contacts.address.number)
        setzipcode(result.data.contacts.address.zipcode)
        setEmail(result.data.contacts.email)
        setUsername(result.data.contacts.username)
        setPassword(result.data.contacts.password)
        setPhone(result.data.contacts.phone)
      }

      useEffect(()=>{
  
          viewUser(id);
  
      },[])
      const updateUser = async()=>{

        const body={
            id:usid,
            firstname:usfirstname,
            lastname:uslastname,
            Latitude:uslat,
            Longitude:uslong,
            city:uscity,
            street:usstreet,
            number:usnumber,
            Zipcode:uszipcode,
            email:usemail,
            username:ususername,
            Password:uspassword,
            phone:usphone
        }

        const result = await axios.post(`${base_url}/update-user/${id}`,body)
        console.log(result);
        alert(result.data.message)
        location(`/admin`)

    }

    



    
  return (
    <div>
<img style={{marginLeft:'1250px',marginTop:'px'}} width={'130px'} src={ed} alt="" />

<h1  className='text-center'>Contact edit</h1>

<br />
<p style={{textAlign:'justify',padding:'7%'}}>Our innovative contact app revolutionizes the way you manage and connect with your contacts. With a user-friendly interface and powerful features, our app simplifies the process of organizing, updating, and reaching out to your network. Effortlessly import and categorize your contacts, ensuring that you always have the right information at your fingertips. Stay connected with ease through seamless integration with messaging and calling platforms. The app also offers smart features like automatic updates and reminders, ensuring that your contacts are always current. Whether you're a busy professional, a social butterfly, or someone who simply values efficient communication, our contact app is designed to streamline your connections and enhance your overall communication experience.</p>


<h3 className='text-center'  style={{color:'rgb(33, 155, 151)'}}>Details</h3>
<br />
<br />
<MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50 t'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>ID</span>}
        >
          <input onChange={(e)=>setId(e.target.value)} value={usid} className='form-control' type='text' />
        </MDBInputGroup>



        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black'}}>FIRST NAME</span>}
        >
          <input onChange={(e)=>setFirstname(e.target.value)} value={usfirstname} className='form-control' type='text' />
        </MDBInputGroup>
        
        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LAST NAME</span>}
        >
          <input onChange={(e)=>setLastname(e.target.value)} value={uslastname} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LATITUDE</span>}
        >
          <input onChange={(e)=>setLat(e.target.value)} value={uslat} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LONGITUDE</span>}
        >
          <input onChange={(e)=>setLong(e.target.value)} value={uslong} className='form-control' type='text' />
        </MDBInputGroup>
        


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>CITY</span>}
        >
          <input onChange={(e)=>setCity(e.target.value)} value={uscity} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>STREET</span>}
        >
          <input onChange={(e)=>setStreet(e.target.value)} value={usstreet} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>NUMBER</span>}
        >
          <input onChange={(e)=>setNumber(e.target.value)} value={usnumber} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>ZIPCODE </span>}
        >
          <input onChange={(e)=>setzipcode(e.target.value)} value={uszipcode} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>EMAIL</span>}
        >
          <input onChange={(e)=>setEmail(e.target.value)} value={usemail} className='form-control' type='text' />
        </MDBInputGroup>



        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>USERNAME</span>}
        >
          <input onChange={(e)=>setUsername(e.target.value)} value={ususername} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>PASSWORD</span>}
        >
          <input onChange={(e)=>setPassword(e.target.value)} value={uspassword} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px' ,backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black'}}>PHONE</span>}
        >
          <input onChange={(e)=>setPhone(e.target.value)} value={usphone} className='form-control' type='text' />
        </MDBInputGroup>



        <div style={{ marginLeft: '680px', marginTop: '20px', marginBottom: '20px' }}>
        <MDBBtn className='mb-3' onClick={(e)=> updateUser(e)}  style={{ backgroundColor: 'rgb(33, 155, 151)' }}>
          Update
        </MDBBtn>
      </div>

      <br />
       
    </div>


  )
  }

export default Edit
