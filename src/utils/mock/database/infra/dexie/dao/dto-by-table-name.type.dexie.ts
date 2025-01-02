import { DtoByTableName } from '../../../domain';

export type DtoByDexieTableName = DtoByTableName & {};

export type DexieTableName = keyof DtoByDexieTableName;
