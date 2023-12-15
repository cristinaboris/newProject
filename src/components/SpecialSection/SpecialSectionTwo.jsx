import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const SpecialSectionTwo = ({ item }) => {
  const navigate = useNavigate();

  const onCard = () => {
    navigate(`/deals/${ item.id }`)
    window.scrollTo(0, 0);
  }

  return (
    <Card
      sx={ { maxWidth: '450px', height: 450, maxHeight: 450, width: 345 } } style={ { padding: 10 } }
      onClick={ onCard }
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={ item.image }
        style={ { objectFit: 'contain' } }
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={ { height: '100px' } }>
          { item.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { item.category }
        </Typography>
      </CardContent>
      <CardActions style={ { display: 'flex', justifyContent: 'spaceBeetwen' } }>
        <Typography>${ item.price }1 piece</Typography>
        <Typography>Rating: { item.rating.rate }</Typography>
      </CardActions>
    </Card>
  )
}

export default SpecialSectionTwo