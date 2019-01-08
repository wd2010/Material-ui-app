import Router from 'koa-router';


const router = new Router({prefix: '/api'});

router.get('/user',funcGetUserInfo);

export default router;


/*--------controller---------*/
function funcGetUserInfo(){
  console.log('userinfo api')
}