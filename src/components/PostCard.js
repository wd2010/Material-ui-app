import React from 'react';
import {Card,Avatar,IconButton,Typography, Badge } from 'material-ui';
import { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {Favorite as FavoriteIcon, ThumbUp as ThumbUpIcon, MoreVert as MoreVertIcon} from 'material-ui-icons'
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
        <Badge badgeContent={4} color="primary">
          <FavoriteIcon />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <ThumbUpIcon />
        </Badge>


      </CardActions>
    </Card>
  )
}

export default PostCard;