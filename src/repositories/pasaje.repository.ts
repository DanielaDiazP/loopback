import {DefaultCrudRepository} from '@loopback/repository';
import {Pasaje, PasajeRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PasajeRepository extends DefaultCrudRepository<
  Pasaje,
  typeof Pasaje.prototype.idpasaje,
  PasajeRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Pasaje, dataSource);
  }
}
