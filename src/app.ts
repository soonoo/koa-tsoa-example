import 'reflect-metadata';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser';
import './controllers/UserController';
import './controllers/RepoController';
import { RegisterRoutes } from './routes';
import './db/connection';

const app = new Koa();
const router = new Router();
app.use(bodyParser());
RegisterRoutes(router);

app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3002);

