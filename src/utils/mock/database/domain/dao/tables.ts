import { Dto } from '#/utils/core/domain';

export class User extends Dto<User> {
  id!: string;
  email!: string;
  password!: string;
}
