import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import ag from '../Asset/Movie-Animation-unscreen.gif'
import ar from '../Asset/Tab-bar-gif-unscreen.gif'
import pr from '../Asset/Notification-Icon-unscreen.gif'
import { Link } from 'react-router-dom';







function Admin() {

  const[user,setuser]=useState([])

const base_url='http://localhost:8000'
  const fetch = async()=>{
    const result=await axios.get(`${base_url}/get-all-contact`)
    console.log(result.data.contacts);
    setuser(result.data.contacts)

  }

  const deletecontact=async(id)=>{
    const result =await axios.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetch()
  }





  console.log(user);
  useEffect(()=>{

    fetch()
  },[])


  const cardstyle={
    display: 'flex', maxWidth: '300px',backgroundColor:'light',height:'250px' 
    
  }

  return (
    <div>
      <br />
      <br />
<div className="container">
<h2  style={{marginLeft:'550px'}}>Contact App</h2>
<br />
<br />
<div className="col-6">
 
<h1 style={{color:'rgb(33, 155, 151)'}} className=' text-center m-4'>Contacts</h1>
<p>Contacts play a crucial role in our daily lives, serving as a digital address book that helps us stay connected. They store information such as names, phone numbers, and email addresses, facilitating seamless communication and organization. With the evolution of technology, contacts have become more dynamic, integrating with various apps and platforms to enhance our social and professional interactions. Managing contacts efficiently ensures effective communication and fosters meaningful relationships in both personal and professional spheres. </p>
</div>
<div className="col-6">

<img height={'-80px'} width={'600px'} style={{marginLeft:'740px',marginTop:'-300px'}} src={ag} alt="" />
</div>


</div>
<br />
<br />


<h1 className='text-center'>Details</h1>



<div sm={12} md={6} lg={4} xl={3} className='d-flex flex-wrap justify-content-around'>
  
{
      user.map(item=>(
        
        <MDBCard  className=' mx-3 my-4 ' alignment='center'   style={cardstyle}>
        <MDBRow className='g-0'>
          <MDBCol  >
            <MDBCardImage width={'200px'} style={{marginTop:'30px'}} src='https://i.pinimg.com/564x/25/8a/ce/258aceed30772f1cc702e269b67d0bd7.jpg' alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle style={{color:'blue'}}>{item.name && item.name.firstname ? item.name.firstname : 'NA'}</MDBCardTitle>
              <MDBCardText>
                {item.email}
              </MDBCardText>
              <img width={'200px'} style={{marginLeft:'-30px',marginTop:'-70px'}} src={ar} alt="" />
              <MDBCardText>
               
              </MDBCardText>
              <div className='d-flex '>
              <i onClick={()=>deletecontact(item.id)} style={{marginLeft:'20px'}} class="fa-solid fa-trash "></i>
<Link to={`/edit/${item.id}`}>
<i style={{marginLeft:'20px'}} class="fa-solid fa-pen "></i>
</Link>
<Link to={`/view/${item.id}`}>
<i style={{marginLeft:'20px',color:'black',marginTop:'-10px'}} class="fa-solid fa-eye "></i>
</Link>

</div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      
      ))}
</div>
<Link to={'/add'}>
<div className='text-center'>
<button  style={{backgroundColor:'rgb(33, 155, 151)',marginLeft:'300px',marginTop:'-500px'}} className='btn btn-dark  text-white rounded-pill m-4 text-center'>Add</button>
</div>

</Link>
<img style={{marginLeft:'750px',marginTop:'-3265px'}} width={'150px'} src={pr} alt="" />

       
        </div>   
        
  )
}

export default Admin
