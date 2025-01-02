import Dexie, { EntityTable } from 'dexie';

import { singleton } from '#/utils/di';
import { Type } from '#/utils/di/domain';
import {
  DexieTableName,
  DtoByDexieTableName,
} from '#/utils/mock/database/infra/dexie';

import { DatabaseServicePort } from '../../../domain';
import { User } from '../../../domain/dao/tables';

import { DatabaseServiceDexieAdapterAbstract } from './database.service.dexie-adapter.abstract';

export type DexieConnexion = Dexie & {
  [K in DexieTableName]: EntityTable<DtoByDexieTableName[K], 'id'>;
};

@singleton()
export class DatabaseServiceDexieAdapter
  extends DatabaseServiceDexieAdapterAbstract
  implements DatabaseServicePort
{
  constructor() {
    super({
      users: User,
    } as const satisfies {
      [K in DexieTableName]: Type<object>;
    });
  }
}
