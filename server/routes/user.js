let router = require('koa-router')();

router.get('/user',async (ctx,next)=>{
  console.log('0000000',ctx)
  ctx.body='user html'
})

module.exports = router;