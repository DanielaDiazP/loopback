import {DefaultCrudRepository} from '@loopback/repository';
import {Ruta, RutaRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.idruta,
  RutaRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Ruta, dataSource);
  }
}
