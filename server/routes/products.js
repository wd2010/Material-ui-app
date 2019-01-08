let router = require('koa-router')();

router.get('/products',async (ctx,next)=>{
  ctx.body='products html'
})

module.exports = router;