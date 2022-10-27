import React from 'react';
import './Footer.css'
import {
  MDBFooter,
  } from 'mdb-react-ui-kit';
const Footer = () => {
    return (

    <MDBFooter className='text-center' id='footer' color='white' bgColor='dark'>
     

      <div className='text-center p-3'>
        © 2020 Copyright:
    
      </div>
    </MDBFooter>
  );
}



export default Footer;