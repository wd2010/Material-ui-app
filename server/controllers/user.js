import {User} from '../db/model'

const sleep=(ms)=>new Promise(resolve => setTimeout(resolve,ms))

export const getUserInfo=async (ctx,next)=>{
  let {username} = ctx.params;
  let userInfo= await User.findOne({username});
  ctx.body=userInfo
}

export const getAllUser = async (ctx,next) => {
  let userList = await User.find({});
  ctx.body=userList
}