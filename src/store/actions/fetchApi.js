import fetch from 'isomorphic-fetch';
import {paramData} from '../../util/tools';

const request=(url,reqData)=>{
  return Promise.race([
    fetch(url,reqData),
    new Promise((resolve,reject)=>{
      setTimeout(()=>reject(new Error('request error !')),reqData.timeout?reqData.timeout:5000);
    })
  ])
}

export const get=async ({url,data=null,headers={},options={timeout:5000}})=>{
  let params=paramData(data);
  let tarUrl = data===null?url:`${url}?${params}`;
  let err='';
  let res=await request(tarUrl,{
    method: "GET",
    headers:headers,
    timeout:options.timeout
  }).catch(e=>{
    err=e;
    throw e;
  });
  if(!err){
    return await res.json()
  }
}


export const post=async ({url,data=null,headers={},options={timeout:5000}})=>{
  let err=''
  let res=await request(url,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers,
    timeout: options.timeout,
  }).catch(e=>{
    err=e;
    throw e;
  });
  if(!err){
    return res.json()
  }
}