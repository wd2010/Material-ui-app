
export const paramData=(params)=>{
  if(params==null)return '';
  let list=[];
  for (let key,value of Object.entries(params)){
    list.push(`${key}=${value}`);
  }
  return list.join('&')
}