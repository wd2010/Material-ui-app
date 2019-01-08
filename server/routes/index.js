import Router from 'koa-router';
import ssr from './ssr';
import api from './api';
import graphqlApi from '../graph/index';
var router = new Router();



router.use(graphqlApi.routes())
router.use(api.routes())
router.get('/*',ssr)

export default router;