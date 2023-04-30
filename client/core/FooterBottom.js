import React from 'react';

function Copyright() {
  return (
   
    <footer style={{ backgroundColor: 'rgb(249, 105, 11)',color:'#ffffff', padding: '1px', fontSize: '10px', textAlign: 'center' , marginTop: 'auto',  marginBottom:0, }}>
      <p style={{textAlign:'center' , margin:'5px', fontSize:'18px', fontWeight:'500'}}>&copy; {new Date().getFullYear()} E-Learning pvt. lt.  All rights reserved.</p>
    </footer>
   
  );
}

export default Copyright;