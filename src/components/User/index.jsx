import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const User = () => {
  
  
const schema = yup.object({
    email: yup.string().email().required('mail is required'),
   // name: yup.string().required(),
    password: yup.string().min(6, 'min 6').required('password is required'),
    confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  }).required();

const ButtonWhite = styled.button`
background: white;
color: black;
width: 90%;
height:70px;
margin-bottom: 20px;
cursor: pointer;
&:hover{
background: grey;
}
`
const ContainerforButton = styled.div`
width: 90%;
  display: flex;
  justify-content: space-between;
`

const ButtonWhiteEmail = styled.button`
  width: 60px;
  height: 60px;
`
const Forming = styled.form`
width:300px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const InputForm = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 50px;
  margin-bottom: 10px
`
const ButtonSend = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 5px;
`
const ContainerButtonSend = styled.div`
  display: flex;

`
  const {register,reset, 
    getValues,
    resetField, handleSubmit, formState: {errors},
  
  } = useForm(
    {
      mode: 'onChange',
    },
    {
      resolver: yupResolver(schema)
    }
  )
 console.log(getValues())

 const onSubmit = data => {
alert(`Your name ${data.name}`)
reset()
 }

 const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };


  const { isAuthenticated,loginWithRedirect,logout } = useAuth0();

const [formType, setFormType] = useState('main')

  return (
    <div>
 
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register('name',
{
  required: 'Name is required field'
}

)
} type='text' placeholder='Name'/>
{errors?.name && <div>{errors.name.message}</div>}

<input {...register('email',{
required: 'Email is required',
pattern: {
  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  message: 'Please enter valid email'
} }
)} placeholder='Email'/>
{errors?.email && <div>{errors.email.message}</div>}
<button>Send</button>
</form>


  <button onClick={() => loginWithRedirect()}>Log In</button>
 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>



    <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
    <Dialog
      maxWidth='xs'
      fullWidth
        open={open}
        onClose={handleClose}
       >
        <DialogContent>
        <DialogContentText>
        { formType === 'main' && (
            <>
         
            <Typography>Log in</Typography>
        
            <ButtonWhite><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
              <h3>Google</h3></ButtonWhite>
            <ButtonWhite><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
</svg>
              <h3>Twitter</h3></ButtonWhite>
            <ButtonWhite onClick={()=> setFormType('email')}><h3>With email</h3></ButtonWhite>
         
          <ContainerforButton>
          <ButtonWhiteEmail><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
</svg></ButtonWhiteEmail>
          <ButtonWhiteEmail><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
</svg></ButtonWhiteEmail>
          <ButtonWhiteEmail>3</ButtonWhiteEmail></ContainerforButton>
          </>)}
          {
            formType === 'email' && (
              <>

<h3 onClick={() => setFormType('main')}>To main -> </h3>


              <Forming onSubmit={handleSubmit(onSubmit)}>
<InputForm {...register('name',
{
  required: 'Name is required field'
}

)
} type='text' placeholder='Name'/>
{errors?.name && <div>{errors.name.message}</div>}

<InputForm {...register('email',{
required: 'Email is required',
pattern: {
  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  message: 'Please enter valid email'
} }
)} placeholder='Email'/>
{errors?.email && <div>{errors.email.message}</div>}
<ContainerButtonSend>
<ButtonSend>Log in</ButtonSend>
<ButtonSend onClick={() => setFormType('register')}>Register</ButtonSend></ContainerButtonSend>
</Forming>
              </>
            )
          }





          {
            formType === 'register' && (
              <>
              <form onSubmit={handleSubmit(onSubmit)}>
<input {...register('email',{
required: 'Email is required',
pattern: {
  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  message: 'Please enter valid email',
} }
)} placeholder='Email'/>
{errors?.email && <div>{errors.email.message}</div>}
<input {...register('password',{
  
  required: 'Name is required field'

})} placeholder='Password'/>
{errors?.email && <div>{errors.password.message}</div>}
<input {...register('confirm_password',{

})} placeholder='Confirm password'/>
{errors?.email && <div>{errors.confirm_password.message}</div>}
<ButtonSend>Register</ButtonSend>
             
</form>
             
              </>
            )
          }
           </DialogContentText>
        </DialogContent>

      </Dialog>


    </div>
  )
}

export default User
