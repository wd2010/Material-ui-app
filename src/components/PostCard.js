import React from 'react';
import {Card,Avatar,IconButton,Typography } from 'material-ui';
import { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {Favorite as FavoriteIcon, Share as ShareIcon, MoreVert as MoreVertIcon} from 'material-ui-icons'
const PostCard =({username,headImg,time,title,img,content})=>{
  return (
    <Card style={{marginBottom:'10px'}} >
      <CardHeader
        avatar={<Avatar aria-label="Recipe" src={`${headImg?headImg:''}`} >{headImg?'':username}</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title={title}
        subheader={time}
      />
      {
        img && <CardMedia
          image={img}
          style={{maxHeight: '400px',minHeight:'250px'}}
        />
      }
      {
        content &&  <CardContent>
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

export default PostCard;