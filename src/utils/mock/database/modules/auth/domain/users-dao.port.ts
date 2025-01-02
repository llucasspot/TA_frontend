import { Dao, DtoByTableName } from '../../../domain';

export abstract class UsersDaoPort extends Dao<DtoByTableName, 'users'> {}
