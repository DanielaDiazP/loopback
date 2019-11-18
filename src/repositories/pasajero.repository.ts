import {DefaultCrudRepository} from '@loopback/repository';
import {Pasajero, PasajeroRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PasajeroRepository extends DefaultCrudRepository<
  Pasajero,
  typeof Pasajero.prototype.idpasajero,
  PasajeroRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Pasajero, dataSource);
  }
}
