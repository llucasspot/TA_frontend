import { adapter, inject } from '#/utils/di';

import {
  DaoDexie,
  DatabaseServiceDexieAdapter,
} from '../../../../../infra/dexie';
import { UsersDaoPort } from '../../../domain/users-dao.port';

@adapter(UsersDaoPort)
export class UsersDaoDexieAdapter
  extends DaoDexie<'users'>
  implements UsersDaoPort
{
  constructor(
    @inject(DatabaseServiceDexieAdapter)
    databaseService: DatabaseServiceDexieAdapter,
  ) {
    super(databaseService, 'users');
  }
}
