import React, { useEffect, useState } from 'react'
import ir from '../Asset/Top-20-App-UI-Design-Inspirati-unscreen.gif'
import jv from '../Asset/Location-Marker-Royalty-Free-G-unscreen.gif'
import fm from '../Asset/258aceed30772f1cc702e269b67d0bd7-removebg-preview.png'
import {Link, useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios'

function View() {

  const base_url='http://localhost:8000'
  //get a id from url
  const {id}=useParams()
  console.log(id);


  //api fetching - function

  const[contactdata,setcontactdata]=useState({})
  const fetchcont=async(id)=>{

    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);
    setcontactdata(result.data.contacts)
  }

  console.log(contactdata);

useEffect(()=>{

  fetchcont(id)
},[])

  
  return (
    <div>
      <br />
      <br />

<h1 className='text-center'>Contact Details</h1>

<div className="container">

<div className="col-6">
  <br />
  <br />

  <h2 className='text-center'>Access</h2>
  <br />
<p>For any inquiries or further information, please feel free to reach out to us. Our team is dedicated to providing assistance and addressing your concerns. You can contact us via email at info@example.com for written correspondence. If you prefer a direct conversation, our phone line is open at +1 (555) 123-4567 during regular business hours. Our office is located at 123 Main Street, Cityville, State, ZIP Code, for those who wish to visit in person. For updates and additional insights, you can also follow us on Twitter (@ExampleCo) or visit our website at www.example.com. We appreciate your interest and look forward to connecting with you.</p>
</div>
<div className="col-6">
<img style={{marginLeft:'750px',marginTop:'-300px'}} src={ir} alt="" />
</div>


</div>
<br />
<br />

<h2 style={{color:'rgb(33, 155, 151)'}}  className='text-center'>Contact</h2>


<div className="container">
  <br />
<MDBCard className='aligin-center shadow' style={{width:'700px',height:'590px',marginLeft:'300px',backgroundColor:'rgba(216,207,207,0.3)',backdropFilter:'blur(15px)'}}>
  
  {/* <img width={''} src={fm} alt="" /> */}
    <img style={{marginLeft:'300px',marginTop:'40px'}} className='aligin-center' width={'80px'} src={fm} alt="" />
        <MDBCardBody>
          <MDBCardTitle style={{color:'blue'}} className='text-center'>{contactdata.name && `${contactdata.name.firstname}${contactdata.name.lastname}`}</MDBCardTitle>
          <br />
          <br />
          <MDBCardText style={{marginLeft:'80px'}}>
           <i style={{marginLeft:'50px'}} class="fa-regular fa-envelope fa-fade m-2"></i>{contactdata.email}
          </MDBCardText>
  
          <MDBCardText  style={{marginLeft:'80px'}}>
  
          <i class="fa-solid fa-phone fa-fade m-2"></i>{contactdata.phone}
          </MDBCardText>
  
  
          <MDBCardText style={{marginLeft:'450px',marginTop:'-100px'}}>{contactdata.username}
  
          <i class="fa-regular fa-user fa-fade m-2"></i>
          </MDBCardText>
          <br />
  
          <MDBCardText style={{marginLeft:'420px',marginTop:'-20px'}}>{contactdata.password}
          <i class="fa-solid fa-lock fa-fade m-2"></i>
  
          </MDBCardText>
          <br />
  
          <MDBCardTitle style={{color:'rgb(33, 155, 151)'}} className='text-center'>LOCATION</MDBCardTitle>
          <img style={{width:'70px',marginLeft:'380px',marginTop:'-80px'}} src={jv} alt="" />
          <br />
          <MDBCardText style={{marginLeft:'90px'}}>
          <i class="fa-solid fa-city fa-fade m-2"></i>{contactdata.address && `${contactdata.address.city}`}
          </MDBCardText>
          <MDBCardText  style={{marginLeft:'90px'}}>
          <i class="fa-solid fa-road fa-fade m-2"></i>{contactdata.address && `${contactdata.address.street}`}
  <br />
          </MDBCardText>
  
          <MDBCardText style={{marginLeft:'470px',marginTop:'-100px'}}>{contactdata.address && `${contactdata.address.zipcode}`}
  
          <i class="fa-solid fa-location-dot fa-fade m-2"></i>
          </MDBCardText>
          <MDBCardText style={{marginLeft:'470px',marginTop:'20px'}}>{contactdata.address && `${contactdata.address.number}`}
  
          <i class="fa-solid fa-archway fa-fade m-2"></i>
          </MDBCardText> 
          
        </MDBCardBody>
      </MDBCard>






    <br />
    <br />

</div>
<Link to={'/admin'}>
<div style={{marginLeft:'600px'}}>
<button style={{backgroundColor:'rgb(33, 155, 151)',marginLeft:'100'}}  className='btn btn-dark btn-md px-5 text-white rounded-pill m-4'>Home</button>
</div>

</Link>
    </div>
  )
}

export default View