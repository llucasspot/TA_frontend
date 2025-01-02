import { User } from './tables';

export type DtoByTableName = {
  users: User;
};

export type TableName = keyof DtoByTableName;
