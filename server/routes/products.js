import Router from 'koa-router';
let router = new Router;

router.get('/products',async (ctx,next)=>{
  ctx.body='products html'
})

export default router;