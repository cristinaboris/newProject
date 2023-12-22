import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {removeCart} from '../../redux/actions'
import { useDispatch } from 'react-redux'

const DialogWindow = ({messege, id, dialog, setDialog}) => {
  const dispatch = useDispatch()

  const removeItem = (id)=> {
    dispatch(removeCart(id))
}

  return (
    
      <div style={{ display:'flex', alignItems: 'center', justifyContent:'center', border: '2px solid black',
    position: 'absolute', top: '26%',background: 'gray', width: '200px',height: '200px', left: '50%', transform:'translate(-50%, -50%)'
    }}>

    
     
      <div style={{textAlign: 'center'}}>
        <p >Are you sure?</p>
        <div style={{paddingTop: 15}}>
        <button onClick={() => removeItem(id)}>Yes</button>
        <button onClick={() => setDialog(!dialog)}>No</button>
      </div>  </div></div>
    
  )
}

export default DialogWindow
