import {DefaultCrudRepository} from '@loopback/repository';
import {Aeropuerto, AeropuertoRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AeropuertoRepository extends DefaultCrudRepository<
  Aeropuerto,
  typeof Aeropuerto.prototype.idaeropuerto,
  AeropuertoRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Aeropuerto, dataSource);
  }
}
