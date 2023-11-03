import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const schema = yup.object({
  firstName: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  comment: yup.string().required(),
}).required();


const initialState = {
    username: '',
    email:'',
    phone:'',
    comment: ''
}
const Form = () => {
    const { register,getValues,handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
  console.log()

  //const [formValue, setFormValue] = useState(initialState)
  //const {user} = useSelector((state) => state.data)
  //const {username, email, phone, comment} = formValue
  //const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()

  //useEffect(() => {
   // if (id){
      //  setEditMode(true)
      //  const singleUsers = users.find((item) => item.id ===Number(id))
      //  setFormValue({...singleUsers})
  //  }
  //}, [id])


  //getValues
  const OnChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  //const handleSubmit = (e) => {
//e.preventDefault()
//if(username && email && phone && comment){
   // if(editMode){


      //  dispatch(createUserStart(formValue))
        //toast.success('uset added')
     //   setTimeout(() => navigate.push('/'), 500)
//}else{

      //  dispatch(uptadeUserStart({id, formValue}))
//setEditMode(false)
        //toast.succesn (upted)
     //   setTimeout(() => navigate.push('/'), 500)
   /// }
//}
  


  return (
<>
    <form onSubmit={handleSubmit}>
      <input {...register("username")} placeholder='Username' />
      <p>{errors.username?.message}</p>
      <input {...register("phone")} />
      <p>{errors.phone?.message}</p>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      <input {...register("comment")} />
      <p>{errors.comment?.message}</p>
      
      <input type="submit" />
      <button></button>
    </form>

     </>
  );
  }
 

export default Form
