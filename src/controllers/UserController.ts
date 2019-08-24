import * as Koa from 'koa';
import { Controller, Get, Post, Put, Route, Request, Body } from 'tsoa';
import { User } from '../models/User';
import { UserPostRequest, UserPutRequest } from '../schema/user/UserRequest';
import { getConnection, getRepository, UpdateResult } from 'typeorm';

@Route('users')
export class UserController extends Controller {
  userRepository = getRepository(User)

  @Get('{name}')
  public async getById(name: string): Promise<User | void> {
    const user = await this.userRepository.findOne()
    return user || this.setStatus(404)
  };

  @Post()
  public async create(@Body() body: UserPostRequest): Promise<User | void> {
    if(await this.userRepository.findOne({ name: body.name })) {
      return this.setStatus(409)
    }

    return this.userRepository.save(body);
  };

  @Put('{name}')
  public async update(name: string, @Body() body: UserPutRequest): Promise<void> {
    const result = await this.userRepository.update({ name }, body)
    if(result.raw.affectedRows === 0) return this.setStatus(404)
  };
};

