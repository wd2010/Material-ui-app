import React from 'react';
import {renderToString} from 'react-dom/server';
import {createMemoryHistory} from 'history'
import { getBundles } from 'react-loadable/webpack';
import stats from '../dist/react-loadable.json';
import Helmet from 'react-helmet';
import {matchPath} from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import path from 'path';
import fs from 'fs'
import configureStore from '../src/store/configureStore';
import createApp from '../src/createApp';
import routesThunk from '../src/store/routesThunk';

const createTags=(modules)=>{
  let bundles = getBundles(stats, modules);
  let scriptfiles = bundles.filter(bundle => bundle.file.endsWith('.js'));
  let stylefiles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  let scripts=scriptfiles.map(script=>`<script src="/${script.file}"></script>`).join('\n');
  let styles=stylefiles.map(style=>`<link href="/${style.file}" rel="stylesheet"/>`).join('\n');
  return {scripts,styles}
}

const prepHTML=(data,{html,head,rootString,scripts,styles,initState,materialCss})=>{
  data=data.replace('<html',`<html ${html}`);
  data=data.replace('</head>',`${head} \n ${styles}</head>`);
  data=data.replace('<div id="root"></div>',`<div id="root">${rootString}</div><style id="jss-server-side">${materialCss}</style>`);
  data=data.replace('<body>',`<body> \n <script>window.__INITIAL_STATE__ =${JSON.stringify(initState)}</script>`);
  data=data.replace('</body>',`${scripts}</body>`);
  return data;
}

const getMatch=(routesArray, url)=>{
  return routesArray.some(router=>matchPath(url,{
    path: router.path,
    exact: router.exact,
  }))
}

const makeup=(ctx,store,createApp,html)=>{
  let initState=store.getState();
  let history=createMemoryHistory({initialEntries:[ctx.req.url]});

  let modules=[],sheetsCreate=[],materialCss=[];

  let rootString= renderToString(createApp({store,history,modules,sheetsCreate}));

  if(sheetsCreate[0]){
    materialCss=sheetsCreate[0].toString();
  }

  let {scripts,styles}=createTags(modules)

  const helmet=Helmet.renderStatic();
  let renderedHtml=prepHTML(html,{
    html:helmet.htmlAttributes.toString(),
    head:helmet.title.toString()+helmet.meta.toString()+helmet.link.toString(),
    rootString,
    scripts,
    styles,
    initState,
    materialCss,
  })
  return renderedHtml;
}


const clientRouter=async(ctx,next)=>{
  let html=fs.readFileSync(path.join(path.resolve(__dirname,'../dist'),'index.html'),'utf-8');
  let {store}=configureStore();


  let isMatch=getMatch(routesThunk,ctx.req.url);
  if(isMatch){
    console.log(ctx.req.url)
    let branch=matchRoutes(routesThunk,ctx.req.url);
    let promises = branch.map(({route,match})=>{
      return route.thunk?(route.thunk(store)):Promise.resolve(null)
    });
    await Promise.all(promises).catch(err=>console.log('err:---',err))
    let renderedHtml=await makeup(ctx,store,createApp,html);
    ctx.body=renderedHtml
  }
  await next()
}

export default clientRouter;

