import {getUserInfo, getAllUser} from '../controllers/user.js';
import Router from 'koa-router';
let router = new Router;

router.get('/user/:username', getUserInfo)
router.get('/users', getAllUser)
export default router;