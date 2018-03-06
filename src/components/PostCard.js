import React from 'react';
import {Card,Avatar,IconButton,Typography, Badge } from 'material-ui';
import { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import styled from 'styled-components';
const Title=styled.div`
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  margin-top: -30px;
  background: rgba(0,0,0,0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: rgba(255,255,255,0.8);
`

const PostCard =({username,headImg,time,title,img,url})=>{
  return (
    <a href={url} style={{textDecoration:'none'}}>
      <Card style={{marginBottom:'10px'}} >
        <CardMedia
          image={img}
          style={{maxHeight: '400px',minHeight:'250px'}}
        />
        <Title>{title}</Title>
      </Card>
    </a>

  )
}

export default PostCard;