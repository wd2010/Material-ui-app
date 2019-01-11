import Router from 'koa-router';
import user from './user';
import products from './products';

const router = new Router({prefix: '/api'});

router.use(user.routes());
router.use(products.routes());

export default router;
