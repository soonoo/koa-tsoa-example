import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email?: string;

  @PrimaryColumn({ unique: true })
  name: string;

  @Column({ nullable: true })
  token?: string;

  @Column({ nullable: true })
  avatarUrl?: string;
};

