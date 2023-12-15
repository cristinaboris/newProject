import React, { useState } from 'react'
import Box from '@mui/material/Box';


const DialogWindow = ({messege}) => {



  return (
    
      <div style={{ display:'flex', alignItems: 'center', justifyContent:'center', 
    position: 'absolute', top: '26%',background: 'white', width: '200px',height: '200px', left: '50%', transform:'translate(-50%, -50%)'
    }}>

    
     
      <div style={{textAlign: ''}}>
        <p >Are you sure?</p>
        <button>Yes</button>
        <button>No</button>
      </div>  </div>
    
  )
}

export default DialogWindow
