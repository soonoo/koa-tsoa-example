import { createConnection, Connection } from 'typeorm';
import { User } from '../models/User';

createConnection({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'ehqps2m7!',
  database: 'tsoa-test',
  synchronize: true,
  entities: [
    User,
  ],
});
