import {DefaultCrudRepository} from '@loopback/repository';
import {Pasavuelo, PasavueloRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PasavueloRepository extends DefaultCrudRepository<
  Pasavuelo,
  typeof Pasavuelo.prototype.idpasavuelo,
  PasavueloRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Pasavuelo, dataSource);
  }
}
