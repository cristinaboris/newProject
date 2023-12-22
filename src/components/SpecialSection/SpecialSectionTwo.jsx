import React, { useEffect } from 'react'
import styled from 'styled-components'
import star from '../../assets/Star 1.png'
import heard from '../../assets/heard.png'
import { Link } from 'react-router-dom'
import {Container,Price,Rating,Piece,ContainerRatingPrice,PElement,TitleElement,ImageElement,IconStar,IconHeard, ImageElementContainer, ContainerForItems,} from './SpecialSectionTwoStyled'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SpecialSectionTwo = ({item}) => {

 
  
 const toTop = () => {
  (window.scrollY === 0) 
    window.scrollTo(0, 0);
  
 }
 

  return (
    <Link key={item.id} to={`/deals/${item.id}`} onClick={() =>toTop() }>
 <Card sx={{ maxWidth: '450px' ,height: 450, maxHeight: 450, width: 345}} style={{padding: 10}}>
      <CardMedia
        sx={{ minHeight: '240px' }}
        image={item.image}
        title="green iguana"
        style={{borderRadius: '10px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{height: '100px'}}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'spaceBeetwen'}}>
        <Button size="small">${item.price}1 piece</Button>
        <Button size="small">Rating: {item.rating.rate}</Button>
      </CardActions>
    </Card>
         </Link>
  )
}



export default SpecialSectionTwo