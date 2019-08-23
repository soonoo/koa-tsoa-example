import * as Koa from 'koa';
import { Controller, Get, Route, Request } from 'tsoa';
import { Repo } from '../models/Repo';

@Route('repos')
export class RepoController extends Controller {
  @Get('{id}')
  public getUser(id: number): Repo {
    return { id: 1, name: 'committrs', owner: 'soonoo' };
  };
};

