import Koa from 'koa';
import path from 'path';
import log4js from 'koa-log4';
import chalk from 'chalk';
import cors  from 'koa2-cors';
import session from 'koa-session';
import routes from './routes/index.js';
import staticCache from 'koa-static-cache';
import Loadable from 'react-loadable'
import config  from './config/default';
//const config =require('config-lite')(__dirname) ;
import {veryUser} from './middleware/user'
const app=new Koa();

//log4js.configure('./config/log4js.json');
// replace this with the log4js connect-logger
//app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(cors({
  origin(ctx){
    return ctx.headers.Origin|| ctx.headers.origin|| 'http://127.0.0.1';
  },
  credentials: true,//可以带cookie
  allowHeaders: ['Content-Type', 'Authorization', 'Accept','X-Requested-With'],
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS']
}));

app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
},app))

app.use(staticCache (path.resolve(__dirname,'../dist'),{
  maxAge: 365 * 24 * 60 * 60,
  gzip:true
}));
//验证用户是否登录
app.use(veryUser)

app.use(routes.routes());

Loadable.preloadAll().then(() => {
  let server = app.listen(config.port, ()=>{
    //let log = log4js.getLogger('setup');
    //console.log('Koa server listening on port ', server.address().port, " with pid ", process.pid);
    console.log(chalk.green(`\n==> 🌎  Listening on port ${config.port}. Open up http://localhost:${config.port}/ in your browser.\n`))
  })
})


