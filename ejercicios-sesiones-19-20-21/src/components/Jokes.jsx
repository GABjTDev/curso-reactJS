import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Jokes = ({joke, handleButton}) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{marginBottom: "15px"}}>
      <CardContent>
        <Typography variant="body2">
          {joke.value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" name="like" onClick={handleButton}>👍</Button>
        <Button target="_blank" name="dislike" onClick={handleButton}>👎</Button>
      </CardActions>
      <CardActions>
        <Button target="_blank" href={joke.url} rel="noreferrer">Go to Url</Button>
      </CardActions>
    </Card>
  )
}

export default Jokes