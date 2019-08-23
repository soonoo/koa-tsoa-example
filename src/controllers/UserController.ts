import * as Koa from 'koa';
import { Controller, Get, Route, Request } from 'tsoa';
import { User } from '../models/User';

@Route('users')
export class UserController extends Controller {
  @Get('{id}')
  public getUser(id: number, @Request() request: Koa.Request): User {
    return { id: 1, name: 'soonoo', email: 'qpseh2m7@gmail.com' };
  };
};

