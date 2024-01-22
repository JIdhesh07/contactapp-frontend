import React from 'react'
import titileimage from '../Asset/Rocket 1.png'
import image from '../Asset/Rocket 2.png'
import img from '../Asset/Rocket 3 (2).png'
import ig from '../Asset/Rocket 4.png'
import { Link } from 'react-router-dom'
import sarath from '../Asset/Piece-Read-app-unscreen.gif'

function Home() {
  return (
    <div>
        <div className="container">
            <div className="col-6">
                <br />
                <br />
            <h1 style={{marginLeft:'100px',marginTop:'100px'}} className=' text-center m-4'>Contact App</h1>
            <br />
            <p style={{textAlign:'justify'}}>A contact app is a software application designed to facilitate the organization and management of an individual's contacts or address book. This tool serves as a centralized repository for storing various details about people, including their names, phone numbers, email addresses, and other relevant information. Users can conveniently organize contacts, often by name or through custom categories, and employ search and sorting functionalities to quickly locate specific information. Integration with communication tools, such as phone, email, and messaging apps, enables seamless interaction directly from the contact app..





</p>
            </div>
            <div className="col-6">
                <img style={{marginLeft:'700px',marginTop:'-450px',width:'600px'}} src={titileimage} alt="" />
                <img style={{marginTop:'-150px',marginLeft:'100px'}} width={'200px'} src={image} alt="" />
                
            </div>
            <br />
            <br />

            <div style={{marginLeft:'600px'}} className="col-6">
                <p  style={{textAlign:'justify'}}>Popular examples of contact apps include the default Contacts app on many smartphones, Google Contacts, Apple Contacts, and third-party apps like Microsoft Outlook, Contacts+, and more.

As technology evolves, contact apps continue to incorporate new features and integrations to enhance user experience and adapt to changing communication trends.</p>


            </div>
            <div>
                <img style={{marginTop:'-1600px'}} width={'70px'} src={img} alt="" />
            </div>

          
            
        </div>
        <br />
        <br />

        <img style={{marginTop:'-100px',marginLeft:'1000px'}} width={'70px'} src={ig} alt="" />

        <br />
        <br />
        <br />

        <h1 className='text-center'>Complete The Contact</h1>

        <p style={{textAlign:'justify',padding:'25%',marginTop:'-300px'}}>We take a single piece of information－email address, social handle, phone number－and give you a more complete profile. Enriched, contextual data ensures you always contact the right person.</p>

        <img  style={{marginLeft:'330px',marginTop:'-300px'}} width={'700px'} src="https://www.contactsplus.com/wp-content/uploads/2021/03/web-contact-2048x1280.png" alt="" />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <h1 className='text-center'>Access</h1>

        <br />
        <br />
        <br />
        
        

        <h1 style={{marginLeft:'70px',color:'rgb(33, 155, 151)'}}>Access The Contact Anywhere</h1>

        <p style={{textAlign:'justify',padding:'50%',marginLeft:'-550px',marginTop:'-650px'}}>Our app is available across Web, iOS, Android, Chrome & Mac, ensuring contacts are synced, up-to-date, and available wherever you are. Access and manage your contacts anytime, anywhere We detect duplicates and updates for frustration-free contact management. Merge duplicates to create a unified address book across multiple accounts and devices.</p>
 
 <img style={{marginLeft:'850px',marginTop:'-1700px'}} src={sarath} alt="" />


 <Link to={'./admin'}>
 
 <div style={{marginTop:'-500px'}} className='text-center'>
 <button style={{backgroundColor:'rgb(33, 155, 151)',marginLeft:'500px',marginTop:'-800px'}} className='btn btn-dark btn-md px-5 text-white rounded-pill m-4'>view Contact</button>
 </div>
 </Link>
 

 
    </div>


  )
}

export default Home