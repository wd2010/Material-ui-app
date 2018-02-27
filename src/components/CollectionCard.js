import React from 'react';
import {Card,Avatar,IconButton,Typography } from 'material-ui';
import {CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {Favorite as FavoriteIcon, Share as ShareIcon,} from 'material-ui-icons'
const CollectCard =({username,headImg,title,img,content})=>{
  return (
    <Card style={{marginBottom:'10px'}} >
      {
        img && <CardMedia
          image={img}
          style={{height:200+Math.random()*200}}
        />
      }
      {
        content &&
        <CardContent>
          <Typography variant="headline" component="h2">Lizard</Typography>
          <Typography component="p">{content}</Typography>
        </CardContent>
      }

      <CardActions  disableActionSpacing >
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CollectCard;