import React from 'react'

const DialogWindow = ({messege}) => {
  return (
    <div style={{position: 'fixed', top:'0', left:'0', right: '0', backgroundColor: 'red'}}>
      <div style={{ display:'flex', alignItems: 'center', justifyContent:'center', 
    position: 'absolute', top: '50%', left: '50%', transform:'translate(-50%, -50%)'
    }}>

      </div>
     
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  )
}

export default DialogWindow
