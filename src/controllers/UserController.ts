import * as Koa from 'koa';
import { Controller, Get, Route, Request } from 'tsoa';
import { User } from '../models/User';
import { getConnection } from 'typeorm';

@Route('users')
export class UserController extends Controller {
  @Get('{id}')
  public getUser(id: number, @Request() request: Koa.Request): Promise<User[]> {
    return getConnection().manager.find(User);
    // return { id: 1, name: 'soonoo', email: 'qpseh2m7@gmail.com' };
  };
};

